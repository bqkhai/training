import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import EmployeeList from './views/dictionary/employee/EmployeeList.vue'
// import CustomerList from './views/dictionary/customer/CustomerList.vue'

Vue.use(VueRouter)

// const routers = [
//   {path: '/dic/employee', component: EmployeeList},
//   {path: '/dic/customer', component: CustomerList}
// ]

// const router = new VueRouter({
//   mode: 'history',
//   routers
// })

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(App)
}).$mount('#app')
