<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new add</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field :rules="titleRules" required name="title" v-model="title" label="Add title" type="text"></v-text-field>
          <v-textarea :rules="descriptionRules" v-model="description" name="description" label="Description" type="textarea"></v-textarea>
        </v-form>
        <v-layout mb-3>
          <v-flex xs12>
            <v-btn class="warning" @click="triggerUpload">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="100" v-if="imageSrc">
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
                :loading="loading"
                :disabled="!valid || !image || loading"
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
      image: null,
      imageSrc: '',
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
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.switchSlider,
          image: this.image
        }
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
      this.reset()
      this.resetValidation()
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

<style scoped>

</style>
