import "@babel/polyfill";
import "mutationobserver-shim";

import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import axios from 'axios'

import "./plugins/bootstrap-vue";

Vue.config.productionTip = false;

window.axios = axios

new Vue({  
  router,
  render: h => h(App)
}).$mount("#app");
