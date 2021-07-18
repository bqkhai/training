<template>
  <input
    :placeholder="placeholder"
    type="type"
    required
    :class="inputClass"
    id="id"
    v-bind="$attrs"
    :tabindex="tabindex"
    :value="value"
    v-on:input="inputVal($event.target.value)"
  >
</template>

<style scoped>
</style>

<script>
export default {
  name: "BaseInput",
  props: {
    label: String,
    placeholder: String,
    tabindex: String,
    blur: String,
    inputClass: String,
    id: String,
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
  },
  methods: {
    inputVal: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>