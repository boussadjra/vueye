

<script setup lang="ts">
/**
 * button component
 * @displayName VBtn
 */

import { useCorner } from '~/composables/core/corner';
import { useLoading } from '~/composables/core/loading';
import { useSize } from '~/composables/core/size';
import useVariant from '~/composables/core/variant';
import btnProps from './btnProps';


const props = defineProps(btnProps)


const { variantClasses, variantStyle } = useVariant(props)
console.log('btn props ',props)
const { sizeClasses } = useSize(props)
const { loadingClass } = useLoading(props)
const { cornerClass } = useCorner(props)


const classes = computed(() => [
   'btn  space-x-2',
   variantClasses.value,
   sizeClasses.value,
   cornerClass.value,
   props.block ? 'w-full' : 'w-max',
   {
      'outlined': props.outlined,
      'smooth': props.smooth,
      'text': props.text || props.link,
      'link': props.link,
      'disabled': props.disabled,
      'icon': props.icon,
   },
])



const currentTag = computed(() => props.link ? 'a' : props.tag)

const router = useRouter()
const emit = defineEmits(['click'])

function handleClick(e: Event) {
  if (props.to) {
    router.push(props.to);
    return;
  }
  emit('click', e)
}

</script>

<template>
   <component :is="currentTag" :class="classes" :style="variantStyle" @click="handleClick">
      <slot name="prepend">
         <span v-if="prepend" :class="`prepend ${prepend}`" />
      </slot>
      <span i-carbon-circle-dash v-if="loading" :class="loadingClass" />
      <slot v-else>
         <span v-if="icon" :class="` ${icon}`" />
      </slot>
      <slot name="append">
         <component v-if="append" :class="`append ${append}`" />
      </slot>
   </component>
</template>


<style scoped>
.btn {
   @apply h-max flex whitespace-nowrap justify-center border-2 shadow-md hover:shadow items-center  duration-300 cursor-pointer capitalize  transition-all 
}

.btn.disabled {
   @apply bg-gray-400 cursor-not-allowed shadow-none border-gray-400 hover:scale-100
}

.btn.text.default:hover, .btn.text.default:focus ,.btn.text.default:active{
   @apply !bg-slate-200 dark:!bg-slate-800
}

.btn.text.primary:hover, .btn.text.primary:focus, .btn.text.primary:active {
   @apply !bg-primary-50 dark:!bg-primary-850
}
.btn.text.secondary:hover, .btn.text.secondary:focus, .btn.text.secondary:active {
   @apply !bg-secondary-100 dark:!bg-secondary-900
}
.btn.text.success:hover, .btn.text.success:focus, .btn.text.success:active {
   @apply !bg-green-200 dark:!bg-green-900
}
.btn.text.warning:hover, .btn.text.warning:focus, .btn.text.warning:active {
   @apply !bg-yellow-200 dark:!bg-yellow-900
}
.btn.text.error:hover, .btn.text.error:focus, .btn.text.error:active {
   @apply !bg-red-200 dark:!bg-red-900
}
.btn.text.info:hover, .btn.text.info:focus, .btn.text.info:active {
   @apply !bg-blue-200 dark:!bg-blue-900
}


.btn:not(.text),
.btn:not(.outlined) {
   @apply text-white
}

.btn.xs {
   @apply px-4 py-1 text-xs
}

.btn.sm {
   @apply px-6 py-2 text-sm
}

.btn.md {
   @apply px-8 py-2 text-base min-h-[40px]
}

.btn.lg {
   @apply px-10 py-3 text-xl
}

.btn .prepend {
   @apply mr-2 rtl:ml-2 rtl:mr-0
}

.btn .append {
   @apply ml-2 rtl:mr-2 rtl:ml-0
}

.btn.icon {
   @apply rounded-full border-0
}

.btn.icon.xs {
   @apply p-2 text-sm
}

.btn.icon.sm {
   @apply p-3 text-base
}

.btn.icon.md {
   @apply p-4 text-xl
}

.btn.icon.lg {
   @apply p-5 text-2xl
}

:slotted(.badge){
 @apply ml-2 rtl:mr-2 rtl:ml-0
}
</style>