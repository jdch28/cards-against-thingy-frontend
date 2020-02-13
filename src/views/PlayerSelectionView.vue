<template>
  <main class="player-selection-main">
    <header-round :round="roundState.index" :score="score"/>

    <card :text="roundState.blackCard.text" :isBlack="true" />

    <card-list :cards="hand" :isClickable="true" v-on:submit-selected-card="submitSelected"/>
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
    HeaderRound,
  },
  data() {
    return {
      roundState: this.$store.state.roundState,
      hand: this.$store.state.playerHand,
      score: this.$store.state.playerScore,
      selectedCard: -1
    }
  },
  methods: {
    ...mapActions([
      'updateState'
    ]),
    submitSelected(cardId) {
      alert(cardId);
      this.updateState('WaitingSentView');
    }
  }
}
</script>

<style scoped>
  .card-black {
    padding-bottom: 1.5em;
    margin-bottom: 1em;
  }
</style>