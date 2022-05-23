

<script setup lang="ts">
import useEventsBus from '~/composables/core/eventBus';

const { bus } = useEventsBus()

watch(()=>bus.value.get('test'), (val) => {
    console.log('---dashboard index-----------------')
    console.log(val)
    console.log('--------------------')
 

})
</script>
<template>
    <div>
        dashboard page
    </div>
</template>
<style scoped>
</style>
<route lang="yaml">
meta:
  layout: dashboard
</route>