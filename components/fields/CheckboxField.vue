<template>
  <b-input-group size="sm" @dblclick="storeCommitEvent">
    <b-form-checkbox :key="record.field.key" :name="name + '-' + record.index + '-' + record.field.key" :checked="valueTransformer('checkbox', record)" :disabled="(record.field.isEnabled !== record.index || !enabled) && name.indexOf('isEnabled') === -1" size="sm" switch @input="storeCommitEvent"></b-form-checkbox>
    <b-input-group-append v-if="record.field.isEnabled === record.index && enabled">
      <b-button @click="storeCommitEvent" size="sm" variant="outline-primary" style="border-radius: 0.2rem;">
        <i class="far fa-check-circle"></i>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>
    
<script>
module.exports = {
  name: 'checkbox-field',
  props: ['name', 'record'],
  computed: {
    enabled() { return this.$store.state.isEnabled }
  },
  methods: {
    valueTransformer(tagtype, record) {
      return tagtype == record.field.type ? record.item[record.field.key] : null
    },
    storeCommitEvent(event) {
      if (typeof event != 'object')
        if (this.record.isnew) {
          this.record.item[this.record.field.key] = event
        } else {
          this.$store.commit(JSON.parse(this.record.field.methods)['input'], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
        }
      if (event.type && JSON.parse(this.record.field.methods)[event.type])
        this.$store.commit(JSON.parse(this.record.field.methods)[event.type], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
    }
  }
}
</script>