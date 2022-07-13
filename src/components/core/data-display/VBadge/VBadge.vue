<script setup lang="ts">
import useVariant from '~/composables/core/variant';
import badgeProps from './badgeProps';

const props = defineProps(badgeProps)

const slots = useSlots()
const slottedNodes = slots.default?.()



if (slottedNodes && slottedNodes.length > 1) {
    throw Error('VBadge: only one slot is allowed')
}
const classesOfSlottedNode = computed(() => {
    if (slottedNodes && slottedNodes.length) {
        let [node] = slottedNodes
        //@ts-ignore
        return `${node.props?.corner?'slotted_corner':''} slotted_corner--${node.props?.corner} slotted--${node.props?.size} slotted_el--${node?.type?.name}`
    }
})




const { variantClasses } = useVariant(props)
let classes = computed(() => [
    `badge  badge--${variantClasses.value}`,
    classesOfSlottedNode.value,
    {
        'smooth': props.smooth,
        'slotted': slots.default,
        'empty': !props.content,

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
    @apply relative inline-block h-max
}

.badge.slotted::after {

    @apply absolute z-10 top-0 right-0 inline-flex items-center justify-center text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2
}

.badge.empty::after {
    content: '';
    @apply right-2 top-1 h-3 w-3 rounded-full
}


.badge::after {
    content: attr(data-label);
    clear: both;
    @apply p-1 text-sm rounded
}

.slotted_el--v-avatar::after{
    @apply  !top-auto ;
}

.slotted_corner--full.slotted--xs::after {
    @apply bottom-0 top-auto  right-0
}
.slotted_corner--full.slotted--xs::after {
    @apply bottom-0 top-auto  right-0
}
.slotted_corner--full.slotted--sm::after {
    @apply bottom-0 top-auto  right-1
}
.slotted_corner--full.slotted--md::after {
    @apply bottom-1 top-auto  right-1
}
.slotted_corner--full.slotted--lg::after {
    @apply !bottom-2 top-auto  right-2
}
.slotted_corner--full.slotted--xl::after {
    @apply !bottom-3 top-auto  right-3
}
.slotted_corner--full.slotted--xxl::after {
    @apply !bottom-4 top-auto  right-4
}

.slotted_corner:not(.slotted_corner--full):after{
    @apply -bottom-2 top-auto  !right-1
}

.badge--default::after {
    @apply bg-gray-500 text-white
}
.smooth.badge--default::after {
   @apply bg-gray-300 dark:bg-gray-800  text-gray-500 dark:text-gray-300 
}

.badge--primary::after {
    @apply bg-primary-500 text-white
}
.smooth.badge--primary::after {
   @apply bg-primary-100 dark:bg-primary-800  text-primary-700 dark:text-primary-300 
}

.badge--secondary::after {
    @apply bg-secondary-500 text-white
}
.smooth.badge--secondary::after {
   @apply bg-secondary-100 dark:bg-secondary-800  text-secondary-700 dark:text-secondary-300 
}

.badge--success::after {
    @apply bg-green-500 text-white
}
.smooth.badge--success::after {
   @apply bg-green-100 dark:bg-green-800  text-green-700 dark:text-green-300 
}

.badge--info::after {
    @apply bg-blue-500 text-white
}
.smooth.badge--info::after {
   @apply bg-blue-100 dark:bg-blue-800  text-blue-700 dark:text-blue-300 
}

.badge--warning::after {
    @apply bg-amber-500 text-white
}
.smooth.badge--warning::after {
   @apply bg-amber-100 dark:bg-amber-800  text-amber-700 dark:text-amber-300 
}

.badge--error::after {
    @apply bg-red-500 text-white
}
.smooth.badge--error::after {
   @apply bg-red-100 dark:bg-red-800  text-red-700 dark:text-red-300 
}
</style>