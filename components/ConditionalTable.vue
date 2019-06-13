<template>
  <b-table striped hover :name="name" :fields="definition" :items="records" :filter="filter" selectable select-mode="single" selectVariant="info" @row-selected="select"></b-table>
</template>

<script>
module.exports = {
  name: 'conditional-table',
  props: ['name', 'definition', 'records', 'filter'],
  methods: {
    select: function (data) {
      var self = this
      store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>