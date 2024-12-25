<!-- <template>
	<view>
		<unicloud-db v-slot:default="{data, loading, error, options}" collection="LeaveMsg">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<uni-list>
				    <uni-list-item v-for="i in data" :key="i._id" :title="i.name" :show-badge="true" badge-text="12" >
						
					</uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
		<uni-file-picker @success="suc" title="上传照片" limit="9"></uni-file-picker>
	</view>
</template>

<script setup>
	import {onMounted, ref} from "vue";
	import {getCurrentInstance} from 'vue'
	onMounted(async (e) => {
		 const {proxy} = getCurrentInstance();
		 const res = await proxy.$axios.get("/user/1");
		 console.log(res);
	});
	// let file = ref(null);
	// let sel = function(e){
	// 	console.log(file);
	// 	console.log(e);
	// }
	// let suc = function(e){
	// 	console.log(e);
	// 	console.log(file);
	// }
	let suc = function(e){
		uni.showToast({
			title:e
		})
		console.log(e)
	}
	// uniCloud.callFunction({
	// 	name:'Test',
	// 	data:{}
	// }).then(res=>console.log(res))
</script>

<style>
	       
</style -->>
<template>
  <view>
    <uni-notice-bar show-icon scrollable :text="noticeText" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      noticeText: '', // 当前显示的文本
      noticeList: [], // 从接口获取的文本列表
      currentIndex: 0, // 当前展示的文本索引
    };
  },
  methods: {
    // 获取文本数据
    fetchNoticeData() {
      uni.request({
        url: 'https://your-springcloud-api-endpoint/your-api', // 替换为你的接口地址
        method: 'GET',
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            this.noticeList = res.data; // 假设接口返回的是一个文本数组
            this.startNoticeLoop();
          } else {
            console.error('获取数据失败');
          }
        },
        fail: (err) => {
          console.error('请求失败:', err);
        },
      });
    },
    // 开始循环展示文本
    startNoticeLoop() {
      if (this.noticeList.length > 0) {
        this.noticeText = this.noticeList[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.noticeList.length;

        setTimeout(() => {
          this.startNoticeLoop();
        }, 3000); // 每3秒更新一次文本
      }
    },
  },
  mounted() {
    this.fetchNoticeData(); // 组件挂载时获取数据
  },
};
</script>
