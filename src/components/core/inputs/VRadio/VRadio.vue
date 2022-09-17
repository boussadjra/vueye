<script setup lang="ts">
import radioProps from './radioProps'

const attrs = useAttrs()

const props = defineProps(radioProps)

const id = computed(() => attrs.id ?? Math.random().toString(36).substr(2, 9))
const emit = defineEmits(['update:modelValue'])
const data = useVModel(props, 'modelValue', emit)

const classes = computed(() => [
  'v-radio',
  {
    'v-radio--disabled': props.disabled,
    'v-radio--checked': data.value,
  },
])
const wrapperClasses = computed(() => [
  'v-radio__wrapper',
  {
    'v-radio__wrapper--disabled': props.disabled,
    'v-radio__wrapper--checked': data.value,
  },
    `v-radio__wrapper--${props.size}`,
    `v-radio__wrapper--${props.variant}`,
])

const labelClasses = computed(() => [
  'v-radio__label ',
  {
    'v-radio__label--disabled': props.disabled,
    'v-radio__label--checked': data.value,
  },
    `v-radio__label--${props.size}`,
    `v-radio--${props.variant}`,
])

const slots = useSlots()
</script>
<script lang="ts">
export default {
  name: 'VRadio',
  inheritAttrs: false,
}
</script>
<template>
  <label :for="id" :class="labelClasses">
    <input v-bind="attrs" :id="id" v-model="data" type="radio" class="v-radio" :class="classes">
    <div v-if="!slots.checked || !slots.unchecked" :class="wrapperClasses">
      <div class="icon" />
    </div>

    <span v-if="slots.checked" class="slot slot--checked">
      <slot name="checked" />
    </span>
    <span v-if="slots.unchecked" class="slot slot--unchecked">
      <slot name="unchecked" />
    </span>
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

<style scoped>
 
.v-radio {
    @apply opacity-0 w-0 ;
}

.v-radio ~ * {
    @apply mx-2;
}

.v-radio__label {
    @apply cursor-pointer flex  items-center;
}

.v-radio__label--disabled {
    @apply cursor-not-allowed;
}

.v-radio__label--sm {
    @apply text-sm;
}

.v-radio__label--md {
    @apply text-base;
}

.v-radio__label--lg {
    @apply text-lg;
}

.v-radio__label--xl {
    @apply text-xl;
}

.v-radio__wrapper {
    @apply w-3 h-3 cursor-pointer flex items-center border-2 justify-center p-[2px] rounded-full box-content border-gray-500;
}

.v-radio__wrapper--disabled {
    @apply border-gray-400;
}

.v-radio__wrapper--sm {
    @apply w-2 h-2;
}

.v-radio__wrapper--md {
    @apply w-3 h-3;
}

.v-radio__wrapper--lg {
    @apply w-4 h-4;
}

.v-radio__wrapper--xl {
    @apply w-5 h-5;
}

.icon {
    @apply w-3 h-4 rounded-full scale-0 transition-all opacity-0 duration-300 bg-gray-500;
}

.v-radio__wrapper--sm .icon {
    @apply w-2 h-2;
}

.v-radio__wrapper--md .icon {
    @apply w-2 h-2;
}

.v-radio__wrapper--lg .icon {
    @apply w-3 h-3;
}

.v-radio__wrapper--xl .icon {
    @apply w-4 h-4;
}

.v-radio:checked + .v-radio__wrapper > .icon {
    @apply scale-100  opacity-100 border-white;
}

.v-radio:checked + .v-radio__wrapper--default > .icon {
    @apply border-gray-500 dark:border-gray-400;
}


.v-radio__wrapper {
    @apply border-gray-500 dark:border-gray-400;
}

.v-radio__wrapper--primary {
    @apply border-primary-500 dark:border-primary-400;
}

.v-radio__wrapper--secondary {
    @apply border-secondary-500 dark:border-secondary-400;
}

.v-radio__wrapper--success {
    @apply border-green-500 dark:border-green-400;
}

.v-radio__wrapper--danger {
    @apply border-red-500 dark:border-red-400;
}

.v-radio__wrapper--warning {
    @apply border-yellow-500 dark:border-yellow-400;
}

.v-radio__wrapper--info {
    @apply border-blue-500 dark:border-blue-400;
}

.v-radio:checked + .v-radio__wrapper--primary > .icon {
    @apply bg-primary-500 dark:bg-primary-400;
}

.v-radio:checked + .v-radio__wrapper--secondary > .icon {
    @apply bg-secondary-500 dark:bg-secondary-400;
}

.v-radio:checked + .v-radio__wrapper--success > .icon {
    @apply bg-green-500 dark:bg-green-400;
}

.v-radio:checked + .v-radio__wrapper--danger > .icon {
    @apply bg-red-500 dark:bg-red-400;
}

.v-radio:checked + .v-radio__wrapper--warning > .icon {
    @apply bg-yellow-500 dark:bg-yellow-400;
}

.v-radio:checked + .v-radio__wrapper--info > .icon {
    @apply bg-blue-500 dark:bg-blue-400;
}

.v-radio:hover + .v-radio__wrapper,
.v-radio:active + .v-radio__wrapper,
.v-radio:focus + .v-radio__wrapper {
    @apply ring-1 ring-offset-1 ring-primary-400;
}

.slot--checked,
.slot--unchecked {
    @apply flex items-center;
}

.v-radio--primary .slot {
    @apply text-primary-500 dark:text-primary-400;
}

.v-radio--secondary .slot {
    @apply text-secondary-500 dark:text-secondary-400;
}

.v-radio--success .slot {
    @apply text-green-500 dark:text-green-400;
}

.v-radio--danger .slot {
    @apply text-red-500 dark:text-red-400;
}

.v-radio--warning .slot {
    @apply text-yellow-500 dark:text-yellow-400;
}

.v-radio--info .slot {
    @apply text-blue-500 dark:text-blue-400;
}

.v-radio:checked ~ .slot--unchecked {
    @apply hidden;
}

.v-radio:not(:checked) ~ .slot--checked {
    @apply hidden;
}

.v-radio__label--sm .slot--checked {
    @apply text-sm;
}

.v-radio__label--md .slot--checked {
    @apply text-lg;
}

.v-radio__label--lg .slot--checked {
    @apply text-2xl;
}

.v-radio__label--xl .slot--checked {
    @apply text-4xl;
}

.v-radio__label--sm .slot--unchecked {
    @apply text-sm;
}

.v-radio__label--md .slot--unchecked {
    @apply text-lg;
}

.v-radio__label--lg .slot--unchecked {
    @apply text-2xl;
}

.v-radio__label--xl .slot--unchecked {
    @apply text-4xl;
}
</style>
