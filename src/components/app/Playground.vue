

<script setup lang="ts">
const slots = useSlots()

const slottedNodes = slots.default?.()



if (slottedNodes && slottedNodes.length > 1) {
  throw Error('VBadge: only one slot is allowed')
}
const componentProps = computed(() => {
  if (slottedNodes && slottedNodes.length) {
    let [node] = slottedNodes
    //@ts-ignore
    return node.type.props
  }
})

console.log('--------componentProps------------')
console.log(componentProps.value.append.type.name)
console.log('--------------------')
</script>
<template>
  <div class="px-16 py-8 w-full">

    <div class="flex gap-4 w-full">
      <div>
        <ul class="space-y-4">
          <li v-for="(prop, key,index) in componentProps" :key="index">
          <span class="mr-2">{{key}}</span>
          <span v-if="prop.type.name=='String'"><input aria-label="prop value" /></span>
          <span v-if="prop.type.name=='Boolean'"><input type="checkbox" aria-label="prop value" /></span>

          </li>
        </ul>
      </div>
      <div class="flex items-center justify-center">
      <slot></slot>
      </div>
    </div>

  </div>
</template>
<style scoped>
</style>
<route lang="yaml">
meta:
  layout: home
</route>