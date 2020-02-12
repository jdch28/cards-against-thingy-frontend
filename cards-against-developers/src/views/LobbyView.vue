<template>
  <div>
    <header class="typewriter">
      <h1>Cards Against Developers</h1>
    </header>

    <section data-section="choose-wisely">
      <wise-button index="1" label="new"/>
      <wise-button index="2" label="join"/>
    </section>

    <div>
      <button v-on:click="nextState">Next Page</button>
    </div>
  </div>
</template>

<script>
import WiseButton from '../components/WiseButton.vue'

export default {
  name: 'LobbyView',
  components: {
    WiseButton,
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
    }
  }
}
</script>

<style>
@import '../assets/css/lobby.css';
</style>