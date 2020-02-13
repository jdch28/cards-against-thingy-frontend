<template>
  <main>
    <section data-section="sign-up" class="typewriter" v-if="showSignUp">
      <p class="first-typewriter">Cards Against Developers</p>
      <p class="second-typewriter">Type your name</p>
      <div class="third-typewriter wise-input-container">
        <label> &gt; </label>
        <input type="text" id="wise-input-id" class="wise-input" ref="search" v-on:keyup.enter="getName($event.target.value)">
      </div>
    </section>

    <transition name="fade">
      <section data-section="choose-wisely" v-if="showChooseWisely" class="typewriter">
        <p class="first-typewriter">Choose one option wisely</p>
        <p class="second-typewriter">1- New &#124; 2- Join</p>
        <div class="third-typewriter wise-input-container">
          <label> &gt; </label>
          <input type="text" id="wise-input-choose" class="wise-input" ref="search" v-on:keyup.enter="getChoose($event.target.value)">
        </div>
      </section>
    </transition>

    <transition name="fade">
      <section v-if="showJoinGame" data-section="join-game" class="typewriter">
        <p class="first-typewriter">Enter a valid game PIN</p>
        <div class="third-typewriter wise-input-container">
          <label> &gt; </label>
          <input type="text" id="wise-input-id" class="wise-input" ref="search" v-on:keyup.enter="enterPin($event.target.value)">
        </div>
      </section>
    </transition>

    <transition name="fade">
      <section v-if="showGameLobby" data-section="game-lobby" class="typewriter">
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
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'

setTimeout(function(){ document.getElementById('wise-input-id').focus(); }, 5000);

export default {
  name: 'LobbyView',
  data() {
    return {
      showSignUp: true,
      showChooseWisely: false,
      showJoinGame: false,
      showGameLobby: false,
    }
  },
  computed: {
    ...mapState(['game', 'session']),
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
      'updateState',
      'createSession',
      'createGame',
      'joinGame',
    ]),
    getName(inputName) {
      this.playerName = inputName;
      this.showChooseWisely = true;
      document.getElementById('wise-input-id').blur();
      setTimeout(function(){ document.getElementById('wise-input-choose').focus(); }, 5000);
      this.createSession(inputName);
    },
    getChoose(choose) {
      document.getElementById('wise-input-choose').blur();
      if(choose == 1) {
        this.createGame(this.session.token);
        this.newGame();
        return;
      }
      this.showJoinGameView();
    },
    nextState() {
      this.currentState = 'LobbyView';
    },
    newGame() {
      this.showGameLobby = true;
    },
    showJoinGameView() {
      this.showJoinGame = true;
    },
    enterPin(pin) {
      this.joinGame({ pin: pin, session: this.session.token })
      this.showGameLobby = true;
    }
  }
}

</script>

<style>
@import '../assets/css/lobby.css';
</style>