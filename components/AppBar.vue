<template>
  <b-navbar toggleable="lg" type="dark" class="nav-bar">
    <b-navbar-brand href="#"><img src='./assets/images/hh32.png' id='title-image'>HTTP Header Rules</b-navbar-brand>
    <b-nav-form>
      <div :key="config.name" v-for="config in configs">
        <b-nav-text>
          {{ config.title }}&nbsp;
        </b-nav-text>
        <checkbox-field :name="config.name" :record="config"></checkbox-field>
      </div>
    </b-nav-form>
  </b-navbar>
</template>

<script>
module.exports = {
  name: 'app-bar',
  computed: {
    applicationState() { return this.$store.state.applicationStateActive },
    enabled() { return this.$store.state.isEnabled },
    configs() {      return this.$store.state.appconfig.map((item, index) => {
        item.index = index
        item.item = {}
        item.item[item.field.key] = this.$store.state[item.field.key]
        return item
      }
      )
    }
  },
  methods: {
    storeCommit(key, value) {
      this.$store.commit(key, value)
    }
  }
}
</script>