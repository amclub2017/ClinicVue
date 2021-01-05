import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCalendar from "vue2-simple-calendar";
import adminltevue from 'admin-lte';
import "./assets/vue2-simple-calendar.css";
Vue.config.productionTip = false
Vue.use(vueCalendar, {
  // configuration goes here.
});
new Vue({
  router,
  store,
  adminltevue,
  render: h => h(App)
}).$mount('#app')
