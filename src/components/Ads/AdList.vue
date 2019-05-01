<template>
  <v-container>
    <v-layout v-if="!loading && myAds.length >= 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card elevation-10 class="mb-5" v-for="item in myAds" :key="item.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="item.imageSrc" height="160"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{item.title}}</h2>
                <p>{{item.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="success" :to="'/ad/' + item.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else-if="!loading && myAds.length !== 0">
      <v-flex xs12 class="text-xs-center">
        <h2 class="text--primary">Please add your adds</h2>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-progress-circular
        indeterminate
        :size="100"
        :width="4"
        color="green"
      ></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AdList',
  methods: {
    fetchAds () {
      this.$store.dispatch('fetchAds')
    }
  },
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  mounted () {
    console.log('this.myAds', this.myAds)
  },
  created () {
    this.fetchAds()
  }
}
</script>

<style scoped>

</style>
