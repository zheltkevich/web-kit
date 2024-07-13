import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@lib'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ComponentView from '@/views/ComponentView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
    ],
})

async function loadAndAddRoutes() {
    const instructions = import.meta.glob('@lib/components/**/*.instruction.js')
    for (const path in instructions) {
        const module = await instructions[path]()
        if (module.default) {
            router.addRoute({
                path: `/${module.default.name}`,
                name: module.default.name,
                component: ComponentView,
            })
        }
    }
}

async function initializeApp() {
    await loadAndAddRoutes()
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
}

initializeApp()
