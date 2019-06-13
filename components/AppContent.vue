<template>
  <b-container>
    <b-tabs content-class="mt-3">
      <b-tab v-for="table in definitions" v-bind:key="table.id" v-bind:title="table.title" v-bind:active="activeTable === table.id" v-on:click="storeCommit('activeTable', table.id)">
        <component v-bind:is="getTableComponent" v-bind:name="table.name" v-bind:fields="fields[table.fields]" v-bind:items="tables[table.name]"></component>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
  module.exports = {
    name: 'app-content',
    computed: {
        activeTable: () => store.state.activeTable,
        definitions: () => store.state.definitions,
        fields: () => store.state.fields,
        tables: () => store.state.tables,
        getTableComponent: () => {
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