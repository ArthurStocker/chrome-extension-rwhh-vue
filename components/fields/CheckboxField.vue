<template>
  <i v-if="['checkbox'].indexOf(records.field.type) != -1 && valueTransformer('checkbox', field, records)" :key="field" :data-dataset="name" :data-row="records.index" :data-col="field" @dblclick="storeCommitEvent" class="fas fa-toggle-on"></i>
  <i v-else-if="['checkbox'].indexOf(records.field.type) != -1 && !valueTransformer('checkbox', field, records)" :key="field" :data-dataset="name" :data-row="records.index" :data-col="field" @dblclick="storeCommitEvent" class="fas fa-toggle-off"></i>
</template>

<script>
module.exports = {
  name: 'checkbox-field',
  props: ['name', 'records', 'field'],
  methods: {
    valueTransformer(tagtype, field, record) {
      return tagtype == record.field.type ? record.item[field] : null
    },
    storeCommitEvent(event) {
      //TODO stop edit on dblcklick
      if (event.type == 'dblclick')
        this.$store.commit('editRecord', { datasetname: event.target.dataset.dataset, row: event.target.dataset.row, col: event.target.dataset.col, value: '' })
    }
  }
}
</script>