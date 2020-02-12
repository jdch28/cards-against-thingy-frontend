<template>
  <span>Lobby</span>
</template>


<script>
export default {
  name: 'LobbyView',
  computed: {
    currentState: {
      get() {
        return this.$store.state.currentState;
      },
      set(value) {
        this.$store.dispatch('updateState', value);
      }
    }
  }
}
</script>

<style>

</style>