<template>
  <b-container>
    <b-tabs content-class="mt-3">
      <b-tab v-for="tab in navTabs" v-bind:key="tab.id" v-bind:title="tab.title" v-bind:active="currentTab === tab.id" v-on:click="storeCommit('currentTab', tab.id)">
        <component v-bind:is="getTabComponent" v-bind:name="tab.name" v-bind:fields="fields[tab.fields]" v-bind:items="tables[tab.name]"></component>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
  module.exports = {
    name: 'app-content',
    computed: {
        currentTab: () => store.state.currentTab,
        navTabs: () => store.state.navTabs,
        fields: () => store.state.fields,
        tables: () => store.state.tables,
        getTabComponent: () => {
            return 'dynamic-table'
        }
    },
    methods: {
      storeCommit: function(key, value) {
          store.commit(key, value)
      }
    }
  }
</script>