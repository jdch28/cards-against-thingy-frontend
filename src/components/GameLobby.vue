<template>
 <transition name="fade">
  <section data-section="game-lobby" class="typewriter">
    <h2>Game PIN: {{game.pin}}</h2>
    <h2>Waiting for players</h2>
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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['game'])
  }

}
</script>

<style>
@import '../assets/css/lobby.css';
</style>