<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="我的还款" left-icon="left"
			left-text="返回" @clickLeft="back" />

		<!-- 已放款贷款项目 -->
		<uni-section title="已放款贷款项目" type="line">
			<view v-if="loanRecords.length > 0">
				<uni-card v-for="(record, index) in loanRecords" :key="index" :isFull="true">
					<view class="card-content">
						<image :src="record.bankIcon" class="bank-icon" />
						<view class="text-content">
							<view class="loan-title">
								<text class="loan-amount">{{ record.loanAmount }}</text>
								<text class="yuan">元</text>
							</view>
							<view>
								<text>{{ record.bank }}</text>
							</view>
							<view>
								<text>创建时间：{{ record.formattedTime }}</text>
							</view>
							<view>
								<text>需还款时间：{{ record.formattedTime1 }}</text>
							</view>
							
							<view class="loan-purpose">
								<text>贷款原因：{{ record.loanPurpose }}</text>
							</view>
						</view>
						<!-- 还款状态与按钮 -->
						<view :class="['loan-state', getRefundStateClass(record.refState)]">
							<text>{{ getRefundStateText(record.refState) }}</text>
							<button v-if="record.refState !== '1'" :disabled="record.refState === '1'" @click="showRepayDialog(record)">
								还款
							</button>
						</view>
					</view>
				</uni-card>
			</view>
			<view v-else>
				<text>未找到需要还款的贷款项目</text>
			</view>
		</uni-section>

		<!-- 还款确认弹窗 -->
		<uni-popup ref="repayPopup" type="dialog" title="还款确认" :background="true" background-color="#FFF" border-radius="10px">
			<view style="background-color: white; padding: 20px 50px;border-radius: 10px;">
				<text style="font-size: 20px;">是否还款 {{ repayAmount }} 元？</text>
			</view>
			<view class="popup-buttons">
				<button class="confirm-btn" @click="confirmRepay" style="font-size: 15px;">确认还款</button>
				<button class="cancel-btn" @click="closeRepayDialog" style="font-size: 15px;">取消</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loanRecords: [], // 存放查询到的贷款记录
				selectedRecord: null, // 选中的贷款记录
				repayAmount: 0 // 还款金额
			};
		},
		onLoad() {
			const userInfo = uni.getStorageSync('uni-id-pages-userInfo');

			if (userInfo && userInfo._id) {
				const userId = userInfo._id;
				this.fetchLoanRecords(userId);
			} else {
				console.log('用户未登录或_id为空');
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			async fetchLoanRecords(userId) {
				const db = uniCloud.database();

				try {
					// 查询 loan_records 表
					const res = await db.collection('loan_records')
						.where({
							user_id: userId,
							loan_state: "3" // 只查询 loan_state 为 3 的记录
						})
						.get();

					if (res.result.data.length > 0) {
						const records = res.result.data;

						for (let record of records) {
							// 转换时间格式
							record.formattedTime = this.formatTime(record.createdTime);
							record.formattedTime1= this.formatTime(record.createdTime+31536000000);

							// 查询 bank 表中的银行图标
							const bankRes = await db.collection('bank')
								.where({
									bank_name: record.bank
								})
								.get();

							if (bankRes.result.data.length > 0) {
								record.bankIcon = bankRes.result.data[0].bank_icon;
							} else {
								record.bankIcon = '';
							}

							// 查询 refund 表中的还款状态
							const refundRes = await db.collection('refund')
								.where({
									ref_loa_id: record._id // 根据 loan_id 查询
								})
								.get();

							if (refundRes.result.data.length > 0) {
								record.refState = refundRes.result.data[0].ref_state;
								record.refundId = refundRes.result.data[0]._id;
							} else {
								record.refState = null;
							}
						}

						this.loanRecords = records;
					} else {
						console.log('未查询到符合条件的贷款记录');
					}
				} catch (error) {
					console.error('查询贷款记录出错：', error);
				}
			},
			formatTime(timestamp) {
				const date = new Date(timestamp);
				const year = date.getFullYear();
				const month = ('0' + (date.getMonth() + 1)).slice(-2);
				const day = ('0' + date.getDate()).slice(-2);
				const hours = ('0' + date.getHours()).slice(-2);
				const minutes = ('0' + date.getMinutes()).slice(-2);
				const seconds = ('0' + date.getSeconds()).slice(-2);
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			getRefundStateText(state) {
				const stateMap = {
					0: '未还款',
					1: '已还款',
					2: '已逾期'
				};
				return stateMap[state] || '未知状态';
			},
			getRefundStateClass(state) {
				const stateClassMap = {
					0: 'state-pending',
					1: 'state-approved',
					2: 'state-rejected'
				};
				return stateClassMap[state] || '';
			},
			showRepayDialog(record) {
				this.selectedRecord = record;
				this.repayAmount = record.loanAmount;
				this.$refs.repayPopup.open();
			},
			closeRepayDialog() {
				this.$refs.repayPopup.close();
			},
			async confirmRepay() {
				if (!this.selectedRecord) return;

				const db = uniCloud.database();
				try {
					// 更新 refund 表
					await db.collection('refund')
						.doc(this.selectedRecord.refundId)
						.update({
							ref_act_time: Date.now(), // 当前时间戳
							ref_state: "1" // 修改状态为已还款
						});

					uni.showToast({
						title: '还款成功',
						icon: 'success'
					});

					// 关闭弹窗并刷新记录
					this.closeRepayDialog();
					this.fetchLoanRecords(this.selectedRecord.user_id);
				} catch (error) {
					console.error('还款操作失败：', error);
				}
			}
		}
	}
</script>

<style>
	.card-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.bank-icon {
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}

	.text-content {
		flex: 1;
	}

	.loan-title {
		display: flex;
		align-items: baseline;
	}

	.loan-amount {
		font-weight: bold;
		font-size: 18px;
	}

	.yuan {
		font-size: 16px;
		margin-left: 5px;
	}

	.loan-purpose {
		margin-top: 10px;
		font-size: 14px;
	}

	/* 状态文本样式 */
	.loan-state {
		font-weight: bold;
	}

	.state-pending {
		color: gray;
	}

	.state-approved {
		color: green;
	}

	.state-rejected {
		color: red;
	}
	
	/* 弹窗按钮样式 */
	.popup-buttons {
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
	}

	.confirm-btn {
		background-color: #007aff;
		color: white;
		padding: 1px 20px;
		border-radius: 5px;
	}

	.cancel-btn {
		background-color: #dcdcdc;
		color: black;
		padding: 1px 20px;
		border-radius: 5px;
	}

	.confirm-btn:disabled, 
	.cancel-btn:disabled {
		background-color: gray;
		color: white;
	}
	

</style>
