<template>
  <b-navbar toggleable="lg" type="dark" class="nav-bar">
    <b-navbar-brand href="#"><img src='./assets/images/hh32.png' id='title-image'>HTTP Header Rules</b-navbar-brand>
    <b-nav-text>
      Edit
      <i v-if="editable" v-on:click="storeCommit('editable')" style="color: green" class="fas fa-toggle-on"></i>
      <i v-else v-on:click="storeCommit('editable')" style="color: red" class="fas fa-toggle-off"></i>
      Active
      <i v-if="applicationState" v-on:click="storeCommit('toggleApplicationState')" style="color: green" class="fas fa-toggle-on"></i>
      <i v-else v-on:click="storeCommit('toggleApplicationState')" style="color: red" class="fas fa-toggle-off"></i>
    </b-nav-text>
    <!--
    <b-button-group>
      <b-button v-on:click="storeCommit('toggleApplicationState')" :variant="applicationState ? 'success' : 'outline-success'">On</b-button>
      <b-button v-on:click="storeCommit('toggleApplicationState')" :variant="!applicationState ? 'danger' : 'outline-danger'">Off</b-button>
    </b-button-group>
    -->
  </b-navbar>
</template>

<script>
module.exports = {
  name: 'app-bar',
  computed: {
    applicationState() { return this.$store.state.applicationStateActive },
    editable() { return this.$store.state.editable }
  },
  methods: {
    storeCommit(key, value) {
      this.$store.commit(key, value)
    }
  }
}
</script>