import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import VueRouter from 'vue-router';
import routers from './router/index';

Vue.config.productionTip = false

Vue.use(dataV)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
