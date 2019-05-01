<template>
  <div>
    <v-dialog width="400px" v-model="modal">
      <v-btn class="warning" flat slot="activator">Edit</v-btn>

      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs-12>
              <v-card-title>
                <h1 class="text--primary">Edit ad</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs-12>
              <v-card-text>
                <v-text-field
                  :rules="changeTitleValidation"
                  name="title"
                  v-model="editedTitle"
                  label="Title"
                  type="text"
                ></v-text-field>
                <v-textarea
                  :rules="changeDescriptionValidation"
                  name="description"
                  v-model="editedDescription"
                  label="Description"
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
                  <v-btn class="warning" flat @click="onCancel">Cancel</v-btn>
                  <v-btn class="success" flat @click="onSave">Save</v-btn>
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
  name: 'EditAdModal',
  props: ['adData'],
  data () {
    return {
      modal: false,
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
      this.editedTitle = this.adData.title
      this.editedDescription = this.adData.description
      this.modal = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle) {
        this.$store.dispatch('updateAdd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.adData.id
        })
        this.modal = false
      }
    }
  }
}
</script>

<style scoped>

</style>
