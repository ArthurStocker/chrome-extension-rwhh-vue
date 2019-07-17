<template>
  <b-table :name="name" :fields="definition" :items="records" :filter="filter" small borderless striped hover :selectable="!enabled" select-mode="single" selectVariant="info" foot-variant="light" @row-selected="select" class="md">
    <template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="data">
      <component :is="data.field.type + '-field'" :key="key" :name="name" :record="log(data, 'component')"></component>
    </template>
    <template v-for="key in definition.map((field) => field.key)" :slot="'HEAD_' + key" slot-scope="data">
      {{ data.label }}
    </template>
    <!-- needs to be set in b-table :foot-clone="enabled"
    <template v-for="key in definition.map((field) => field.key)" :slot="'FOOT_' + key" slot-scope="data">
      <span :key="'FOOT_' + key" @click="log(key)" :style="(newRecord[key] ? '' : 'color: darkgrey; font-style: italic;') + ' font-weight: normal;'">{{ (newRecord[key] ? newRecord[key] : data.label) }}</span>
    </template>
    -->
    <template slot="bottom-row" slot-scope="data">
      <td v-if="Object.keys(newRecord).length == 0" :key="'bottom_new'" :colspan="data.fields.length" class="ctrl-newrecord" @click="addRecord">{{ 'click to add a new record' }}</td>
      <td v-else v-for="(key, i) in Object.keys(newRecord)" :key="'bottom_' + log(key)">
        <component :is="data.fields[i].type + '-field'" :name="name" :record="log(addField(data, i), 'bottom-row ' + i)" :style="(newRecord[key] !== key ? '' : 'color: darkgrey; font-style: italic;') + ' font-weight: normal;'"></component>
      </td>
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
    log(v, msg) {
      console.log((msg ? msg : '') + ' -->>', v, this)
      //Vue.set(state.selections, data.key, data.value)
      //Vue.set(this._data.newRecord, v, 'GUGUS')
      return v
    },
    addRecord(event) {
      this.definition.map((field) => { Vue.set(this.newRecord, field.key, field.type == 'ctrl' ? '' : field.key) })
    },
    addField(data,i) {
      return { index: this.records.length, field: data.fields[i], item: this.newRecord, isnew:true }
    },
    select(data) {
      var self = this
      this.$store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>