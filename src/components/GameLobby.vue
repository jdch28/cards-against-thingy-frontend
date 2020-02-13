<template>
 <transition name="fade">
  <section data-section="game-lobby" class="typewriter">
    <p class="second-typewriter">Game PIN: {{game.pin}}</p>
    <p class="third-typewriter">Waiting for players</p>
    <ul>
      <li v-for="player in game.sessions" :key="player.key">
          <label>&gt; {{player.name}}</label>
      </li>
    </ul>
    <p class="loading-dots"></p>
  </section>
  </transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      pulling: null
    }
  },

  computed: {
    ...mapState(['game'])
  },

  methods: {
    ...mapActions(['gameStatus']),
    pollData () {
      this.polling = setInterval(() => {
        this.gameStatus(this.game.pin);
      }, 500)
    }
  },
  created() {
    this.pollData()
  }
}
</script>

<style>
@import '../assets/css/lobby.css';
</style>