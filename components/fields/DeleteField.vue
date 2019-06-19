<template>
  <b-input-group size="sm">
    <i class="fas fa-eraser form-control ctrl-transparent" :key="field" :data-name="name" :data-row="record.index" :data-col="field" :data-methods="record.field.methods" @click="storeCommitEvent">{{ record.item[field] }}</i>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'delete-field',
  props: ['name', 'record', 'field'],
  methods: {
    storeCommitEvent(event) {
      if (event.type == 'click')
        this.$store.commit(JSON.parse(event.target.dataset.methods)[event.type], { dataset: event.target.dataset.name, row: event.target.dataset.row, col: event.target.dataset.col, value: '' })
    }
  }
}
</script>