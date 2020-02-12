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
@import "assets/css/app.css";
</style>
