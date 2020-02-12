<template>
  <div>
  <div class="round-result-view">
    <card :text="roundResults.blackCard" isBlack="true" />
    <card :text="roundResults.whiteCard" />
  </div>
  <span>{{ message }}</span>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'RoundResult',
  components: {
    Card
  },
  data() {
    return {
      roundResults: this.$store.state.roundResults,
      successMsg: "Winner!!!",
      failMsg: "Loser!!"
    }
  },
  computed: {
    message() {
      if (this.roundResults.winnerPlayer !== '' && this.roundResults.winnerPlayer !== undefined) {
        return `${this.roundResults.winnerPlayer} won!!`;
      } else if (this.roundResults.isWinner) {
        return this.successMsg;
      } else {
        return this.failMsg;
      }
    }
  }
}
</script>

<style>
.round-result-view {
  background-color: white;
  position: relative;
}
</style>