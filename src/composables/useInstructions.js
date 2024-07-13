import { useRouter } from 'vue-router'
import { reactive, watch, onBeforeMount } from 'vue'
import ComponentView from '@/views/ComponentView.vue'

export const useInstructions = () => {
    const $router = useRouter()
    const items = reactive([])

    onBeforeMount(async () => {
        const instuctions = import.meta.glob('@lib/components/**/*.instruction.js')

        Object.values(instuctions).forEach(async getInstruction => {
            const instruction = await getInstruction()
            items.push(instruction.default)
        })
    })

    watch(items, items => {
        items.forEach(item => {
            $router.addRoute({
                path: `/${item.name}`,
                name: item.name,
                component: ComponentView,
            })
        })
    })

    return {
        items,
    }
}
