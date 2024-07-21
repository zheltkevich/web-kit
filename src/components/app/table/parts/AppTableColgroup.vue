<script setup>
import { AppTableCol } from '.'

defineProps({
    columns: {
        type: Array,
        default: () => [],
    },
    options: {
        type: Object,
        default: () => ({}),
    },
})
</script>

<template>
    <colgroup>
        <AppTableCol
            v-for="column in columns"
            :key="column.id"
            :data-col="column.id"
            :options="column.options" />
    </colgroup>
</template>
