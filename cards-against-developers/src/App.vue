<template>
  <v-app>
  <link href="https://fonts.googleapis.com/css?family=VT323&display=swap" rel="stylesheet">
  <v-container>
      <Card cardText="This is a black card!!"/>
  </v-container>
  </v-app>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card,
  }
}
</script>

<style>
#app {
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
