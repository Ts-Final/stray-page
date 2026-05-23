<script setup lang="ts">

import AHref from "../../components/a-elements/a-href.vue"
import AImg from "../../components/a-elements/a-img.vue"
import {ref} from "vue"
const img = ref(true)
</script>

<template>
  <div class="stray-title">
    <a-img src="/sv.png" v-model="img" class="stray-icon" />
    <div class="stray-name" v-if="!img">stray/vivify</div>
    <div class="stray-text">Presented by Team Felleta</div>
    <div class="stray-links">
      <a-href href="https://github.com/Ts-Final/stray-vivify">view on github</a-href>
    </div>
  </div>
</template>

<style scoped>
.stray-title {
  width: 80%;
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: transparent;
  border-radius: 15px;
  backdrop-filter: blur(4px);
  background-color: #ffffff10;
  padding: 50px 0;
}
.stray-icon {
  max-height: 15vh;
}
.stray-text {
  font-size: 1.4rem;
}
.stray-links {
  margin-top: 25px;
}
</style>