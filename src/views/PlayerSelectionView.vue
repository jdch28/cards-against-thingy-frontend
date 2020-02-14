<template>
  <main class="player-selection-main">
    <header-round :round="roundState.index" :score="player.score"/>

    <card :text="roundState.blackCard.text" :isBlack="true" />

    <p class="help">Tap twice to confirm your selection</p>

    <card-list :cards="player.hand" :isClickable="true" v-on:submit-selected-card="submitSelected"/>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '../components/Card.vue'
import CardList from '../components/CardList.vue'
import HeaderRound from '../components/HeaderRound.vue'
import RoundService from '../services/round_service.js';

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
  computed: {
    ...mapState(['session', 'game', 'player'])
  },
  methods: {
    ...mapActions([
      'updateState',
      'updatePlayerHand'
    ]),
    submitSelected() {
      this.updatePlayerHand();

      let roundService = RoundService();
      roundService.submitCard(this.game.pin,
                             this.session.token,
                             this.player.selectedCard.id).then(() => {
          this.updateState('PlayerWaitingView');
          console.log('session created');
        },
        () => { console.error('API: Failed to create session'); },
      )
        .finally(() => {
      });
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