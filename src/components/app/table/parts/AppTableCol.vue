<script setup>
import { computed } from 'vue'

const props = defineProps({
    options: {
        type: Object,
        default: () => ({}),
    },
})

const style = computed(() => {
    return {
        minWidth: props.options.min_width,
        width: props.options.width,
        maxWidth: props.options.max_width,
    }
})
</script>

<template>
    <col :style="style" />
</template>
