import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    //和文件名字对应
    cart
  },
  strict: debug
})
