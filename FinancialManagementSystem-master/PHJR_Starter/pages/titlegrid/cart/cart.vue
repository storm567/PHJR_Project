<template>
    <view class="pages">
        <!-- 添加的外层容器 -->
        <view class="container">
            <!-- #ifndef H5 -->
            <statusBar></statusBar>
            <!-- #endif -->

            <uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="贷款申请" />

            <uni-section title="可选贷款" type="line">
                <view class="card-container">
                    <uni-card padding="0" spacing="0" class="custom-card" v-for="(item, index) in banks" :key="index" @click="goTo(item.text)">
                        <image class="cover-image" :src="item.pictureurl" mode="aspectFit"></image>
                        <view class="cover-content">
                            <text class="uni-subtitle">{{item.text}}</text>
                        </view>
                    </uni-card>
                </view>
            </uni-section>

        </view> <!-- 结束外层容器 -->
    </view>
</template>

<script>
	export default {
		data() {
			return {
				banks: [{
					text: "中国工商银行",
					pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/gs.png"
				}, {
					text: "中国建设银行",
					pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/js.png"
				}, {
					text: "中国农业银行",
					pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/ny.png"
				}, {
					text: "中国银行",
					pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/zg.png"
				}],
			}
		},
		methods: {
			goTo(text) {
				uni.navigateTo({
					url: `/pages/titlegrid/cart/bankcart/bankcart?bank=${text}`
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		overflow: hidden;
		padding: 0px;
		background-color: #f5f5f5;
	}

	.card-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 15px;
	}

	.custom-card {
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.cover-image {
		width: 100%;
		height: 83px;
		object-fit: contain;
		background-color: #fff;
	}

	.cover-content {
		padding: 10px;
		background-color: #007aff;
		color: #fff;
		text-align: center;
		font-size: 16px;
	}
</style>
