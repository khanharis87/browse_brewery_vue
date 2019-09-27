<template>
  <p class="field-error">Use only alphabets</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>