<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },

})
</script>
<template>
    <div class="">
    <h2> {{title}} </h2>
    <section>
     <slot></slot>
    </section>
    </div>
</template>



<style scoped>

</style>