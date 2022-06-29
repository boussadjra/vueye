<script setup lang="ts">
import useVariant from '~/composables/core/variant';
import { toPartialRefs } from '~/utils/helpers';
import badgeProps from './badgeProps';

const props = defineProps(badgeProps)

const slots=useSlots()
const { variantClasses } = useVariant(toPartialRefs(props, ['variant']))
let classes = computed(() => [
    `badge badge--${variantClasses.value}`
    ,
    {
        'smooth': props.smooth,
        'slotted':slots.default
    }
])
</script>

<template>
    <div :class="classes" :data-label="content">
        <slot></slot>
    </div>
</template>

<style scoped>
.badge {
    @apply relative
}
.badge.slotted::before{
    @apply absolute z-10 -right-3 -top-4 text-xs
}
.badge::before {
    content: attr(data-label);
    clear: both;
    @apply p-1 text-sm rounded
}

.badge--default::before {
    @apply bg-gray-500 text-white
}

.badge--primary::before {
    @apply bg-primary-500 text-white
}

.badge--secondary::before {
    @apply bg-secondary-500 text-white
}

.badge--success::before {
    @apply bg-green-500 text-white
}

.badge--info::before {
    @apply bg-blue-500 text-white
}

.badge--warning::before {
    @apply bg-amber-500 text-white
}

.badge--error::before {
    @apply bg-red-500 text-white
}
</style>