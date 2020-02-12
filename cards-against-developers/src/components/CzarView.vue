<template>
  <div>
    <v-card
      class="black-card"
      color="#090909"
      dark>
        <span>{{cardText}}</span>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CzarView',
  props: {
    cardText: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.black-card {
 background-color: #090909;
 max-width: 144px;
 height: 200px;
}
</style>
