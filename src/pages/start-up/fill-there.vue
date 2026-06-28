<script lang="ts" setup>

import EventBanner from "../events/event-banner.vue"
</script>

<template>
  <div class="fill">
    <div class="h2-title">Live</div>
    <event-banner id="3" d="28" m="6" y="2026">
      2026 "Beyond Escape" Vote Result
      <template #desc>
        Check out the result of 2026 Vote!
      </template>
    </event-banner>
  </div>
</template>

<style scoped>
.fill {
  width: 80%;
  align-self: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  backdrop-filter: blur(4px);
  padding: 15px 0;
}

</style>