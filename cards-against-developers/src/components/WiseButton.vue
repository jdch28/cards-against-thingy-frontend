<template>
  <button class="wise-button"><span class="wise-button--index">{{ index }}.</span>&nbsp;{{ label }}</button>
</template>

<script>
export default {
  name: 'WiseButton',
  props: {
    index: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  }
}
</script>

<style>
  .wise-button {
    display: block;
    margin: 10px 0;
    text-align: left;
  }
</style>