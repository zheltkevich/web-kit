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
        default: 28,
    },
})

const visible = ref(false)
const toggle = val => (visible.value = val)

const { height } = useWindowSize()
const navigationStyles = computed(() => ({
    height: visible.value ? `${height.value}px` : `${props.collapsedHeight}px`,
}))
const listStyles = computed(() => ({
    height: visible.value ? `${height.value - props.collapsedHeight}px` : '0',
}))
</script>

<template>
    <aside
        class="app-nav"
        :style="navigationStyles">
        <nav
            class="app-nav__list"
            :style="listStyles">
            <RouterLink
                v-for="route in routes"
                :key="route.name"
                :to="{ name: route.name }"
                @click="toggle(false)">
                {{ route.name }}
            </RouterLink>
        </nav>
        <div class="app-nav__panel">
            <h3>Components</h3>
            <button
                class="app-nav__toggle"
                @click="toggle(!visible)">
                {{ visible ? 'hide' : 'show' }}
            </button>
        </div>
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

    &__panel {
        display: flex;
        justify-content: space-between;

        @media (width > 768px) {
            display: none;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
        transition: height 0.1s ease-out;

        @media (width > 768px) {
            height: 100% !important; // stylelint-disable-line declaration-no-important
        }
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
