<template>
  <div class="my-5">
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="คำสั่งซื้อ" :md-error="firstStepError" :md-done.sync="first">
        <div style="padding: 2rem 3rem; text-align: left;">
          <div class="form-group">
            <label class="label">ชื่อ</label>
            <input
              class="form-control"
              type="text"
              v-model="form.user_name"
              v-validate="'required'"
              name="user_name"
              v-bind:class="{'is-invalid':errors.has('user_name')}"
            >
            <p v-if="errors.has('user_name')" class="invalid-feedback">กรุณากรอกชื่อ</p>
          </div>

          <div class="form-group">
            <label class="label">นามสกุล</label>
            <input
              class="form-control"
              type="text"
              v-model="form.user_surname"
              v-validate="'required'"
              name="user_surname"
              v-bind:class="{'is-invalid':errors.has('user_surname')}"
            >
            <p v-if="errors.has('user_surname')" class="invalid-feedback">กรุณากรอกนามสกุล</p>
          </div>

          <div class="form-group">
            <label class="label">อีเมล</label>
            <input
              class="form-control"
              type="email"
              v-model="form.user_email"
              v-validate="'required|email'"
              name="user_email"
              v-bind:class="{'is-invalid':errors.has('user_email')}"
            >
            <p v-if="errors.has('user_email')" class="invalid-feedback">กรุณากรอกอีเมลให้ถูกต้อง</p>
          </div>

          <div class="form-group">
            <label class="label">เบอร์โทรศัพท์</label>
            <input
              class="form-control"
              type="text"
              v-model="form.user_tel"
              v-validate="'required|numeric|length:10'"
              name="user_tel"
              v-bind:class="{'is-invalid':errors.has('user_tel')}"
            >
            <p v-if="errors.has('user_tel')" class="invalid-feedback">กรุณากรอกเบอร์โทรศัพท์ถูกต้อง</p>
          </div>

          <div class="form-group">
            <label class="label">ที่อยู่</label>
            <input
              class="form-control"
              type="text"
              v-model="form.user_address"
              v-validate="'required'"
              name="user_address"
              v-bind:class="{'is-invalid':errors.has('user_address')}"
            >
            <p v-if="errors.has('user_address')" class="invalid-feedback">กรุณากรอกที่อยู่</p>
          </div>
          <div class="d-flex justify-content-end">
            <md-button class="md-raised md-primary" @click="setDone('first', 'second')">ถัดไป</md-button>
          </div>
        </div>
      </md-step>

      <md-step
        id="second"
        md-label="Second Step"
        :md-error="secondStepError"
        :md-done.sync="second"
      >
        <div style="padding: 2rem 3rem; text-align: left;">
          <div class="container">
            <p>ชื่อ-นามสกุล : {{form.user_name}} {{form.user_surname}}</p>
            <p>อีเมล : {{form.user_email}}</p>
            <p>ที่อยู่ : {{form.user_address}}</p>
            <p>เบอร์โทรศัพท์ : {{form.user_tel}}</p>
            <table class="table text-center">
              <thead>
                <tr>
                  <th>ชื่อสินค้า</th>
                  <th>ราคาต่อหน่วย</th>
                  <th style="width:100px;table-layout: fixed;">จำนวน</th>
                </tr>
              </thead>
              <tbody class="my-5">
                <tr v-for="item in Cart" :key="item.Product_id">
                  <td>
                    <h5 class="text-left">{{item.Product_name}}</h5>
                  </td>
                  <td>{{item.Product_price}}</td>
                  <td>{{item.Product_amount}}</td>
                </tr>
                <tr>
                  <td colspan="2">รวม</td>
                  <td>{{CartTotal}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <md-button class="md-raised md-primary" @click="confirmOrder()">ยืนยันคำสั่งซื้อ</md-button>
        </div>
      </md-step>
    </md-steppers>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "OrderComponent",
  data: () => ({
    active: "first",
    first: false,
    second: false,
    firstStepError: null,
    secondStepError: null,
    form: {
      user_name: "",
      user_surname: "",
      user_email: "",
      user_tel: "",
      user_address: ""
    }
  }),
  methods: {
    setDone: function(id, index) {
      this.active = index;
      this.$validator.validateAll().then(result => {
        if (result) {
          this[id] = true;
          this.firstStepError = null;
          if (index) {
            this.active = index;
          }
        } else {
          this[id] = false;
          this.firstStepError = "กรุณาตรวจสอบข้อมูลอีกครั้ง";
        }
      });
    },
    confirmOrder: function() {
      let product = [];
      this.Cart.forEach(element => {
        let detail = {
          Product_id: element.Product_id,
          Product_amount: element.Product_amount
        };
        product.push(detail);
      });
      let data = {
        userData: this.form,
        orderProduct: product,
        total: this.CartTotal
      };
      this.$http.post("http://vuedb/api/submitorder", data).then(res => {
        if(res.body.isPass){
          this.$router.push("/store")
        }
      });
    }
  },
  computed: {
    ...mapState(["Cart", "CartTotal"])
  }
};
</script>
