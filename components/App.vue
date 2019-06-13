<template>
  <div>
    <app-bar></app-bar>
    <app-content></app-content>
  </div>
</template>

<script>
module.exports = {
  name: 'App',
  components: {
    'app-bar': 'url:../components/AppBar.vue',
    'app-content': 'url:../components/AppContent.vue'
  }
}
</script>