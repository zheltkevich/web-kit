<script setup>
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
const props = defineProps({
    routes: {
        type: Array,
        required: true,
    },
    collapsedHeight: {
        type: Number,
        default: 60,
    },
})

const navigationVisible = ref(false)
const toggle = () => (navigationVisible.value = !navigationVisible.value)

const { height } = useWindowSize()
const navigationStyles = computed(() => {
    return {
        height: navigationVisible.value ? `${height.value}px` : `${props.collapsedHeight}px`,
    }
})
</script>

<template>
    <aside
        class="app-nav"
        :style="navigationStyles">
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
        height: 100% !important; // stylelint-disable-line declaration-no-important
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
