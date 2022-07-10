<script setup lang="ts">
import breadcrumbProps from '~/components/core/navigation/VBreadcrumb/breadcrumbProps';
useHead({
    title: 'Cards'
})

const items = ref([
    {
        text: 'Dashboard',
        disabled: false,
        link: '/',
        icon: 'i-carbon-dashboard'
    },
    {
        text: "Statistics",
        disabled: false,
        link: '/statistics',
        icon: 'i-carbon-chart-combo'

    },
    {
        text: "Users",
        disabled: true,
        link: '/users',
        icon: 'i-carbon-user'
    }

])


</script> 

<template>
    <ComponentsDemo title="Breadcrumbs">
        <ComponentsDemoItem title="Basic usage">
            <div class="flex gap-2 gap-x-12">
                <VBreadcrumb :items="items"></VBreadcrumb>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Custom divider">
            <div class="flex gap-2 gap-x-12">
                <VBreadcrumb :items="items">
                    <template #divider>
                        <div i-carbon-arrow-right />
                    </template>
                </VBreadcrumb>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Custom items">
            <div class="flex flex-col gap-2 gap-x-12">
                <VBreadcrumb :items="items">
                    <template #divider>
                        <div i-carbon-chevron-right />
                    </template>
                    <template #item="{ item }">
                        <VBtn variant="primary" size="xs" :disabled="item.disabled">
                            <template #prepend>
                                <div :class="item.icon" class="mx-2" />
                            </template>
                            {{ item.text }}
                        </VBtn>
                    </template>
                </VBreadcrumb>
                <VBreadcrumb :items="items">
                    <template #item="{ item }">
                        <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <span :class="item.icon" />
                            <span>{{ item.text }}</span>
                        </div>
                    </template>
                </VBreadcrumb>
            </div>
        </ComponentsDemoItem>
    </ComponentsDemo>
    <PropsDoc :component-props="breadcrumbProps" />
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>