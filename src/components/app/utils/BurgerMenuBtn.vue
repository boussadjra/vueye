<script setup lang="ts">
const isOpen = ref(false)
const genericburgerLine
  = 'h-0.5 w-6 my-1 rounded-full bg-gray-700 dark:bg-white transition ease transform duration-300'
const emit = defineEmits(['open'])

function handleMenu() {
  isOpen.value = !isOpen.value
  emit('open', isOpen.value)
}
</script>
<template>
  <button aria-label="Menu"
    class="flex rtl:rotate-180 flex-col w-8 h-8 md:h-12 md:w-12 rounded justify-center items-center group"
    @click="handleMenu">
    <span :class="`${genericburgerLine} ${!isOpen
    ? 'rotate-45 translate-y-4 -translate-x-3 opacity-50 group-hover:opacity-100 md:w-3 '
    : 'opacity-50 group-hover:opacity-100'
    }`" />
    <span :class="`${genericburgerLine} ${!isOpen ? ' translate-y-[1.7px] -translate-x-[2.4px]' : ''
    } opacity-50 group-hover:opacity-100`" />
    <span :class="`${genericburgerLine} ${!isOpen
    ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 md:w-3 -translate-x-3'
    : 'opacity-50 group-hover:opacity-100'
    }`" />
  </button>
</template>

<style scoped>
</style>
