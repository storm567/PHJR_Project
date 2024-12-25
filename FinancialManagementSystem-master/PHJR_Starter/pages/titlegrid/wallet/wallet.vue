<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007aff" status-bar title="我的卡包" left-icon="left"
			left-text="返回" @clickLeft="back" />
		<uni-section title="银行卡" type="line">
			<view v-if="bankCards.length === 0">
				<text class="uni-body">未绑定银行卡</text>
			</view>
			<view v-else>
				<view v-for="(card, index) in bankCards" :key="index">
					<uni-card :title="card.bank_name" :extra="formatCardNumber(card)" :thumbnail="card.bank_icon">
						<text class="uni-body">{{ card.bank_name }}发行的银行卡</text>
						<button @click="toggleCardNumber(index)">切换展示
							<!-- <image :src="showFullNumber[index] ? '/static/eye-open.png' : '/static/eye-close.png'" style="width:24px;height:24px;"/> -->
						</button>
					</uni-card>
				</view>
			</view>
		</uni-section>
		<uni-fab horizontal="right" vertical="bottom" iconPath="/static/add.png" @click="navigateToAddCard">
		</uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankCards: [], // 存储查询到的银行卡信息
				showFullNumber: [], // 控制是否显示完整的银行卡号
			};
		},
		onLoad() {
			this.getUserInfoAndQueryCards();
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			async getUserInfoAndQueryCards() {
				try {
					const userInfo = uni.getStorageSync('uni-id-pages-userInfo');

					if (userInfo && userInfo._id != null) {
						const userId = userInfo._id;
						console.log('用户的 _id:', userId);

						const db = uniCloud.database();

						// 查询 bankcard_info 表中的数据
						const cardsRes = await db.collection('bankcard_info').where({
							user_id: userId
						}).get();

						if (cardsRes.result.data.length > 0) {
							const bankCards = await Promise.all(cardsRes.result.data.map(async (card, index) => {
								// 根据 bank_id 查询 bank 表中的 bank_icon
								const bankRes = await db.collection('bank').where({
									_id: card.bank_id
								}).get();

								if (bankRes.result.data.length > 0) {
									card.bank_icon = bankRes.result.data[0].bank_icon; // 获取 bank_icon
								}

								// 初始化显示银行卡号的格式
								this.showFullNumber[index] = false;
								return card;
							}));

							this.bankCards = bankCards;
						} else {
							this.bankCards = []; // 没有银行卡时显示提示信息
						}

					} else {
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

				} catch (error) {
					console.error('查询失败', error);
				}
			},
			formatCardNumber(card) {
				const number = card.bankcard_number;
				if (this.showFullNumber[this.bankCards.indexOf(card)]) {
					return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12, 16)}`;
				} else {
					return `**** **** **** ${number.slice(12, 16)}`;
				}
			},
			toggleCardNumber(index) {
				this.$set(this.showFullNumber, index, !this.showFullNumber[index]);
			},
			navigateToAddCard() {
				uni.navigateTo({
					url: '/pages/titlegrid/wallet/addCard'
				});
			}
		}
	}
</script>

<style>
	.uni-body {
		margin-top: 10px;
	}

	uni-fab {
		position: fixed;
		right: 30px;
		bottom: 30px;
	}
</style>