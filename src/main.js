import './assets/main.css'
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@lib'

import App from './App.vue'
import { initRouter } from './router'

async function initApp() {
    const router = await initRouter()
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
}

initApp()
