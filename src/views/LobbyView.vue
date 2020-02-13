<template>
  <main class="lobby-main">
    <section data-section="sign-up" class="typewriter" v-if="showSignUp">
      <p class="first-typewriter">Cards Against Developers</p>
      <p class="second-typewriter">Type your name</p>
      <div class="third-typewriter wise-input-container">
        <label> &gt; </label>
        <input type="text" id="wise-input-id" class="wise-input" ref="search" v-on:keyup.enter="getName($event.target.value)">
      </div>
    </section>

    <transition name="fade">
      <component :is="lobbyState"></component>
    </transition>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ChooseWisely from '../components/ChooseWisely.vue'
import GameLobby from '../components/GameLobby.vue'
import JoinGame from '../components/JoinGame.vue'

setTimeout(function(){ document.getElementById('wise-input-id').focus(); }, 5000);

export default {
  name: 'LobbyView',
  components: {
    ChooseWisely,
    GameLobby,
    JoinGame
  },
  data() {
    return {
      showSignUp: true,
    }
  },
  computed: {
    ...mapState(['lobbyState']),
    currentState: {
      get() {
        return this.$store.state.currentState;
      },
      set(value) {
        this.updateState(value);
      }
    }
  },
  methods: {
    ...mapActions([
      'createSession',
      'updateLobbyState'
    ]),
    getName(inputName) {
      this.playerName = inputName;
      this.updateLobbyState('ChooseWisely')
      document.getElementById('wise-input-id').blur();
      setTimeout(function(){ document.getElementById('wise-input-choose').focus(); }, 5000);
      this.createSession(inputName);
    }
  }
}

</script>

<style>
@import '../assets/css/lobby.css';
</style>