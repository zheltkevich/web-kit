<script setup></script>

<template>
    <main class="app-main">
        <RouterView v-slot="{ Component }">
            <keep-alive>
                <component :is="Component">
                    {{ Component }}
                </component>
            </keep-alive>
        </RouterView>
    </main>
</template>

<style lang="scss">
.app-main {
    overflow-x: hidden;
    overflow-y: auto;

    @include scrollbar;

    article {
        padding: 8px 16px;
    }
}
</style>
