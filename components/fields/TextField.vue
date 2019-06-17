<template>
  <b-input-group size="sm">
    <span class="form-control ctrl-transparent" :key="field" :data-dataset="name" :data-row="records.index" :data-col="field" @dblclick="storeCommitEvent">{{ records.item[field] }}</span>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'text-field',
  props: ['name', 'records', 'field'],
  methods: {
    storeCommitEvent(event) {
      if (event.type == 'dblclick')
        this.$store.commit('editRecord', { datasetname: event.target.dataset.dataset, row: event.target.dataset.row, col: event.target.dataset.col, value: '' })
    }
  }
}
</script>