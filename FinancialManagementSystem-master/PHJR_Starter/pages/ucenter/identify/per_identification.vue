<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="个人认证" left-icon="left"
			left-text="返回" @clickLeft="back" />

		<view v-if="isAuthenticated">
			<uni-section title="已认证信息" type="line" padding>
				<uni-card :isFull="true" title="姓名" :sub-title="username"></uni-card>
				<uni-card :isFull="true" title="身份证号" :sub-title="idcard"></uni-card>
				<uni-card :isFull="true" title="身份证照片">
					<image :src="idcardImageUrl" mode="widthFix" style="width: 100%;"></image>
				</uni-card>
			</uni-section>
		</view>

		<view v-else>
			<uni-section title="完善个人信息" type="line" padding>
				<uni-easyinput v-model="username" focus placeholder="请输入姓名" @input="input"></uni-easyinput>
				<uni-section></uni-section>
				<uni-easyinput v-model="idcard" focus placeholder="请输入身份证号" @input="input"></uni-easyinput>
				<uni-section></uni-section>
				<uni-section>
					<view class="example-body">
						<uni-file-picker limit="1" title="上传身份证人像面照片"
							@success="e => onFileChange(e, 'idcard')"></uni-file-picker>
					</view>
				</uni-section>
			</uni-section>

			<button @click="submit">提交认证</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAuthenticated: false,
				username: '',
				idcard: '',
				idcardImageUrl: ''
			};
		},
		onLoad() {
			const userInfo = uni.getStorageSync('uni-id-pages-userInfo');
			if (!userInfo || !userInfo._id) {
				uni.showToast({
					title: '未登录',
					icon: 'none'
				});
				setTimeout(() => {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd'
					});
				}, 1000);
			} else {
				// 查询idcard表，判断用户是否已经认证
				const db = uniCloud.database();
				db.collection('idcard').where({
					user_id: userInfo._id
				}).get().then(res => {
					if (res.result.data.length > 0) {
						// 已认证
						this.isAuthenticated = true;
						const data = res.result.data[0];
						this.username = data.username;
						this.idcard = data.idcard;
						this.idcardImageUrl = data.idcard_url;
					}
				}).catch(err => {
					console.error('查询认证信息失败:', err);
				});
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			onFileChange(event, type) {
				if (type === 'idcard' && event.tempFilePaths.length > 0) {
					// this.idcardImageUrl = event.tempFilePaths[0];
					this.idcardImageUrl = event.tempFiles[0].url;
				}
			},
			submit() {
				// 校验
				const idcardRegex = /^[0-9]{17}([0-9X])$/;
				if (!this.username) {
					uni.showToast({
						title: '请填写姓名',
						icon: 'none'
					});
					return;
				}
				if (!this.idcard || !idcardRegex.test(this.idcard)) {
					uni.showToast({
						title: '身份证号格式错误',
						icon: 'none'
					});
					return;
				}
				if (!this.idcardImageUrl) {
					uni.showToast({
						title: '请上传身份证照片',
						icon: 'none'
					});
					return;
				}

				const userInfo = uni.getStorageSync('uni-id-pages-userInfo');
				const db = uniCloud.database();
				db.collection('idcard').add({
					user_id: userInfo._id,
					idcard_url: this.idcardImageUrl,
					username: this.username,
					idcard: this.idcard
				}).then(() => {
					uni.showToast({
						title: '认证成功',
						icon: 'success'
					});
					this.isAuthenticated = true;
				}).catch(err => {
					uni.showToast({
						title: '上传失败，请重试',
						icon: 'none'
					});
					console.error('Database upload error:', err);
				});
			}
		}
	}
</script>

<style>
</style>
