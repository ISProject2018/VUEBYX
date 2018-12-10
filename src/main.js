import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResources from "vue-resource";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);
Vue.use(VueResources);

// bootstrap and jquery
import jQuery from "jquery";
global.jQuery = jQuery;
global.$ = jQuery;
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./assets/libs/font-awesome/css/all.min.css";

//Material

import {
  MdSteppers,
  MdButton,
  MdCard,
  MdList,
  MdTable,
  MdContent
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdSteppers);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdList);
Vue.use(MdTable);
Vue.use(MdContent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
