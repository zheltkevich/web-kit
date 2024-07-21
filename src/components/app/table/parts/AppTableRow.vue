<script setup></script>

<template>
    <tr class="app-table-row">
        <slot />
    </tr>
</template>

<style lang="scss">
.app-table-row {
    transition: var(--trs-fast) ease-out;
    transition-property: background-color;

    &[data-row-type='head'] {
        border-bottom: 1px solid var(--app-table-border-color);
        background-color: var(--app-table-head-bg);
    }

    &[data-row-type='body'] {
        @include hover {
            background-color: var(--app-table-body-row-bg-hover);
        }

        &:nth-child(odd) {
            background-color: var(--app-table-body-row-odd-bg);
        }

        &:nth-child(even) {
            background-color: var(--app-table-body-row-even-bg);
        }
    }
}
</style>
