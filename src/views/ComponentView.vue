<script setup>
import { computed, reactive, provide } from 'vue'
import Instruction from '@/js/Instruction.js'
import ComponentExample from '@/components/preview/ComponentExample.vue'
import ComponentSettings from '@/components/preview/ComponentSettings.vue'

const props = defineProps({
    instruction: {
        type: Object,
        required: true,
    },
})

const inst = computed(() => {
    return props.instruction
})

const component = reactive(new Instruction(inst.value))

provide('component', component)
</script>

<template>
    <article class="component-view">
        <h1>{{ component.title }}</h1>
        <hr />
        <ComponentExample
            :attrs="component.default"
            :template="component.template" />
        <ComponentSettings />
    </article>
</template>

<style lang="scss">
.component-view {
    // overflow: scroll;

    // @include scrollbar;
}
</style>
