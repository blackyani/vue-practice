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
import colors from 'vuetify/es5/util/colors'
import './stylus/main.styl'

import BuyModal from '@/components/Shared/BuyModal'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.lightGreen.lighten1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
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
