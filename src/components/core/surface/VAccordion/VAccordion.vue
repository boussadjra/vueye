<script setup lang="ts">
import { PropType } from "vue";
import accordionProps from "./accordionProps";

interface AccordionItem {
  id: string | number;
  title: string;
  content: string;
}
const props = defineProps({
  ...accordionProps,
  modelValue: {
    type: [String, Number],
    default: null,
  },
  items: {
    type: Array as PropType<AccordionItem[]>,
    default: () => [],
    description: "The items to be displayed in the accordion",
  },
});

const classes = computed(() => [
  "accordion",
  props.outlined ? "bg-transparent" : " bg-white  dark:bg-primary-850",
  props.block ? "w-full" : "max-w-lg",
]);

const emit = defineEmits(["update:modelValue"]);

const expandedItem = useVModel(props, "modelValue", emit);

function expandItem(item: AccordionItem) {
  expandedItem.value = expandedItem.value === item.id ? -1 : item.id;
}

const isExpanded = (item: AccordionItem) => expandedItem.value === item.id;
</script>
<template>
  <component :is="tag" :class="[classes]">
    <div v-for="item in items" :key="item.id">
      <div class="accordion__item">
        <div class="accordion__item__header" @click="() => expandItem(item)">
          <slot name="item-title" :item="item">
            <div class="accordion__item__header__title">
              {{ item.title }}
            </div>
          </slot>
          <slot name="icon" :item="item" :expanded="isExpanded(item)">
            <div
              class="accordion__item__header__icon"
              :class="{ 'accordion__item__header__icon--expanded': isExpanded(item) }"
            >
              <span class="i-carbon-chevron-down" />
            </div>
          </slot>
        </div>

        <div
          :class="{ 'accordion__item__content--expanded': isExpanded(item) }"
          class="accordion__item__content"
        >
          <slot name="item-content" :item="item">
            {{ item.content }}
          </slot>
        </div>
      </div>
    </div>
  </component>
</template>
<style scoped>
.accordion {
  @apply rounded min-w-[300px] w-full shadow;
}

.accordion__item {
  @apply rounded;
}

.accordion__item__header {
  @apply flex justify-between items-center border-y border-gray-100 dark:border-primary-900 p-4 shadow cursor-pointer bg-gray-50 dark:bg-primary-850 hover:bg-slate-200 dark:hover:bg-primary-800 transition-colors;
}

.accordion__item__header__title {
  @apply text-lg font-medium;
}

.accordion__item__header__icon {
  @apply text-primary-300 transform -rotate-90 transition-transform;
}

.accordion__item__header__icon--expanded {
  @apply rotate-0;
}

.accordion__item__content {
  @apply p-0 h-0 opacity-0 overflow-hidden  transition-all duration-300;
}

.accordion__item__content--expanded {
  @apply h-auto p-4 opacity-100;
}

</style>
