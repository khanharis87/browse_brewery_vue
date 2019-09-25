<template>
  <div class="card">
    <h3>{{brewery.name}}</h3>
    <p>{{brewery.website_url}}</p>
    <span>{{brewery.state}}</span>
  </div>
</template>

<script>
export default {
  props: {
    brewery: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css">
.card {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.01);
}
</style>