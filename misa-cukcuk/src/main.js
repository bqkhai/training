import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

const eventBus = new Vue();
Vue.use(eventBus);
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
