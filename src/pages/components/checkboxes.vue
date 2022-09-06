
<script setup lang="ts">
import checkboxProps from '~/components/core/inputs/VCheckbox/checkboxProps';

useHead({
    title: 'Checkboxes',
})




</script> 
<template>
    <ComponentsDemo title="Text fields">
        <ComponentsDemoItem title="Variants">
            <div class="flex flex-wrap gap-4">
          TODO
            </div>
        </ComponentsDemoItem>
      
    </ComponentsDemo>
    <PropsDoc :component-props="checkboxProps" />
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>