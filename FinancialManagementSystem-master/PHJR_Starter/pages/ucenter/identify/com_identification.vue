<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="企业认证" left-icon="left"
			left-text="返回" @clickLeft="back" />

		<view v-if="isCompanyCertified">
			<uni-section title="企业认证信息" type="line" padding>
				<uni-card :isFull="true" title="企业名称" :sub-title="companyName"></uni-card>
				<uni-card :isFull="true" title="姓名" :sub-title="legalName"></uni-card>
				<uni-card :isFull="true" title="身份证号" :sub-title="legalId"></uni-card>
			</uni-section>
		</view>

		<view v-else>
			<uni-section title="公司搜索" type="line">
				<uni-search-bar @confirm="search" v-model="searchValue" @input="onInput" clearButton="auto"
					cancelButton="none">
				</uni-search-bar>

				<!-- 动态显示建议列表 -->
				<view v-if="suggestions.length" class="suggestion-list">
					<view v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)">
						{{ suggestion }}
					</view>
				</view>
			</uni-section>
			<view><button @click="submit" type="primary">提交认证</button></view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userId: '',
				isCompanyCertified: false,
				searchValue: '',
				companyName: '',
				legalName: '',
				legalId: '',
				suggestions: [] // 建议列表
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
				this.userId = userInfo._id;
				this.checkPersonalCertification();
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			checkPersonalCertification() {
				const db = uniCloud.database();
				db.collection('idcard').where({
					user_id: this.userId
				}).get().then(res => {
					if (res.result.data.length === 0) {
						uni.showToast({
							title: '请先进行个人认证',
							icon: 'none'
						});
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/ucenter/identify/per_identification'
							});
						}, 2000);
					} else {
						const idCardInfo = res.result.data[0];
						this.legalName = idCardInfo.username;
						this.legalId = idCardInfo.idcard;
						this.checkCompanyCertification();
					}
				}).catch(err => {
					console.error('查询个人认证信息失败:', err);
				});
			},
			checkCompanyCertification() {
				const db = uniCloud.database();
				db.collection('user_com').where({
					user_id: this.userId
				}).get().then(res => {
					if (res.result.data.length > 0) {
						// 用户已进行企业认证
						const userComInfo = res.result.data[0];
						db.collection('company').where({
							_id: userComInfo.com_id
						}).get().then(companyRes => {
							if (companyRes.result.data.length > 0) {
								this.companyName = companyRes.result.data[0].com_name;
								this.isCompanyCertified = true;
							}
						});
					}
				}).catch(err => {
					console.error('查询企业认证信息失败:', err);
				});
			},
			// 实时监听输入
			onInput(e) {
				console.log("Input event triggered");
				const value = e;
				this.searchValue = value;
				console.log("this.searchValue:", this.searchValue);

				if (value) {
					this.getSuggestions(value).then(suggestions => {
						this.suggestions = suggestions;
						console.log("this.suggestions:", ...this.suggestions);
					});

				} else {
					this.suggestions = [];
				}
			},

			// 模拟获取建议
			getSuggestions(query) {
				const db = uniCloud.database(); // 获取数据库引用
				return db.collection('company').where({
					com_name: new RegExp(query, 'i') // 使用正则表达式进行模糊搜索，忽略大小写
				}).get().then(res => {
					if (res.result.data.length > 0) {
						return res.result.data.map(company => company.com_name); // 返回匹配的公司名称列表
					} else {
						return []; // 如果没有匹配项，返回空数组
					}
				}).catch(err => {
					console.error('获取公司名称建议列表失败:', err);
					return []; // 在出错时返回空数组
				});
			},
			// 选择建议
			selectSuggestion(suggestion) {
				this.searchValue = suggestion;
				this.suggestions = [];
			},
			// 提交搜索
			search() {
				// 根据searchValue执行搜索操作
				console.log('搜索内容:', this.searchValue);
			},
			submit() {
				const db = uniCloud.database();
				db.collection('company').where({
					com_name: new RegExp(this.searchValue, 'i') // 模糊搜索公司名称
				}).get().then(res => {
					if (res.result.data.length === 0) {
						uni.showToast({
							title: '公司名称有误或未进行合作',
							icon: 'none'
						});
					} else {
						const companyInfo = res.result.data[0];
						if (companyInfo.com_status === "5") {
							uni.showToast({
								title: '该企业已经被认证',
								icon: 'none'
							});
						} else if (companyInfo.com_status === "4") {
							// 更新 com_status 为 5
							db.collection('company').doc(companyInfo._id).update({
								com_status: "5"
							}).then(() => {
								// 查询 com_details 表验证企业信息
								db.collection('com_details').where({
									com_id: companyInfo._id
								}).get().then(detailRes => {
									const comDetails = detailRes.result.data[0];
									if (comDetails.c_legal_name === this.legalName && comDetails
										.c_legal_id === this.legalId) {
										// 企业认证成功
										db.collection('user_com').add({
											user_id: this.userId,
											com_id: companyInfo._id
										}).then(() => {
											uni.showToast({
												title: '企业认证成功',
												icon: 'success'
											});
											setTimeout(() => {
												uni.switchTab({
													url: '/pages/ucenter/ucenter'
												});
											}, 2000);
										});
									} else {
										uni.showToast({
											title: '企业认证失败，请联系管理员',
											icon: 'none'
										});
										setTimeout(() => {
											uni.switchTab({
												url: '/pages/ucenter/ucenter'
											});
										}, 2000);
									}
								});
							}).catch(err => {
								console.error('更新 com_status 失败:', err);
							});
						} else {
							uni.showToast({
								title: '企业认证失败，请联系管理员',
								icon: 'none'
							});
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/ucenter/ucenter'
								});
							}, 2000);
						}
					}
				}).catch(err => {
					console.error('企业认证失败:', err);
				});
			}
		}
	}
</script>

<style>
	.suggestion-list {
		background-color: white;
		border: 1px solid #ddd;
		margin-top: -1px;
	}

	.suggestion-list view {
		padding: 10px;
		border-bottom: 1px solid #eee;
		cursor: pointer;
	}

	.suggestion-list view:hover {
		background-color: #f0f0f0;
	}

	button {
		position: fixed;
		/* 固定定位 */
		bottom: 20px;
		/* 距离屏幕底部 20px */
		width: 95%;
		left: 50%;
		/* 水平居中 */
		transform: translateX(-50%);
		/* 调整按钮以确保它在水平居中 */
		padding: 10px;
		background-color: #007aff;
		color: white;
		text-align: center;
		border-radius: 15px;
	}
</style>