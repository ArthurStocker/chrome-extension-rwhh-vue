
<template>
  <b-input-group size="sm" @dblclick="storeCommitEvent">
    <b-form-input :key="record.field.key" :type="record.field.type" :value="valueTransformer('text', record)" :disabled="record.field.isEnabled !== record.index || !enabled" :class="record.field.isEnabled !== record.index || !enabled ? 'ctrl-transparent' : ''" @input="storeCommitEvent"></b-form-input>
    <b-input-group-append v-if="record.field.isEnabled === record.index && enabled">
      <b-button @click="storeCommitEvent" variant="outline-primary">
        <i class="far fa-check-circle"></i>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
module.exports = {
  name: 'text-input-field',
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
        this.$store.commit(JSON.parse(this.record.field.methods)['input'], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
      if (event.type && JSON.parse(this.record.field.methods)[event.type])
        this.$store.commit(JSON.parse(this.record.field.methods)[event.type], { dataset: this.name, row: this.record.index, col: this.record.field.key, value: event })
    }
  }
}
</script>