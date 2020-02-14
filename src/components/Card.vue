<template>
  <div class="card" :class="card_class">
     <span class="card-text" :class="{ 'card-text__white': isBlack }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    text: String,
    isBlack: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    card_class() {
      return this.isBlack ? 'card-black' : 'card-white';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  background-color: #fff;
  border-radius: .5em;
  width: calc(100% - 4em);
  margin: .5em auto;
  height: auto;
  outline: none;
  text-decoration: none;
  overflow-wrap: break-word;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
}

.card-black {
  background-color: black;
}

.card-text {
  color: black;
  width: 100%;
  padding: 1em;
}

.card-text__white {
  color: white;
}

.card-selected .card-text {
  color: #C62828;
}
</style>
