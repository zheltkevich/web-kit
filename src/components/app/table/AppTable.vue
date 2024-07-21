<script setup>
import { computed } from 'vue'
import { AppTableColgroup, AppTableHeadRow, AppTableBodyRow } from './parts'

const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
    options: {
        type: Object,
        default: () => ({
            picker: true,
        }),
    },
})

const columns = computed(() => {
    return props.data.columns
})

const items = computed(() => {
    return props.data.items
})
</script>

<template>
    <div class="app-table">
        <table>
            <AppTableColgroup
                :columns="columns"
                :options="options" />
            <thead>
                <AppTableHeadRow
                    :columns="columns"
                    :options="options">
                    <template #cell="{ column, cell }">
                        <span class="app-table__cell-wrapper app-table__cell-wrapper--head">
                            <slot
                                name="headCell"
                                :cell="cell"
                                :column="column">
                                {{ column.value }}
                            </slot>
                        </span>
                    </template>
                </AppTableHeadRow>
            </thead>
            <tbody>
                <AppTableBodyRow
                    v-for="(item, index) in items"
                    :key="index"
                    :item="item"
                    :columns="columns"
                    :options="options"
                    :data-row-index="index">
                    <template #cell="{ cell, column }">
                        <slot
                            name="bodyCell"
                            :cell="cell"
                            :column="column">
                            {{ item[column.id] }}
                        </slot>
                    </template>
                </AppTableBodyRow>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
@import './styles/colors.scss';

.app-table {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--app-table-border-color);
    border-radius: 4px;

    table {
        border-collapse: collapse;
        table-layout: fixed;
    }

    th,
    td {
        text-align: left;
    }

    th {
        padding: 4px 8px;
        color: var(--app-table-head-color);
        white-space: nowrap;
    }

    td {
        padding: 10px 8px;
    }

    &__cell-wrapper {
        &--head {
            display: flex;
            gap: 4px;
            align-items: center;
        }
    }
}
</style>
