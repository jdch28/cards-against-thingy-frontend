<template>
  <v-app>
  <link href="https://fonts.googleapis.com/css?family=VT323&display=swap" rel="stylesheet">
  <v-container fluid class="page-container">
      <choose-wisely-view />
  </v-container>
  </v-app>
</template>

<script>
import ChooseWiselyView from './views/ChooseWiselyView.vue'

export default {
  name: 'App',
  components: {
    ChooseWiselyView,
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

.page-container {
  display: flex;
  height: 100%;
}
</style>
