<script setup lang="ts">

import SvTitle from "./sv-title.vue"
import PageNav from "./page-nav.vue"
import FillThere from "./fill-there.vue"
</script>

<template>
  <div class="start-up page-contain">
    <sv-title />
    <page-nav />
    <fill-there />
  </div>
</template>

<style scoped>
.start-up {
  display: flex;
  flex-direction: column;
  color: #b8dcee;
  padding-top: 10vmin;
  gap: 5vmin;
  margin-bottom: 10vmin;
  
}
</style>