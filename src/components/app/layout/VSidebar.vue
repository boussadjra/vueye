
<script setup lang="ts">
import useEventsBus from '~/composables/core/eventBus';

const { t } = useI18n()

const sidebarCollapsed = ref(false)
const { bus } = useEventsBus()

watch(() => bus.value.get('sidebarCollapsed'), (val) => {
    const [sidebarCollapsedBus] = val ?? []
    sidebarCollapsed.value = sidebarCollapsedBus
})

const currentIndex = ref(-1);
function setCurrentIndex(index: number) {
    currentIndex.value = index === currentIndex.value ? -1 : index
}

const route = useRoute()
onMounted(() => {

    let path = route.path
    setCurrentIndex(sidebarItems.value.findIndex(item => path.startsWith(item.path)))

})

const sidebarItems = computed(() => [
    {
        title: t('sidebar.dashboard'),
        icon: 'i-carbon-dashboard',
        path: '/dashboard'
    },
    {
        title: t('sidebar.components'),
        icon: 'i-carbon-assembly-cluster',
        path: '/components',
        children: [
            {
                title: 'Alerts',
                path: '/components/alerts'
            },
            {
                title: 'Avatars',
                path: '/components/avatars'
            },
            {
                title: 'Badges',
                path: '/components/badges'
            },
            {
                title: 'Breadcrumbs',
                path: '/components/breadcrumbs'
            },
            {
                title: 'Buttons',
                path: '/components/buttons'
            },
            {
                title: 'Button groups',
                path: '/components/button-groups'
            },
            {
                title: 'Icons',
                path: '/components/icons'
            },
            {
                title: 'Cards',
                path: '/components/cards'
            },
            {
                title: 'Text Fields',
                path: '/components/text-fields'
            },

        ]
    },
    {
        title: t('sidebar.team'),
        icon: 'i-carbon-collaborate',
        path: '/team'
    },
    {
        title: t('sidebar.projects'),
        icon: 'i-carbon-document',
        path: '/projects'
    },
    {
        title: t('sidebar.calendar'),
        icon: 'i-carbon-calendar',
        path: '/calendar'
    },
    {
        title: t('sidebar.reports'),
        icon: 'i-carbon-report-data',
        path: '/reports'
    },

])
</script>
<template>
    <!-- sidebar -->
    <aside
        :class="`${sidebarCollapsed ? 'md:w-16 collapsed' : 'md:w-64'} sidebar overflow-hidden bg-primary-600 dark:bg-primary-700 transition-width duration-700 w-full top-0 md:fixed bottom-0 z-30 flex-shrink-0     lg:block`">
        <div class='flex flex-col h-full'>
            <div class='absolute top-0 left-0 right-0 flex items-center justify-center h-16 text-5xl bg-primary-900 '>

                <RouterLink to="/" class='i-carbon-flash-filled text-sky-400'>

                </RouterLink>

            </div>
            <div class='absolute left-0 w-full mt-5 top-16 '>
                <nav class='flex-1 mt-5 text-xs font-medium leading-5 md:text-sm '>
                    <ul class='max-h-screen m-0 ml-0 overflow-auto list-none'>
                        <li v-for="(item, index) in sidebarItems" :key="item.title"
                            :class="` ${currentIndex === index ? 'bg-primary-600' : ''}`">
                            <a @click="setCurrentIndex(index)"
                                :class="`${sidebarCollapsed ? 'justify-center' : ''} ${currentIndex === index ? 'bg-primary-600' : ''}  ${currentIndex === index ? 'bg-primary-700' : ''} sidebar-item block py-4  px-4 flex items-center rtl:space-x-reverse space-x-2 text-white  decoration-none  leading-5  group hover:bg-primary-600  focus:outline-none  transition duration-150 ease-in-out`">
                                <span :class="`${item.icon} text-lg block`"></span>

                                <span v-if="!sidebarCollapsed" class='block'>{{ item.title }}</span>
                                <span v-if="!sidebarCollapsed && item.children" class='i-carbon-chevron-down'>{{
                                        item.title
                                }}</span>
                            </a>
                            <ul v-if="item.children && !sidebarCollapsed && currentIndex === index" class='opacity-75 '>
                                <li v-for="(child) in item.children" :key="child.title"
                                    class="pl-4 hover:bg-primary-500">
                                    <RouterLink
                                        :class='` block py-2 text-xs  px-4 flex items-center rtl:space-x-reverse space-x-2 text-white  decoration-none  leading-5  group hover:text-slate-100 dark-hover:text-slate-100 focus:outline-none focus:font-bold transition duration-150 ease-in-out`'
                                        :to="child.path">
                                        <span class="i-carbon-software-resource"></span>
                                        <span v-if="!sidebarCollapsed">{{ child.title }}</span>
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div v-if="!sidebarCollapsed"
            class='bottom-0 left-0 right-0 h-12 p-2 md:absolute bg-primary-700 dark:bg-primary-900'>
            <div class="flex items-center justify-around w-full h-full space-x-2 text-xl text-white">
                <div i="carbon-notification cursor-pointer" />
                <div i="carbon-chat cursor-pointer" />
                <div i="carbon-settings cursor-pointer" />
                <div i="carbon-box cursor-pointer" />
            </div>


        </div>
    </aside>
</template>

<style scoped>
</style>