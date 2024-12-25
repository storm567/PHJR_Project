<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="贷款申请_步骤1" left-icon="left"
			left-text="返回" @clickLeft="back" />
		<view>
			<uni-section title="完善贷款信息" type="line" padding>
				<uni-easyinput v-model="loanAmount" focus placeholder="请输入贷款金额" />
				<uni-section></uni-section>
				<uni-easyinput v-model="loanPurpose" focus placeholder="请输入贷款用途" />
			</uni-section>
		</view>
		<button @click="navigateToNext">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bank: '',
				loanAmount: '',
				loanPurpose: ''
			};
		},
		async onLoad(options) {
			if (options.bank) {
				this.bank = options.bank;
			}

			// 从 localStorage 获取数据
			const userInfo = uni.getStorageSync('uni-id-pages-userInfo');

			// 检查数据是否存在且 _id 非空
			if (userInfo && userInfo._id != null) {
				const userId = userInfo._id;
				console.log('用户的 _id:', userId);

				// 开始验证流程
				try {
					// 验证用户是否已进行实名认证
					const idcardCheck = await this.checkIdcard(userId);
					console.log("idcardCheck",idcardCheck );
					if (!idcardCheck) {
						this.showAndRedirect('请先进行用户认证');
						return;
					}

					// 验证用户是否已进行企业认证
					const userComCheck = await this.checkUserCom(userId);
					console.log("userComCheck",userComCheck );
					if (!userComCheck) {
						this.showAndRedirect('请先进行企业认证');
						return;
					}

					// 验证用户是否已绑定银行卡
					const bankcardCheck = await this.checkBankcard(userId);
					console.log("bankcardCheck",bankcardCheck );
					if (!bankcardCheck) {
						this.showAndRedirect('请先绑定银行卡');
						return;
					}

					// 通过所有验证后继续下一步
					console.log('所有验证通过，可以继续操作');

				} catch (error) {
					console.error('验证过程出错:', error);
					this.showAndRedirect('验证过程出错，请稍后再试');
				}
			} else {
				this.showAndRedirect('请先登录');
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			async checkIdcard(userId) {
				// 查询 idcard 表中的 user_id
				const res = await uniCloud.database().collection('idcard').where({
					user_id: userId
				}).get();

				return res.result.data.length > 0;
			},
			async checkUserCom(userId) {
				// 查询 user_com 表中的 user_id
				const res = await uniCloud.database().collection('user_com').where({
					user_id: userId
				}).get();

				return res.result.data.length > 0;
			},
			async checkBankcard(userId) {
				// 查询 bankcard_info 表中的 user_id
				const res = await uniCloud.database().collection('bankcard_info').where({
					user_id: userId
				}).get();

				return res.result.data.length > 0;
			},
			showAndRedirect(message) {
				uni.showToast({
					title: message,
					icon: 'none',
					duration: 1000
				});
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/ucenter/ucenter'
					});
				}, 2000);
			},
			navigateToNext() {
				if (!this.loanAmount || !this.loanPurpose) {
					uni.showToast({
						title: '请填写完整的贷款信息',
						icon: 'none'
					});
					return;
				}

				const amount = parseInt(this.loanAmount);
				if (isNaN(amount) || amount <= 0) {
					uni.showToast({
						title: '贷款金额必须为正整数',
						icon: 'none'
					});
					return;
				}

				uni.navigateTo({
					url: `/pages/titlegrid/cart/uploadData/uploadData?bank=${this.bank}&loanAmount=${this.loanAmount}&loanPurpose=${this.loanPurpose}`
				});
			}
		}
	}
</script>

<style>
</style>
