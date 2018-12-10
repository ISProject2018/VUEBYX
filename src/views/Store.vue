<template>
  <div class="page">
    <MenuComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StoreComponent from "../components/Store/StoreComponent";
import MenuComponent from "../components/Store/MenuComponent";

export default {
  name: "store",
  components: {
    StoreComponent,
    MenuComponent
  },
};
</script>



