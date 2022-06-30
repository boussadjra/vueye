<script setup lang="ts">
import BadgeProps from '~/components/core/data-display/VBadge/badgeProps';
import landscape from '~/assets/img/landscape.jpg';

useHead({
  title: 'Badges'

})

const avatarSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

const count=ref(1)
</script> 

<template>
  <ComponentsDemo title="Badges">
    <ComponentsDemoItem title="Variants (solid & smooth)">
      <div class="flex flex-wrap gap-2 gap-x-12">
        <VBadge content="Default">
        </VBadge>
        <VBadge content="Primary" variant="primary" ></VBadge>
        <VBadge content="Secondary" variant="secondary"></VBadge>
        <VBadge content="Success" variant="success"></VBadge>
        <VBadge content="Info" variant="info"></VBadge>
        <VBadge content="Warning" variant="warning"></VBadge>
        <VBadge content="Error" variant="error"></VBadge>

      </div>
      <div class="flex flex-wrap gap-2 gap-x-12 mt-4">
        <VBadge smooth content="Default">
        </VBadge>
        <VBadge smooth content="Primary" variant="primary" ></VBadge>
        <VBadge smooth content="Secondary" variant="secondary"></VBadge>
        <VBadge smooth content="Success" variant="success"></VBadge>
        <VBadge smooth content="Info" variant="info"></VBadge>
        <VBadge smooth content="Warning" variant="warning"></VBadge>
        <VBadge smooth content="Error" variant="error"></VBadge>

      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="With Icons and text :">
      <div class="flex flex-wrap gap-2 gap-x-12 mt-6">

        <VBadge content="+2" variant="secondary">
          <div class="i-carbon-notification-filled text-3xl"></div>
        </VBadge>
        <VBadge variant="error">
          <div class="i-carbon-notification-filled text-3xl"></div>
        </VBadge>
        <VBadge variant="error">
          <div class="i-carbon-home text-3xl"></div>
        </VBadge>
        <VBadge content="new" variant="secondary">
          badges
        </VBadge>

      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="With Avatars">
      <div class="flex flex-wrap gap-2 gap-x-12 mt-6">
        <VBadge v-for="(size) in avatarSizes" :key="size" variant="error">
          <VAvatar :src="landscape" :size="size" corner="full"></VAvatar>
        </VBadge>
      </div>
      <div class="flex flex-wrap gap-2 gap-x-12 mt-6">
        <VBadge v-for="(size) in avatarSizes" :key="size" variant="success">
          <VAvatar :size="size" corner="md">C </VAvatar>
        </VBadge>

      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="In Button :">
      <div class="flex flex-wrap gap-2 gap-x-12 mt-6">
        <VBtn variant="primary" smooth @click="count++">Count
          <template #append>
            <VBadge :content="`+${count}`" variant="success"></VBadge>
          </template>
        </VBtn>

      </div>
    </ComponentsDemoItem>



  </ComponentsDemo>
  <PropsDoc :component-props="BadgeProps" />
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>