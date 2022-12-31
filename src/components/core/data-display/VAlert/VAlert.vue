<script setup lang="ts">
import useVariant from "~/composables/core/variant";
import { useDismiss } from "~/composables/core/dismiss";
import alertProps from "./alertProps";

const props = defineProps(alertProps);

const { variantClasses } = useVariant(props);

const classes = computed(() => [
    "alert",
    variantClasses.value,
    props.block ? "w-full" : "w-max",
    props.border ? `alert--border-${props.border}` : "",
    {
        outlined: props.outlined,
        smooth: props.smooth,
        bordered: props.border,
    },
]);

const variantIcon: Record<string, string> = {
    default: "i-carbon-warning-hex-filled",
    primary: "i-carbon-warning-hex-filled",
    secondary: "i-carbon-warning-hex-filled",
    info: "i-carbon-information-filled",
    warning: "i-carbon-warning-alt-filled",
    error: "i-carbon-misuse",
    success: "i-carbon-checkmark-filled",
};

const emit = defineEmits(["update:closed", "close"]);

const { close } = useDismiss(emit);

const slots = useSlots();
</script>

<template>
    <transition name="fade">
        <div v-if="!closed" :close-text="dismissible ? 'Close' : ''" :class="classes" role="alert">
            <div class="flex items-center">
                <div class="text-xl alert__icon alert__prepend" v-if="variantIcon[variant] || slots.prepend">
                    <slot name="prepend"> <span :class="variantIcon[variant]" /></slot>
                </div>
                <div class="max-w-xl px-2 alert_content">
                    <template v-if="slots.title">
                        <slot name="title"></slot>
                    </template>
                    <div v-else class="text-lg font-bold">{{ title }}</div>
                    <slot v-if="slots.default"></slot>
                    <div v-else>{{ content }}</div>
                </div>
            </div>
            <div class="alert__append" v-if="dismissible || slots.append">
                <slot name="append">
                    <button aria-label="Close" @click="close" class="alert__close">
                        <span class="sr-only">Close</span>
                        <span class="i-carbon-close" /></button>
                </slot>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.alert {
    @apply relative min-w-[280px] min-h-[52px] h-auto max-h-40 p-4 pr-4 rounded text-sm flex items-center justify-between pointer-events-none;
}

.alert__prepend {
    @apply flex items-center justify-center w-10;
}

.alert__append {
    @apply flex items-center;
}

.alert__close {
    @apply relative rounded bg-inherit hover:transform hover:scale-110 hover:bg-opacity-30 pointer-events-auto text-xl flex items-center cursor-pointer;
}

.alert__close:hover::before {
    content: "";
    @apply absolute content-center flex items-center justify-center w-full h-full rounded-full;
}

.alert.primary .alert__close:hover::before {
    @apply bg-primary-300;
}

.alert.secondary .alert__close:hover::before {
    @apply bg-secondary-300;
}

.alert.info .alert__close:hover::before {
    @apply bg-blue-300;
}

.alert.warning .alert__close:hover::before {
    @apply bg-amber-300;
}

.alert.error .alert__close:hover::before {
    @apply bg-red-300;
}

.alert.success .alert__close:hover::before {
    @apply bg-green-300;
}

.alert:not(.outlined) {
    @apply text-white;
}

.primary.alert--border-top {
    @apply border-t-[6px] border-primary-300;
}

.primary.alert--border-right {
    @apply border-r-[6px] border-primary-300;
}

.primary.alert--border-bottom {
    @apply border-b-[6px] border-primary-300;
}

.primary.alert--border-left {
    @apply border-l-[6px] border-primary-300;
}

.secondary.alert--border-top {
    @apply border-t-[6px] border-secondary-300;
}

.secondary.alert--border-right {
    @apply border-r-[6px] border-secondary-300;
}

.secondary.alert--border-bottom {
    @apply border-b-[6px] border-secondary-300;
}

.secondary.alert--border-left {
    @apply border-l-[6px] border-secondary-300;
}

.info.alert--border-top {
    @apply border-t-[6px] border-blue-300;
}

.info.alert--border-right {
    @apply border-r-[6px] border-blue-300;
}

.info.alert--border-bottom {
    @apply border-b-[6px] border-blue-300;
}

.info.alert--border-left {
    @apply border-l-[6px] border-blue-300;
}

.warning.alert--border-top {
    @apply border-t-[6px] border-amber-300;
}

.warning.alert--border-right {
    @apply border-r-[6px] border-amber-300;
}

.warning.alert--border-bottom {
    @apply border-b-[6px] border-amber-300;
}

.warning.alert--border-left {
    @apply border-l-[6px] border-amber-300;
}

.error.alert--border-top {
    @apply border-t-[6px] border-red-300;
}

.error.alert--border-right {
    @apply border-r-[6px] border-red-300;
}

.error.alert--border-bottom {
    @apply border-b-[6px] border-red-300;
}

.error.alert--border-left {
    @apply border-l-[6px] border-red-300;
}

.success.alert--border-top {
    @apply border-t-[6px] border-green-300;
}

.success.alert--border-right {
    @apply border-r-[6px] border-green-300;
}

.success.alert--border-bottom {
    @apply border-b-[6px] border-green-300;
}

.success.alert--border-left {
    @apply border-l-[6px] border-green-300;
}

.smooth.primary.alert--border-left {
    @apply border-l-[6px] border-primary-400;
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
