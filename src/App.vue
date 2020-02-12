<template>
  <div>
    <component v-bind:is="currentState"></component>
  </div>
</template>

<script>
import LobbyView from './views/LobbyView.vue'

export default {
  name: 'App',
  components: {
    LobbyView
  },
  computed: {
    currentState: {
      get() {
        return this.$store.state.currentState;
      },
      set(value) {
        this.$store.dispatch('updateState', value);
      }
    }
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/app.css';
</style>
