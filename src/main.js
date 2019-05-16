// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' // 淘宝rem适配方案
import '@/assets/css/border.less'
import MessageBox from '@/components/confirm/confirm'

Vue.use(MessageBox)
Vue.config.productionTip = false

/* eslint-disable no-new */
let info = {
  baseUrl: process.env.baseImgUrl
}
window.vue = new Vue({
  el: '#app',
  router,
  data: {
    params: info
  },
  components: { App },
  template: '<App/>'
})

console.log(process.env)
console.log(info)
