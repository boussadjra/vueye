

<script setup lang="ts">
import breadcrumbProps from './breadcrumbProps';

defineProps(breadcrumbProps)

const router = useRouter()

</script>
<template>
    <div class="breadcrumb">
        <!-- render the items separated by the divider -->
        <ul class="flex space-x-2 font-light rtl:space-x-reverse">
            <li v-for="(item, index) in items" class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="mx-3">
                    <template v-if="index > 0">
                        <slot name="divider">{{ divider }}</slot>
                    </template>
                </span>
                <slot name="item" :item="item">
                    <component :is="tag" class="inline"
                        :class="{ 'text-primary-500 dark:text-primary-400': !item.disabled, 'cursor-pointer': item.link }"
                        @click="item.link && router.push(item.link)">{{ item.text }}</component>
                </slot>
            </li>
        </ul>
    </div>
</template>
<style scoped>
a {
    @apply cursor-pointer;
}

:slotted(.btn),
:slotted(div) {
    @apply flex;
}
</style>