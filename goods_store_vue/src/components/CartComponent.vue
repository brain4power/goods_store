<template>
    <div class="cart">
        <HeaderComponent></HeaderComponent>
        <div class="container">
            <div class="row cart_header">
                <div class="d-flex justify-content-between align-items-center col-lg-8 col-md-8">
                    <span class="row cart_name">Корзина</span>
                    <vs-button @click="clearCart" color="primary" type="line" icon="delete_forever" size="small" class="row cart__del_all">Удалить все</vs-button>
                </div>
            </div>
            <div class="row cart__products__container d-flex justify-content-between">
                <div class="cart__products col-lg-8 col-md-8">
                    <ProductCardCartComponent
                        v-for="item in cartProducts"
                        :key="item.product.pk"
                        :item="item">
                    </ProductCardCartComponent>

                </div>
                <div class="cart__summary col-lg-3 col-md-3">
                    <div class="d-flex justify-content-between">
                        <span class="">Итого:</span>
                        <span class="font-weight-bold">{{total_price}}р</span>
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
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "CartComponent",
        components: {ProductCardCartComponent, HeaderComponent},
        comments: {
            HeaderComponent: () => import('./HeaderComponent.vue'),
            ProductCardCartComponent: () => import('./ProductCardCartComponent.vue'),
        },
        computed: {
            ...mapGetters('cart', {
                total_price: 'cartTotalPrice',
                total_count: 'cartTotalCount',
                cartProducts: 'cartProducts'
            })
        },
        methods: {
            ...mapActions('cart', {
                clearCart: 'clearCart'
            })
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
