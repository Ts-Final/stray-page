<script lang="ts" setup>

const {href} = defineProps<{ href: string }>()

</script>

<template>
  <a target="_blank" :href="href" class="a-href">
    <slot></slot>
  </a>
</template>

<style scoped>
.a-href {
  text-decoration: 1px underline #7cdcf4;
  cursor: pointer;
  padding: 0 5px;
  color: inherit;
}
</style>
