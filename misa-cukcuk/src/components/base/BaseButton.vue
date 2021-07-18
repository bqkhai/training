<template>
  <button 
    v-on="$listeners" 
    id="id"
  >
    <!-- v-bind:style="{ backgroundColor: color }"  -->
    <!-- v-bind:class="{ 'm-second-button': secondButton }" -->
    <img
      v-if="icon"
      :src="require('../../assets/content/icon/' + icon)"
      alt="icon"
    />
    {{ buttonName }}
  </button>
</template>

<style scoped>
button img {
  margin-right: 8px;
}
</style>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonName: String,
    icon: String,
    id: String,
    color: String
  },
};
</script>