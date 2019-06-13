<template>
  <div>
    <nav-bar></nav-bar>
    <app-content></app-content>
  </div>
</template>

<script>
  module.exports = {
    name: 'App',
    components: {
      'nav-bar': 'url:../components/NavBar.vue',
      'app-content': 'url:../components/AppContent.vue'
    }
  }
</script>