<template>
  <div class="custom-control custom-switch form-control-sm">
    <input type="checkbox" name="hosts-0-isActive" disabled="disabled" autocomplete="off" class="custom-control-input" :checked="valueTransformer('checkbox', field, records)">
    <label class="custom-control-label" :key="field" :name="name + '-' + records.index + '-' + field" :data-dataset="name" :data-row="records.index" :data-col="field" @dblclick="storeCommitEvent">
    </label>
  </div>
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