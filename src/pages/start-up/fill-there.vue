<script lang="ts" setup>

import EventBanner from "../events/event-banner.vue"
</script>

<template>
  <div class="fill">
    <div class="h2-title">Live</div>
    <event-banner id="2" d="23" m="5" y="2026">
      2026 "Beyond Escape" Vote
      <template #desc>
        After the loose end of update, what's next?
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