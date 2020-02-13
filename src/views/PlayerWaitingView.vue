<template>
  <main>
    <header-round :round="roundState.index" :score="player.score"/>

    <section class="waiting-for-plebs__section">
      <h2>Your play:</h2>

      <card :text="roundState.blackCard.text" :isBlack="true" />
      <card :text="player.selectedCard.text" />

      <h2>Waiting for other players...</h2>
    </section>

    <section class="waiting-for-czar__section">
      <h2>Waiting for czar selection... </h2>
      <card :text="roundState.blackCard.text" :isBlack="true" />

      <h2>Options by other players:</h2>
      <card-list :cards="roundState.playedCards"/>
      <!-- cardlist con los resultados -->
    </section>
  </main>
</template>

<script>
import Card from '../components/Card.vue'
import CardList from '../components/CardList.vue'
import HeaderRound from '../components/HeaderRound.vue'

export default {
  name: 'PlayerWaitingView',
  components: {
    Card,
    CardList,
    HeaderRound
  },
  data() {
    return {
      player: this.$store.state.player,
      roundState: this.$store.state.roundState
    }
  }
}
</script>

<style scoped>
  .waiting-for-plebs__section {
    display: none;
  }
  h2 {
    text-align: center;
    font-size: 1.3em;
    margin: .5em 0;
  }
  .card {
    margin-bottom: 1em;
  }
</style>