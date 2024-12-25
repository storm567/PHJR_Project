<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="贷款申请_步骤2" left-icon="left"
			left-text="返回" @clickLeft="back" />
		<uni-section title="抵押物上传" type="line">
			<view class="example-body">
				<uni-file-picker limit="1" title="上传抵押物照片"
					@success="e => onFileChange(e, 'collateral')"></uni-file-picker>
			</view>
		</uni-section>
		<uni-section title="流水上传" type="line">
			<view class="example-body">
				<uni-file-picker limit="1" title="上传一张流水照片"
					@success="e => onFileChange(e, 'transaction')"></uni-file-picker>
			</view>
		</uni-section>
		<uni-section></uni-section>
		<button @click="navigateToNext">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bank: '',
				loanAmount: '',
				loanPurpose: '',
				collateralImage: '', // 存储抵押物照片的URL
				transactionImage: '' // 存储流水照片的URL
			};
		},
		onLoad(options) {
			if (options.bank) {
				this.bank = options.bank;
			}
			if (options.loanAmount) {
				this.loanAmount = options.loanAmount;
			}
			if (options.loanPurpose) {
				this.loanPurpose = options.loanPurpose;
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 处理上传的文件
			onFileChange(e, type) {
				console.log('File change event:', e.tempFiles[0].url); // 调试输出

				if (e.tempFilePaths && e.tempFilePaths.length > 0) {
					// const filePath = e.tempFilePaths[0];
					const filePath = e.tempFiles[0].url;
					if (type === 'collateral') {
						this.collateralImage = filePath;
					} else if (type === 'transaction') {
						this.transactionImage = filePath;
					}
				} else {
					if (type === 'collateral') {
						this.collateralImage = '';
					} else if (type === 'transaction') {
						this.transactionImage = '';
					}
				}
			},
			navigateToNext() {
				if (!this.collateralImage || !this.transactionImage) {
					uni.showToast({
						title: '请上传抵押物和流水照片',
						icon: 'none'
					});
					return;
				}

				uni.navigateTo({
					url: `/pages/titlegrid/cart/signing/signing?bank=${this.bank}&loanAmount=${this.loanAmount}&loanPurpose=${this.loanPurpose}&collateralImage=${this.collateralImage}&transactionImage=${this.transactionImage}`
				});
			}
		}
	}
</script>

<style>

</style>