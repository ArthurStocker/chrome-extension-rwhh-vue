<template v-for="key in definition.map((field) => field.key)" :slot="key" slot-scope="records">
  <!--<input :key="field" :data-dataset="name" :data-row="records.index" :data-col="field" :type="records.field.type" :checked="valueTransformer('checkbox', field, records)" @input="storeCommitEvent" @dblclick="storeCommitEvent" class="form-control" />
  <b-form-checkbox :key="field" :name="name + '-' + records.index + '-' + field" :data-dataset="name" :data-row="records.index" :data-col="field" :checked="valueTransformer('checkbox', field, records)" :disabled="!editable" size="sm" switch @dblclick="storeCommitEvent"></b-form-checkbox>-->
  <b-input-group size="sm" class="mt-1">
    <b-form-checkbox :key="field" :name="name + '-' + records.index + '-' + field" :data-dataset="name" :data-row="records.index" :data-col="field" :checked="valueTransformer('checkbox', field, records)" :disabled="!editable" size="sm" switch @dblclick="storeCommitEvent"></b-form-checkbox>
    <b-input-group-append>
      <b-button @click="storeCommitEvent" size="sm" variant="outline-primary">
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
      //TODO stop edit on dblclick
      if (event.type == 'dblclick')
        console.log('TODO stop edit on dblclick', event)
      if (event.type == 'input')
        this.$store.commit('updateRecord', { datasetname: event.target.dataset.dataset, row: event.target.dataset.row, col: event.target.dataset.col, value: event.target.value })
    }
  }
}
</script>