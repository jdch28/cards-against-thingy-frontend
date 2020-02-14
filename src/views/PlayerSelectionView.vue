<template>
  <main class="player-selection-main">
    <header-round :round="roundState.index" :score="player.score"/>

    <card :text="roundState.blackCard" :isBlack="true" />

    <p class="help">Tap twice to confirm your selection</p>

    <card-list :cards="player.hand" :isClickable="true" />
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
      roundState: this.$store.state.roundState
    }
  },
  computed: {
    ...mapState(['session', 'game', 'player', 'roundState'])
  },
  methods: {
    ...mapActions([
      'updateState',
      'updatePlayerHand',
      'plebSubmit'
    ]),
    submitSelected() {
      this.updatePlayerHand();
      let oldState = {blackCard: this.roundState.blackCard, czar: this.game.czar, round: this.roundState.index};
      let params = { pin: this.game.pin,
                     token: this.session.token,
                     cardId: this.player.selectedCard.id,
                     oldState: oldState }

      this.plebSubmit(params);
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