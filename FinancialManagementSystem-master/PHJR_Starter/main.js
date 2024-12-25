import App from './App'
import i18n from './lang/i18n'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {createSSRApp} from 'vue'
import axios from 'axios'
var aio = axios.create({
	baseURL:'http://localhost:12315/',
	timeout:5000
})


export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	//在vue对象的全局属性里添加axios对象，那里使用那里解构导出
	app.config.globalProperties.$axios = aio;
	return {app}
}
// #endif
