<template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="records">
  <b-input-group size="sm">
    <b-form-checkbox :key="field" :name="name + '-' + records.index + '-' + field" :data-dataset="name" :data-row="records.index" :data-col="field" :checked="valueTransformer('checkbox', field, records)" :disabled="!editable" size="sm" switch></b-form-checkbox>
    <b-input-group-append>
      <b-button :data-dataset="name" :data-row="records.index" :data-col="field" @click="storeCommitEvent" size="sm" variant="outline-primary" style="border-radius: 0.2rem;">
        <i :data-dataset="name" :data-row="records.index" :data-col="field" class="far fa-check-circle"></i>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>
    
<script>
module.exports = {
  name: 'checkbox-field',
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