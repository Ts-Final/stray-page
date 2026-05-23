<script lang="ts" setup>
const model = defineModel()
</script>

<template>
  <input v-model="model" spellcheck="false" type="text" />
</template>

<style scoped>
input {
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  text-align: left;
  border-bottom: 1px solid transparent;
}
input[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
