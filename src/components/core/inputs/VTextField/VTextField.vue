

<script setup lang="ts">
import useVariant from '~/composables/core/variant';
import textFieldProps from './textFieldProps'

const props = defineProps(textFieldProps)


const { variantClasses } = useVariant(props)

const classes = computed(() => [
    'text-field',
    variantClasses.value,
    slots.prepend || props.prepend ? 'pl-8 rtl:pr-8 rtl:pl-4' : 'pl-4',
    slots.append || props.append ? 'pr-8 rtl:pl-8 rtl:pr-4' : 'pr-4',
    props.block ? 'w-full' : 'w-max',

])

const emit = defineEmits([
    'update:modelValue',
    'append-click',
    'prepend-click',

])

console.log('--------------------')
console.log(emit)
console.log('--------------------')

function emitValue(event: any) {
    emit('update:modelValue', event?.target?.value)
}

//if the id from props is not set then generate random one
const inputId = computed(() => {
    const id = props.id
    if (!id)
        return `v-text-field-${Math.random().toString(36).substring(2, 15)}`
    return id
})

const slots = useSlots()
</script>
<template>
    <div class="text-left text-gray-500 border-0 rtl:text-right dark:text-gray-100 text-field--wrapper" :class="[variantClasses,block ? 'w-full' : 'w-max']">

        <slot name="label">
            <label :for="inputId" class="text-left rtl:text-right ">{{ label
            }}</label>
        </slot>
        <div class="relative flex items-center ">
            <div v-if="slots.prepend || prepend" class="absolute flex items-center left-2 rtl:left-auto rtl:right-2">
                <slot name="prepend">
                    <span :class="prepend" @click="emit('prepend-click')"></span>
                </slot>
            </div>
            <component :is="tag" :type="type" :id="inputId" :class="classes" :value="modelValue" @input="emitValue" />
            <div v-if="slots.append || append" class="absolute flex items-center right-2 rtl:right-auto rtl:left-2">
                <slot name="append">
                    <span :class="append" @click="emit('append-click')"></span>
                </slot>
            </div>
        </div>
        <div class="p-1 text-xs">
            <slot name="hint">{{ hint }}</slot>
        </div>
    </div>
</template>
<style scoped>
.text-field {
    @apply block py-2 bg-transparent border rounded-md outline-none min-h-[42px] min-w-[100px]
}

.text-field--wrapper.default {
    @apply text-gray-500
}

.text-field--wrapper.primary {
    @apply text-primary-500
}

.text-field--wrapper.secondary {
    @apply text-secondary-500
}

.text-field--wrapper.info {
    @apply text-blue-500
}

.text-field--wrapper.success {
    @apply text-green-500
}

.text-field--wrapper.warning {
    @apply text-amber-500
}

.text-field--wrapper.error {
    @apply text-red-500
}

.text-field--wrapper,
.text-field--wrapper input,.text-field--wrapper textarea {
    @apply bg-transparent hover:bg-transparent
}

.text-field--wrapper input,.text-field--wrapper textarea {
    @apply transition-colors duration-500 focus:ring-1 focus:ring-current
}
</style>