<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },

})
</script>
<template>
    <div class="pr-8 prose rtl:pr-0 rtl:pl-8 pl-8">
        <h2> {{ title }} </h2>
        <section>
            <slot></slot>
        </section>
    </div>
</template>



<style scoped>
</style>