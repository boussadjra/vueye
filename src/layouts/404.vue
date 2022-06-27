<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main p="x4 y10" class="flex flex-col items-center justify-center h-full ">
    <div class="text-6xl text-amber-600">
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div class="flex justify-center mt-4 text-center">
      <VBtn variant="primary" @click="router.back()">
        {{ t('button.back') }}
      </VBtn>
    </div>
  </main>
</template>
<route lang="yaml">
meta:
  layout: home
</route>
