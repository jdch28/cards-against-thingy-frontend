<template>
  <ul>
    <li v-for="card in cards" :key="card.id">
      <card v-if="isCzar"
        :text="card.text"
        @click.native="isClickable ? submitWinner(card.id) : null"
        :class="{ 'card-selected': markAsSelected(card.id) }"
      />
      <card v-else
        :text="card.text"
        @click.native="isClickable ? tapCard(card.id) : null"
        :class="{ 'card-selected': markAsSelected(card.id) }"
      />
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Card from '../components/Card.vue'
import RoundService from '../services/round_service.js';
import { GAME_COMPLETE } from '../constants.js';

export default {
  name: 'CardList',
  components: {
    Card
  },
  props: {
    cards: Array,
    isCzar:  {
      type: Boolean,
      default: false,
    },
    isClickable:  {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['session', 'game', 'player', 'roundState'])
  },
  methods: {
    ...mapActions([
      'updateState',
      'updatePlayerHand',
      'plebSubmit',
      'updateSelectedCardId',
      'setupRound',
      'gameStatus',
    ]),

    tapCard(cardId) {
      if(this.player.selectedCard.id == cardId){
        // this.$emit('submit-selected-card', cardId);
        this.updatePlayerHand();
        var oldState = {blackCard: this.roundState.blackCard, czar: this.game.czar, round: this.roundState.index};
        let params = { gamePin: this.game.pin,
                      token: this.session.token,
                      cardId: this.player.selectedCard.id,
                      oldState: oldState}

        this.plebSubmit(params);
      } else {
        this.updateSelectedCardId(cardId);
      }
    },
    markAsSelected(cardId) {
      let selectedId = this.player.selectedCard.id;
      return this.isClickable && (cardId === selectedId);
    },
    submitWinner(cardId) {
      let roundService = new RoundService();
      let that = this;

      roundService.submitWinner(this.game.pin, this.session.token, cardId).then(
        ({ game_status }) => {
          if (game_status === GAME_COMPLETE) {
            this.gameStatus({
              gamePin: this.game.pin,
              onFinally: function(){
                that.updateState('GameResultView');
              }
            });
          } else {
            let oldState = {blackCard: this.roundState.blackCard, czar: this.game.czar, round: this.roundState.index};
            this.setupRound({gamePin: this.game.pin, token:this.session.token, skipResultView: false, oldState: oldState});
          }
        },
        () => {
          console.error('API: Failed to send a card');
        },
      ).finally(() => {});
    }
  }
}
</script>

<style scoped>
  .card {
    transition: 400ms;
  }

  .card-selected {
    padding-left: 2em;
    padding-right: 2em;
  }
</style>
