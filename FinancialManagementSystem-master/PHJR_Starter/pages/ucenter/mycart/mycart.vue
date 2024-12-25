<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="我的贷款" left-icon="left"
			left-text="返回" @clickLeft="back" />

		<uni-section title="贷款项目" type="line">
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
						<!-- 添加状态文本 -->
						<view :class="['loan-state', getLoanStateClass(record.loan_state)]">
							<text>{{ getLoanStateText(record.loan_state) }}</text>
						</view>
					</view>
				</uni-card>
				<uni-section></uni-section>
				<uni-section></uni-section>
				<uni-section></uni-section>
				<view><button @click="goToMyRefund" type="primary">我的还款</button></view>
			</view>
			<view v-else>
				<text>未进行贷款</text>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loanRecords: [] // 存放查询到的贷款记录
			};
		},
		onLoad() {
			const userInfo = uni.getStorageSync('uni-id-pages-userInfo');

			if (userInfo && userInfo._id) {
				const userId = userInfo._id;
				this.fetchLoanRecords(userId);
			} else {
				console.log('用户未登录或_id为空');
				uni.showToast({
					title: '请先登录',
					icon: 'none',
					duration: 2000
				});

				setTimeout(() => {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd'
					});
				}, 2000);
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
					// 查询loan_records表
					const res = await db.collection('loan_records')
						.where({
							user_id: userId
						})
						.get();

					if (res.result.data.length > 0) {
						// 获取到的贷款记录
						const records = res.result.data;

						// 查询对应的银行图标并转换时间格式
						for (let record of records) {
							// 转换createdTime为正常时间格式
							record.formattedTime = this.formatTime(record.createdTime);
							record.formattedTime1 = this.formatTime(record.createdTime + 31536000000);
							const bankRes = await db.collection('bank')
								.where({
									bank_name: record.bank
								})
								.get();
							if (bankRes.result.data.length > 0) {
								record.bankIcon = bankRes.result.data[0].bank_icon;
							} else {
								record.bankIcon = ''; // 如果没有图标，设置为空
							}
						}

						this.loanRecords = records;
					} else {
						console.log('未查询到贷款记录');
					}
				} catch (error) {
					console.error('查询贷款记录出错：', error);
				}
			},
			formatTime(timestamp) {
				// 创建一个Date对象
				const date = new Date(timestamp);
				const year = date.getFullYear();
				const month = ('0' + (date.getMonth() + 1)).slice(-2);
				const day = ('0' + date.getDate()).slice(-2);
				const hours = ('0' + date.getHours()).slice(-2);
				const minutes = ('0' + date.getMinutes()).slice(-2);
				const seconds = ('0' + date.getSeconds()).slice(-2);
				// 返回格式化的时间字符串
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			getLoanStateText(state) {
				const stateMap = {
					0: '未审批',
					1: '平台已通过',
					2: '平台已驳回',
					3: '银行已审核',
					4: '银行驳回'
				};
				return stateMap[state] || '未知状态';
			},
			getLoanStateClass(state) {
				const stateClassMap = {
					0: 'state-pending',
					1: 'state-approved',
					2: 'state-rejected',
					3: 'state-approved',
					4: 'state-rejected'
				};
				return stateClassMap[state] || '';
			},
			goToMyRefund() {
				uni.navigateTo({
					url: '/pages/ucenter/myrefund/myrefund'
				});
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

	button {
		position: fixed;
		/* 固定定位 */
		bottom: 0px;
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