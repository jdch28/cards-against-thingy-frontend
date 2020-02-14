<template>
  <main>
    <header-round :round="roundState.index" :score="player.score"/>

    <h1>{{ message }} <button>&raquo;</button></h1>

    <div class="round-result__card-container">
      <card :text="roundState.blackCard.text" :isBlack="true" />
      <card :text="roundWinner.whiteCard" />
    </div>
  </main>
</template>

<script>
import Card from '../components/Card.vue'
import HeaderRound from '../components/HeaderRound.vue'

export default {
  name: 'RoundResultView',
  components: {
    Card,
    HeaderRound
  },
  data() {
    return {
      player: this.$store.state.player,
      roundState: this.$store.state.roundState,
      roundWinner: this.$store.state.roundWinner,
      session: this.$store.state.session,
      successMsg: "You win this round!",
      failMsg: "Sorry, not this time..."
    }
  },
  computed: {
    message() {
      if (this.roundWinner.token === this.session.token) {
        return this.successMsg;
      } else {
        return `{this.failMsg} {this.roundWinner.name} got you.`;
      }
    }
  }
}
</script>

<style scoped>
.round-result__card-container {
  position: relative;
}

.card {
  height: 16em;
  width: 13em;
  position: absolute;
}

.card-white {
  top: 7em;
  right: 15%;
}
.card-black {
  top: 0;
  left: 15%;
}

h1 button {
  animation: .5s linear 1s infinite alternate h-bounce;
}

@keyframes h-bounce {
  from {
    margin: 0;
  }
  to {
    margin: 0 -0.3em 0 0.3em;
  }
}

</style>