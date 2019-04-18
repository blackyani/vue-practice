<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
        >
          <v-list-tile avatar v-for="order in orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox color="success" :input-value="order.done" @change="markDone(order)"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn color="light-green lighten-1" :to="'/ad/' + order.id">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      orders: [
        {
          id: 'dfgert',
          name: 'Yan',
          phone: '8-800-500',
          adId: '132',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone: function (order) {
      order.done = true
    }
  }
}
</script>

<style scoped>
  .v-btn {
    color: white;
  }
</style>
