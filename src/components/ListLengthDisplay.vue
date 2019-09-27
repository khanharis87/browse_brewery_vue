<template>
  <h4>{{length}} reuslts</h4>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      required: true
    }
  }
};
</script>