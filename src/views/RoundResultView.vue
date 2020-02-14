<template>
  <main>
    <header-round :round="oldState.round" :score="player.score"/>

    <h1>{{ message }}</h1>

    <div class="round-result__card-container">
      <card :text="oldState.blackCard" :isBlack="true" />
      <card :text="roundWinner.card" />
      <button v-on:click="swapView">&raquo;</button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      successMsg: "You win this round!"
    }
  },
  computed: {
    ...mapState([
      'oldState',
      'roundWinner',
      'game',
      'player',
      'session'
    ]),
    message() {
      if ( this.oldState.czar === this.session.token ) {
        return `You chose ${this.roundWinner.name} as a winner.`;
      } else if ( this.roundWinner.token === this.session.token ) {
        return this.successMsg;
      } else {
        return `Sorry, not this time... ${this.roundWinner.name} got you.`;
      }
    }
  },
  methods: {
    ...mapActions([
      'showPlayViews'
    ]),
    swapView() {
      this.showPlayViews({czar: this.game.czar, gameData: {gamePin: this.game.pin, token: this.session.token}});
    }
  }
}
</script>

<style scoped>
.round-result__card-container {
  position: relative;
  width: 70%;
  margin: 0 auto;
}

.card {
  height: 16em;
  width: 13em;
  position: absolute;
}

.card-white {
  top: 7em;
  right: 0;
}
.card-black {
  top: 0;
  left: 0;
}

button {
  position: absolute;
  top: 6.7em;
  font-size: 3em;
  right: .2em;
  animation: .5s ease-out 1s infinite alternate h-bounce;
}

@keyframes h-bounce {
  from {
    right: .2em;
  }
  to {
    right: .5em;
  }
}

</style>