<template>
  <section data-section="choose-wisely" class="typewriter">
    <p class="first-typewriter">Choose one option wisely</p>
    <p class="second-typewriter">1- New &#124; 2- Join</p>
    <div class="third-typewriter wise-input-container">
      <label> &gt; </label>
      <input type="text" id="wise-input-choose" class="wise-input" ref="search" v-on:keyup.enter="getChoose($event.target.value)">
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['session'])
  },
  methods: {
    ...mapActions([
      'createGame',
      'updateLobbyState',
    ]),
    getChoose(choose) {
      document.getElementById('wise-input-choose').blur();
      if(choose == 1) {
        this.createGame(this.session.token);
        return;
      }
      this.updateLobbyState('JoinGame')
    },
  }

}
</script>

<style>
@import '../assets/css/lobby.css';
</style>