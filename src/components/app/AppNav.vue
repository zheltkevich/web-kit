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

const navigation = computed(() => {
    const updatedRoutes = {}
    props.routes.forEach(route => {
        if (route.props.default) {
            const group = route.props.default.instruction.group
            if (updatedRoutes[group] === undefined) updatedRoutes[group] = []
            updatedRoutes[group].push(route)
        }
    })

    return updatedRoutes
})

const panel = ref(null)
const visible = ref(false)
const toggle = val => (visible.value = val)

const { height } = useWindowSize()
const navigationStyles = computed(() => {
    return { height: visible.value ? `${height.value}px` : `${panel.value?.clientHeight}px` }
})
const listStyles = computed(() => {
    return {
        height: visible.value ? `${height.value - panel.value?.clientHeight}px` : '0',
    }
})
</script>

<template>
    <aside
        class="app-nav"
        :style="navigationStyles">
        <nav
            class="app-nav__list"
            :style="listStyles">
            <div class="app-nav__list-wrapper">
                <RouterLink
                    :to="{ name: 'home' }"
                    @click="toggle(false)">
                    На главную
                </RouterLink>
                <div
                    v-for="(group, i) in navigation"
                    :key="i"
                    class="app-nav__group">
                    <h4>{{ group[0].props.default.instruction.group }}</h4>
                    <RouterLink
                        v-for="route in group"
                        :key="route.name"
                        :to="{ name: route.name }"
                        @click="toggle(false)">
                        {{ route.name }}
                    </RouterLink>
                </div>
            </div>
        </nav>
        <div
            ref="panel"
            class="app-nav__panel">
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
    grid-row: 3;
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
        padding: 8px 16px;

        @media (width > 768px) {
            display: none;
        }
    }

    &__group {
        display: flex;
        flex-direction: column;
        padding-block: 4px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
        transition: height 0.1s ease-out;

        @include scrollbar;

        @media (width > 768px) {
            height: 100% !important; // stylelint-disable-line declaration-no-important
        }
    }

    &__list-wrapper {
        padding: 8px 16px;
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
</style>
