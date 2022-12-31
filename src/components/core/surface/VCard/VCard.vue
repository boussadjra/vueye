<script setup lang="ts">
import cardProps from './cardProps'
import { useElevation } from '~/composables/core/elevation'

const props = defineProps(cardProps)
const slots = useSlots()
const { shapeClass } = useElevation(props)

const classes = computed(() => [
  'card',
  shapeClass.value,
  props.outlined ? 'bg-transparent' : ' bg-white  dark:bg-primary-850',
  props.block ? 'w-full' : 'max-w-lg',
  {
    'card--media-aside': props.mediaAside,
  },
])
</script>
<template>
  <component :is="tag" :class="[classes]">
    <slot name="media" />
    <div class="card__content">
      <div class="px-6 py-4">
        <div v-if="slots.header || title" class="mb-2 text-xl font-bold">
          <slot name="header">
            {{ title }}
          </slot>
        </div>
        <slot />
      </div>
      <div v-if="slots.footer" class="px-6 pt-3 pb-2">
        <slot name="footer" />
      </div>
    </div>
  </component>
</template>
<style scoped>
.card {
    @apply overflow-hidden rounded text-slate-500 dark:text-slate-100;
}

.card--media-aside {
    @apply flex max-w-max max-h-min;
}

.card--media-aside .card__content {
    @apply flex flex-col justify-between pb-4;
}
</style>
