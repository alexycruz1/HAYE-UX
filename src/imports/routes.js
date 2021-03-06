import Vue from 'vue'

import NotFound from './ui/NotFound.vue'
import Home from './ui/Home.vue'
import Courses from './ui/Courses.vue'
import Students from './ui/Students.vue'
import Notes from './ui/Notes.vue'
import GoogleMap from './ui/GoogleMap.vue'
import Apollo from './ui/Apollo.vue'
import Async from './ui/Async.vue'
import About from './ui/About.vue'
import Events from './ui/Events.vue'
import LoginRegister from './ui/LoginRegister.vue'

export default [
  { path: '/home', name: 'home', component: Home },
  { path: '/courses', name: 'courses', component: Courses },
  { path: '/students', name: 'students', component: Students },
  { path: '/notes', name: 'notes', component: Notes, meta: { showCart: true } },
  { path: '/map', name: 'map', component: GoogleMap },
  { path: '/apollo', name: 'apollo', component: Apollo },
  { path: '/async', name: 'async', component: Async },
  { path: '/about', name: 'about', component: About },
  { path: '*', name: 'not-found', component: NotFound },
  { path: '/events', name: 'events', component: Events },
  { path: '/', name: 'login', component: LoginRegister },
]
