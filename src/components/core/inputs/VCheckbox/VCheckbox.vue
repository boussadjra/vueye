<script setup lang="ts">
import checkboxProps from './checkboxProps'

const attrs = useAttrs()

defineProps(checkboxProps)

const id = computed(() => attrs.id ?? Math.random().toString(36).substr(2, 9))
</script>
<script lang="ts">
export default {
  name: 'VCheckbox',
  inheritAttrs: false,
}
</script>
<template>
  <label :for="id" class="cursor-pointer">
    <input
      v-bind="attrs"
      :id="id"
      type="checkbox"
      class="v-checkbox hidden"
      :class="{
        'v-checkbox--checked': attrs.checked,
        'v-checkbox--disabled': attrs.disabled
      }"
    >
    <div class="border-2 h-5 w-5 flex items-center justify-center rounded">
      <span class="i-carbon-checkmark" />
    </div>

    <slot />
    <span class="v-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<style scoped></style>
