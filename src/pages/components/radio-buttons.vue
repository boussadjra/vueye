<script setup lang="ts">
import radioProps from '~/components/core/inputs/VRadio/radioProps'

useHead({
  title: 'Radioes',
})
</script>
<template>
  <ComponentsDemo title="Radios">
    <ComponentsDemoItem title="Variants">
      <div class="flex flex-wrap gap-4">
        <VRadio name="variant" variant="default" aria-label="default" />
        <VRadio name="variant" variant="primary" aria-label="primay" />
        <VRadio name="variant" variant="secondary" aria-label="secondary" />
        <VRadio name="variant" variant="success" aria-label="success" />
        <VRadio name="variant" variant="danger" aria-label="danger" />
        <VRadio name="variant" variant="warning" aria-label="warning" />
        <VRadio name="variant" variant="info" aria-label="info" />
      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="Sizes">
      <div class="flex flex-wrap gap-4">
        <VRadio label="Small" name="size" size="sm" />
        <VRadio label="Medium" name="size" size="md" />
        <VRadio label="Large" name="size" size="lg" />
        <VRadio label="X Large" name="size" size="xl" />
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Custom radio">
      <div class="flex flex-wrap gap-4">
        <div class="bg-primary-50 dark:bg-primary-700 flex p-2 justify-center rounded">
          <VRadio name="align" aria-label="align-left" size="lg">
            <template #checked>
              <div class="i-carbon-text-align-left text-primary-400" />
            </template>
            <template #unchecked>
              <span class="i-carbon-text-align-left" />
            </template>
          </VRadio>
          <VRadio name="align" aria-label="align-center" size="lg">
            <template #checked>
              <div class="i-carbon-text-align-center text-primary-400" />
            </template>
            <template #unchecked>
              <span class="i-carbon-text-align-center" />
            </template>
          </VRadio>
          <VRadio name="align" aria-label="align-right" size="lg">
            <template #checked>
              <div class="i-carbon-text-align-right text-primary-400" />
            </template>
            <template #unchecked>
              <span class="i-carbon-text-align-right" />
            </template>
          </VRadio>
        </div>
      </div>
    </ComponentsDemoItem>
  </ComponentsDemo>
  <PropsDoc :component-props="radioProps" />
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>
