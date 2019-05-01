import Vue from 'vue'
import VueEx from 'vuex'
import ads from './ads'
import user from './user'
import shared from './shared'
import orders from './orders'

Vue.use(VueEx)

export default new VueEx.Store({
  modules: {
    ads, user, shared, orders
  }
})
