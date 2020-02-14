<template>
  <main>
    <header-round :round="roundState.index" :score="player.score"/>

    <section v-if="roundState.status === waitingForPlebs" class="waiting-for-plebs__section">
      <h2>Your play:</h2>

      <card :text="roundState.blackCard" :isBlack="true" />
      <card :text="player.selectedCard.text" />

      <h2>Waiting for other players...</h2>
    </section>

    <section v-else class="waiting-for-czar__section">
      <h2>Waiting for czar selection... </h2>
      <card :text="roundState.blackCard" :isBlack="true" />

      <!-- <h2>Options by other players:</h2>
      <card-list :cards="roundState.candidateCards"/> -->
    </section>
  </main>
</template>

<script>
import Card from '../components/Card.vue'
// import CardList from '../components/CardList.vue'
import HeaderRound from '../components/HeaderRound.vue'
import { ROUND_WAITING_FOR_PLEBS } from '../constants.js';

export default {
  name: 'PlayerWaitingView',
  components: {
    Card,
    // CardList,
    HeaderRound
  },
  data() {
    return {
      player: this.$store.state.player,
      roundState: this.$store.state.roundState,
      waitingForPlebs: ROUND_WAITING_FOR_PLEBS,
    }
  }
}
</script>

<style scoped>
  h2 {
    text-align: center;
    font-size: 1.3em;
    margin: .5em 0;
  }
  .card {
    margin-bottom: 1em;
  }
</style>