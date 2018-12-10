<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      @click="CAL_CART"
      data-toggle="modal"
      data-target="#CardModal"
    >
      Profile
      <span class="badge badge-light" v-if="badge > 0">{{badge}}</span>
    </button>
    <router-link to="/store" class="btn btn-success text-light">Store</router-link>
    <router-link to="/store/orderlist" class="btn btn-success text-light">Order</router-link>

    <!-- Modal -->
    <div
      class="modal fade"
      id="CardModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="CartModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="CartModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table text-center">
              <thead>
                <tr>
                  <th>ชื่อสินค้า</th>
                  <th>ราคาต่อหน่วย</th>
                  <th style="width:100px;table-layout: fixed;">จำนวน</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="my-5">
                <tr v-for="(item, index) in Cart" :key="item.Product_id">
                  <td>
                    <h5 class="text-left">{{item.Product_name}}</h5>
                  </td>
                  <td>{{item.Product_price}}</td>
                  <td>
                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control"
                        min="1"
                        max="10"
                        value="1"
                        v-model="item.Product_amount"
                        v-on:change="CAL_CART"
                      >
                    </div>
                  </td>
                  <td style="padding:5px">
                    <button class="btn btn-danger" @click="removeItem(index)">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="text-left">รวม</td>
                  <td>{{CartTotal}} บาท</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary px-5" @click="processOrder">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "MenuComponent",
  computed: {
    ...mapGetters(["badge"]),
    ...mapState(["Cart", "CartTotal"])
  },
  methods: {
    ...mapMutations(["CAL_CART"]),
    removeItem: function(index) {
      this.Cart.splice(index, 1);
      this.CAL_CART();
    },
    processOrder: function() {
      $("#CardModal").modal("hide");
      this.$router.push("/order");
    }
  }
};
</script>


