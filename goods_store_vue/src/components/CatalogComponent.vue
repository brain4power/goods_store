<template>
    <div>
        <header-component></header-component>
        <div class="container">
            <div class="d-flex flex-wrap products">
                <product-card-component
                    v-for="product in products"
                    :key="product.id"
                    :product="product">
                </product-card-component>
            </div>
            <div id="mypaginator" v-on:click="getPage(pages[currentx])">
                <vs-pagination :total="numberOfPages" v-model="currentx" :max="5" >
                </vs-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {APIService} from '../http/APIService';
    const API_URL = 'http://localhost:8000';
    const apiService = new APIService();

    export default {
        name: "CatalogComponent",
        components: {
            ProductCardComponent: () => import('./ProductCardComponent.vue'),
            HeaderComponent: () => import('./HeaderComponent.vue'),
        },
        data() {
            return {
                currentx: 1,
                selectedProduct: null,
                products: [],
                numberOfPages: 0,
                pages: {},
                numberOfProducts: 0,
                loading: false,
                nextPageURL: '',
                previousPageURL: ''
            };
        },
        methods: {
            getProducts() {
                this.loading = true;
                apiService.getProducts().then((page) => {
                    this.products = page.data;
                    console.log(page);
                    console.log(page.nextlink);
                    this.numberOfProducts = page.count;
                    this.numberOfPages = page.numpages;
                    this.nextPageURL = page.nextlink;
                    this.previousPageURL = page.prevlink;
                    if (this.numberOfPages) {
                        for (var i = 1; i <= this.numberOfPages; i++) {
                            const link = `/api/v1/products/?page=${i}`;
                            this.pages[i] = link
                        }
                    }
                    this.loading = false;
                });
            },
            getPage(link) {
                this.loading = true;
                apiService.getProductsByURL(link).then((page) => {
                    this.products = page.data;
                    this.nextPageURL = page.nextlink;
                    this.previousPageURL = page.prevlink;
                    this.loading = false;
                });
            },
            getNextPage() {
                console.log('next' + this.nextPageURL);
                this.loading = true;
                apiService.getProductsByURL(this.nextPageURL).then((page) => {
                    this.products = page.data;
                    this.nextPageURL = page.nextlink;
                    this.previousPageURL = page.prevlink;
                    this.loading = false;
                });

            },
            getPreviousPage() {
                this.loading = true;
                apiService.getProductsByURL(this.previousPageURL).then((page) => {
                    this.products = page.data;
                    this.nextPageURL = page.nextlink;
                    this.previousPageURL = page.prevlink;
                    this.loading = false;
                });

            },
            selectProduct(product){
                this.selectedProduct = product;
            },
        },
        mounted() {
            this.getProducts();
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
