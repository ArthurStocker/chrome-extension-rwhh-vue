<template>
  <b-input-group size="sm">
    <i :class="'fas ' + (record.isnew ? 'fa-save' : 'fa-eraser') + ' form-control ctrl-transparent'" :key="record.field.key" @click="storeCommitEvent">{{ record.item[record.field.key] }}</i>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'ctrl-field',
  props: ['name', 'record'],
  methods: {
    log(v, msg) {
      console.log((msg ? msg : '') + ' -->>', v, this)
      //Vue.set(state.selections, data.key, data.value)
      //Vue.set(this._data.newRecord, v, 'GUGUS')
      return v
    },
    storeCommitEventMethod(type) {
      return this.record.isnew ? type + '_isnew' : type 
    },
    storeCommitEvent(event) {
      this.log(this, 'EVENT')
      if (typeof event != 'object')
        this.$store.commit(JSON.parse(this.record.field.methods)[this.storeCommitEventMethod('input')], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
      if (event.type && JSON.parse(this.record.field.methods)[this.storeCommitEventMethod(event.type)])
        this.$store.commit(JSON.parse(this.record.field.methods)[this.storeCommitEventMethod(event.type)], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
    }
  }
}
</script>