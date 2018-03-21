import shop from '@/api/shop'

export default {
  state: {
    // = data
    items: []
  },
  getters: {
    // = computed properties
    availableProducts (state, getters) {
      return state.items.filter(product => product.inventory > 0)
    },

    productIsInStock () {
      return product => {
        return product.inventory > 0
      }
    }
  },
  actions: {

    fetchProducts ({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        // run setProducts mutation
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },
  mutations: {
    // Setting and updating the state
    setProducts (state, products) {
      // update products
      state.items = products
    },
    decrementProductInventory (state, product) {
      product.inventory--
    }
  }
}
