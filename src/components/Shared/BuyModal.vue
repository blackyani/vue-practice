<template>
  <div>
    <v-dialog width="400px" v-model="modal">
      <v-btn class="primary" flat slot="activator">Buy</v-btn>

      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs-12>
              <v-card-title>
                <h1 class="text--primary">Do you want to buy it?</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs-12>
              <v-card-text>
                <v-text-field
                  :rules="changeTitleValidation"
                  name="name"
                  v-model="name"
                  label="Your name"
                  type="text"
                >
                </v-text-field>
                <v-textarea
                  :rules="changeDescriptionValidation"
                  name="Phone"
                  v-model="phone"
                  label="Phone"
                  type="text"
                ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs-12 class="mt-3">
              <v-card-actions>
                <v-spacer>
                  <v-btn
                    class="warning"
                    flat
                    @click="onCancel"
                    :disabled="localLoading"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    class="success"
                    flat
                    @click="onSave"
                    :disabled="localLoading"
                    :loading="localLoading"
                  >
                    Buy it!
                  </v-btn>
                </v-spacer>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'BuyAdModal',
  props: ['adData'],
  data () {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false,
      changeTitleValidation: [
        v => !!v || 'Title is required'
      ],
      changeDescriptionValidation: [
        v => !!v || 'Description is required'
      ],
      editedTitle: this.adData.title,
      editedDescription: this.adData.description
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.modal = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.adData.id,
          ownerId: this.adData.ownerId
        })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })
      }
    }
  },
  mounted () {
    console.log('adData', this.adData)
  }
}
</script>

<style scoped>

</style>
