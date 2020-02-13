<template>
  <main class="player-selection-main">
    <h1>
      <span>Round {{roundState.index}}</span>
      <small>Score: {{ score }}</small>
    </h1>
    <card :text="roundState.blackCard.text" isBlack="true" />
    <card v-for="white in hand" :key="white.id" :text="white.text" />
  </main>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'PlayerSelectionhView',
  components: {
    Card
  },
  data() {
    return {
      roundState: this.$store.state.roundState,
      hand: this.$store.state.playerHand,
      score: this.$store.state.playerScore
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
    height: auto;
  }

  .card-black {
    padding-bottom: 1.5em;
    margin-bottom: 1em;
  }

  .card-white {
    margin: .5em 0;
  }

  .card-selected {
    width: calc(100% - 2em);
  }

  h1 {
    font-size: 1.8em;
    font-weight: 900;
    font-variant: small-caps;
    margin: .1em 0 .6em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 small {
    font-size: 0.7em;
  }
</style>