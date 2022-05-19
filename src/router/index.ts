import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Intro',
        component: IntroView
    }, {
        path: '/talk',
        name: 'Talk',
        component: HomeView
    }, {
        path: '/about',
        name: 'About',
        component: AboutView
    }, {
        path: '/settings',
        name: 'Settings',
        component: SettingsView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
