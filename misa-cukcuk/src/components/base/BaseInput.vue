<template>
  <div>
    <label>
      {{ label }}
      <input
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "BaseInput",

  props:{
    label: String,
    type: String,
    placeholder: String
  }
};
</script>