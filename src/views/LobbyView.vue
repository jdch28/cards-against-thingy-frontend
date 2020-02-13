<template>
  <main>
    <header></header>

    <section data-section="otra" class="typewriter">
      <p>Cards Against Developers</p>
      <p>Type your name</p>
      <div class="wise-input-container">
        <label> &gt; </label>
        <input type="text" id="wise-input-id" class="wise-input" ref="search">
      </div>
      <div class="bottom-section">
        <button v-on:click="nextState">Next Page</button>
      </div>
    </section>

    <section data-section="choose-wisely">
      <button class="wise-button" v-on:click="newGame"><span class="wise-button--index">1.</span>&nbsp;New</button>
      <button class="wise-button" v-on:click="joinGame"><span class="wise-button--index">2.</span>&nbsp;Join</button>
    </section>

    <section v-if="showJoinGame" data-section="join-game">
      <h1>Enter Game PIN</h1>
      <input type="text">
    </section>

    <section v-if="showGameLobby" data-section="game-lobby">
      <h1>Waiting for players</h1>
      <h2>Game PIN: 1255</h2>
      <ul>
        <li>Anel has joined...</li>
        <li>JD one has joined...</li>
        <li>Bruno has joined...</li>
      </ul>
      <h2>Ready to begin.</h2>
    </section>

    <div v-if="false">
      <button v-on:click="nextState">Next Page</button>
    </div>
  </main>
</template>

<script>
setTimeout(function(){ document.getElementById("wise-input-id").focus(); }, 5000);

export default {
  name: 'LobbyView',
  data() {
    return {
      showChooseWisely: false,
      showJoinGame: false,
      showGameLobby: false,
      buttonsEnabled: true,
    }
  },
  computed: {
    currentState: {
      get() {
        return this.$store.state.currentState;
      },
      set(value) {
        this.$store.dispatch('updateState', value);
      }
    }
  },
  methods: {
    nextState() {
      this.currentState = 'LobbyView';
    },
    newGame() {
      if (this.buttonsEnabled) {
        this.showGameLobby = true;
        this.buttonsEnabled = false;
      }
    },
    joinGame() {
      if (this.buttonsEnabled) {
        this.showJoinGame = true;
        this.buttonsEnabled = false;
      }
    }
  }
}

</script>

<style>
@import '../assets/css/lobby.css';
</style>