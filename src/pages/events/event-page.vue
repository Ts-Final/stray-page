<script lang="ts" setup>
import Ev1 from "./event-pages/ev1.vue"
import {useRouter} from "vue-router"
import {type Component, computed} from "vue"
import Ev2 from "./event-pages/ev2.vue"

const route = useRouter()
const id = computed(() => parseInt(route.currentRoute.value.params.id as string ?? "0"))
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