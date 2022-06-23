<script setup lang="ts">

useHead({
    title: 'Button groups'

})

const selectedOption = ref(0);



</script> 

<template>
    <ComponentsDemo title="Button groups">
        <ComponentsDemoItem title="Basic usage :">
            <div class="flex flex-wrap gap-2">
                <VBtnGroup v-model="selectedOption">
                    <VBtn outlined>Left</VBtn>
                    <VBtn outlined>Center</VBtn>
                    <VBtn outlined>Right</VBtn>
                </VBtnGroup>
           
            </div>
            <div class="p-2">
                 Selected option : {{ selectedOption }}
            
            </div>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="With s :">
            <VBtnGroup>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-up"></span>
                </VBtn>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-down"></span>

                </VBtn>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-left"></span>

                </VBtn>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-right"></span>

                </VBtn>
            </VBtnGroup>
        </ComponentsDemoItem>
        <ComponentsDemoItem title="With vertical direction :">
            <VBtnGroup vertical>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-up"></span>
                </VBtn>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-down"></span>

                </VBtn>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-left"></span>

                </VBtn>
                <VBtn outlined  size="sm">
                    <span class="i-carbon-arrow-right"></span>

                </VBtn>
            </VBtnGroup>
        </ComponentsDemoItem>

    </ComponentsDemo>
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>