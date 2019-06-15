<template>
  <b-container>
    <b-tabs content-class="mt-3">
      <b-tab v-for="dataset in datasets" v-bind:key="dataset.id" v-bind:title="dataset.title" v-bind:active="activeComponent === dataset.id" v-on:click="storeCommit('setActiveComponent', dataset.id)">
        <component v-bind:is="dataset.type" v-bind:name="dataset.name" v-bind:definition="dataset.definition" v-bind:records="dataset.records" v-bind:filter="selections[dataset.filterrule.basedon.dataset]"></component>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
module.exports = {
  name: 'app-content',
  computed: {
    activeComponent() { return this.$store.state.activeComponent },
    selections() { return this.$store.state.selections },
    datasets() { return this.$store.state.datasets }
  },
  methods: {
    storeCommit(key, value) {
      this.$store.commit(key, value)
    }
  }
}
</script>