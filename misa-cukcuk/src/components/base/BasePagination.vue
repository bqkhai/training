<template>
  <div class="footer">
    <div>Hiển thị 1-10/1000 khách hàng</div>
    <div class="pagination">
      <div class="pagination-item first-page"></div>
      <div class="pagination-item prev-page"></div>
      <div class="pagination-item active">1</div>
      <div class="pagination-item">2</div>
      <div class="pagination-item">3</div>
      <div class="pagination-item">4</div>
      <div class="pagination-item next-page"></div>
      <div class="pagination-item last-page"></div>
    </div>
    <div>10 khách hàng/trang</div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "BasePagination",
};
</script>