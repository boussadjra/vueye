

<script setup lang="ts">
import { useElevation } from '~/composables/core/elevation';
import { toPartialRefs } from '~/utils/helpers';
import cardProps from './cardProps';

const props = defineProps(cardProps)
const slots = useSlots()
const { shapeClass } = useElevation(toPartialRefs(props, ['elevation', 'outlined']))

const classes = computed(() => [
    'card',
    shapeClass.value,
    props.outlined ? 'bg-transparent' : ' bg-gray-50  dark:bg-primary-900',
    props.block ? 'w-full' : 'max-w-lg',

])
</script>
<template>
    <component :is="tag" :class="[classes]">
        <slot name="media"></slot>
        <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold" v-if="slots.header">
                <slot name="header">{{ title }}</slot>
            </div>
            <p class="text-base font-light text-gray-700 dark:text-slate-50">
                <slot></slot>
            </p>
        </div>
        <div class="px-6 py-4" v-if="slots.footer">
            <slot name="footer"></slot>
        </div>
    </component>
</template>
<style scoped>
.card {
    @apply  overflow-hidden rounded w-fit text-slate-500 dark:text-slate-100 
}
</style>