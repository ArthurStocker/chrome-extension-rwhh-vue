
<template>
  <!--<i :data-dataset="name" :data-row="records.index" :data-col="field" @click="storeCommitEvent" class="far fa-check-circle"><input :key="field" :data-dataset="name" :data-row="records.index" :data-col="field" :type="records.field.type" :value="valueTransformer('text', field, records)" :disabled="!editable" @input="storeCommitEvent" @dblclick="storeCommitEvent" class="form-control" /></i>-->
  <b-input-group size="sm">
    <b-form-input :key="field" :data-dataset="name" :data-row="records.index" :data-col="field" :type="records.field.type" :value="valueTransformer('text', field, records)" :disabled="!editable" @input="storeCommitEvent"></b-form-input>
    <b-input-group-append>
      <b-button :data-dataset="name" :data-row="records.index" :data-col="field" @click="storeCommitEvent" variant="outline-primary">
        <i :data-dataset="name" :data-row="records.index" :data-col="field" class="far fa-check-circle"></i>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'text-input-field',
  props: ['name', 'records', 'field'],
  computed: {
    editable() { return this.$store.state.editable }
  },
  methods: {
    valueTransformer(tagtype, field, record) {
      return tagtype == record.field.type ? record.item[field] : null
    },
    storeCommitEvent(event) {
      //TODO stop edit on click
      if (event.type == 'click') {
        console.log('TODO stop edit on click', event)
        this.$store.commit('editRecord', { datasetname: event.target.dataset.dataset, row: event.target.dataset.row, col: event.target.dataset.col, value: -1 })
      }
      if (event.type == 'input')
        this.$store.commit('updateRecord', { datasetname: event.target.dataset.dataset, row: event.target.dataset.row, col: event.target.dataset.col, value: event.target.value })
    }
  }
}
</script>