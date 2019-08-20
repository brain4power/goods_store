import Vue from 'vue'
import Router from 'vue-router'
import CatalogComponent from '@/components/CatalogComponent'
import CartComponent from '@/components/CartComponent'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: CatalogComponent
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartComponent
        },
    ]
})
