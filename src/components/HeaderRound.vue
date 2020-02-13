<template>
   <h1>
    <span>Round {{ round }}</span>
    <small>Score: {{ score }}</small>
  </h1>
</template>

<script>
export default {
  name: 'HeaderRound',
  props: {
    round: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: .3em;
  }

  h1 small {
    font-size: 0.7em;
  }
</style>