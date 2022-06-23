<script setup lang="ts">

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
        <VAvatar corner="full" class="first:ml-2 first:mt-2" src="/src/assets/img/flowers/f (3).jpg"></VAvatar>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Image :">
      <div class="flex flex-wrap items-center gap-2">
        <VAvatar corner="full" class="first:ml-2 first:mt-2" src="/src/assets/img/js.png"></VAvatar>
        <VAvatar corner="full" src="/src/asset/img/logo.svg" alt="vue"></VAvatar>
        <VAvatar corner="full" src="/src/assets/img/landscape.jpg" alt="vue"></VAvatar>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Stacked :">
      <div class="flex flex-wrap items-center gap-2">
        <VAvatarGroup>
          <VAvatar v-for="l in 4" corner="full" variant="primary" :src="'/src/assets/img/flowers/f (' + l + ').jpg'">
          </VAvatar>
          <VAvatar corner="full">
            <span class="text-sm">+2</span>
          </VAvatar>
        </VAvatarGroup>
      </div>
    </ComponentsDemoItem>

  </ComponentsDemo>
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>