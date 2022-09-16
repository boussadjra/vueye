
<script setup lang="ts">
import checkboxProps from '~/components/core/inputs/VCheckbox/checkboxProps';

useHead({
    title: 'Checkboxes',
})




</script> 
<template>
    <ComponentsDemo title="Checkboxes">
        <ComponentsDemoItem title="Variants">
            <div class="flex flex-wrap gap-4">
                <VCheckbox variant="primary" aria-label="primay"/>
                <VCheckbox variant="secondary" aria-label="secondary"/>
                <VCheckbox variant="success" aria-label="success"/>
                <VCheckbox variant="danger" aria-label="danger"/>
                <VCheckbox variant="warning" aria-label="warning"/>
                <VCheckbox variant="info" aria-label="info"/>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Sizes">
            <div class="flex flex-wrap gap-4">
                <VCheckbox label="Small" size="sm" />
                <VCheckbox label="Medium" size="md" />
                <VCheckbox label="Large" size="lg" />
                <VCheckbox label="X Large" size="xl" />
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Indeterminate">
            <div class="flex flex-wrap gap-4">
                <VCheckbox label="Indeterminate" indeterminate />
             
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Custom text/icons checking/unchecking">
            <div class="flex flex-wrap gap-4">
                <VCheckbox size="md" variant="default" aria-label="selected/unselected">
                    <template #checked>
                        Selected
                    </template>
                    <template #unchecked>
                     Unselected
                    </template>
                </VCheckbox>
            </div>
            <div class="flex flex-wrap gap-4">
                <VCheckbox  aria-label="icon"  size="sm">
                    <template #checked>
                        <div class="i-carbon-bookmark-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-bookmark" />
                    </template>
                </VCheckbox>
                <VCheckbox  aria-label="icon"  size="md">
                    <template #checked>
                        <div class="i-carbon-bookmark-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-bookmark" />
                    </template>
                </VCheckbox>
                <VCheckbox  aria-label="icon"  size="lg">
                    <template #checked>
                        <div class="i-carbon-bookmark-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-bookmark" />
                    </template>
                </VCheckbox>
                <VCheckbox  aria-label="icon"  size="xl">
                    <template #checked>
                        <div class="i-carbon-bookmark-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-bookmark" />
                    </template>
                </VCheckbox>
            </div>
            <div class="flex flex-wrap gap-4 mt-2">
                <VCheckbox  aria-label="icon"   variant="secondary" size="sm">
                    <template #checked>
                        <span class="i-carbon-favorite-filled" />
                    </template>
                    <template #unchecked>
                        <div class="i-carbon-favorite" />
                    </template>
                </VCheckbox>
                <VCheckbox  aria-label="icon"   variant="secondary" size="md">
                    <template #checked>
                        <div class="i-carbon-favorite-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-favorite" />
                    </template>
                </VCheckbox>
                <VCheckbox  aria-label="icon"   variant="secondary" size="lg">
                    <template #checked>
                        <div class="i-carbon-favorite-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-favorite" />
                    </template>
                </VCheckbox>
                <VCheckbox  aria-label="icon"   variant="secondary" size="xl">
                    <template #checked>
                        <div class="i-carbon-favorite-filled" />
                    </template>
                    <template #unchecked>
                        <span class="i-carbon-favorite" />
                    </template>
                </VCheckbox>
            </div>
        </ComponentsDemoItem>

    </ComponentsDemo>
    <PropsDoc :component-props="checkboxProps" />
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>