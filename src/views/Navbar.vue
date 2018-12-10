  <template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark animated slideInDown">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.png">ue.JS
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navExpand"
      aria-controls="navExpand"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navExpand">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/store" class="nav-link" exact-active-class="active">Store</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-brand {
  margin-left: 24px;
  margin-right: 24px;
  font-size: 24px;
  font-family: "Railway";
}
.navbar-brand img {
  height: 35px;
  widows: 35px;
}
.nav-item {
  font-family: "Railway";
  font-size: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
