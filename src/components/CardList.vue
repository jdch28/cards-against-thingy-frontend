<template>
  <ul>
    <li v-for="card in cards" :key="card.id">
      <card
        :text="card.text"
        @click.native="isClickable ? tapCard(card.id) : null"
        :class="{ 'card-selected': card.id === selectedCard }"
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
    cards: String,
    isClickable:  {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['selectedCard'])
  },
  methods: {
    ...mapActions([
      'updateSelectedCard'
    ]),
    tapCard(cardId) {
      if(this.selectedCard == cardId){
        this.$emit('submit-selected-card', cardId);
      } else {
        this.updateSelectedCard(cardId);
      }
    }
  }
}
</script>

<style scoped>
  .card {
    transition: 400ms;
    margin-bottom: .5em;
  }

  .card-selected {
    margin-left: 0;
    padding-left: 2em;
    padding-right: 2em;
  }
</style>