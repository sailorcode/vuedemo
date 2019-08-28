import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './router/router.js'

//使用插件
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
