<script setup>
import { computed } from 'vue'

const props = defineProps({
    tag: {
        type: String,
        default: 'td',
        validator: value => ['td', 'th'].includes(value),
    },
    options: {
        type: Object,
        default: () => ({}),
    },
})

const style = computed(() => {
    return {
        minWidth: props.options.min_width || null,
        width: props.options.width || 'auto',
        maxWidth: props.options.max_width || null,
    }
})
</script>

<template>
    <component
        :is="tag"
        :style="style">
        <slot />
    </component>
</template>
