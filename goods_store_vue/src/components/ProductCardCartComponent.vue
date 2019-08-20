<template>
    <div class="productCart row d-flex align-items-center">
        <div class="productCart__del col-lg-1 col-2 d-flex align-items-center justify-content-center"
             @click="delProductFromCart(item.product)">
            <vs-icon icon="delete_forever" color="primary"></vs-icon>
        </div>
        <div class="productCart__picture col-lg-2 col-3">
            <a href="#" class="productCart__picture_link d-flex align-items-center justify-content-center">
                <img class="product_image_cart" :src="item.product.image">
            </a>
        </div>
        <div class="productCart__title d-inline-block col-lg-5 col-7">
            <div class="productCart__title__name">{{item.product.name}}</div>
            <div class="productCart__title__article">артикул: {{product_title_article}}</div>
            <div class="productCart__title__price">{{item.product.price}}р/шт</div>
        </div>
        <div class="productCart__count col-lg-2 col-7">
            <div class="d-flex align-items-center justify-content-center">
                <vs-input-number v-model="item.quantity"/>
            </div>
        </div>
        <div class="productCart__total-cost col-lg-2 col-5">{{item.product.price * item.quantity}}р</div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "ProductCardCartComponent",
        props: ['item'],
        data: () => ({
            product_title_name: 'Продукт консерва черноморская',
            product_title_article: '123008',
            product_title_price: '213',
            number1: 21

        }),
        methods: mapActions('cart', [
            'delProductFromCart'
        ]),
    }
</script>

<style scoped>
    .productCart {
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        padding: 10px 0 10px 0;
    }

    .productCart__picture {
        height: 100px;
        /*width: 70px;*/
        /*background-color: #e5e5e5;*/
        /*margin: 10px;*/
    }
    .productCart__picture_link {
        height: 100%;
    }
    .product_image_cart {
        width: 100%;
        height: auto;
    }
</style>
