import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import html2canvas from "html2canvas";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(html2canvas)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

