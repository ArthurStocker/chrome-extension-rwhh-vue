<template>
  <b-table :name="name" :fields="definition" :items="records" :filter="filter" small borderless striped hover :foot-clone="enabled" :selectable="!enabled" select-mode="single" selectVariant="info" foot-variant="light" @row-selected="select" class="md">
    <template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="data">
      <component :is="data.field.type + '-field'" :key="key" :name="name" :record="data"></component>
    </template>
    <template v-for="key in definition.map((field) => field.key)" :slot="'HEAD_' + key" slot-scope="data">
      {{ data.label }}
    </template>
    <template v-for="key in definition.map((field) => field.key)" :slot="'FOOT_' + key" slot-scope="data">
      <span :key="'FOOT_' + key" @click="log(key)" :style="(newRecord[key] ? '' : 'color: darkgrey; font-style: italic;') + ' font-weight: normal;'">{{ (newRecord[key] ? newRecord[key] : data.label) }}</span>
    </template>
  </b-table>
</template>

<script>
module.exports = {
  name: 'conditional-table',
  data: function () {
    return {
      newRecord: {}
    }
  },
  props: ['name', 'definition', 'records', 'filter'],
  computed: {
    enabled() { return this.$store.state.isEnabled }
  },
  methods: {
    log(v) {
      console.log('-->>', v, this)
      //Vue.set(state.selections, data.key, data.value)
      Vue.set(this._data.newRecord, v, 'GUGUS')
      return v
    },
    select(data) {
      var self = this
      this.$store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>