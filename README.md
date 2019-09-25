# brewery_explorer_vue

## Project setup

Do yarn install

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```

### Runs the unit tests

```
yarn test
```

### Description

Create simple Brewery Explorer application where user can browse brewery company names with details like
city, state and company website. User should be able to filter results by name (text input) or state (select input)
and reset all filters using RESET button. Moreover, user should be able to see the number of results in footer or
other readable place. Please find below a Lo-Fi prototype for Brewery Explorer application.

### Requirements

Application should be created using below requirements:

- Project should be created using Vue CLI tool (Vue.js 2.x)
- Code and markup should be as much readable and reusable as possible
- Code coverage with unit tests
- At least header should be sticky while scrolling the results
- Number of results should be limited to 100
- Filtering by name should be integrated on API side, not client side. Filtering by state should be
  implemented on client side.

### Bonus

- Create application NOT using UI libraries like Vuetify or Element
- UI friendly for mobile devices (RWD)
- Validate filtering by name input to allow only alphabet characters
- Create e2e tests
- Design your own look and feel for the application
