import Vue from 'vue'
import VueRouter from 'vue-router'
// import InputProfile from '../views/InputProfile.vue'
import MapPage from '../views/map/Map'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'inputProfile',
  //   component: InputProfile
  // },
  // {
  //   path: '/about',
  //   name: 'inputProfile',
  //   component: InputProfile
  // },
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
