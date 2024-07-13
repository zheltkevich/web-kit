<script setup>
defineProps({
    routes: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <nav class="app-nav">
        <RouterLink
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name }">
            {{ route.name }}
        </RouterLink>
    </nav>
</template>

<style scoped>
.app-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
