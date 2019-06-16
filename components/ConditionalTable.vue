<template>
  <b-table striped hover :name="name" :fields="definition" :items="records" :filter="filter" selectable select-mode="single" selectVariant="info" @row-selected="select">
    <template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="records">
      <input v-if="editable" v-bind:key="key" :data-dataset="name" :data-row="records.index" :data-col="key" :type="records.field.type" :value="valueTransformer('text', key, records)" :checked="valueTransformer('checkbox', key, records)" @input="storeCommitEvent" @dblclick="storeCommitX('editable')" class="form-control" />
      <i v-else-if="!editable && ['radio', 'checkbox'].indexOf(records.field.type) != -1 && valueTransformer('checkbox', key, records)" v-bind:key="key" class="fas fa-toggle-on"></i>
      <i v-else-if="!editable && ['radio', 'checkbox'].indexOf(records.field.type) != -1 && !valueTransformer('checkbox', key, records)" v-bind:key="key" class="fas fa-toggle-off"></i>
      <span v-else v-bind:key="key" @dblclick="storeCommitX('editable')">{{ records.item[key] }}</span>
    </template>
  </b-table>
</template>

<script>
module.exports = {
  name: 'conditional-table',
  props: ['name', 'definition', 'records', 'filter'],
  computed: {
    editable() { return this.$store.state.editable }
  },
  methods: {
    valueTransformer(tagtype, key, record) {
      return tagtype == record.field.type ? record.item[key] : null
    },
    storeCommitEvent(event) {
      this.$store.commit('updateRecord', { datasetname: event.target.dataset.dataset, row: event.target.dataset.row, col: event.target.dataset.col, value: (['radio', 'checkbox'].indexOf(event.target.type) != -1 ? event.target.checked : event.target.value) })
    },
    storeCommitX(key, value) {
      this.$store.commit(key, !this.$store.state.editable)
    },
    storeCommit(key, value) {
      this.$store.commit(key, value)
    },
    select(data) {
      var self = this
      this.$store.commit('selections', { key: self.name, value: (data && data.length == 1 ? '' + data[0].id : '0') })
    }
  }
}
</script>