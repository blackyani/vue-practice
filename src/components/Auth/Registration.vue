<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="light-green lighten-1">
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field :rules="emailRules" prepend-icon="person" name="login" v-model="email" label="Email" type="email"></v-text-field>
              <v-text-field :rules="passwordRules" :counter="6" id="password" prepend-icon="lock" v-model="password" name="password" label="Password" type="password"></v-text-field>
              <v-text-field :rules="passwordConfirmRules" :counter="6" id="password" prepend-icon="lock" v-model="passwordConfirm" name="confirm-password" label="Confirm password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="light-green lighten-1" @click="onSubmit" :loading="loading" :disabled="!valid || loading">Create Account</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than or equal 6 characters'
      ],
      passwordConfirmRules: [
        v => !!v || 'Password is confirm required',
        v => v === this.password || 'Both fields should match'
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
      if (this.$refs.form.validate()) {
        /* eslint-disable */
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
        this.reset()
        this.resetValidation()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style scoped>

</style>
