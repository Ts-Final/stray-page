<script lang="ts" setup>
import {useRouter} from "vue-router"

const {src = "", y, m, d} = defineProps<{
  src?: string,
  y: string | number,
  m: string | number,
  d: string | number,
  id: number | string
}>()
const the = src ? `url("${src}")` : `url("/sv.png")`
const op = src ? 1 : 0.3
const date = new Date(Number(y), Number(m) - 1, Number(d))
const router = useRouter()
</script>

<template>
  <div class="event-single" @click="router.push(`/events/${id}`)">
    <div class="event-banner"/>
    <div class="event-title">
      <slot></slot>
    </div>
    <div class="event-date">
      {{ date.toLocaleDateString() }}
    </div>
    <div class="event-desc">
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<style scoped>
.event-single {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  background: var(--dark-bgi);
  width: 80%;
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: left;
}

.event-banner {
  width: 100%;
  height: 15vmin;
  background-image: v-bind(the);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: v-bind(op);
}
.event-title {
  font-size: 1.2rem;
}
.event-date {
  font-size: 0.8rem;
  opacity: 0.7;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  padding-bottom: 5px;
}
.event-desc {
  margin-top: 10px;
}
</style>