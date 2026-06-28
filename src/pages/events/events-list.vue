<script lang="ts" setup>

import EventBanner from "./event-banner.vue"
</script>

<template>
  <div class="event-list contain-90">
    <div class="event-list-header">活动列表</div>
    <event-banner id="1" d="16" m="8" y="2025">
      <div>2025 Loved Song Vote</div>
      <template #desc>
        Song Vote of 2025. Checkout the results!
      </template>
    </event-banner>
    <event-banner id="2" d="23" m="5" y="2026">
      2026 "Beyond Escape" Vote
      <template #desc>
        After the loose end of update, what's next?
      </template>
    </event-banner>
    <event-banner id="3" d="28" m="6" y="2026">
      2026 "Beyond Escape" Vote Result
      <template #desc>
        Check out the result of 2026 Vote!
      </template>
    </event-banner>
  </div>
</template>

<style scoped>
.event-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.event-list-header {
  font-size: 1.5rem;
  text-align: center;
  color: #b8dcee;
  margin-bottom: 15px;
  user-select: none;
}
</style>