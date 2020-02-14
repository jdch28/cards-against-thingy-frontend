<template>
  <div>
    <transition name="fade">
      <section data-section="game-lobby" class="typewriter">
        <p class="second-typewriter">Game PIN: {{game.pin}}</p>
        <p class="third-typewriter">Waiting for players
          <ul class="second-typewriter">
            <li v-for="player in game.sessions" :key="player.key">
                <label>&gt; {{player.name}}</label>
            </li>
          </ul>
        </p>
        <p class="third-typewriter loading-dots"></p>
      </section>
    </transition>

    <transition name="fade">
      <section data-section="game-lobby" class="typewriter" v-if="loadingGame">
        <p class="second-typewriter">Creating lobby</p>
      </section>
    </transition>
  </div>
</template>

<script>
import GameService from '../services/game_service.js';
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      pulling: null,
      loadingGame: false,
    }
  },
  computed: {
    ...mapState(['game', 'session']),
  },
  methods: {
    ...mapActions(['gameStatus', 'updateState', 'updateGame', 'setupRound']),

    pollData () {
      let gamePin = this.game.pin,
        token = this.session.token;
      this.pulling = setInterval(() => {
        let gameService = new GameService();
        gameService.gameStatus(gamePin, token).then(
          ({ pin, status, sessions, round_data }) => {
            this.updateGame({pin: pin, status: status, sessions: sessions, round_data: round_data});
            if(status === 'ready') {
              this.loadingGame = true;
              clearInterval(this.pulling);
              this.setupRound({gamePin: gamePin, token: token, skipResultView: true});
            }
          },
          () => {
            console.error('API: Failed to get game status');
          },
        ).finally(() => {});
      }, 2000)
    }
  },
  created() {
    this.pollData();
  },
  beforeDestroy() {
    clearInterval(this.pulling);
  }
}
</script>

<style>
@import '../assets/css/lobby.css';
</style>