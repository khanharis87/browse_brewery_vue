<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <h1 class="heading">Brewery Browser</h1>
      </div>
      <BreweryList />
    </div>
  </div>
</template>

<script>
import BreweryList from "./components/BreweryList.vue";

export default {
  name: "app",
  components: {
    BreweryList
  }
};
</script>

<style>
#app {
  color: #2c3e50;
  font-family: "Quattrocento Sans", Helvetica, Arial, sans-serif;
  font-size: 1em;
}

.wrapper {
  margin: 0 auto;
  max-width: 1096px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.header {
  background-color: thistle;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

.heading {
  text-align: center;
}

.container {
  padding-top: 6.25rem;
}

.btn {
  background: #141414;
  border-radius: 3px;
  border: none;
  color: #e6e6e6;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.25em;
  max-width: 200px;
  padding: 10px;
  text-decoration: uppercase;
}

.field-error {
  margin: 0;
  position: relative;
  top: -19px;
  font-size: 0.75rem;
  color: #ff4500;
}
</style>
