<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="text-5xl font-bold uppercase text-amber-600">
    {{ t("not-found") }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
