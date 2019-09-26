<template>
  <div class="container">
    <SearchBar
      v-model="name"
      @input="filterListByNameInAplhabets(name)"
      placeholder="Filter by name"
    />
    <SearchBar
      v-model="state"
      placeholder="Filter by state"
    />
    <ResetButton
      class="btn"
      @reset="resetList"
    >Reset</ResetButton>
    <p
      v-if='!isValid'
      class="field-error"
    >Use only alphabets</p>
    <h4>{{filteredList.length}} reuslts</h4>
    <BreweryCard
      v-for="brewery in filteredList"
      :key="brewery.id"
      :brewery="brewery"
    />
  </div>
</template>

<script>
import BreweryCard from "./BreweryCard";
import SearchBar from "./SearchBar.vue";
import ResetButton from "./ResetButton";

export default {
  components: {
    SearchBar,
    ResetButton,
    BreweryCard
  },
  data() {
    return {
      breweryList: [],
      url: "https://api.openbrewerydb.org/breweries",
      name: "",
      state: "",
      isValid: true
    };
  },
  methods: {
    getBreweryList: function() {
      return window.fetch(this.url).then(res => res.json());
    },
    filterListByNameInAplhabets: function(name) {
      if (/\d/.test(name)) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }

      return window
        .fetch(`${this.url}?by_name=${name}`)
        .then(res => res.json())
        .then(data => (this.breweryList = data));
    },
    resetList: function() {
      this.name = "";
      this.state = "";
      this.isValid = true;

      this.getBreweryList().then(data => (this.breweryList = data));
    }
  },
  computed: {
    filterListByState: function() {
      return this.breweryList.filter(
        item => item.state.toLowerCase().indexOf(this.state) !== -1
      );
    },
    filteredList: function() {
      if (this.state) {
        return this.filterListByState;
      } else {
        return this.breweryList;
      }
    }
  },
  created() {
    this.getBreweryList().then(data => (this.breweryList = data));
  }
};
</script>