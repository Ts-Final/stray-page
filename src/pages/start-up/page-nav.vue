<script lang="ts" setup>

import {useRouter} from "vue-router"

const router = useRouter()

function to(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="page-nav">

    <div @click="to('/wiki')">
      <router-link to="/wiki"> 使用手册/guide</router-link>
      <span>📖</span>
    </div>

    <div @click="to('/events')">
      <router-link to="/events">活动/events</router-link>
      <span>⏰</span>
    </div>

    <div @click="to('/credits')">
      <router-link to="/credits">致谢/Credits</router-link>
      <span>❤️</span>
    </div>

  </div>
</template>

<style scoped>
.page-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  align-self: center;
  gap: 25px;
}

.page-nav > div {
  flex: 1;
  border-radius: 10px;
  background-color: #ffffff10;
  backdrop-filter: blur(4px);
  padding: 5px;
  height: 15vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.page-nav > div:hover {
  background-color: #ffffff20;
}

span {
  display: block;
  text-decoration: none !important;
}
</style>