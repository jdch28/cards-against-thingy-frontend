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
    ...mapState(['player'])
  },
  methods: {
    ...mapActions([
      'updateSelectedCardId'
    ]),
    tapCard(cardId) {
      if(this.player.selectedCard.id == cardId){
        this.$emit('submit-selected-card', cardId);
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