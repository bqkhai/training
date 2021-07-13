<template>
  <div id="app">
    <TheNavbar />
    <TheHeader />
    <TheContent />
  </div>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue'
  import TheNavbar from './components/layout/TheNavbar.vue'
  import TheContent from './components/layout/TheContent.vue'
  export default {
    name: 'App',
    components: {
      TheNavbar,
      TheHeader,
      TheContent,
    }
  }
</script>

<style>
  @import './css/common/base.css';
</style>
