<template>
  <main class="czar-selection-main">
    <header-round :round="roundState.index" :score="player.score"/>

    <h1>Choose a winner, Czar.</h1>
    <card :text="roundState.blackCard" :isBlack="true" />

    <p class="help">Tap twice to confirm your selection</p>

    <card-list :cards="roundState.candidateCards" :isClickable="true" :isCzar="true"/>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '../components/Card.vue'
import CardList from '../components/CardList.vue'
import HeaderRound from '../components/HeaderRound.vue'

export default {
  name: 'CzarSelectionView',
  components: {
    Card,
    CardList,
    HeaderRound
  },
  data() {
    return {
      game: this.$store.state.game,
      session: this.$store.state.session,
      roundState: this.$store.state.roundState,
      player: this.$store.state.player
    }
  },
  methods: {
    ...mapActions([
      'updateState',
      'setupRound'
    ]),
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