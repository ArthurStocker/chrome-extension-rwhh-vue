<template>
  <b-container>
    <b-tabs>
      <b-tab v-for="dataset in datasets" :key="dataset.id" :title="dataset.title" :active="activeComponent === dataset.id" @click="storeCommit('setActiveComponent', dataset.id)">
        <component :is="dataset.type" :name="dataset.name" :definition="dataset.definition" :records="dataset.records" :filter="selections[dataset.filterrule.basedon.dataset]"></component>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<style>
.tab-content {
  padding-left: 2px;
  padding-right: 2px;
}
</style>

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