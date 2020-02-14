<template>
  <main>
    <h1>Hello, click <span @click="showRoundResult()">here</span></h1>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FakeTriggerView',
  methods: {
    ...mapActions([
      'gameStatus',
      'updateState'
    ]),

    showRoundResult() {
      this.updateState('RoundResultView');
    }

    // showGameResult(pin) {
    //   // test with '0FCA'
    //   let that = this;
    //   this.gameStatus({
    //     gamePin: pin,
    //     onFinally: function(){
    //       that.updateState('GameResultView');
    //     }
    //   });
    // }
  }
}
</script>

<style scoped>
  span {
    color: #C62828;
    cursor: pointer;
  }
</style>