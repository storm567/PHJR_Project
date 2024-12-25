<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="贷款申请_协议签署" left-icon="left"
			left-text="返回" @clickLeft="back" />
		<view id="d1">
			<p><b>第一条</b></p>
			<p><b>甲方的权利与义务</b></p>
			<p>1、甲方授权乙方以汇款方式向甲方提供项目资金。</p>
			<p>2、甲方应在本协议签署后7个工作日内将项目资金交付到乙方指定账户，</p>
			<p>3、甲方必须保证在本协议签署后7个工作日内按时支付本协议第一条约定的款项。</p>
			<p>4、甲方应提供有关本项目的营业执照复印件。</p>
			<p><b>第二条</b></p>
			<p><b>乙方的权利与义务</b></p>
			<p>5、乙方在本协议签署后7个工作日内将项目资金交付甲方指定账户，</p>
			<p>6、乙方在本协议签署后7个工作日内，将项目资金交付给甲方指定账户，</p>
			<p>7、乙方应及时将项目有关的营业执照复印件、营业执照复印件、登记证复印件等相关文件交甲方备案。</p>
			<p>8、乙方在本协议签署后7个工作日内，将项目资金交付给甲方，若有未付清款项，乙方须在接到甲方通知后7个工作日内将未付款项交付给甲方。
			</p>
			<p>9、乙方应按本协议签署后7个工作日内将项目资金支付给甲方，若有未付清款项，甲方须在接到通知后7个工作日内将未付款项付给乙方。
			</p>
			<p>10、乙方应在本协议签署后7个工作日内将项目资金支付给甲方，若有未付清款项，甲方须在接到通知后7个工作日内将未付款项付给乙方。
			</p>
			<p>11、未经甲方允许，乙方不得以任何理由将本协议项下的权利和义务转让给第三方。</p>
			<p>12、乙方未经甲方允许，不得擅自将本协议项下权利与义务转让给第三方。</p>
			<p>13、乙方在本协议签署后7个工作日内，将项目资金交由甲方指定账户。</p>
			<p>14、若因政策调整或其它不可抗力因素导致项目不能如期完成，甲方同意乙方延长期限，不得提前终止本协议，并赔偿由此造成的一切损失。</p>
			<p><b>第三条</b></p>
			<p><b>违约责任</b></p>
			<p>15、甲方违反本协议约定，擅自将本款项用于其他项目建设，甲方有权中止本合同，乙方需赔付甲方违约金人民币伍拾万元，</p>
			<p>并按贷款金额的20%支付违约金。</p>
			<p>16、甲方违反本合同约定，提供虚假信息，虚假材料或未及时交付资金的，每延误一天，按1000元/天支付违约金。</p>
			<p>17、甲方擅自将本协议权利与义务转让给第三方，按贷款金额的70%支付违约金。甲方违反本合同约定，向乙方支付违约金人民币伍拾万元，并按贷款金额的70%支付违约金。
			</p>
			<p>18、本协议项下的义务与责任由甲方与乙方共同执行。</p>
			<p>29、本协议未尽事宜，由双方另行协商签订补充协议(或协议)。</p>
			<p>20、本协议的变更、修改必须经协商双方同意，并以书面形式确定。</p>
			<p>21、如本协议在履行中发生纠纷，经协商无效，由甲方所在地人民法院裁决，甲乙双方同意由仲裁委员会仲裁。</p>



			<p><b>甲方(签字)：<u>普惠平台</u></b></p>

			<p style='margin-top:7.8pt;'>
				<span>乙方(签字)</span>：
				<uni-file-picker limit="1" title="上传乙方签字图片" @success="onSignatureChange"></uni-file-picker>
			</p>

			<button @click="completeSigning">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_id: '',
				bank: '',
				loanAmount: '',
				loanPurpose: '',
				collateralImage: '',
				transactionImage: '',
				signatureImage: '', // 存储乙方签字图片的URL
			};
		},
		onLoad(options) {
			if (options.bank) this.bank = options.bank;
			if (options.loanAmount) this.loanAmount = options.loanAmount;
			if (options.loanPurpose) this.loanPurpose = options.loanPurpose;
			if (options.collateralImage) this.collateralImage = options.collateralImage;
			if (options.transactionImage) this.transactionImage = options.transactionImage;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			onSignatureChange(e) {
				// 获取签字图片的URL
				// this.signatureImage = e.tempFilePaths[0];
				this.signatureImage = e.tempFiles[0].url;
			},
			completeSigning() {
				if (!this.signatureImage) {
					uni.showToast({
						title: '请上传签名图片',
						icon: 'none'
					});
				} else {
					const userInfo = uni.getStorageSync('uni-id-pages-userInfo');

					// 检查数据是否存在且 _id 非空
					if (userInfo && userInfo._id != null) {
						// const userId = userInfo._id;
						console.log('用户的 _id:', userInfo._id);
					}
					// 上传数据到unicloud-db
					const db = uniCloud.database();
					db.collection('loan_records').add({
						user_id: userInfo._id,
						bank: this.bank,
						// loanAmount: this.loanAmount,
						loanAmount: parseInt(this.loanAmount, 10), // 将loanAmount转换为整数类型
						loanPurpose: this.loanPurpose,
						collateralImage: this.collateralImage,
						transactionImage: this.transactionImage,
						signatureImage: this.signatureImage,
						loan_state:"0",
						// createdTime: new Date().toISOString()
						createdTime: Date.now()  // 使用13位的时间戳
					}).then(() => {
						uni.showToast({
							title: '正在审核,即将返回首页',
							icon: 'success'
						});
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/list/list'
							});
						}, 5000); // 5秒后返回列表页
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
	}
</script>

<style>

</style>