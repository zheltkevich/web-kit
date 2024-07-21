<script setup>
import { computed } from 'vue'

const props = defineProps({
    value: {
        type: String,
        default: '',
    },
})

const value = computed({
    get() {
        return props.value
    },
    set(value) {
        $emit('update:value', value)
    },
})
const $emit = defineEmits(['update:value'])
</script>

<template>
    <input
        v-model="value"
        type="text" />
</template>
