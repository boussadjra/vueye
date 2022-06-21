<script setup lang="ts">
import { ref } from 'vue'
import VBtn from './VBtn.vue'

const text = ref('Click me')

</script>

<template>
    <Story title="Components/buttons" :layout="{type:'grid', width: 'auto' }">
        <Variant title="Variants">
            <div class="flex flex-wrap gap-2">
                <VBtn> default </VBtn>
                <VBtn variant="primary"> primary </VBtn>
                <VBtn variant="secondary"> secondary </VBtn>
                <VBtn variant="info">Info</VBtn>
                <VBtn variant="warning">Warning</VBtn>
                <VBtn variant="error">Error</VBtn>
                <VBtn variant="success">Success</VBtn>
            </div>
        </Variant>

        <Variant title="Sizes">
            <div class="flex flex-wrap gap-2">
                <VBtn variant="primary" size="xs">Button xs</VBtn>
                <VBtn variant="primary" size="sm">Button sm</VBtn>
                <VBtn variant="primary" size="md">Button md</VBtn>
                <VBtn variant="primary" size="lg">Button lg</VBtn>
            </div>
        </Variant>

        <Variant title="Corner">
            <div class="flex flex-wrap gap-2">
                <VBtn variant="secondary" corner="none">Button</VBtn>
                <VBtn variant="secondary" corner="sm">Button</VBtn>
                <VBtn variant="secondary" corner="default">Button</VBtn>
                <VBtn variant="secondary" corner="md">Button</VBtn>
                <VBtn variant="secondary" corner="lg">Button</VBtn>
                <VBtn variant="secondary" corner="xl">Button</VBtn>
                <VBtn variant="secondary" corner="2xl">Button</VBtn>
                <VBtn variant="secondary" corner="full">Button</VBtn>
            </div>
        </Variant>

        <Variant title="Block">
            <div class="flex flex-wrap gap-2">
                <VBtn variant="primary" block>Block button</VBtn>
            </div>
        </Variant>

        <Variant title="Outlined">
            <div class="flex flex-wrap gap-2">
                <VBtn outlined>Default</VBtn>
                <VBtn variant="primary" outlined>Primary</VBtn>
                <VBtn variant="secondary" outlined>Secondary</VBtn>
                <VBtn variant="info" outlined>Info</VBtn>
                <VBtn variant="warning" outlined>Warning</VBtn>
                <VBtn variant="error" outlined>Error</VBtn>
                <VBtn variant="success" outlined>Success</VBtn>
            </div>
        </Variant>

        <Variant title="Smooth">
            <div class="flex flex-wrap gap-2">
                <VBtn smooth>Default</VBtn>
                <VBtn variant="primary" smooth>Primary</VBtn>
                <VBtn variant="secondary" smooth>Secondary</VBtn>
                <VBtn variant="info" smooth>Info</VBtn>
                <VBtn variant="warning" smooth>Warning</VBtn>
                <VBtn variant="error" smooth>Error</VBtn>
                <VBtn variant="success" smooth>Success</VBtn>
            </div>
        </Variant>

        <Variant title="Text">
            <div class="flex flex-wrap gap-2">
                <VBtn text>Default</VBtn>
                <VBtn variant="primary" text>Primary</VBtn>
                <VBtn variant="secondary" text>Secondary</VBtn>
                <VBtn variant="info" text>Info</VBtn>
                <VBtn variant="warning" text>Warning</VBtn>
                <VBtn variant="error" text>Error</VBtn>
                <VBtn variant="success" text>Success</VBtn>
            </div>
        </Variant>

        <Variant title="Link">
            <div class="flex flex-wrap gap-2">
                <VBtn link>Default</VBtn>
                <VBtn variant="primary" link>Primary</VBtn>
                <VBtn variant="secondary" link>Secondary</VBtn>
                <VBtn variant="info" link>Info</VBtn>
                <VBtn variant="warning" link>Warning</VBtn>
                <VBtn variant="error" link>Error</VBtn>
                <VBtn variant="success" link>Success</VBtn>
            </div>
        </Variant>

        <Variant title="Disabled">
            <div class="flex flex-wrap gap-2">
                <VBtn disabled>Disabled </VBtn>
            </div>
        </Variant>

        <Variant title="Loading">
            <div class="flex flex-wrap gap-2">
                <VBtn loading>default</VBtn>
                <VBtn variant="primary" loading>Primary</VBtn>
            </div>
        </Variant>

        <Variant title="Append and prepend">
            <div class="flex flex-wrap gap-2">
                <VBtn variant="primary" append="i-carbon-checkmark">Submit</VBtn>
                <VBtn variant="secondary" prepend="i-carbon-download">download</VBtn>
                <VBtn variant="primary" prepend="i-carbon-bookmark">Save</VBtn>
                <VBtn variant="success" prepend="i-carbon-bookmark-filled">Saved</VBtn>
            <VBtn  append="i-carbon-logo-github">github </VBtn>

            <VBtn bg-color="#4552af" text-color="#fe0"  size="lg" append="i-carbon-arrow-right">Sign up </VBtn>

            </div>
        </Variant>

        <Variant title="Custom colors">
            <div class="flex flex-wrap items-stretch gap-2">
                <VBtn bg-color="#05afe2">Proceed</VBtn>
                <VBtn bg-color="#05e2af" text-color="#555">Next</VBtn>
                <VBtn bg-color="#7f05fe" text-color="#fff" class="uppercase">Get Started</VBtn>
                <VBtn bg-color="#55f2ff" text-color="#555">Add to cart</VBtn>
            </div>
        </Variant>

        <template #controls>
            <HstText title="default slot" v-model="text" />
       
        </template>
    </Story>
</template>
