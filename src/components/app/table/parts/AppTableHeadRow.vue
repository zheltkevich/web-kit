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
    <AppTableRow data-row-type="head">
        <AppTableCell
            v-for="column in columns"
            :key="column.id"
            :data-cell="column.id"
            :options="column.options"
            tag="th">
            <slot
                name="cell"
                :cell="item"
                :column="column" />
        </AppTableCell>
    </AppTableRow>
</template>
