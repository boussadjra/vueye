<script setup lang="ts">
const sidebarCollapsed = ref(false)
</script>
<template>
    <!-- header component -->

    <header
        :class="`${sidebarCollapsed ? 'md:pl-20 md:rtl:pr-20' : 'pl-0 rtl:pl-2 md:rtl:pr-40 md:rtl:pr-72 md:pl-72'} pr-0 pl-2 transition-padding duration-700 w-full md:fixed right-0 z-20 flex flex-col items-center justify-center md:justify-between  px-4 py-2 space-y-2 shadow-md  md:py-0 md:space-y-none md:h-16 md:flex-row bg-slate-100 dark:bg-primary-900`">
        <div class="hidden md:block">
            <button
                class="text-xl cursor-pointer fill-current i-carbon-menu text-slate-600 dark:text-white hover:bg-slate-500" />

        </div>
        <div>
            <div class="relative"><span
                    class="absolute inset-y-0 z-10 flex items-center pl-3 text-xl text-gray-500 i-carbon-search top-1/4 left-3">
                </span>
                <input type="text" placeholder="Type Something"
                    class="w-full min-w-[300px] py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-primary-900 dark:text-gray-300 dark:border-gray-500 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
        </div>
        <div class='flex items-center space-x-4 rtl:space-x-reverse text-slate-600 dark:text-white'>
            <button
                class="text-xl cursor-pointer i-carbon-sun dark:i-carbon-moon hover:bg-slate-500 text-slate-600 dark:text-white" />


            <button
                class="text-xl cursor-pointer i-carbon-notification hover:bg-slate-500 text-slate-600 dark:text-white" />

            <div class="flex items-center cursor-pointer">
                <img class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />

            </div>
        </div>

    </header>

</template>
<style scoped>
</style>