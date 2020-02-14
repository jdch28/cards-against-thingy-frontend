<template>
  <main class="player-selection-main">
    <header-round :round="roundState.index" :score="player.score"/>

    <card :text="roundState.blackCard.text" :isBlack="true" />

    <p class="help">Tap twice to confirm your selection</p>

    <card-list :cards="player.hand" :isClickable="true" v-on:submit-selected-card="submitSelected"/>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '../components/Card.vue'
import CardList from '../components/CardList.vue'
import HeaderRound from '../components/HeaderRound.vue'

export default {
  name: 'PlayerSelectionView',
  components: {
    Card,
    CardList,
    HeaderRound
  },
  data() {
    return {
      roundState: this.$store.state.roundState,
      player: this.$store.state.player
    }
  },
  methods: {
    ...mapActions([
      'updateState',
      'updatePlayerHand'
    ]),
    submitSelected() {
      this.updatePlayerHand();
      this.updateState('PlayerWaitingView');
    }
  }
}
</script>

<style scoped>
  .card-black {
    padding-bottom: 1.5em;
    margin-bottom: 1em;
  }
  .help {
    text-align: center;
    margin-bottom: 1em;
    font-weight: 300;
  }
</style>