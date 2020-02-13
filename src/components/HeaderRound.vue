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
    font-size: 1.8em;
    font-weight: 900;
    font-variant: small-caps;
    margin: .1em 0 .6em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 small {
    font-size: 0.7em;
  }
</style>