r<script setup lang="ts">
function beforeEnter(element: HTMLElement) {
  requestAnimationFrame(() => {
    if (!element.style.height)
      element.style.height = '0px'

    element.style.display = ''
  })
}

function enter(element: HTMLElement) {
  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`
  })
}

function afterEnter(element: HTMLElement) {
  requestAnimationFrame(() => {
    element.style.height = ''
  })
}

function beforeLeave(element: HTMLElement) {
  requestAnimationFrame(() => {
      if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
  })
}

function leave(element: HTMLElement) {
  requestAnimationFrame(() => {
    element.style.height = '0px'
  })
}

function afterLeave(element: HTMLElement) {
  requestAnimationFrame(() => {
    element.style.height = ''
  })
}
</script>

<template>
  <transition
    enter-active-class="transition-height ease-out duration-700 overflow-hidden"
    leave-active-class="transition-height ease-in duration-700 overflow-hidden"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  transition: height 1s linear;
}

.enter-to,
.leave-to {
  height: 0px;
   transition: height 1s linear;
}

</style>
