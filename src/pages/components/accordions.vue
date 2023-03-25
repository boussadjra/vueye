<script setup lang="ts">
import { VAccordion } from "~/components/core";
useHead({
    title: "Vueye - Accordions",
});


const accordionItems = [
    {
        id: "1",
        title: "Introduction",
        content:
            "Welcome to our website! Here, you will find all the information you need about our products and services.",
    },
    {
        id: "2",
        title: "Our History",
        content:
            "Our company was founded in 1985 by John Smith. Since then, we have been providing high-quality products and services to our customers.",
    },
    {
        id: "3",
        title: "Our Products",
        content:
            "We offer a wide range of products, including electronics, clothing, and home goods. Our products are of the highest quality and are sold at competitive prices.",
    },
    {
        id: "4",
        title: "Our Services",
        content:
            "In addition to our products, we also offer a variety of services, including installation, repair, and maintenance. Our expert technicians are trained to provide the best service possible.",
    },
];

const expandedItem1 = ref(1);
const expandedItem2 = ref(1);

</script>
<template>
    <ComponentsDemo title="Accordions">
        <ComponentsDemoItem title="Basic usage">
            <div class="flex flex-wrap gap-2">
                <VAccordion :items="accordionItems" outlined v-model="expandedItem1" />
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Custom rendering">
            <div class="flex flex-wrap gap-2">
                <VAccordion :items="accordionItems" v-model="expandedItem2">
                    <template #item-title="{ item }">
                        <span class="text-lg font-semibold"># {{ item.title }}</span>
                    </template>
                    <template #item-content="{ item }">
                        <p class="text-sm text-gray-500">{{ item.content }}</p>
                    </template>
                    <template #icon="slotProps">
                        <span class="i-carbon-add" :class="slotProps.expanded ? 'transform rotate-45' : ''"></span>
                    </template>
                </VAccordion>
            </div>
        </ComponentsDemoItem>
    </ComponentsDemo>


</template>

<style scoped></style>
<route lang="yaml">
meta:
  layout: dashboard
</route>
