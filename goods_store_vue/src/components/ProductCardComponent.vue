<template>
    <div class="product row">
        <div class="product__picture col-lg-12 col-md-6 col-6">
            <a href="#" class="product_image_catalog_link d-flex align-items-center">
                <img class="product_image_catalog" :src="product.image">
            </a>
        </div>
        <a href="#" class="product__title d-lg-none col-md-6 col-6">{{product_desc}}</a>
        <div class="product__cost col-6 d-flex">
            <span class="align-self-center">{{product.price}}р</span>
        </div>
        <div class="product__like col-6 d-flex justify-content-end">
            <button class="d-flex">
                <vs-icon icon="favorite_border" color="primary"></vs-icon>
            </button>
        </div>
        <a href="#" class="product__title col-lg-12 d-lg-block d-md-none d-none">{{product_desc}}</a>
        <div class="product__add-to-cart col-12">
            <button class="col-12 d-flex justify-content-around"
            @click="addProductToCart(product)">
                <span class="">В корзину</span>
                <vs-icon icon="shopping_cart" color="primary"></vs-icon>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "ProductCardComponent",
        props: ["product"],
        components: {
            CartComponent: () => import('./CartComponent.vue')
        },
        data: () => ({
            product_desc: 'Бумажка от конфеты уп. 10 шт. Можно взять много',
        }),
        methods: mapActions('cart', [
            'addProductToCart'
        ]),
    }

</script>
<style scoped>
    .product_image_catalog_link {
        /*display: block;*/
        /*background-color: lightgray;*/
        height: 100%;
    }
    .product_image_catalog {
        width: 100%;
        height: auto;
    }

    @media (min-width: 992px) {
        .product_image_catalog_link {
            height: 200px;
        }
    }

    .product {
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        width: 220px;
        margin: 5px;
        padding: 15px 0;
    }

    .product__title {
        font-size: 12px;
        margin-bottom: 10px;
        line-height: 16px;
        color: inherit;
        text-decoration: none;
    }

    .product__cost {
        font-weight: 600;
        margin: 5px 0;
    }

    .product__like {
        margin: 5px 0;
    }

    .product__like button {
        border: none;
        outline: none;
        background: inherit;
    }

    .product__add-to-cart button {
        border: 1px solid rgb(31, 116, 255);
        border-radius: 5px;
        outline: none;
        padding: 3px;
        background-color: white;
    }
    .product__add-to-cart button:active {
        background-color: rgb(31, 116, 255);
    }
</style>
