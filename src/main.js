import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCalendar from "vue2-simple-calendar";
import adminltevue from 'admin-lte';
import "./assets/vue2-simple-calendar.css";
import {
	CalendarView,
	CalendarViewHeader,
	CalendarMathMixin,
} from "vue-simple-calendar" // published version
    // The next two lines are processed by webpack. If you're using the component without webpack compilation,
    // you should just create <link> elements for these. Both are optional, you can create your own theme if you prefer.
   import 'vue-simple-calendar/static/css/default.css'
   import 'vue-simple-calendar/static/css/holidays-us.css'
Vue.config.productionTip = false
Vue.use(vueCalendar, {
  // configuration goes here.
});
new Vue({
  router,
  store,
	CalendarView,
	CalendarViewHeader,
	CalendarMathMixin,
  adminltevue,
  render: h => h(App)
}).$mount('#app')
