import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Store from "./views/Store.vue";
import Order from "./views/Order.vue";
import OrderListComponent from "./components/Store/OrderListComponent.vue";
import StoreComponent from "./components/Store/StoreComponent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/store/",
      component: Store,
      children: [
        {
          path: "",
          component: StoreComponent
        },
        {
          path: ":orderList",
          component: OrderListComponent
        }
      ]
    },
    {
      path: "/order",
      component: Order
    }
  ]
});
