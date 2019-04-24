import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueImageTiling from './vue-image-tiling'

Vue.config.productionTip = false

Vue.use(VueImageTiling)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
