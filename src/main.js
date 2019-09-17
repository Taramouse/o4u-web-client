import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// https://github.com/FortAwesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
library.add(faSpinner, faUserSecret, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
