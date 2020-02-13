<template>
  <section data-section="join-game" class="typewriter">
    <p class="first-typewriter">Enter a valid game PIN</p>
    <div class="third-typewriter wise-input-container">
      <label> &gt; </label>
      <input type="text" id="wise-input-id" class="wise-input" ref="search" v-on:keyup.enter="enterPin($event.target.value)">
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['session'])
  },
  methods: {
    ...mapActions([
      'joinGame'
    ]),
    enterPin(pin) {
      this.joinGame({ pin: pin, session: this.session.token })
    }
  }

}
</script>

<style>
@import '../assets/css/lobby.css';
</style>