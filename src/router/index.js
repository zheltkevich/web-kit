import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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

const updateRoutes = async () => {
    const instructions = import.meta.glob('@lib/components/**/*.instruction.js')
    for (const path in instructions) {
        const module = await instructions[path]()
        if (module.default) {
            router.addRoute({
                path: `/${module.default.name}`,
                name: module.default.name,
                component: ComponentView,
                props: {
                    instruction: module.default,
                },
            })
        }
    }
}

export const initRouter = async () => {
    await updateRoutes()
    return router
}
