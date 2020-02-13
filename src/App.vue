<template>
  <div>
    <component v-bind:is="currentState"></component>
  </div>
</template>

<script>
import LobbyView from './views/LobbyView.vue'
import PlayerSelectionView from './views/PlayerSelectionView.vue'
import WaitingSentView from './views/WaitingSentView.vue'

export default {
  name: 'App',
  components: {
    LobbyView,
    PlayerSelectionView,
    WaitingSentView
  },
  computed: {
    currentState: {
      get() {
        return this.$store.state.currentState;
      },
      set(value) {
        this.$store.dispatch('updateState', value);
      }
    },
    playerName: {
      get() {
        return this.$store.state.playerName;
      },
      set(value) {
        this.$store.dispatch('updateName', value);
      }
    }
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/app.css';
</style>
