<script setup lang="ts">
import avatarProps from '~/components/core/data-display/VAvatar/avatarProps';

import flower1 from '~/assets/img/flowers/f (1).jpg';
import flower2 from '~/assets/img/flowers/f (2).jpg';
import flower3 from '~/assets/img/flowers/f (4).jpg';
import flower4 from '~/assets/img/flowers/f (3).jpg';
import landscape from '~/assets/img/landscape.jpg';
import jsLogo from '~/assets/img/js.png';

const imgs=[flower1,flower2,flower3,flower4];
useHead({
  title: 'Avatars'

})



</script> 

<template>
  <ComponentsDemo title="Avatars">
    <ComponentsDemoItem title="Corner style (border radius) :">
      <div class="flex flex-wrap gap-2">
        <VAvatar corner="xs">A </VAvatar>
        <VAvatar corner="sm">B </VAvatar>
        <VAvatar corner="md">C </VAvatar>
        <VAvatar corner="lg">D </VAvatar>
        <VAvatar corner="xl">E </VAvatar>
        <VAvatar corner="2xl">F </VAvatar>
        <VAvatar corner="full">G </VAvatar>

      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="Size :">
      <div class="flex flex-wrap items-center gap-2">
        <VAvatar size="xs" corner="full">A </VAvatar>
        <VAvatar size="sm" corner="full">B </VAvatar>
        <VAvatar size="md" corner="full">C </VAvatar>
        <VAvatar size="lg" corner="full">D </VAvatar>
        <VAvatar size="xl" corner="full">E </VAvatar>
        <VAvatar size="xxl" corner="full">F </VAvatar>

      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Image :">
      <div class="flex flex-wrap items-center gap-2">
        <VAvatar corner="full" class="first:ml-2 first:mt-2" :src="flower3"></VAvatar>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Image :">
      <div class="flex flex-wrap items-center gap-2">
        <VAvatar corner="full" class="first:ml-2 first:mt-2" :src="jsLogo"></VAvatar>
        <VAvatar corner="full" src="/src/asset/img/logo.svg" alt="vue"></VAvatar>
        <VAvatar corner="full" :src="landscape" alt="vue"></VAvatar>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Stacked :">
      <div class="flex flex-wrap items-center gap-2">
        <VAvatarGroup>
          <VAvatar v-for="img in imgs" corner="full" variant="primary" :src="img">
          </VAvatar>
          <VAvatar corner="full">
            <span class="text-sm">+2</span>
          </VAvatar>
        </VAvatarGroup>
      </div>
    </ComponentsDemoItem>

  </ComponentsDemo>
 <PropsDoc :component-props="avatarProps" />
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>