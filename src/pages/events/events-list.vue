<script lang="ts" setup>

import EventBanner from "./event-banner.vue"
</script>

<template>
  <div class="event-list contain-90">
    <div class="event-list-header">活动列表</div>
    <event-banner id="1" d="16" m="8" src="" y="2025">
      <div>2025 Loved Song Vote</div>
      <template #desc>
        Song Vote of 2025. Checkout the results!
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