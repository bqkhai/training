<template>
  <div id="app">
    <TheNavbar />
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    
  },
};
</script>

<style>
@import './css/common/base.css';
</style>
