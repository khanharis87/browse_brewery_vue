<template>
  <input
    type="text"
    class="search-bar"
    :placeholder='placeholder'
    :value="searchValue"
    @input="updateValue"
  >
</template>
<script>
export default {
  model: {
    prop: "searchValue",
    event: "input"
  },
  props: {
    searchValue: {
      default: ""
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="css" scoped>
.search-bar {
  border: 0;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 0.5rem;
  margin: 0 2rem 2rem 0;
}
</style>