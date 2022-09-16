<script setup lang="ts">
import checkboxProps from './checkboxProps'

const attrs = useAttrs()

const props = defineProps(checkboxProps)

const id = computed(() => attrs.id ?? Math.random().toString(36).substr(2, 9))
const emit = defineEmits(['update:modelValue'])
const data = useVModel(props, 'modelValue', emit)

const classes = computed(() => [
  'v-checkbox',
  {
    'v-checkbox--disabled': props.disabled,
    'v-checkbox--indeterminate': props.indeterminate,
    'v-checkbox--checked': data.value
  },

])
const wrapperClasses = computed(() => [
  'v-checkbox__wrapper',
  {
    'v-checkbox__wrapper--disabled': props.disabled,
    'v-checkbox__wrapper--indeterminate': props.indeterminate,
    'v-checkbox__wrapper--checked': data.value
  },
  `v-checkbox__wrapper--${props.size}`,
  `v-checkbox__wrapper--${props.variant}`,
])

const labelClasses = computed(() => [
  'v-checkbox__label ',
  {
    'v-checkbox__label--disabled': props.disabled,
    'v-checkbox__label--indeterminate': props.indeterminate,
    'v-checkbox__label--checked': data.value
  },
  `v-checkbox__label--${props.size}`,
  `v-checkbox--${props.variant}`,
])

const slots = useSlots()
</script>
<script lang="ts">
export default {
  name: 'VCheckbox',
  inheritAttrs: false,
}
</script>
<template>
  <label :for="id" :class="labelClasses">
    <input v-bind="attrs" :id="id" v-model="data" type="checkbox" class="v-checkbox  " :class="classes">
    <div :class="wrapperClasses" v-if="!slots.checked || !slots.unchecked">
      <div class="icon" :class="{'icon--indeterminate':indeterminate}" />
    </div>

    <span v-if="slots.checked" class="slot slot--checked">
      <slot name="checked" />
    </span>
    <span v-if="slots.unchecked" class="slot slot--unchecked ">
      <slot name="unchecked" />
    </span>

    <slot>
      {{ label }}
    </slot>
  </label>
</template>

<style scoped>
.v-checkbox {
  @apply opacity-50 w-0;
}

.v-checkbox__label {
  @apply cursor-pointer flex gap-2 items-center
}

.v-checkbox__label--disabled {
  @apply cursor-not-allowed
}

.v-checkbox__label--sm {
  @apply text-sm
}

.v-checkbox__label--md {
  @apply text-base
}

.v-checkbox__label--lg {
  @apply text-lg
}

.v-checkbox__label--xl {
  @apply text-xl
}

.v-checkbox__wrapper {
  @apply w-3 h-3 cursor-pointer flex items-center border-2 justify-center p-[2px] rounded-sm box-content border-gray-500;
}



.v-checkbox__wrapper--indeterminate {
  @apply border-primary-500;
}

.v-checkbox__wrapper--disabled {
  @apply border-gray-400;
}

.v-checkbox__wrapper--sm {
  @apply w-2 h-2;
}

.v-checkbox__wrapper--md {
  @apply w-3 h-3;
}

.v-checkbox__wrapper--lg {
  @apply w-4 h-4;
}

.v-checkbox__wrapper--xl {
  @apply w-5 h-5;
}

.icon {
  @apply border-b-[3px] mb-0.5 border-l-[3px] h-[6px] -rotate-45 w-3 scale-0 transition-all opacity-0 duration-300 border-gray-500;
}



.v-checkbox__wrapper--sm .icon {
  @apply border-b-[2px] mb-0.5 border-l-[2px] w-4 h-[4px];
}

.v-checkbox__wrapper--md .icon {
  @apply border-b-[3px] border-l-[3px] w-3 h-[6px];
}

.v-checkbox__wrapper--lg .icon {
  @apply border-b-[4px] border-l-[4px] w-4 h-[8px];
}

