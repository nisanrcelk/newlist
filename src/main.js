import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from "./store";
window.eventBus=new Vue()
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
})
