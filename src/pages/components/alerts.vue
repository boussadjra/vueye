<script setup lang="ts">
import alertProps from "~/components/core/data-display/VAlert/alertProps";

useHead({
  title: "Alerts",
});

const closedAlert1 = ref(false);
const closedAlert2 = ref(false);

function resetAlerts() {
  closedAlert1.value = false;
  closedAlert2.value = false;
}
</script>

<template>
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
        <VAlert variant="success">
          <template #prepend>
            <span class="i-carbon-bookmark-filled"></span>
          </template>
          The product is added successfully.
        </VAlert>
        <VAlert variant="primary">
          <template #prepend>
            <span class="i-carbon-export"></span>
          </template>
          The file is exported successfully.
        </VAlert>
        <VAlert variant="info">
          <template #prepend>
            <span class="i-carbon-idea"></span>
          </template>
          <span class="font-bold">VAlert tip :</span> Use <code>#prepend</code> slot to
          customize the prepend icon.
        </VAlert>
      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="Dismissible alert">
      <div class="flex flex-wrap gap-2">
        <VAlert variant="error" dismissible v-model:closed="closedAlert1">
          <template #prepend>
            <span class="i-carbon-bookmark"></span>
          </template>
          The product isn't added.
        </VAlert>
        <VAlert variant="info" dismissible v-model:closed="closedAlert2">
          <template #prepend>
            <span class="i-carbon-bookmark-filled"></span>
          </template>
          The product is added successfully.
        </VAlert>
        <div v-auto-animate>
          <VBtn @click="resetAlerts" v-if="closedAlert1 && closedAlert2">Reset</VBtn>
        </div>
      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="Custom append icon">
      <div class="flex flex-wrap gap-2">
        <VAlert variant="info">
          <template #prepend>
            <span class="i-carbon-idea"></span>
          </template>
          <span class="font-bold">VAlert tip :</span> Use <code>#prepend</code> slot to
          customize the prepend icon.
          <template #append>
            <span class="text-2xl cursor-pointer i-carbon-arrow-right"></span>
          </template>
        </VAlert>
      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="Bordered alert">
      <div class="flex flex-wrap gap-2">
        <VAlert border="top" variant="primary"> </VAlert>
        <VAlert border="left" variant="primary"> </VAlert>
        <VAlert border="bottom" variant="primary"> </VAlert>
        <VAlert border="right" variant="primary"> </VAlert>
        <VAlert border="left" variant="secondary"> </VAlert>
        <VAlert border="top" smooth variant="secondary"> </VAlert>
        <VAlert border="bottom" variant="success"> </VAlert>
        <VAlert border="right" smooth variant="primary"> </VAlert>
        <VAlert border="bottom" smooth variant="secondary"> </VAlert>
        <VAlert border="top" smooth variant="info"> </VAlert>
        <VAlert border="left" smooth variant="warning"> </VAlert>
        <VAlert border="left" smooth variant="error"> </VAlert>
      </div>
    </ComponentsDemoItem>
    <ComponentsDemoItem title="Alert with title">
      <div class="flex flex-wrap gap-2 not-prose">
        <VAlert variant="success" title="Done successfully"> </VAlert>
      </div>
    </ComponentsDemoItem>
  </ComponentsDemo>
  <PropsDoc :component-props="alertProps" />
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>
