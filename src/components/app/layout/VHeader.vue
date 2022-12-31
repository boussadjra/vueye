<script setup lang="ts">
import { toggleDark } from '~/composables'
import useEventsBus from '~/composables/core/eventBus'
import myLogo from '~/assets/img/myLogo.jpg'
const sidebarCollapsed = ref(false)
const { emit } = useEventsBus()
watch(sidebarCollapsed, (val) => {
  emit('sidebarCollapsed', val)
})

const { t } = useI18n()

</script>
<template>
  <!-- header component -->

  <header
    :class="` pr-2 pl-2 transition-padding duration-700 w-full  md:fixed right-0 z-20 flex flex-col items-center justify-center md:justify-between  px-4 py-2 space-y-2 shadow-md  md:py-0 md:space-y-none md:h-16 md:flex-row bg-white dark:bg-primary-900`">
    <div class="flex items-center justify-center h-16 text-5xl pl-4">
      <RouterLink to="/" class="i-carbon-flash-filled text-primary-400" aria-label="go to home" />
    </div>

    <div>
      <div class="relative">
        <span
          class="absolute inset-y-0 z-10 flex items-center pl-3 text-xl text-gray-500 i-carbon-search top-1/4 left-3" />
        <input type="text" placeholder="Type Something"
          class="w-full min-w-[300px] py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-primary-900 dark:text-gray-300 dark:border-gray-500 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
      </div>
    </div>
    <div class="flex items-center space-x-4 rtl:space-x-reverse text-slate-600 dark:text-white">
      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <LanguageToggler />
      <button aria-label="notification"
        class="text-xl cursor-pointer i-carbon-notification hover:bg-slate-500 text-slate-600 dark:text-white" />
      <div class="flex items-center cursor-pointer">
        <VAvatar corner="full" :src="myLogo" alt="logo" size="xs"></VAvatar>
      </div>
    </div>
  </header>
</template>
<style scoped>

</style>
