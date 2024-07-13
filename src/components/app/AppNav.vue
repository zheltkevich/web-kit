<script setup>
import { ref } from 'vue'
defineProps({
    routes: {
        type: Array,
        required: true,
    },
})

const navigationVisible = ref(false)
const toggle = () => {
    navigationVisible.value = !navigationVisible.value
    $emit('toggle', navigationVisible.value)
    if (navigationVisible.value) navigationHeight.value = document.body.offsetHeight
    else navigationHeight.value = 60
}
const navigationHeight = ref(60)
const $emit = defineEmits(['toggle'])
</script>

<template>
    <aside
        class="app-nav"
        :style="{ height: navigationHeight + 'px' }">
        <header class="app-nav__header">
            <h3>navigation</h3>
            <button
                class="app-nav__toggle"
                @click="toggle">
                {{ navigationVisible ? 'hide' : 'show' }}
            </button>
        </header>
        <nav class="app-nav__list">
            <RouterLink
                v-for="route in routes"
                :key="route.name"
                :to="{ name: route.name }"
                @click="toggle">
                {{ route.name }}
            </RouterLink>
        </nav>
    </aside>
</template>

<style lang="scss">
.app-nav {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    background-color: var(--color-background);
    transition: height 0.1s ease-out;

    @media (width > 768px) {
        position: static;
        grid-row: 2;
        grid-column: 1;
        /* stylelint-disable-next-line declaration-no-important */
        height: 100% !important;
    }

    &.visible {
        height: 100%;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        padding: 16px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
    }

    &__toggle {
        cursor: pointer;

        @media (width > 768px) {
            display: none;
        }
    }
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
