<template>
  <b-input-group size="sm">
    <b-form-checkbox :key="field" :name="name + '-' + record.index + '-' + field" :data-name="name" :data-row="record.index" :data-col="field" :data-methods="methods" :checked="valueTransformer('checkbox', record, field)" :disabled="!editable" size="sm" switch @input="storeCommitEvent({type: 'input', target: { value: !record.item[field], dataset: {name: name, row: record.index, col: field, methods: methods.join(',')}}})"></b-form-checkbox>
    <b-input-group-append>
      <b-button :data-name="name" :data-row="record.index" :data-col="field" :data-methods="methods" @click="storeCommitEvent" size="sm" variant="outline-primary" style="border-radius: 0.2rem;">
        <i :data-name="name" :data-row="record.index" :data-col="field" :data-methods="methods" class="far fa-check-circle"></i>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>
    
<script>
module.exports = {
  name: 'checkbox-field',
  props: ['name', 'record', 'field', 'methods'],
  computed: {
    editable() { return this.$store.state.editable }
  },
  methods: {
    valueTransformer(tagtype, record, field) {
      return tagtype == record.field.type ? record.item[field] : null
    },
    storeCommitEvent(event) {
      if (event.type == 'click')
        this.$store.commit(event.target.dataset.methods.split(',')[0], { dataset: event.target.dataset.name, row: event.target.dataset.row, col: event.target.dataset.col, value: -1 })
      if (event.type == 'input')
        this.$store.commit(event.target.dataset.methods.split(',')[1], { dataset: event.target.dataset.name, row: event.target.dataset.row, col: event.target.dataset.col, value: event.target.value })
    }
  }
}
</script>