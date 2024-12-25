<template>
	<view class="container">
		<!-- uni-steps 组件 -->
		<uni-steps class="steps" :options="steps" :active="activeStep" active-color="#409EFF"></uni-steps>

		<!-- 表格区，根据 activeStep 切换表格显示 -->
		<view class="table-container">
			<uni-table v-if="activeStep === 0" border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center" >用户名称</uni-th>
					<uni-th align="center" >企业名称</uni-th>
					<uni-th align="center" >银行名称</uni-th>
					<uni-th align="center" >贷款金额</uni-th>
					<uni-th align="center" >贷款目的</uni-th>
					<uni-th align="center" >申请时间</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr>
					<uni-td align="center">{{ t1_record.username }}</uni-td>
					<uni-td align="center">{{ t1_record.com_name }}</uni-td>
					<uni-td align="center">{{ t1_record.bank }}</uni-td>
					<uni-td align="center">{{ t1_record.loanAmount }}</uni-td>
					<uni-td align="center">{{ t1_record.loanPurpose }}</uni-td>
					<uni-td align="center"><uni-dateformat :date="t1_record.createdTime"></uni-dateformat></uni-td>
				</uni-tr>
			</uni-table>
			
			<uni-table v-if="activeStep != 0" border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center" >用户名称</uni-th>
					<uni-th align="center" >企业名称</uni-th>
					<uni-th align="center" >贷款金额</uni-th>
					<uni-th align="center" >贷款目的</uni-th>
					<uni-th align="center" >近六月流水</uni-th>
					<uni-th align="center" >抵押物</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr>
					<uni-td align="center">{{ t1_record.username }}</uni-td>
					<uni-td align="center">{{ t1_record.com_name }}</uni-td>
					<uni-td align="center">{{ t1_record.loanAmount }}</uni-td>
					<uni-td align="center">{{ t1_record.loanPurpose }}</uni-td>
					<!-- <uni-td align="center">{{ t1_record.transactionImage }}</uni-td> -->
					<!-- <uni-td align="center">{{ t1_record.collateralImage }}</uni-td> -->
					<uni-td align="center"><image :src="t1_record.transactionImage"></image></uni-td>
					<uni-td align="center"><image :src="t1_record.collateralImage"></image></uni-td>
				</uni-tr>
			</uni-table>
			<!-- <uni-easyinput  v-model="value" placeholder="" /> -->
		</view>


		<!-- 按钮 -->
		<view class="button-container">
			<button v-if="activeStep != 0" class="nav-button" @click="prevStep" size="mini">上一步</button>
			<button v-if="activeStep != steps.length-1" class="nav-button" @click="nextStep" size="mini">下一步</button>
			<!-- <button v-if="activeStep === steps.length-1" class="finish-button" @click="" size="mini">通过</button> -->
			<!-- <navigator open-type="navigateBack"> -->
			<button v-if="activeStep === steps.length-1" class="finish-button" :disabled="isButtonDisabled" @click="handleFinish" size="mini"> {{ isButtonDisabled ? `请等待 ${countdown} 秒` : '通过' }} </button>
			<!-- </navigator> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeStep: 0, // 当前激活的步骤
				// loanRecordId: 'your-loan-record-id', // 需要修改的loan_record的ID
				isButtonDisabled: true, // 按钮是否禁用
				countdown: 3, // 倒计时秒数
				t1_record: {},//第一张表的record
				loanRecordId: '',
				errorMsg: '',
				// 定义步骤选项
				steps: [{
						title: '贷款信息确认'
					},
					{
						title: '贷款资质材料'
					},
					{
						title: '贷款审核'
					}
				]

			}
		},
		watch: {
			// 当步骤变为最后一步时启动倒计时
			activeStep(newValue) {
				if (newValue === this.steps.length - 1) {
					this.startCountdown();
				}
			}
		},
		onLoad(options) {
		  // 从 URL 中获取 loan_records 的 _id
		  const recordId = options.id;
		  this.loanRecordId = options.id;
		  if (recordId) {
		    this.fetchRecordDetails(recordId);
		  } else {
		    this.errorMsg = '无法获取记录 ID';
		  }
		},
		methods: {
			
			async fetchRecordDetails(recordId) {
			  try {
			    // 调用云函数获取联表数据
			    const res = await uniCloud.callFunction({
			      name: 'getRecordDetails', // 云函数名称，请确保云函数存在且正确
			      data: {
			        recordId,
			      },
			    });
			
			    if (res.result.code === 200) {
			      this.t1_record = res.result.data; // 将返回的记录数据赋值给 record
			    } else {
			      this.errorMsg = res.result.msg || '加载失败';
			    }
			  } catch (error) {
			    this.errorMsg = '云函数调用失败';
			    console.error('云函数调用错误:', error);
			  }
			},
			// 切换到下一步
			nextStep() {
				if (this.activeStep < this.steps.length - 1) {
					this.activeStep += 1;
				}
			},
			// 切换到上一步
			prevStep() {
				if (this.activeStep > 0) {
					this.activeStep -= 1;
				}
			},
		    async handleFinish() {
				try {
					const db = uniCloud.database();
		
					// 查询 loan_state 当前值
					const res = await db.collection('loan_records')
						.doc(this.loanRecordId)
						.get();
		
					if (res.result.data.length > 0) {
						let currentState = res.result.data[0].loan_state;
						let createdTime = Date.now(); // 获取 createdTime
		
						// 根据当前状态更新 loan_state
						let newState = currentState === '0' ? '1' : currentState === '1' ? '3' : currentState;
						console.log("HLLLLLL");
		
						if (newState !== currentState) {
							// 更新 loan_state 字段
							const updateRes = await db.collection('loan_records')
								.doc(this.loanRecordId)
								.update({
									loan_state: newState
								});
							console.log("Hello:",updateRes.result.updated);
		
							if (updateRes.result.updated == 1) {
								uni.showToast({
									title: '更新成功',
									icon: 'success'
								});
		
								// 如果 newState 为 3，新增 refund 记录
								if (newState === '3') {
									await this.createRefundRecord(createdTime);
								}
		
								// 更新成功后跳转回原页面
								setTimeout(() => {
									uni.navigateBack();
								}, 1500); // 等待 1.5 秒显示成功提示后跳转
							} else {
								uni.showToast({
									title: '审批通过',
									icon: 'none'
								});
		
								setTimeout(() => {
									uni.navigateBack();
								}, 1500); // 等待 1.5 秒显示成功提示后跳转
							}
						} else {
							uni.showToast({
								title: '状态未变化',
								icon: 'none'
							});
						}
					} else {
						uni.showToast({
							title: '未找到记录',
							icon: 'none'
						});
					}
				} catch (error) {
					console.error('更新失败:', error);
					uni.showToast({
						title: '更新失败',
						icon: 'none'
					});
				}
			},
		
			async createRefundRecord(createdTime) {
				try {
					const db = uniCloud.database();
					// 计算 ref_time 为 createdTime + 1 年
					let refTime = createdTime + 31536000000;
		
					// 新增 refund 记录
					const res = await db.collection('refund').add({
						ref_loa_id: this.loanRecordId,
						ref_time: refTime,
						ref_state: '0',
					});
		
					if (res._id) {
						uni.showToast({
							title: '新增记录成功',
							icon: 'success'
						});
					} else {
						uni.showToast({
							title: '新增记录失败',
							icon: 'none'
						});
					}
				} catch (error) {
					console.error('新增 refund 记录失败:', error);
					uni.showToast({
						title: '新增 refund 记录失败',
						icon: 'none'
					});
				}
			},
			startCountdown() {
				this.isButtonDisabled = true;
				let timer = setInterval(() => {
					if (this.countdown > 1) {
						this.countdown -= 1;
					} else {
						clearInterval(timer);
						this.isButtonDisabled = false; // 倒计时结束，按钮可用
					}
				}, 1000);
			}
		}
	}
</script>

<style>
	/* 父容器样式 */
	.container {
		padding: 20px;
		/* 给整个容器加一些内边距 */
	}

	/* uni-steps 组件样式 */
	.steps {
		margin-bottom: 100px;
		/* 在步骤条下方添加空白 */
	}

	/* 中间表单组件样式 */
	.table-container {
		margin-bottom: 50px;
		height: 300px;
	}

	/* 按钮容器样式 */
	.button-container {
		display: flex;
		gap: 10px;
		/* 设置按钮之间的间距 */
	}

	/* 按钮样式 */
	.nav-button {
		padding: 10px 20px;
		background-color: #409EFF;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	/* 完成按钮样式 */
	.finish-button {
		padding: 10px 20px;
		background-color: #67C23A;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.finish-button:disabled {
		background-color: #d3d3d3;
		cursor: not-allowed;
	}

	.nav-button:hover {
		background-color: #66b1ff;
	}
</style>