<script lang="ts" setup>

defineProps<{ src: string }>()
const model = defineModel<boolean>({default: true})
</script>

<template>
  <img v-if="model" :src="src" alt="" v-bind="$attrs" @error="model = false"/>
  <slot v-else></slot>
</template>

<style scoped></style>
