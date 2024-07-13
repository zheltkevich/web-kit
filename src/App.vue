<script setup>
import { useRouter } from 'vue-router'
import AppHeader from '@/components/app/AppHeader.vue'
import AppNav from '@/components/app/AppNav.vue'
import AppMain from '@/components/app/AppMain.vue'

const $router = useRouter()
const routes = $router.getRoutes()
</script>

<template>
    <AppHeader />
    <AppNav :routes="routes" />
    <AppMain />
</template>

<style lang="scss">
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

/* stylelint-disable-next-line selector-max-id */
#app {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto auto 1fr;
}

.app-header {
    grid-row: 1;
    grid-column: 1 / span 3;
}

.app-nav {
    grid-row: 2;
    grid-column: 1;
}

.app-main {
    grid-row: 2;
    grid-column: 3;
}
</style>
