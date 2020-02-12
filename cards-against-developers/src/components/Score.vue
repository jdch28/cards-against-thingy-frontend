<template>
  <span>Score: {{ value }}</span>
</template>

<script>
export default {
  name: 'Score',
  props: {
    value: {
      type: Number,
      default: 0,
   },
  }
}
</script>

<style>

</style>