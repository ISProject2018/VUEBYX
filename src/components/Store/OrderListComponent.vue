<template>
  <div>
    <div class="middle">
      <div class="menu">
        <li
          class="item"
          v-bind:id="order.Order_id"
          v-for="order in orderList"
          :key="order.Order_id"
        >
          <a v-bind:href="'#' + order.Order_id" class="btn">
            <i class="fas fa-newspaper"></i>
            รหัสคำสั่งซื้อ # {{order.Order_id}}
          </a>
          <div class="smenu">
            <div class="row container my-3">
              <div class="col-6">
                <md-list role="list">
                  <md-list-item
                    role="listitem"
                  >ชื่อ : {{order.Order_name + " " + order.Order_surname}}</md-list-item>
                  <md-list-item role="listitem">เบอร์โทรศัพท์ : {{order.Order_tel}}</md-list-item>
                  <md-list-item role="listitem">อีเมล : {{order.Order_email}}</md-list-item>
                  <md-list-item role="listitem">ที่อยู่ : {{order.Order_address}}</md-list-item>
                </md-list>
              </div>
              <div class="col-6">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">สินค้า</th>
                      <th scope="col">จำนวน</th>
                      <th scope="col">ราคา</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(detail, index) in order.Order_detail" :key="index">
                      <td>{{ detail.Product_name }}</td>
                      <td>{{ detail.Product_amout }}</td>
                      <td>{{ detail.Product_price }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">รวม</td>
                      <td>{{order.Order_total}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >Collapsible Group Item #1</button>
          </h5>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div
            class="card-body"
          >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderListComponent",
  data() {
    return {
      orderList: []
    };
  },
  created() {
    this.$http.get("http://vuedb/api/getorder").then(res => {
      this.orderList = res.body;
    });
  }
};
</script>
