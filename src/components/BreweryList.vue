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
    <ErrorDisplay
      v-if="!isValid"
      :text="errorText"
    />
    <ListLengthDisplay :length="filteredList.length" />
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
import ErrorDisplay from "./ErrorDisplay";
import ListLengthDisplay from "./ListLengthDisplay";

export default {
  components: {
    SearchBar,
    ResetButton,
    BreweryCard,
    ErrorDisplay,
    ListLengthDisplay
  },
  data() {
    return {
      breweryList: [],
      url: "https://api.openbrewerydb.org/breweries",
      name: "",
      state: "",
      isValid: true,
      errorText: ""
    };
  },
  methods: {
    getBreweryList: function() {
      return fetch(this.url)
        .then(res => res.json())
        .catch(error => {
          this.isValid = false;
          this.errorText = error.stringify();
        });
    },
    filterListByNameInAplhabets: function(name) {
      this.validateSerch(name);

      return fetch(`${this.url}?by_name=${name}`)
        .then(res => res.json())
        .then(data => (this.breweryList = data))
        .catch(error => {
          this.isValid = false;
          this.errorText = error.stringify();
        });
    },
    resetList: function() {
      this.name = "";
      this.state = "";
      this.isValid = true;

      this.getBreweryList().then(data => (this.breweryList = data));
    },
    validateSerch: function(value) {
      if (/\d/.test(value)) {
        this.isValid = false;
        this.errorText = "Use alphabets";
      } else {
        this.isValid = true;
        this.errorText = "";
      }
    }
  },
  computed: {
    filterListByState: function() {
      this.validateSerch(this.state);

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