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
/* stylelint-disable-next-line selector-max-id */
#app {
    display: grid;
    grid-template-rows: auto 1fr 44px; /* header и main */
    grid-template-columns: 1fr; /* Навигацию убираем из потока для мобильных */
    overflow: hidden;
    height: 100vh;

    @media (width > 768px) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
    }
}

.app-header {
    grid-row: 1;
    grid-column: 1 / 3;
}

.app-main {
    grid-column: 1;

    @media (width > 768px) {
        grid-row: 2;
        grid-column: 2;
    }
}
</style>
