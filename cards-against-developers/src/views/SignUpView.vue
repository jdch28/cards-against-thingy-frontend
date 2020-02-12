<template>
  <div class="cad-container typewriter">
    <h1>Cards Against Developers</h1>
    <button v-on:click="nextState">Next Page</button>
  </div>
</template>


<script>
export default {
  name: 'SignUpView',
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
@import '../assets/css/sign_up_view.css';
</style>
