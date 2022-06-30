


<script setup lang="ts">

import { useCorner } from '~/composables/core/corner';
import { useSize } from '~/composables/core/size';
import { toPartialRefs } from '~/utils/helpers';

import type { Size } from '~/composables/core/size';
import { useSlots, ref } from 'vue';
import avatarProps from './avatarProps';


const props = defineProps(avatarProps)

const { cornerClass } = useCorner(toPartialRefs(props, ['corner']))
const { sizeClasses } = useSize(toPartialRefs(props, ['size']))

const textSizes: Record<Size, string> = {
    xs: 'text-2xl',
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
    'xxl': 'text-7xl',
    'xxxl': 'text-8xl',

}

const slots = useSlots()

let imgLoadError = ref(false)
function onImgLoadError(e: Event) {
    imgLoadError.value = true
}


</script>
<script lang="ts">
export default defineComponent({
    name:'v-avatar',
})
</script>
<template>
    <div :class="[cornerClass, sizeClasses, textSizes[size]]" class="font-bold bg-gray-300 centered avatar dark:bg-gray-600">
        <slot v-if="slots.default"></slot>
        <img v-else-if="src && !imgLoadError" @error="onImgLoadError" :class="[cornerClass]" :src="src" :alt="alt"
            class="object-cover w-full h-full" />
        <span v-else-if="imgLoadError">{{ alt.charAt(0) }}</span>
    </div>
</template>
<style scoped>
.avatar {
    @apply  flex items-center justify-center;
}

.avatar.xs {
    @apply h-10 w-10;
}

.avatar.sm {
    @apply h-16 w-16;
}

.avatar.md {
    @apply h-20 w-20;
}

.avatar.lg {
    @apply h-24 w-24;
}

.avatar.xl {
    @apply h-32 w-32;
}

.avatar.xxl {
    @apply h-40 w-40;
}
</style>