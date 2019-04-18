import Vue from 'vue'
import App from './App.vue'
import VueImageTiling from './vue-image-tiling'

Vue.config.productionTip = false

Vue.use(VueImageTiling)

new Vue({
  render: h => h(App),
}).$mount('#app')
