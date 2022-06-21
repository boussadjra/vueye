<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark } from '~/composables'

useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
<style>
.primary {
  @apply bg-primary-500
}

.primary.hoverable {
  @apply hover:bg-primary-600
}

.secondary{
 @apply bg-secondary-500
}
.secondary.hoverable {
  @apply hover:bg-secondary-600
}

.info{
  @apply bg-blue-500
}
.info.hoverable {
  @apply hover:bg-blue-600
}

.warning{
  @apply bg-yellow-500
}
.warning.hoverable {
  @apply hover:bg-yellow-600
}

.error{
  @apply bg-red-500
}
.error.hoverable {
  @apply hover:bg-red-600
}
</style>
