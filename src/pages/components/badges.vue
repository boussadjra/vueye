<script setup lang="ts">
// import BadgeProps from '~/components/core/data-display/VBadge/BadgeProps';

useHead({
  title: 'Badges'

})



</script> 

<template>
  <ComponentsDemo title="Badges">
    <ComponentsDemoItem title="Variants">
      <div class="flex flex-wrap gap-2 gap-x-12">
        <VBadge content="Default">
        </VBadge>
        <VBadge content="Primary" variant="primary" smooth></VBadge>
        <VBadge content="Secondary" variant="secondary"></VBadge>
        <VBadge content="Success" variant="success"></VBadge>
        <VBadge content="Info" variant="info"></VBadge>
        <VBadge content="Warning" variant="warning"></VBadge>
        <VBadge content="Error" variant="error"></VBadge>

      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="On icon">
      <div class="flex flex-wrap gap-2 gap-x-12">

        <VBadge content="+2" variant="secondary">
        <div class="i-carbon-notification-filled text-3xl"></div>
        </VBadge>
        <VBadge content="new" variant="secondary">
     badges
        </VBadge>
       
      </div>
    </ComponentsDemoItem>



  </ComponentsDemo>
  <!-- <PropsDoc :component-props="BadgeProps" /> -->
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>