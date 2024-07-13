<script setup>
defineProps({
    instruction: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article>{{ instruction }}</article>
</template>
