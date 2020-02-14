<template>
  <main>
    <h1>The End</h1>
    <h2>Congratulations, {{ game.scores[0].name }},<br>developer extraordinaire.</h2>

    <h3>Final Standings</h3>
    <table>
      <tbody>
        <tr v-for="player in game.scores" :key="player.name">
          <td>{{ player.name }}</td>
          <td class="player-score">{{ player.score}}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>

export default {
  data() {
    return {
      game: this.$store.state.game
    }
  },
}
</script>

<style scoped>
  h1 {
    margin-top: 2em;
  }
  h2 {
    text-align: center;
    font-size: 1.3em;
    line-height: 1.3em;
    margin: .5em 0 1.5em;
  }
  h3 {
    text-align: center;
    font-size: 1.2em;
    font-variant: small-caps;
    margin: .5em 0 1em;
  }

  table {
    margin: 0 auto;
  }
  td {
    padding: 0.1em 0.5em;
  }
  .player-score {
    border-left: 1px solid black;
  }
</style>