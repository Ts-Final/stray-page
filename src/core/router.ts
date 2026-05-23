import {createRouter, createWebHistory} from 'vue-router'
import StartUpView from "../pages/start-up/start-up.vue"
import EventsList from "../pages/events/events-list.vue"
import Credits from "../pages/about/credits.vue"
import Wiki from "../pages/wiki/wiki.vue"
import EventPage from "../pages/events/event-page.vue"


const routes = [
  {path: '/', component: StartUpView},
  {path: '/events', component: EventsList},
  {path: '/events/:id', component: EventPage},
  {path: '/wiki', component: Wiki},
  {path: '/credits', component: Credits},
  {path: '/:pathMatch(.*)*', redirect: '/'},
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})