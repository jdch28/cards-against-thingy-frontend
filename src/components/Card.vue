<template>
  <div class="card" :class="{ 'card-black': isBlack}">
     <span class="card-text" :class="{ 'card-text__white': isBlack}">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'CzarView',
  props: {
    text: String,
    isBlack: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  width: 8em;
  height: 10em;
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
  padding: 0.5em 0.5em;
}

.card-text__white {
  color: white;
}
</style>
