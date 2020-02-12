<template>
  <div>
  <v-text-field
     class="field-name"
     label="Name"
     placeholder="Type your name"
     outlined
    ></v-text-field>
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
.field-name {
  justify-content:center;
  align-items:center;
}

</style>
