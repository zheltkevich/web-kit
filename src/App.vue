<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/app/AppHeader.vue'
import AppNav from '@/components/app/AppNav.vue'
import AppMain from '@/components/app/AppMain.vue'

const $router = useRouter()
const routes = $router.getRoutes()
const navigationVisible = ref(false)

const changeVisibility = val => {
    navigationVisible.value = val
}
</script>

<template>
    <AppHeader />
    <AppNav
        :class="{ visible: navigationVisible }"
        :routes="routes"
        @toggle="changeVisibility" />
    <AppMain />
</template>

<style lang="scss">
/* stylelint-disable-next-line selector-max-id */
#app {
    display: grid;
    grid-template-rows: auto 1fr auto; /* header и main */
    grid-template-columns: 1fr; /* Навигацию убираем из потока для мобильных */
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

.app-nav {
    position: fixed; /* фиксированное позиционирование для навигации */
    width: 100%; /* на всю ширину экрана */
    height: 100%; /* выдвигается на всю высоту экрана */
    background-color: var(--color-background);
    transition: transform 0.2s ease-in-out; /* плавное выдвижение */
    transform: translateY(calc(100% - 60px)); /* изначально скрыта за пределами экрана */
    inset: 0;

    @media (width > 768px) {
        position: static;
        grid-row: 2;
        grid-column: 1;
        transform: translateY(0);
    }

    &.visible {
        transform: translateY(0); /* отображается на экране */
    }
}

.app-main {
    grid-column: 1;

    @media (width > 768px) {
        grid-row: 2;
        grid-column: 2;
    }
}
</style>
