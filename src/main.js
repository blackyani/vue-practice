import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import mixin from './mixins/globalMixin'
import store from './store'

import BuyModal from '@/components/Shared/BuyModal'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModal)
Vue.mixin(mixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const config = {
      apiKey: 'AIzaSyBm2e8uOqet_ZkG7FaPMkZ97T3VBQ5dUbI',
      authDomain: 'ads-project-on-vue.firebaseapp.com',
      databaseURL: 'https://ads-project-on-vue.firebaseio.com',
      projectId: 'ads-project-on-vue',
      storageBucket: 'ads-project-on-vue.appspot.com',
      messagingSenderId: '548088397777'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
