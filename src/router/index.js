import Vue from 'vue'
import VueRouter from 'vue-router'
import InputProfile from '../views/InputProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inputProfile',
    component: InputProfile
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/webBuildTest',
  routes
})

export default router
