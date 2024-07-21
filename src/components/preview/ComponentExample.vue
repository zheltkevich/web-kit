<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    attrs: {
        type: Object,
        required: true,
    },
    template: {
        type: String,
        required: true,
    },
})

const container = ref(null)
const updateAttrs = (component, attrs) => {
    Object.entries(attrs).forEach(([key, value]) => {
        if (value) component.setAttribute(key, value)
        else component.removeAttribute(key)
    })
}
watch(container, newVal => {
    updateAttrs(newVal.children[0], props.attrs)
})
watch(props.attrs, newVal => {
    updateAttrs(container.value.children[0], newVal)
})
</script>

<template>
    <div class="component-example">
        <div
            ref="container"
            class="component-example__container"
            v-html="template" />
    </div>
</template>
