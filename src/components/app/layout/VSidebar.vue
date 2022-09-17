<script setup lang="ts">
import useEventsBus from '~/composables/core/eventBus'

const { t } = useI18n()

const sidebarCollapsed = ref(false)
const { bus } = useEventsBus()

watch(
  () => bus.value.get('sidebarCollapsed'),
  (val) => {
    const [sidebarCollapsedBus] = val ?? []
    sidebarCollapsed.value = sidebarCollapsedBus
  },
)

const currentIndex = ref(-1)
function setCurrentIndex(index: number) {
  currentIndex.value = index === currentIndex.value ? -1 : index
  sidebarCollapsed.value = false
}

const route = useRoute()
onMounted(() => {
  const path = route.path
  setCurrentIndex(sidebarItems.value.findIndex(item => path.startsWith(item.path)))
})

const sidebarItems = computed(() => [
  {
    title: t('sidebar.home'),
    icon: 'i-carbon-home',
    path: '/dashboard',
    children: [
      {
        title: t('sidebar.dashboard'),
        icon: 'i-carbon-dashboard',
        path: '/dashboard',
      },
    ],
  },
  {
    title: t('sidebar.components'),
    icon: 'i-carbon-assembly-cluster',
    path: '/components',
    children: [
      {
        title: 'Alerts',
        path: '/components/alerts',
      },
      {
        title: 'Avatars',
        path: '/components/avatars',
      },
      {
        title: 'Badges',
        path: '/components/badges',
      },
      {
        title: 'Breadcrumbs',
        path: '/components/breadcrumbs',
      },
      {
        title: 'Buttons',
        path: '/components/buttons',
      },
      {
        title: 'Button groups',
        path: '/components/button-groups',
      },
      {
        title: 'Icons',
        path: '/components/icons',
      },
      {
        title: 'Cards',
        path: '/components/cards',
      },
      {
        title: 'Text Fields',
        path: '/components/text-fields',
      },
      {
        title: 'Checkboxes',
        path: '/components/checkboxes',
      },
      {
        title: 'Radio Buttons',
        path: '/components/radio-buttons',
      }
    ],
  },
  {
    title: t('sidebar.team'),
    icon: 'i-carbon-collaborate',
    path: '/team',
  },
  {
    title: t('sidebar.projects'),
    icon: 'i-carbon-document',
    path: '/projects',
  },
  {
    title: t('sidebar.calendar'),
    icon: 'i-carbon-calendar',
    path: '/calendar',
  },
  {
    title: t('sidebar.reports'),
    icon: 'i-carbon-report-data',
    path: '/reports',
  },
])


const sidebar = ref<HTMLElement>()
const sidebarClass = ref('')
onMounted(() => {
  window.onscroll = () => {
    if (window.pageYOffset > 180)
      sidebarClass.value = 'top-4 bottom-0'
    else
      sidebarClass.value = 'top-48'
  }
})
</script>
<template>
  <!-- sidebar -->
  <aside ref="sidebar" class="sidebar" :class="[sidebarCollapsed ? 'sidebar__collapsed' : 'sidebar__not_collapsed']">
    <div>
      <div class="flex w-full">
        <BurgerMenuBtn @open="sidebarCollapsed = !sidebarCollapsed" />
      </div>
      <div class="flex flex-col">
        <div class="absolute left-0 w-full mt-5 top-16">
          <nav class="flex-1 mt-5 text-xs font-medium leading-5 md:text-sm">
            <ul class="max-h-screen m-0 ml-0 list-none">
              <li v-for="(item, index) in sidebarItems" :key="item.title"
                :class="`${currentIndex === index ? 'bg-gray-100 dark:bg-primary-700 ' : ''} `">
                <span :class="`${sidebarCollapsed ? 'justify-center' : ''}
                                  ${currentIndex === index ? 'bg-gray-200 dark:bg-primary-700' : ''}
                sidebar-item block py-4  px-4 flex items-center rtl:space-x-reverse space-x-2 cursor-pointer  decoration-none  leading-5  group  focus:outline-none  transition duration-150 ease-in-out`"
                  @click="setCurrentIndex(index)">
                  <span :class="`${item.icon} text-lg block`" />

                  <span v-if="!sidebarCollapsed" class="block">{{ item.title }}</span>
                  <span v-if="!sidebarCollapsed && item.children" class="i-carbon-chevron-down">{{
                  item.title
                  }}</span>
                </span>
                <CollapseTransition>
                  <ul v-if="item.children && !sidebarCollapsed && currentIndex === index"
                    class="opacity-75 transition-height duration-1000">
                    <li v-for="child in item.children" :key="child.title" class="pl-4 hover:scale-105 transition-all">
                      <RouterLink
                        :class="` block py-2 text-xs  px-4 flex items-center rtl:space-x-reverse space-x-2  decoration-none  leading-5  group  focus:outline-none focus:font-bold transition duration-150 ease-in-out`"
                        :to="child.path" :href="child.path">
                        <span class="i-carbon-software-resource" />
                        <span v-if="!sidebarCollapsed">{{ child.title }}</span>
                      </RouterLink>
                    </li>
                  </ul>
                </CollapseTransition>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  @apply fixed bottom-4 top-4 overflow-x-hidden overflow-y-auto w-64 bg-white dark:bg-primary-800 h-full md:h-[calc(100vh_-_6rem)] z-[999] select-none md:top-20 left-4 rtl:left-auto rtl:right-4 transition-all duration-500 rounded-lg p-2 shadow-md;
}

.sidebar__collapsed {
  @apply w-12 md:w-16 h-12 md:h-auto;
}
</style>
