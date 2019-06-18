<template>
  <b-input-group size="sm">
    <span class="form-control ctrl-transparent" :key="field" :data-name="name" :data-row="record.index" :data-col="field" :data-methods="methods" @dblclick="storeCommitEvent">{{ record.item[field] }}</span>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'text-field',
  props: ['name', 'record', 'field', 'methods'],
  methods: {
    storeCommitEvent(event) {
      if (event.type == 'dblclick')
        this.$store.commit(event.target.dataset.methods.split(',')[0], { dataset: event.target.dataset.name, row: event.target.dataset.row, col: event.target.dataset.col, value: '' })
    }
  }
}
</script>