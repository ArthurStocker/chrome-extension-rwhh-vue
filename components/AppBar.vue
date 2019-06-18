<template>
  <b-navbar toggleable="lg" type="dark" class="nav-bar">
    <b-navbar-brand href="#"><img src='./assets/images/hh32.png' id='title-image'>HTTP Header Rules</b-navbar-brand>
    <b-nav-form>
      <b-nav-text>
        Edit&nbsp;
      </b-nav-text>
      <checkbox-field :name="'edit-isEnabled'" :record="{index: 0, field: { type: 'checkbox'}, item: { id: editable} }" :field="'id'" :methods="['editable']"></checkbox-field>
      <b-nav-text>
        Active&nbsp;
      </b-nav-text>
      <checkbox-field :name="'state-isEnabled'" :record="{index: 0, field: { type: 'checkbox'}, item: { id: applicationState} }" :field="'id'" :methods="['toggleApplicationState']"></checkbox-field>
    </b-nav-form>
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