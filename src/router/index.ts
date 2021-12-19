import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Intro from '../views/Intro.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Settings from '../views/Settings.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Intro',
        component: Intro
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/about',
        name: 'About',
        component: About
    }, {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
