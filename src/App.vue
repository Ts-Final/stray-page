<script lang="ts" setup>
import HeadNav from "./components/head-nav.vue"
</script>

<template>
  <head-nav/>
  <div class="contain">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.3s linear;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  opacity: 1;
}
.contain {
  width: 100%;
  height: calc(100% - 2.5rem);
  justify-content: center;
  overflow-y: auto;
  position: relative;
  top: 0;
  background: var(--blue-bgi);
}
</style>