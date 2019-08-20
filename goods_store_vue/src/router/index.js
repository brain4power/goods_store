import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HeaderComponent from '@/components/HeaderComponent'
import CatalogComponent from '@/components/CatalogComponent'
import CartComponent from '@/components/CartComponent'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: CatalogComponent
        },
        {
            path: '/main',
            name: 'main',
            component: HeaderComponent
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartComponent
        },
    ]
})
