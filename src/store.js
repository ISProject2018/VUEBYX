import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Cart: [],
    CartTotal: 0
  },
  mutations: {
    ADD_CART: (state, product) => {
      state.Cart.push(product);
    },
    CAL_CART: state => {
      state.CartTotal = 0;
      state.Cart.forEach(element => {
        state.CartTotal += element.Product_price * element.Product_amount;
      });
    }
  },
  getters: {
    badge: state => {
      return state.Cart.length;
    },
    total: state => {
      let total = 0;
      state.Cart.forEach(element => {
        total += element.Product_price * element.Product_amount;
      });
      return total;
    }
  },
  actions: {}
});
