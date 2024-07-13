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
}
const $emit = defineEmits(['toggle'])
</script>

<template>
    <aside class="app-nav">
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
    display: flex;
    flex-direction: column;

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
