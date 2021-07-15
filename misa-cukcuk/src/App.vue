<template>
  <div id="app">
    <TheNavbar />
    <TheHeader />
    <TheContent />
    <!-- <DialogForm /> -->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheContent from "./components/layout/TheContent.vue";
// import DialogForm from "./components/layout/TheModal.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    TheContent,
    // DialogForm,
  },
};
</script>

<style>
@import "./css/common/base.css";
</style>
