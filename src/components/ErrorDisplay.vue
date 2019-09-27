<template>
  <p class="field-error">{{text}}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String || Error,
      required: true
    }
  }
};
</script>