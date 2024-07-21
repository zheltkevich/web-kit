<script setup>
import { AppTableCell, AppTableRow } from '.'
defineProps({
    columns: {
        type: Array,
        default: () => [],
    },
    item: {
        type: Object,
        default: () => ({}),
    },
    options: {
        type: Object,
        default: () => ({}),
    },
})
</script>

<template>
    <AppTableRow data-row-type="body">
        <AppTableCell
            v-for="column in columns"
            :key="column.id"
            :data-cell="column.id"
            :options="column.options"
            tag="td">
            <slot
                name="cell"
                :cell="item"
                :column="column" />
        </AppTableCell>
    </AppTableRow>
</template>
