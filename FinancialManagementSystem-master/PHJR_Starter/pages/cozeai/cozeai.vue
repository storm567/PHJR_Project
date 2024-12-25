<template>
	<view class="container">
		<h1>Hello Bot</h1>
		<div id="position_demo"></div>
	</view>
</template>

<script>
	export default {
		onReady() {
			// 在页面加载完成后执行初始化
			this.initCozeWebSDK();
		},
		methods: {
			initCozeWebSDK() {
				// 引入 Coze Web SDK
				const script = document.createElement('script');
				script.src =
					'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js';
				document.head.appendChild(script);

				script.onload = () => {
					const bot_id = '7408388210608668690'; // 替换为你的 bot_id
					const title = 'puhui_ai';
					const icon =
						'https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/GPT-3.5.png';
					const lang = 'zh-CN';
					const layout = 'mobile';
					const width = 800;

					new CozeWebSDK.WebChatClient({
						config: {
							bot_id,
						},
						componentProps: {
							title,
							icon,
							lang,
							layout,
							width,
						},
						el: document.getElementById('position_demo')
					});
				};
			},
		}
	}
</script>

<style>
	/* 自定义悬浮入口的位置 */
	#position_demo {
		position: absolute;
		right: 10px;
		bottom: 20px;
	}
</style>