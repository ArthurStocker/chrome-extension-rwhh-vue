<template>
  <b-table :name="name" :fields="definition" :items="records" :filter="filter" striped hover :selectable="!enabled" select-mode="single" selectVariant="info" @row-selected="select" class="md">
    <template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="records">
      <component :is="records.field.type + '-field'" :key="key" :name="name" :record="records"></component>
    </template>
  </b-table>
</template>

<script>
module.exports = {
  name: 'conditional-table',
  props: ['name', 'definition', 'records', 'filter'],
  computed: {
    enabled() { return this.$store.state.isEnabled }
  },
  methods: {
    select(data) {
      var self = this
      this.$store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>