<script setup>
import { inject } from 'vue'
import * as Control from './controls'
import SettingsTable from '@/components/preview/controls/tables/SettingsTable.vue'

const component = inject('component')
const columns = {
    attrs: [
        {
            id: 'attr',
            value: 'Атрибут',
        },
        {
            id: 'type',
            value: 'Тип',
        },
        {
            id: 'description',
            value: 'Описание',
        },
        {
            id: 'default',
            value: 'Начальное значение',
        },
        {
            id: 'control',
            value: 'Управление',
        },
    ],
    events: [
        {
            id: 'event',
            value: 'Событие',
        },
        {
            id: 'description',
            value: 'Описание',
        },
        {
            id: 'includes',
            value: 'Содержит',
        },
    ],
    slots: [
        {
            id: 'slot',
            value: 'Слот',
        },
        {
            id: 'description',
            value: 'Описание',
        },
        {
            id: 'props',
            value: 'Параметры',
        },
    ],
}

const getTableData = key => {
    const items = []

    Object.entries(component.settings[key]).forEach(([key, item]) => {
        item.attr = key
        items.push(item)
    })

    return {
        columns: columns[key],
        items,
    }
}
</script>

<template>
    <div class="component-settings">
        <SettingsTable
            v-for="(table, key) in component.settings"
            :key="key"
            :data="getTableData(key)">
            <template #control="{ cell }">
                <component
                    :is="Control[cell.control]"
                    v-model:value="component.default[cell.attr]" />
            </template>
        </SettingsTable>
    </div>
</template>
