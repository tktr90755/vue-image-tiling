import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueImageTiling from './vue-image-tiling'
import VueImageTiling2 from './vue-image-tiling2'

Vue.config.productionTip = false

Vue.use(VueImageTiling)
Vue.use(VueImageTiling2)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
