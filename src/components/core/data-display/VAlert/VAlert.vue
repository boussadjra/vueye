<script setup lang="ts">
import useVariant, { variantProps } from '~/composables/core/variant';
import outlinedProps from '~/composables/core/props/outlinedProps';
import smoothProps from '~/composables/core/props/smoothProps';
import { dismissProps, useDismiss } from '~/composables/core/dismiss';

import { toPartialRefs } from '~/utils/helpers';
import blockProps from '~/composables/core/props/blockProps';
const props = defineProps({
    ...variantProps,
    ...outlinedProps,
    ...smoothProps,
    ...dismissProps,
    ...blockProps,
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

})

const { variantClasses } = useVariant(toPartialRefs(props, ['variant']))

const classes = computed(() => [

    'alert',
    variantClasses.value,
    props.block ? 'w-full' : 'w-max',
    {
        'outlined': props.outlined,
        'smooth': props.smooth,
     
    },
])

const variantIcon: Record<string, string> = {
    'default': 'i-carbon-warning-hex-filled',
    'primary': 'i-carbon-warning-hex-filled',
    'secondary': 'i-carbon-warning-hex-filled',
    'info': 'i-carbon-information-filled',
    'warning': 'i-carbon-warning-alt-filled',
    'error': 'i-carbon-misuse',
    'success': 'i-carbon-checkmark-filled'

}

const emit = defineEmits([
    'update:closed'
])

const { close } = useDismiss(emit)

const slots = useSlots()

</script>

<template>
    <transition name="fade">
        <div v-if="!closed" :close-text="dismissible ? 'Close' : ''" :class="classes">
            <div class="flex items-center ">
                <div class="text-xl alert__icon alert__prepend" v-if="variantIcon[variant] || slots.prepend">
                    <slot v-if="slots.prepend" name="prepend"></slot>
                    <span v-else :class="variantIcon[variant]" class="" />
                </div>
                <div class="max-w-xl px-2 alert_content">
                    <template v-if="slots.title">
                        <slot name="title"></slot>
                    </template>
                    <div v-else class="font-bold">{{ title }}</div>
                    <slot v-if="slots.default" ></slot>
                    <div v-else>{{ content }}</div>
                </div>
            </div>
            <div class=" alert__append" v-if="dismissible || slots.append">
                <slot v-if="slots.append" name="append"></slot>
                <button v-else aria-label="Close" @click="close" class="alert__close">
                    <span class="i-carbon-close" />
                </button>
            </div>
        </div>
    </transition>

</template>


<style scoped>
.alert {
    @apply relative min-w-[280px] min-h-[52px] h-auto max-h-40 p-4 pr-4   rounded text-sm flex items-center justify-between pointer-events-none
}

.alert__prepend {
    @apply flex items-center justify-center w-10 ;
}

.alert__append {
    @apply flex items-center;
}

.alert__close {
    @apply rounded bg-inherit hover:transform hover:scale-110 hover:bg-opacity-30 pointer-events-auto text-xl flex items-center cursor-pointer
}

.alert:not(.outlined) {
    @apply text-white
    }
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>