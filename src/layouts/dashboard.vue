<script setup lang="ts"></script>
<template>
  <div class="text-gray-700 dark:text-gray-200 bg-gray-100">
    <VHeader />
    <VSidebar />
    <main
      class="w-full min-h-screen pt-16 pb-20 main-content text-slate-600 dark:text-slate-50 dark:bg-primary-800"
    >
      <RouterView />

      <div class="fixed bottom-2 right-2 rtl:right-auto rtl:left-2">
        <VBtn tag="a" href="#top" icon="i-carbon-chevron-up" variant="secondary" aria-label="Go to top" />
      </div>
    </main>
  </div>
</template>
<style>
aside.sidebar__collapsed ~ .main-content {
    @apply md:pl-20 md:rtl:pr-28;
    transition: padding 0.5s ease;
}

aside:not(.sidebar__collapsed) ~ .main-content {
    @apply pl-0 rtl:pl-2 md:rtl:pr-40 md:rtl:pr-72 md:pl-72;
    transition: padding 0.5s ease;
}
</style>
