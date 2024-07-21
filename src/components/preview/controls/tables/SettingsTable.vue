<script setup>
import AppTable from '@/components/app/table'
</script>

<template>
    <AppTable class="settings-table">
        <template #bodyCell="{ cell, column }">
            <slot
                :name="column.id"
                :cell="cell"
                :column="column" />
        </template>
    </AppTable>
</template>

<style lang="scss" scoped>
.settings-table {
    padding: 8px;
    border: 1px solid var(--color-border);
}
</style>
