<template>
  <main>
    <span>WINNER</span>
    <span>{{ winner }}</span>
  </main>
</template>

<script>

export default {
  data() {
    return {
      winner: 'John Smith',
      players: [ {name: 'John Smith', score: '50'},
                 {name: 'Petey Cruiser', score: '40'},
                 {name: 'Gail Forcewind', score: '30'},
                 {name: 'Paige Turner', score: '20'}],
    }
  },
}
</script>

<style>

</style>