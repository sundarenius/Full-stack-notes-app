import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import './styles/index.scss'
import setUpMixins from '@/utils/mixins'

Vue.mixin(setUpMixins(vuetify))

console.log(router)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
