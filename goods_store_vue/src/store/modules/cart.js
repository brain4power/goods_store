// initial state
// shape: [{ product, quantity }]
const state = {
    items: [],
};

// getters
const getters = {
    cartTotalPrice: (state) => {
        let total_price = 0;
        state.items.forEach(element => {
            total_price += element.product.price * element.quantity
        });
        return total_price
    },
    cartTotalCount: (state) => {
        let total_count = 0;
        state.items.forEach(element => {
            total_count += parseInt(element.quantity)
        });
        return total_count
    },
    cartProducts: (state) => {
        return state.items
    },
};

// actions
const actions = {
    addProductToCart ({state, commit}, product) {
        const cartItem = state.items.find(item => item.product.pk === product.pk);
        if (!cartItem) {
            commit('pushProductToCart', { product: product });
        } else {
            commit('incrementItemQuantity', cartItem);
        }
    },
    delProductFromCart ({state, commit}, product) {
        const cartItem = state.items.find(item => item.product.pk === product.pk);
        if (cartItem) {
            commit('spliceCartItem', { product: product });
        }
    },

    clearCart ({commit}) {
        commit('delAllProductFromCart')
    }
};

// mutations
const mutations = {
    pushProductToCart (state, { product }) {
        state.items.push({
            product: product,
            quantity: 1
        })
    },

    incrementItemQuantity (state, { product }) {
        const cartItem = state.items.find(item => item.product.pk === product.pk);
        cartItem.quantity++
    },

    spliceCartItem (state, {product}) {
        const cartItemIndex = state.items.findIndex(item => item.product.pk === product.pk);
        if (cartItemIndex > -1) {
            state.items.splice(cartItemIndex, 1);
        }
    },

    delAllProductFromCart (state) {
        state.items = []
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