.v-checkbox__wrapper--xl .icon {
  @apply border-b-[5px] mb-1 border-l-[5px] w-5 h-[10px];
}


.v-checkbox:checked+.v-checkbox__wrapper>.icon {
  @apply scale-100 -rotate-45 opacity-100 border-white;
}

.v-checkbox:checked+.v-checkbox__wrapper--default>.icon {
  @apply border-gray-500 dark:border-gray-400;
}


.v-checkbox:checked+.v-checkbox__wrapper>.icon--indeterminate {
  @apply rotate-0 border-l-0 transition-none
}

.v-checkbox__wrapper {
  @apply border-gray-500 dark:border-gray-400;
}

.v-checkbox__wrapper--primary {
  @apply border-primary-500 dark:border-primary-400;
}

.v-checkbox__wrapper--secondary {
  @apply border-secondary-500 dark:border-secondary-400;
}

.v-checkbox__wrapper--success {
  @apply border-green-500 dark:border-green-400;
}

.v-checkbox__wrapper--danger {
  @apply border-red-500 dark:border-red-400;
}

.v-checkbox__wrapper--warning {
  @apply border-yellow-500 dark:border-yellow-400;
}

.v-checkbox__wrapper--info {
  @apply border-blue-500 dark:border-blue-400;
}




.v-checkbox:checked+.v-checkbox__wrapper--primary {
  @apply bg-primary-500 dark:bg-primary-400;
}

.v-checkbox:checked+.v-checkbox__wrapper--secondary {
  @apply bg-secondary-500 dark:bg-secondary-400;
}

.v-checkbox:checked+.v-checkbox__wrapper--success {
  @apply bg-green-500 dark:bg-green-400;
}

.v-checkbox:checked+.v-checkbox__wrapper--danger {
  @apply bg-red-500 dark:bg-red-400;
}

.v-checkbox:checked+.v-checkbox__wrapper--warning {
  @apply bg-yellow-500 dark:bg-yellow-400;
}

.v-checkbox:checked+.v-checkbox__wrapper--info {
  @apply bg-blue-500 dark:bg-blue-400;
}


.v-checkbox:hover+.v-checkbox__wrapper,
.v-checkbox:active+.v-checkbox__wrapper,
.v-checkbox:focus+.v-checkbox__wrapper {
  @apply ring-1 ring-offset-1 ring-primary-400;
}

.slot--checked,
.slot--unchecked {
  @apply flex items-center;
}

.v-checkbox--primary .slot {
  @apply text-primary-500 dark:text-primary-400;
}

.v-checkbox--secondary .slot {
  @apply text-secondary-500 dark:text-secondary-400;
}

.v-checkbox--success .slot {
  @apply text-green-500 dark:text-green-400;
}

.v-checkbox--danger .slot {
  @apply text-red-500 dark:text-red-400;
}

.v-checkbox--warning .slot {
  @apply text-yellow-500 dark:text-yellow-400;
}

.v-checkbox--info .slot {
  @apply text-blue-500 dark:text-blue-400;
}

.v-checkbox:checked~.slot--unchecked {
  @apply hidden;
}

.v-checkbox:not(:checked)~.slot--checked {
  @apply hidden;
}



.v-checkbox__label--sm .slot--checked {
  @apply text-sm;
}

.v-checkbox__label--md .slot--checked {
  @apply text-lg;
}

.v-checkbox__label--lg .slot--checked {
  @apply text-2xl;
}

.v-checkbox__label--xl .slot--checked {
  @apply text-4xl;
}

.v-checkbox__label--sm .slot--unchecked {
  @apply text-sm;
}

.v-checkbox__label--md .slot--unchecked {
  @apply text-lg;
}

.v-checkbox__label--lg .slot--unchecked {
  @apply text-2xl;
}

.v-checkbox__label--xl .slot--unchecked {
  @apply text-4xl;
}
</style>
