<template>
  <div class="m-3">
    <div class="row" v-if="loadStatus">
      <div class="skeleton col-3 mb-3" v-for="fake in fakes" :key="fakes.indexOf(fake)">
        <div class="skeleton-wrapper">
          <div class="skeleton-wrapper-inner">
            <div class="skeleton-wrapper-body">
              <div class="skeleton-avatar"></div>
              <div class="skeleton-content-1"></div>
              <div class="skeleton-content-2"></div>
              <div class="skeleton-content-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3 mb-3"
        v-for="product in products"
        :key="product.Product_id"
      >
        <div class="card mb">
          <img class="card-img-top" :src="require('../../assets/image/' + product.Product_img)">
          <div class="card-body mb">
            <h5 class="card-title">{{product.Product_name}}</h5>
            <p class="card-text">{{product.Product_desc}}</p>
            <div class="d-flex bd-highlight">
              <div class="p-2 flex-grow-1">
                <span class="price">ราคา {{product.Product_price}} บาท</span>
              </div>
              <div>
                <button type="button" class="btn btn-primary px-4" @click="addToCart(product)">
                  <i class="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- alert add -->
    <div
      class="alert alert-success alert-dismissible fade"
      v-bind:class="{'show': showAdd, 'hide': hideAdd}"
      role="alert"
    >
      เพิ่ม
      <strong>{{addProductName}}</strong> ไปยังตะกร้า
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- alert warn -->
    <div
      class="alert alert-danger alert-dismissible fade"
      v-bind:class="{'show': showWarn, 'hide': hideWarn}"
      role="alert"
    >
      <strong>มีสินค้านี้อยู่ในตะกร้าแล้ว</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "StoreComponent",
  data() {
    return {
      userId: 1,
      id: 1,
      title: "",
      body: "",
      products: [],
      fakes: [1, 2, 3, 4, 5, 6],
      loadStatus: true,
      showAdd: false,
      hideAdd: true,
      showWarn: false,
      hideWarn: true,
      addProductName: ""
    };
  },
  computed: {
    ...mapState(["Cart"])
  },
  methods: {
    ...mapMutations(["ADD_CART"]),
    addToCart: function(product) {
      if (this.Cart.length > 0) {
        if (this.Cart.includes(product)) {
          this.alertWarn();
        } else {
          this.addProductName = product.Product_name;
          product.Product_amount = 1;
          this.ADD_CART(product);
          this.alertAdd();
        }
      } else {
        this.addProductName = product.Product_name;
        product.Product_amount = 1;
        this.ADD_CART(product);
        this.alertAdd();
      }
    },
    alertAdd: function() {
      this.showAdd = true;
      this.hideAdd = false;
      setTimeout(() => {
        this.showAdd = false;
        this.hideAdd = true;
      }, 1000);
    },
    alertWarn: function() {
      this.showWarn = true;
      this.hideWarn = false;
      setTimeout(() => {
        this.showWarn = false;
        this.hideWarn = true;
      }, 1000);
    }
  },
  created() {
    setTimeout(() => {
      this.$http.get("http://vuedb/api/getproduct").then(res => {
        this.products = res.body;
        this.loadStatus = false;
      });
    }, 1500);
  }
};
</script>

<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 200px;
}

.alert {
  width: 50%;
  position: fixed;
  left: 25%;
  bottom: 0;
  z-index: 5;
}

.skeleton-wrapper {
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 4px;
  -webkit-border-radius: 4px;
}

.skeleton-wrapper-inner {
  height: 400px;
  position: relative;
}

.skeleton-wrapper-body div {
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderSkeleton;
  -webkit-animation-timing-function: linear;
  background: #f6f7f8;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from(#f6f7f8),
    color-stop(0.2, #edeef1),
    color-stop(0.4, #f6f7f8),
    to(#f6f7f8)
  );
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  height: 104px;
  position: relative;
}
.skeleton-wrapper-body {
  -webkit-animation-name: skeletonAnimate;
  background-image: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(deg),
    color-stop(0, red),
    color-stop(0.15, orange),
    color-stop(0.3, yellow),
    color-stop(0.45, green),
    color-stop(0.6, blue),
    color-stop(0.75, indigo),
    color-stop(0.8, violet),
    to(red)
  );
  background-image: -webkit-linear-gradient(
    135deg,
    red 0%,
    orange 15%,
    yellow 30%,
    green 45%,
    blue 60%,
    indigo 75%,
    violet 80%,
    red 100%
  );
  background-repeat: repeat;
  background-size: 50% auto;
}
.skeleton-wrapper-body div {
  position: absolute;
}
div.skeleton-avatar {
  height: 200px;
  width: 100%;
}
div.skeleton-content-1,
div.skeleton-content-2,
div.skeleton-content-3 {
  left: 15px;
  right: 15px;
  height: 10px;
}
div.skeleton-content-1 {
  top: 220px;
}
div.skeleton-content-2 {
  top: 240px;
}
div.skeleton-content-3 {
  top: 260px;
}
@-webkit-keyframes placeholderSkeleton {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
@-webkit-keyframes skeletonAnimate {
  from {
    background-position: top left;
  }
  to {
    background-position: top right;
  }
}
</style>
