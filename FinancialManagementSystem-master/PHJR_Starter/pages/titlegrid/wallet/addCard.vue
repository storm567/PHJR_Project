<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="添加卡片" left-icon="left"
			left-text="返回" @clickLeft="back" />

		<uni-section title="输入卡号" type="line" padding>
			<uni-easyinput v-model="cardNumber" placeholder="请输入16位卡号" type="number" maxlength="16"
				:errorMessage="cardNumberError" />
		</uni-section>

		<uni-section title="选择银行" type="line" padding>
			<picker mode="selector" :range="banks" :range-key="'bank_name'" @change="onBankChange">
				<view class="picker">
					{{ selectedBankName || '请选择银行' }}
				</view>
			</picker>
		</uni-section>

		<button @click="submitCard" type="primary">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardNumber: '',
				banks: [],
				selectedBankId: null,
				selectedBankName: '',
				cardNumberError: ''
			};
		},
		onLoad() {
			this.fetchBanks();
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 获取银行列表
			async fetchBanks() {
				try {
					const db = uniCloud.database();
					const bankRes = await db.collection('bank').get();
					this.banks = bankRes.result.data;
				} catch (error) {
					console.error('获取银行列表失败', error);
				}
			},
			// 选择银行处理
			onBankChange(e) {
				const selectedBank = this.banks[e.detail.value];
				this.selectedBankId = selectedBank._id;
				this.selectedBankName = selectedBank.bank_name;
			},
			// 校验并提交银行卡信息
			async submitCard() {
				// 校验卡号
				if (!/^\d{16}$/.test(this.cardNumber)) {
					this.cardNumberError = '请输入16位纯数字卡号';
					return;
				} else {
					this.cardNumberError = '';
				}

				// 校验银行是否已选择
				if (!this.selectedBankId) {
					uni.showToast({
						title: '请选择银行',
						icon: 'none',
						duration: 2000
					});
					return;
				}

				try {
					const userInfo = uni.getStorageSync('uni-id-pages-userInfo');
					if (userInfo && userInfo._id != null) {
						const userId = userInfo._id;

						const db = uniCloud.database();
						await db.collection('bankcard_info').add({
							user_id: userId,
							bank_name: this.selectedBankName,
							bankcard_number: this.cardNumber,
							bank_id: this.selectedBankId
						});

						uni.showToast({
							title: '成功添加卡片',
							icon: 'success',
							duration: 2000
						});

						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/titlegrid/wallet/wallet'
							});
						}, 2000);
					}
				} catch (error) {
					console.error('添加卡片失败', error);
					uni.showToast({
						title: '添加卡片失败',
						icon: 'none',
						duration: 2000
					});
				}
			}
		}
	}
</script>

<style>
	.picker {
		padding: 10px;
		background-color: #f0f0f0;
		border-radius: 5px;
	}

	button {
		width: 95%;
		margin-top: 20px;
		padding: 10px;
		background-color: #007aff;
		color: white;
		text-align: center;
		border-radius: 15px;
	}
</style>