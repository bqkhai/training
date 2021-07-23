<template>
  <!-- :value="value" -->
  <input
    type="type"
    required
    :class="inputClass"
    id="id"
    :tabindex="tabindex"
    @blur="onBlur($event.target)"
    v-model="inputValue"
  />
</template>

<style scoped>
.border-red {
  border: 1px solid red;
}
</style>

<script>
export default {
  name: "BaseInput",
  props: {
    tabindex: String,
    inputClass: String,
    id: String,
    required: Boolean,
    value: {
      default: "",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    onBlur(e) {
      if (this.required == true) {
        if (e.value == "") {
          this.invalid = true;
        } else {
          this.invalid = false;
        }
      }
    },
  },
};
</script>