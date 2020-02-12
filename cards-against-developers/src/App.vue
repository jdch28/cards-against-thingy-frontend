<template>
  <div>
    <choose-wisely-view />
  </div>
</template>

<script>
import ChooseWiselyView from './views/ChooseWiselyView.vue'

export default {
  name: 'App',
  components: {
    ChooseWiselyView,
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/app.css';
</style>
