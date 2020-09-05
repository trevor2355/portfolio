import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/helpers/augments";
import "@/helpers/filters";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  offset: -25,
  duration: 1000,
  easing: "ease"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
