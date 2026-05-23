<script lang="ts" setup>

import {ref} from "vue"
import AImg from "./a-elements/a-img.vue"
import {useRouter} from "vue-router"

const img = ref(true)
const router = useRouter()

</script>

<template>
  <div class="header">
    <a-img v-model="img" class="header-icon" src="/yq.jpg" />
    <div class="header-name" @click="router.push('/')">stray-vivify</div>
    <div class="header-nav">
      <div @click="router.push('/')">首页</div>
      <div @click="router.push('/wiki')">使用说明</div>
      <div @click="router.push('/events')">活动</div>
      <div @click="router.push('/credits')">关于/致谢</div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  background: var(--purple-bgi);
  align-items: center;
  width: 100%;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  padding: 0 15px;
  box-sizing: border-box;
  color: #b8dcee;
  gap: 15px;
  user-select: none;
  position: sticky;
}

.header-icon {
  max-height: 1.8rem;
  border-radius: 2px;
}
.header-name {
  font-size: 1.2rem;
  cursor: pointer;
}
.header-nav {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}
.header-nav > div {
  cursor: pointer;
  flex: 1;
  text-align: center;

}
.header-nav > div:hover {
  color: #7cdcf4;
  transition: color 0.2s ease-in-out;

}

</style>