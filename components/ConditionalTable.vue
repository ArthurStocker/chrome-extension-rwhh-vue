<template>
  <b-table striped hover :name="name" :fields="definition" :items="records" :filter="filter" selectable select-mode="single" selectVariant="info" @row-selected="select">
    <template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="records">
      <component :is="records.field.type + (records.field.editable == records.index ? '-input' : '') + '-field'" :key="key" :field="key" :name="name" :records="records"></component>
    </template>
  </b-table>
</template>

<script>
module.exports = {
  name: 'conditional-table',
  props: ['name', 'definition', 'records', 'filter'],
  methods: {
    select(data) {
      var self = this
      this.$store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>