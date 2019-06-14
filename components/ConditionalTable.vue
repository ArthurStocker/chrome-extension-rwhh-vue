<template>
  <b-table striped hover :name="name" :fields="definition" :items="records" :filter="filter" selectable select-mode="single" selectVariant="info" @row-selected="select">
    <template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="records">
      <input v-if="!applicationStateActive" class="form-control" :type="records.field.type" v-model="records.item[key]" v-bind:key="key" />
      <span v-else v-bind:key="key">{{ records.item[key] }}</span>
    </template>
  </b-table>
</template>

<script>
module.exports = {
  name: 'conditional-table',
  props: ['name', 'definition', 'records', 'filter'],
  computed: {
    applicationStateActive: () => store.state.applicationStateActive
  },
  methods: {
    select: function (data) {
      var self = this
      store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>