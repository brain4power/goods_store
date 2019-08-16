<template>
    <div class="productCart row d-flex align-items-center">
        <div class="productCart__del col-lg-1 col-2 d-flex align-items-center justify-content-center">
            <vs-icon icon="delete_forever" color="primary"></vs-icon>
        </div>
        <div class="productCart__picture col-lg-2 col-3">
            <a href="#" class="temp_img">
                <!--<img :src="img">-->
            </a>
        </div>
        <div class="productCart__title d-inline-block col-lg-5 col-7">
            <div class="productCart__title__name">{{product_title_name}}</div>
            <div class="productCart__title__article">артикул: {{product_title_article}}</div>
            <div class="productCart__title__price">{{product_title_price}}р/шт</div>
        </div>
        <div class="productCart__count col-lg-2 col-7">
            <div class="d-flex align-items-center justify-content-center">
                <vs-input-number v-model="number1"/>
            </div>
        </div>
        <div class="productCart__total-cost col-lg-2 col-5">2900p</div>
    </div>
</template>

<script>
    export default {
        name: "ProductCardCartComponent",
        data: () => ({
            product_title_name: 'Продукт консерва черноморская',
            product_title_article: '123008',
            product_title_price: '213',
            number1: 21

        })
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
        width: 70px;
        background-color: #e5e5e5;
        /*margin: 10px;*/
    }
</style>
