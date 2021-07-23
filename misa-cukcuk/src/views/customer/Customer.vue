<template>
<Employee />
</template>

<style scoped>
@import url("../../css/common/base.css");
</style>

<script>
import Employee from "../employee/Employee.vue";
export default {
  name: "Customer",
  components: {
    Employee,
  },
};
</script>