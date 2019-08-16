<template>
    <div class="cart">
        <HeaderComponent></HeaderComponent>
        <div class="container">
            <div class="row cart_header">
                <div class="d-flex justify-content-between align-items-center col-lg-8 col-md-8">
                    <span class="row cart_name">Корзина</span>
                    <vs-button color="primary" type="line" icon="delete_forever" size="small" class="row cart__del_all">Удалить все</vs-button>
                </div>
            </div>
            <div class="row cart__products__container d-flex justify-content-between">
                <div class="cart__products col-lg-8 col-md-8">
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                    <ProductCardCartComponent></ProductCardCartComponent>
                </div>
                <div class="cart__summary col-lg-3 col-md-3">
                    <div class="d-flex justify-content-between">
                        <span class="">Итого:</span>
                        <span class="font-weight-bold">2340р</span>
                    </div>
                    <div>
                        <vs-button color="primary" type="filled" class="button_checkout">Заказать</vs-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from "./HeaderComponent";
    import ProductCardCartComponent from "./ProductCardCartComponent";
    export default {
        name: "CartComponent",
        components: {ProductCardCartComponent, HeaderComponent},
        comments: {
            HeaderComponent: () => import('./HeaderComponent.vue'),
            ProductCardCartComponent: () => import('./ProductCardCartComponent.vue'),
        }
    }
</script>

<style scoped>
    .cart_header {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .cart_name {
        font-size: 20px;
    }
    .cart__del_all {
        /*height: 30px;*/
    }
    .cart__products__container {
    }
    .cart__summary {
        position: sticky;
        top: 0;
        height: 110px;
        padding: 10px;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        background: white;
    }
    @media (max-width: 768px) {
        .cart__summary {
            bottom: 0;
        }
    }
    .button_checkout {
        width: 100%;
        margin-top: 20px;
    }
</style>
