<template>
	<view>
		    <web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 src: ''
			}
		},
		    onLoad(option) {
		        console.log(option.link)
		        this.src = option.link
		    },
		methods: {
			
		}
	}
</script>

<style>

</style>

