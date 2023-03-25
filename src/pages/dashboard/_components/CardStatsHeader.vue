<script setup lang='ts'>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});


</script>
<template>
    <div class="flex items-center space-x-2 rtl:space-x-reverse">
        <div :class="color" class=" p-2 rounded-full h-8 w-8 centered">
          <span :class="`${icon} scale-110`" />
        </div>
        <p class="text-sm font-light">
            {{ title }}
        </p>
      </div>
</template>


<style scoped>
</style>