<template>
  <b-navbar toggleable="lg" type="dark" class="nav-bar">
    <b-navbar-brand href="#"><img src='./assets/images/hh32.png' id='title-image'>HTTP Header Rules</b-navbar-brand>
    <b-button-group>
      <b-button v-on:click="changeState" :variant="applicationStateActive ? 'success' : 'outline-success'">On</b-button>
      <b-button v-on:click="changeState" :variant="!applicationStateActive ? 'danger' : 'outline-danger'">Off</b-button>
    </b-button-group>
  </b-navbar>
</template>

<script>
module.exports = {
  name: 'app-bar',
  computed: {
    applicationStateActive: () => store.state.applicationStateActive
  },
  methods: {
    changeState: function () {
      store.commit('applicationStateActive', !store.state.applicationStateActive)
    },
    storeCommit: function (key, value) {
      store.commit(key, value)
    }
  }
}
</script>