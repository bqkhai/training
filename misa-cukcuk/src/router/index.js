import Vue from 'vue'
import VueRouter from 'vue-router'
import Employee from '../views/employee/Employee.vue'
import Customer from '../views/customer/Customer.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import('../views/Buy.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
