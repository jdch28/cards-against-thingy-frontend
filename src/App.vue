<template>
  <div>
    <component v-bind:is="currentState"></component>
  </div>
</template>

<script>
import LobbyView from './views/LobbyView.vue'
import PlayerSelectionView from './views/PlayerSelectionView.vue'
import PlayerWaitingView from './views/PlayerWaitingView.vue'
import CzarView from './views/CzarView.vue'
import GameResultView from './views/GameResultView.vue'
import CzarSelectionView from './views/CzarSelectionView.vue'
import RoundResultView from './views/RoundResultView.vue'

export default {
  name: 'App',
  components: {
    LobbyView,
    PlayerSelectionView,
    PlayerWaitingView,
    CzarView,
    GameResultView,
    CzarSelectionView,
    RoundResultView
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
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/app.css';
</style>
