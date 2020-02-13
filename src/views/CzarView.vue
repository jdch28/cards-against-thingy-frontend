<template>
  <main>
    <header-round :round="roundState.index" :score="player.score"/>
    <h1>You're the Card Czar!</h1>
    <p>Now you get to wait for the players to answer to this card. Yay!</p>
    <div class="card-container">
      <card :text="roundState.blackCard.text" :isBlack="true" />
      <div class="spinner"></div>
    </div>
  </main>
</template>

<script>
import Card from '../components/Card.vue'
import HeaderRound from '../components/HeaderRound.vue'

export default {
  name: 'CzarView',
  components: {
    Card,
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
  p {
    text-align: center;
    margin: 0 auto 2em;
    width: 80%;
  }
  .card {
    font-size: 1.5em;
    margin: .5em auto;
    padding-bottom: 6em;
    width: calc(100% - 2em);
  }

  .card-container {
    position: relative;
  }

  .spinner {
    bottom: -8em;
    right: 6em;
  }
</style>