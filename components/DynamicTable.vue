<template>
  <b-table striped hover :name="name" :fields="fields" :items="items" selectable select-mode="single" selectVariant="info" @row-selected="select"></b-table>
</template>

<script>
  module.exports = {
    name: 'dynamic-table',
    props: ['name', 'fields', 'items'],
    methods: {
      select: function(data) {
          store.commit('selections', { key: this.name, value: (data && data.length == 1 ? data[0].id : null )})
      }
    }
  }
</script>