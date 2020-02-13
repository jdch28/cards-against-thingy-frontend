<template>
  <main>
    <section class="waiting-for-plebs__section">
      <h1>Sent your card</h1>
      <h2>Waiting for other player submissions...</h2>
    </section>

    <section class="waiting-for-czar__section">
      <h1>All cards sent</h1>
      <h2>Waiting for czar selection...</h2>
    </section>
  </main>
</template>

<script>
export default {
  name: 'WaitingSentView'
}
</script>

<style scoped>
  .waiting-for-czar__section {
    display: none;
  }
</style>