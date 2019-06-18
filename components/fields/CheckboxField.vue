<template>
  <div class="custom-control custom-switch form-control-sm">
    <input class="custom-control-input" type="checkbox" name="hosts-0-isActive" :disabled="name.indexOf('isEnabled') == -1 ? 'disabled' : false " :checked="valueTransformer('checkbox', record, field)" autocomplete="off">
    <label class="custom-control-label" :key="field" :name="name + '-' + record.index + '-' + field" :data-name="name" :data-row="record.index" :data-col="field" :data-methods="methods" @dblclick="storeCommitEvent"></label>
  </div>
</template>

<script>
module.exports = {
  name: 'checkbox-field',
  props: ['name', 'record', 'field', 'methods'],
  methods: {
    valueTransformer(tag, record, field) {
      return tag == record.field.type ? record.item[field] : null
    },
    storeCommitEvent(event) {
      if (event.type == 'dblclick')
        this.$store.commit(event.target.dataset.methods.split(',')[0], { dataset: event.target.dataset.name, row: event.target.dataset.row, col: event.target.dataset.col, value: null })
    }
  }
}
</script>