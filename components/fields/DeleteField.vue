<template>
  <b-input-group size="sm">
    <i class="fas fa-eraser form-control ctrl-transparent" :key="record.field.key" @click="storeCommitEvent">{{ record.item[record.field.key] }}</i>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'delete-input-field',
  props: ['name', 'record'],
  methods: {
    storeCommitEvent(event) {
      if (typeof event != 'object')
        this.$store.commit(JSON.parse(this.record.field.methods)['input'], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
      if (event.type && JSON.parse(this.record.field.methods)[event.type])
        this.$store.commit(JSON.parse(this.record.field.methods)[event.type], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
    }
  }
}
</script>