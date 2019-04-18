<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
            <v-carousel>
              <v-carousel-item
                v-for="item in promoAds"
                :key="item.id"
                :src="item.imageSrc"
              >
                <div class="card-link">
                  <v-btn class="error" :to="'/ad/' + item.id">{{item.title}}</v-btn>
                </div>
              </v-carousel-item>
            </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex v-for="item in ads" :key="item.id" xs12 sm6 md4>
          <v-card >
            <v-img
              :src="item.imageSrc"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
                <div> {{item.description}} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer>
                <v-btn flat color="orange" :to="'/ad/' + item.id">Open</v-btn>
                <v-btn raised color="light-green lighten-1">Buy</v-btn>
              </v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
  .card-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0,.5);
    transform: translate(-50%,0);
    padding: 5px 15px;
    border-radius: 5px 0 5px 0;
  }
</style>
