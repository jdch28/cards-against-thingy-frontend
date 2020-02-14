<template>
  <ul>
    <li v-for="card in cards" :key="card.id">
      <card
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

export default {
  name: 'CardList',
  components: {
    Card
  },
  props: {
    cards: Array,
    isClickable:  {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['session', 'game', 'player'])
  },
  methods: {
    ...mapActions([
      'updateState',
      'updatePlayerHand',
      'plebSubmit',
      'updateSelectedCardId'
    ]),

    tapCard(cardId) {
      if(this.player.selectedCard.id == cardId){
        // this.$emit('submit-selected-card', cardId);
        this.updatePlayerHand();
        let params = { gamePin: this.game.pin,
                      token: this.session.token,
                      cardId: this.player.selectedCard.id }

        this.plebSubmit(params);
        // let roundService = new RoundService();
        // roundService.submitCandidate(this.game.pin,
        //                       this.session.token,
        //                       this.player.selectedCard.id).then(() => {
        //     this.updateState('PlayerWaitingView');
        //     console.log('session created');
        //   },
        //   () => { console.error('API: Failed to create session'); },
        // )
        //   .finally(() => {
        // });
      } else {
        this.updateSelectedCardId(cardId);
      }
    },
    markAsSelected(cardId) {
      let selectedId = this.player.selectedCard.id;
      return this.isClickable && (cardId === selectedId);
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