<template>
    <div class="navbar">
        <div class="logo-site">
            <div class="logo-box">
                <div class="toggle-icon"></div>
                <div class="cukcuk-logo"></div>
            </div>
        </div>
        <div class="navbar-content">
            <a class="nav-item" href="#">
                <div class="nav-item-icon nav-item-icon-dashboard"></div>
                <div class="nav-item-text">Tổng quan</div>
            </a>
            <a class="nav-item" href="#">
                <div class="nav-item-icon nav-item-icon-report"></div>
                <div class="nav-item-text">Báo cáo</div>
            </a>
            <a class="nav-item" href="#">
                <div class="nav-item-icon nav-item-icon-dashboard"></div>
                <div class="nav-item-text">Mua hàng</div>
            </a>
            <a class="nav-item active" href="employee.html">
                <div class="nav-item-icon nav-item-icon-employee"></div>
                <div class="nav-item-text">Danh mục nhân viên</div>
            </a>
            <a class="nav-item" href="customer.html">
                <div class="nav-item-icon nav-item-icon-employee"></div>
                <div class="nav-item-text">Danh mục nhân viên</div>
            </a>
            <a class="nav-item" href="#">
                <div class="nav-item-icon nav-item-icon-setting"></div>
                <div class="nav-item-text">Thiết lập hệ thống</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheNavbar',
    }
</script>

<style lang="css" scoped>
    @import url(../../css/common/base.css);
</style>