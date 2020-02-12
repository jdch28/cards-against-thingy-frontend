<template>
  <v-app>
  <v-container>
      <CzarView cardText="This is a black card!!"/>
  </v-container>
  </v-app>
</template>

<script>
import CzarView from './components/CzarView.vue'

export default {
  name: 'App',
  components: {
    CzarView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
