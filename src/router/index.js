import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
import BookingView from '../views/BookingView.vue'
import NewEventView from '../views/NewEventView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/people', name: 'people', component: PeopleView },
    { path: '/booking', name: 'booking', component: BookingView },
    { path: '/new-event', name: 'new-event', component: NewEventView }
  ]
})

export default router