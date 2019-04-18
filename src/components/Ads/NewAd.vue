<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new add</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field :rules="titleRules" required name="title" v-model="title" label="Add title" type="text"></v-text-field>
          <v-textarea :rules="descriptionRules" multi-line v-model="description" name="description" label="Description" type="textarea"></v-textarea>
        </v-form>
        <v-layout mb-3>
          <v-flex xs12>
            <v-btn color="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" alt="" height="150">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-switch
              color="success"
              v-model="switchSlider"
              label="Add to promo?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-card-actions>
              <v-btn
                color="light-green lighten-1"
                @click="onSubmit"
                :disabled="!valid || loading"
                :loading="loading"
              >
                Create new add
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewAd',
  data () {
    return {
      title: '',
      description: '',
      switchSlider: false,
      valid: false,
      titleRules: [
        v => !!v || 'Title is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit: function () {
      const newAdd = {
        title: this.title,
        description: this.description,
        promo: this.switchSlider,
        imageSrc: 'https://proglib.io/wp-content/uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
      }
      this.$store.dispatch('createAd', newAdd).then(() => {
        this.$router.push('/list')
      }).catch(() => {})
      this.reset()
      this.resetValidation()
    }
  }
}
</script>

<style scoped>

</style>
