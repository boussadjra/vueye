

<script setup lang="ts">
import { ref, watch } from 'vue';
import vSelectedChild from '~/directives/selectedChild';

const selected = ref(0);
 defineProps({
    modelValue: {
        type: Number,
        default: 0
    },
    vertical: {
        type: Boolean,
        default: false
    },

})
const emit = defineEmits(['update:modelValue'])

watch(selected, (newVal) => {
    // console.log("wacth ", selected.value);
    emit('update:modelValue', newVal);
}, {
    immediate: true
});

function selectBtn(index: number) {
    selected.value = index;

}

</script>
<template>
    <div
        class="flex button-group"
        :class="[vertical ? 'flex-col vertical' : 'flex-row']"
        v-selected-child="selectBtn"
    >
        <slot></slot>
    </div>
</template>
<style scoped>
:slotted(.btn) {
    @apply shadow-none  rounded-none;
}
:slotted(.btn):first-child {
    @apply rounded-tl rounded-bl rtl:rounded-tr rtl:rounded-br rtl:rounded-tl-none rtl:rounded-bl-none;
}
:slotted(.btn):last-child {
    @apply rounded-tr rounded-br rtl:rounded-none rtl:rounded-tl rtl:rounded-bl;
}
:slotted(.btn) {
    @apply border border-slate-500;
}
:slotted(.btn):not(:first-child) {
    @apply border-l border-r-0 border-slate-500;
}
:slotted(.btn):last-child {
    @apply border-r border-slate-500;
}
:slotted(.btn.selected) {
    @apply bg-primary-500 !text-white;
    /* color transition*/
    @apply transition-colors duration-300;
}

/*** vertical */
.vertical :slotted(.btn):first-child {
    @apply rounded-tl rounded-bl-none rounded-tr;
}
.vertical :slotted(.btn):last-child {
    @apply rounded-tr-none rounded-br rounded-bl;
}

.vertical :slotted(.btn) {
    @apply border border-slate-500;
}
.vertical :slotted(.btn):not(:first-child) {
    @apply border-t border-b-0 border-slate-500;
}
.vertical :slotted(.btn):last-child {
    @apply border-b border-slate-500;
}
</style>