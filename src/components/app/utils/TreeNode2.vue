<script setup lang="ts">
const props = defineProps<{ item: Item }>()
const slots = useSlots()
// render slot with h
const renderSlot = (item: Item) => h('TreeNode2', { item }, { default: () => slots.default?.({ item }) })
</script>

<script lang="ts">
export interface Item {
  name: string
  children: Array<Item>
}
</script>

<template>
  <div>
    <div>
      <slot :item="item" />
    </div>
    <div v-for="(child, index) in item.children" :key="index" style="margin-left: 10px">
      <TreeNode2 :item="child">
        {{ renderSlot(child) }}
      </TreeNode2>
    </div>
  </div>
</template>
