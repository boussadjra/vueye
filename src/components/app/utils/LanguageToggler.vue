<script setup lang="ts">
const {   locale } = useI18n()
watch(locale, (val) => {
  document.body.setAttribute('dir', val === 'ar' ? 'rtl' : 'ltr')
})
const availableLocales =[
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },

]

</script>

<template>
    <select v-model="locale"
    class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-primary-900 dark:text-gray-300 dark:border-gray-500 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
    <option v-for="locale in availableLocales" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>



<style scoped>

</style>