<script setup lang="ts"></script>
<template>
  <div class="pt-4">
    <div class="stat-cards flex gap-4 flex-wrap justify-around">
      <VCard>
        <template #header>
          <div class="text-sm font-light">
            Total followers
          </div>
        </template>
        <div class="text-4xl font-bold py-2">
          24.602
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-green-500 flex items-center"> <span class="i-carbon-arrow-up" />12%</span>
              since last week
            </span>
          </div>
        </template>
      </VCard>
      <VCard>
        <template #header>
          <div class="text-sm font-light">
            Last post total likes
          </div>
        </template>
        <div class="text-4xl font-bold py-2">
          1.602
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-red-500 flex items-center"> <span class="i-carbon-arrow-down" />1.5%</span>
              than the previous one
            </span>
          </div>
        </template>
      </VCard>
      <VCard>
        <template #header>
          <div class="text-sm font-light">
            Total Comments
          </div>
        </template>
        <div class="text-4xl font-bold py-2">
         478
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-red-500 flex items-center"> <span class="i-carbon-arrow-down" />6.8%</span>
              than the previous one
            </span>
          </div>
        </template>
      </VCard>
      <VCard>
        <template #header>
          <div class="text-sm font-light">
            Total Views
          </div>
        </template>
        <div class="text-4xl font-bold py-2">
          245.351
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <span class="text-xs font-light flex gap-1 items-center">
              <span class="text-green-500 flex items-center"> <span class="i-carbon-arrow-up" />25.4%</span>
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
