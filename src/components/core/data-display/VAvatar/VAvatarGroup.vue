<template>
    <div class="flex items-center -space-x-4 rtl:space-x-reverse avatar-group">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style >
.avatar-group .avatar{
    @apply border-2 border-slate-50 dark:border-slate-800;
}
</style>