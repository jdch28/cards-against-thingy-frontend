<template>
  <main class="player-selection-main">
    <header-round :round="roundState.index" :score="score"/>
    <card :text="roundState.blackCard.text" isBlack="true" />
    <card v-for="white in hand" :key="white.id" :text="white.text" />
  </main>
</template>


<script>
import Card from '../components/Card.vue'
import HeaderRound from '../components/HeaderRound.vue'

export default {
  name: 'PlayerSelectionhView',
  components: {
    Card,
    HeaderRound,
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
</style>