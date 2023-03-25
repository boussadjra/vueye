<script setup lang="ts">
import CardStatsHeader from './_components/CardStatsHeader.vue';
</script>
<template>
  <div class="pt-4">
    <div class="stat-cards flex gap-4 flex-wrap justify-around">
      <VCard elevation="xs">
        <template #header>
          <CardStatsHeader title="Total followers" icon="i-carbon-user-follow" color="bg-green-200 dark:bg-green-800" />

        </template>
        <div class="text-4xl font-bold py-2">
          24.602
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-green-700 font-bold flex items-center"> <span class="i-carbon-arrow-up" />12%</span>
              since last week
            </span>
          </div>
        </template>
      </VCard>
      <VCard elevation="xs">
        <template #header>
          <CardStatsHeader title="Last post likes" icon="i-carbon-thumbs-up" color="bg-yellow-200 dark:bg-yellow-800" />
        </template>
        <div class="text-4xl font-bold py-2">
          1.602
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-red-500 flex items-center font-bold"> <span class="i-carbon-arrow-down" />1.5%</span>
              than the previous one
            </span>
          </div>
        </template>
      </VCard>
      <VCard elevation="xs">
        <template #header>
          <CardStatsHeader title="Total comments" icon="i-carbon-chat" color="bg-blue-200 dark:bg-blue-800" />

        </template>
        <div class="text-4xl font-bold py-2">
          478
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-red-500 flex items-center font-bold"> <span class="i-carbon-arrow-down " />6.8%</span>
              than the previous one
            </span>
          </div>
        </template>
      </VCard>
      <VCard elevation="xs">
        <template #header>
          <CardStatsHeader title="Total views" icon="i-carbon-view" color="bg-purple-200 dark:bg-purple-800" />
        </template>
        <div class="text-4xl font-bold py-2">
          245.351
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-green-500 flex items-center font-bold"> <span class="i-carbon-arrow-up" />25.4%</span>
              since last month
            </span>
          </div>
        </template>
      </VCard>



    </div>

  </div>
</template>
<style scoped></style>
<route lang="yaml">
meta:
  layout: dashboard
</route>
