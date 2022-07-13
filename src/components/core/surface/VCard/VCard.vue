

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
    {
        'card--media-aside': props.mediaAside,
    }

])
</script>
<template>
    <component :is="tag" :class="[classes]">
        <slot name="media"></slot>
        <div class="card__content">
            <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold" v-if="slots.header">
                    <slot name="header">{{ title }}</slot>
                </div>
                <slot></slot>
            </div>
            <div class="px-6 pt-3 pb-2 " v-if="slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </component>
</template>
<style scoped>
.card {
    @apply overflow-hidden rounded text-slate-500 dark:text-slate-100
}

.card--media-aside {
    @apply flex max-w-max max-h-min
}

.card--media-aside .card__content {
    @apply flex flex-col justify-between pb-4
}
</style>