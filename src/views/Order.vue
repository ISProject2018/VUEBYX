<template>
  <div class="row">
    <div class="offset-3 col-6">
      <OrderComponent/>
    </div>
  </div>
</template>

<script>
import OrderComponent from "../components/OrderComponent";

export default {
  name: "Order",
  components: {
    OrderComponent
  }
};
</script>


