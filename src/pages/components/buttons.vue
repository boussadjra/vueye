<script setup lang="ts">
import btnProps from "~/components/core/inputs/VBtn/btnProps";
useHead({
  title: "Buttons",
});
</script>
<template>
  <ComponentsDemo title="Buttons">
    <ComponentsDemoItem title="Variants">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2">Default</VBtn>
        <VBtn variant="primary">Primary</VBtn>
        <VBtn variant="secondary">Secondary</VBtn>
        <VBtn variant="info">Info</VBtn>
        <VBtn variant="warning">Warning</VBtn>
        <VBtn variant="error">Error</VBtn>
        <VBtn variant="success">Success</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Size">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn variant="primary" size="xs" class="first:ml-2 first:mt-2">Button xs</VBtn>
        <VBtn variant="primary" size="sm">Button sm</VBtn>
        <VBtn variant="primary" size="md">Button md</VBtn>
        <VBtn variant="primary" size="lg">Button lg</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Corner">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn variant="secondary" corner="none" class="first:ml-2 first:mt-2"
          >Button</VBtn
        >
        <VBtn variant="secondary" corner="sm" class="first:ml-2 first:mt-2">Button</VBtn>
        <VBtn variant="secondary" corner="default" class="first:ml-2 first:mt-2"
          >Button</VBtn
        >
        <VBtn variant="secondary" corner="md" class="first:ml-2 first:mt-2">Button</VBtn>
        <VBtn variant="secondary" corner="lg" class="first:ml-2 first:mt-2">Button</VBtn>
        <VBtn variant="secondary" corner="xl" class="first:ml-2 first:mt-2">Button</VBtn>
        <VBtn variant="secondary" corner="2xl" class="first:ml-2 first:mt-2">Button</VBtn>
        <VBtn variant="secondary" corner="full" class="first:ml-2 first:mt-2"
          >Button</VBtn
        >
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Block">
      <div class="flex flex-wrap w-full space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn variant="primary" block class="first:ml-2 first:mt-2">Block button</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Outlined">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" outlined>Default</VBtn>
        <VBtn variant="primary" outlined>Primary</VBtn>
        <VBtn variant="secondary" outlined>Secondary</VBtn>
        <VBtn variant="info" outlined>Info</VBtn>
        <VBtn variant="warning" outlined>Warning</VBtn>
        <VBtn variant="error" outlined>Error</VBtn>
        <VBtn variant="success" outlined>Success</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Smooth">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" smooth>Default</VBtn>
        <VBtn variant="primary" smooth>Primary</VBtn>
        <VBtn variant="secondary" smooth>Secondary</VBtn>
        <VBtn variant="info" smooth>Info</VBtn>
        <VBtn variant="warning" smooth>Warning</VBtn>
        <VBtn variant="error" smooth>Error</VBtn>
        <VBtn variant="success" smooth>Success</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Text">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" text>Default</VBtn>
        <VBtn variant="primary" text>Primary</VBtn>
        <VBtn variant="secondary" text>Secondary</VBtn>
        <VBtn variant="info" text>Info</VBtn>
        <VBtn variant="warning" text>Warning</VBtn>
        <VBtn variant="error" text>Error</VBtn>
        <VBtn variant="success" text>Success</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Link">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" link>Default</VBtn>
        <VBtn variant="primary" link>Primary</VBtn>
        <VBtn variant="secondary" link>Secondary</VBtn>
        <VBtn variant="info" link>Info</VBtn>
        <VBtn variant="warning" link>Warning</VBtn>
        <VBtn variant="error" link>Error</VBtn>
        <VBtn variant="success" link>Success</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Disabled">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" disabled>Disabled</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Loading">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" loading>default</VBtn>
        <VBtn variant="primary" loading>Primary</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Icons only">
      <div class="flex flex-wrap items-center space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn
          size="xs"
          class="first:ml-2 first:mt-2"
          variant="primary"
          icon="i-carbon-arrow-right"
        ></VBtn>
        <VBtn size="sm" variant="primary" icon="i-carbon-arrow-right"></VBtn>
        <VBtn size="md" variant="primary" icon="i-carbon-arrow-right"></VBtn>
        <VBtn size="lg" variant="primary" icon="i-carbon-arrow-right"></VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Append and Prepend">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn variant="primary" append="i-carbon-checkmark" class="first:ml-2 first:mt-2"
          >Submit</VBtn
        >
        <VBtn variant="secondary" prepend="i-carbon-download">download</VBtn>
        <VBtn variant="primary" prepend="i-carbon-bookmark">Save</VBtn>
        <VBtn variant="success" prepend="i-carbon-bookmark-filled">Saved</VBtn>
      </div>
    </ComponentsDemoItem>

    <ComponentsDemoItem title="Custom colors">
      <div class="flex flex-wrap space-x-2 space-y-2 rtl:space-x-reverse">
        <VBtn class="first:ml-2 first:mt-2" bg-color="#05afe2">Proceed</VBtn>
        <VBtn bg-color="#05e2af" text-color="#555">Next</VBtn>
        <VBtn bg-color="#7f05fe" text-color="#fff" class="uppercase">Get Started</VBtn>
        <VBtn bg-color="#55f2ff" text-color="#555">Add to cart</VBtn>
      </div>
      <div class="mt-2 ml-2">
        <VBtn bg-color="#4552af" text-color="#fe0" size="lg" class="font-bold uppercase"
          >Sign up
          <span class="mx-2 i-carbon-arrow-right" />
        </VBtn>
      </div>
    </ComponentsDemoItem>
  </ComponentsDemo>
  <PropsDoc :component-props="btnProps" />
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>
