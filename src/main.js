import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import adminltevue from 'admin-lte';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  adminltevue,
  render: h => h(App)
}).$mount('#app')
