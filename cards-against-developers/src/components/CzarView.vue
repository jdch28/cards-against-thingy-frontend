<template>
  <div>
    <v-card-text>
        <span>{{cardText}}</span>
    </v-card-text>
    <v-card-text>
        <div>Word of the Day</div>
        <p class="display-1 text--primary">
          be•nev•o•lent
        </p>
        <p>adjective</p>
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
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
 width: 60px;
 height: 200px;
}
</style>
