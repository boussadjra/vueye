---
title: Alerts
---
<script setup lang="ts">

const closedAlert=ref(false);
 
</script> 
<route lang="yaml">
meta:
  layout: dashboard
</route>

<ComponentsDemo title="Alerts">
        <ComponentsDemoItem title="Variants">
            <div class="flex flex-wrap gap-2">
                <VAlert> </VAlert>
                <VAlert variant="primary"> </VAlert>
                <VAlert variant="secondary"></VAlert>
                <VAlert variant="info"></VAlert>
                <VAlert variant="warning"></VAlert>
                <VAlert variant="error"></VAlert>
                <VAlert variant="success"></VAlert>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Outlined">
            <div class="flex flex-wrap gap-2">
                <VAlert outlined> </VAlert>
                <VAlert outlined variant="primary"> </VAlert>
                <VAlert outlined variant="secondary"></VAlert>
                <VAlert outlined variant="info"></VAlert>
                <VAlert outlined variant="warning"></VAlert>
                <VAlert outlined variant="error"></VAlert>
                <VAlert outlined variant="success"></VAlert>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Smooth">
            <div class="flex flex-wrap gap-2">
                <VAlert smooth> </VAlert>
                <VAlert smooth variant="primary"> </VAlert>
                <VAlert smooth variant="secondary"></VAlert>
                <VAlert smooth variant="info"></VAlert>
                <VAlert smooth variant="warning"></VAlert>
                <VAlert smooth variant="error"></VAlert>
                <VAlert smooth variant="success"></VAlert>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Custom prepend icon">
            <div class="flex flex-wrap gap-2">
                <VAlert variant="success" >
                 <template #prepend>
                   <span class="i-carbon-bookmark-filled"></span>
                 </template>
                 The product is added successfully.
                </VAlert>
                <VAlert variant="primary" >
                 <template #prepend>
                   <span class="i-carbon-export"></span>
                 </template>
                 The file is exported successfully.
                </VAlert>
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="Custom prepend icon">
            <div class="flex flex-wrap gap-2">
                <VAlert variant="error" dismissible v-model:closed="closedAlert" >
                 <template #prepend>
                   <span class="i-carbon-bookmark"></span>
                 </template>
                 The product isn't added.
                </VAlert>
            </div>
        </ComponentsDemoItem>
    </ComponentsDemo>
