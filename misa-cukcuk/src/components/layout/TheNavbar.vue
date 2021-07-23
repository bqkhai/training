<template>
  <div class="navbar">
    <div class="logo-site">
      <div class="logo-box">
        <div class="toggle-icon"></div>
        <div class="cukcuk-logo"></div>
      </div>
    </div>
    <div class="navbar-content">
      <!-- <router-link to="/">home</router-link> -->
      <router-link to="/dashboard" class="nav-item" href="#">
        <div class="nav-item-icon nav-item-icon-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </router-link>
      <router-link to="/report" class="nav-item" href="#">
        <div class="nav-item-icon nav-item-icon-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </router-link>
      <router-link to="/buy" class="nav-item" href="#">
        <div class="nav-item-icon nav-item-icon-dashboard"></div>
        <div class="nav-item-text">Mua hàng</div>
      </router-link>
      <router-link to="/employee" class="nav-item">
        <div class="nav-item-icon nav-item-icon-employee"></div>
        <div class="nav-item-text">Danh mục nhân viên</div>
      </router-link>
      <router-link to="/customer" class="nav-item" href="#">
        <div class="nav-item-icon nav-item-icon-employee"></div>
        <div class="nav-item-text">Danh mục khách hàng</div>
      </router-link>
      <router-link to="/setting" class="nav-item" href="#">
        <div class="nav-item-icon nav-item-icon-setting"></div>
        <div class="nav-item-text">Thiết lập hệ thống</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style lang="css" scoped>

</style>