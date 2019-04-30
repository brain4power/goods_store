<template>
    <div>
        <header-component></header-component>
        <div class="container">
            <div class="d-flex flex-wrap products">
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
    export default {
        name: "CatalogComponent",
        components: {
            ProductCardComponent: () => import('./ProductCardComponent.vue'),
            HeaderComponent: () => import('./HeaderComponent.vue'),
        },
    }
</script>

<style scoped>
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
