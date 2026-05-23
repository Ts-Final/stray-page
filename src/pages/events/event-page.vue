<script lang="ts" setup>
import Ev1 from "./event-pages/ev1.vue"
import {useRoute} from "vue-router"
import type {Component} from "vue"
import Ev2 from "./event-pages/ev2.vue"

const route = useRoute()
const id = parseInt(route.params.id as string ?? "0")
const components: Record<number, Component> = {
  1: Ev1,
  2: Ev2
}
</script>

<template>
  <div>
    <component :is="components[id]" v-if="components[id]"/>
  <div v-else class="contain-90">
    Nothing Here...
  </div>
  </div>
</template>

<style scoped>

</style>