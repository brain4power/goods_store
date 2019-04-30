<template>
  <div id="app">
      <header-component></header-component>
      <div class="container">
          <div class="d-flex flex-wrap  products">
              <product-card-component ></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
              <product-card-component></product-card-component>
          </div>
      </div>
  </div>
</template>

<script>
import ProductCardComponent from "./components/ProductCardComponent";
import HeaderComponent from "./components/HeaderComponent";
export default {
  name: 'App',
    components: {HeaderComponent, ProductCardComponent}
}
</script>

<style>
    .products {
        margin: auto;
    }
    @media (min-width: 992px) {
        .products {
            width: 920px;
        }
    }
    @media (max-width: 991px) {
        .products {
            width: 690px;
        }
    }
    @media (max-width: 767px) {
        .products {
            width: 460px;
        }
    }
    @media (max-width: 509px) {
        .products {
            width: 230px;
        }
    }
</style>
