<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 elevation-10>
        <v-card v-if="!loading">
          <v-img :src="ad.imageSrc" height="400"></v-img>
          <v-card-text>
            <h1 class="text--primary">{{ad.title}}</h1>
            <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <add-edit-ad-modal v-if="isOwner" :adData="ad" class="warning mr-3">Edit</add-edit-ad-modal>
            <app-buy-modal :adData="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else>
          <v-container>
            <v-layout row>
              <v-flex xs12 class="text-xs-center pt-5">
                <v-progress-circular
                  indeterminate
                  :size="100"
                  :width="4"
                  color="green"
                ></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  name: 'Ad',
  props: ['id'],
  components: {
    addEditAdModal: EditAdModal
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.getById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  }
}
</script>

<style scoped>

</style>
