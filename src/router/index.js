import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Bandeja from '../views/Bandeja.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/bandeja',
    name: 'Bandeja',
    component: Bandeja,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(store.getters.getAutenticacion)
    if (store.getters.getAutenticacion) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})
export default router
