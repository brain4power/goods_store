<template>
        <div class="product row">
            <div class="product__picture col-lg-12 col-md-6 ">
                <div class="temp_img"></div>
                <div class="product__like">
                    <button class="">
                        <vs-icon icon="favorite_border" color="primary"></vs-icon>
                    </button>
                </div>

            </div>
            <div class="product__title col-lg-12 col-md-6">Бумажка от конфеты уп. 10 шт.</div>
            <div class="product__cost col-lg-12 col-md-6 ">120</div>
            <div class="product__add-to-cart col-lg-12 col-md-6">В корзину</div>
        </div>

</template>

<script>
    export default {
        name: "ProductCardComponent"
    }
</script>
<style scoped>
    .temp_img {
        background-color: aquamarine;
        height: 100px;
    }
    .product {

        border: 1px solid black;
        width: 290px;
        margin: 0px;
    }

</style>
