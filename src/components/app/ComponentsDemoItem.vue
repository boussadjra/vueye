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
        <h3> {{ title }} </h3>
        <div>
            <slot></slot>
        </div>
    </div>
</template>



<style scoped>
</style>