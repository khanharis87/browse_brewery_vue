<template>
  <button
    class="btn"
    @click="emitResetEvent"
  >
    <slot>
    </slot>
  </button> </template>

<script>
export default {
  methods: {
    emitResetEvent() {
      this.$emit("reset");
    }
  }
};
</script>