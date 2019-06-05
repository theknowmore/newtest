// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
/*border.css解决移动端1像素边框的问题*/
import 'styles/border.css'
/*npm install fastclick --save 安装fastclick包 安装完在package.json 13行"dependencies"查看
解决移动端点击事件延迟300毫秒问题*/
import fastClick from 'fastclick'
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
