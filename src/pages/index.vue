<script setup lang="ts">
import flower3 from '~/assets/img/flowers/f (3).jpg'
import landscape from '~/assets/img/landscape.jpg'
// import homeImg from '~/assets/img/screenshots/home.png';
import { toggleDark } from '~/composables'
const { t } = useI18n()

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'The Vueye home page',
      image: 'https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png',
    },
    {
      name: 'keywords',
      content: 'vueye,template starter,vue.js,vue,vue3',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'The Vueye home page',
      image: 'https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png',
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Vue template',
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png',
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: 'https://vueye.netlify.app/',
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Vueye',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Vueye',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Vueye',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png',
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@vueye',
    },
  ],
})

const features = [
  {
    title: 'Using the new tools',
    description: 'Using the new versions and new tools like Vue 3, Vite 2, pnpm, ESBuild',
    icon: 'i-carbon-flash',
  },
  {
    title: 'File based routing',
    description: 'Using the vite-plugin-pages plugin to create file based routing',
    icon: 'i-carbon-direction-fork',
  },
  {
    title: 'Components auto importing',
    description: 'Using the unplugin-vue-components plugin to auto import components',
    icon: 'i-carbon-document-import',
  },
  {
    title: 'State Management via Pinia',
    description: 'Manage your state with the new tool Pinia',
    icon: 'i-carbon-chart-relationship',
  },
  {
    title: 'Layout system',
    description: 'vite-plugin-vue-layouts plugin helps you to create layouts',
    icon: 'i-carbon-gui',
  },
  {
    title: 'Use icons from carbon-icons',
    description: 'Using the unplugin-icons plugin to use icons from carbon-icons',
    icon: 'i-carbon-carbon',
  },
  {
    title: 'I18n ready',
    description: 'vue-i18n plugin is used to support i18n based on YAML files',

    icon: 'i-carbon-language',
  },
  {
    title: 'Other tools',
    description: '... and many more tools such as TypeScript, Prettier, ESLint, etc.',
    icon: 'i-carbon-tool-kit',
  },
]
</script>

<template>
  <main class="relative flex px-8 flex-col items-center w-full h-full min-h-screen pt-16 overflow-hidden bg-slate-100 dark:bg-primary-900 dark:text-white">
   

    <div class="grid lg:grid-cols-2  place-content-center place-items-center w-full h-full">
      <div class="flex flex-col justify-center w-full h-full px-8 pt-6 pb-8 mb-4 rounded md:w-1/2 max-w-[400px]">
        <div class="flex flex-col mb-4 md:text-left">
          <h1 class="text-6xl font-bold uppercase text-primary-500 dark:text-primary-400">
            Vueye
            <span class="block text-xl font-bold text-primary-500 dark:text-primary-400"> Vue.js 3 template </span>
          </h1>

          <p class="max-w-md py-4 text-base text-slate-600 dark:text-slate-100">
            A rich template with many components, which are built with Tailwind CSS And Vue.
          </p>
        </div>

        <!-- CTA -->
        <div class="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 mb-4 rtl:space-x-reverse">
          <VBtn variant="primary" append="i-carbon-arrow-right" class="uppercase" @click="$router.push('/components/alerts')">
            Get Started
          </VBtn>

          <VBtn prepend="i-carbon-logo-github" smooth tag="a" target="_blank" href="https://github.com/boussadjra/vueye">
            Github
          </VBtn>
        </div>
      </div>
      <div
        class=" w-full  p-4 pr-10 mr-4  bg-gray-100 border-2 rounded-lg shadow-xl dark:bg-primary-800  border-primary-100 dark:border-primary-700 right-side dark:shadow-primary-800"
      >
        <div class="flex flex-col gap-2">
          <div class="flex flex-wrap gap-2">
            <VBtn>Button</VBtn>
            <VBtn variant="primary">
              Button
            </VBtn>
            <VBtn variant="secondary" smooth>
              Button
            </VBtn>
            <VBtn variant="info" smooth>
              Button
            </VBtn>
            <VBtn size="sm" variant="primary" outlined icon="i-carbon-location" />
            <VBtn size="sm" variant="warning" icon="i-carbon-delete" />
          </div>
          <div class="flex gap-2">
            <VAlert variant="warning" smooth>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perferendis corrupti sit dolores enim ea porro! Eum culpa ipsa sit
              quisquam omnis necessitatibus cum quis repellat mollitia, quas velit reiciendis.
            </VAlert>
          </div>
          <div class="flex items-center gap-2">
            <VAvatar corner="full" :src="flower3" />
            <VAvatar corner="xl" :src="landscape" alt="vue" />
            <VAvatar class="text-white bg-green-600 dark:bg-green-700" corner="full">
              A
            </VAvatar>
            <VBadge smooth content="Secondary" variant="secondary" />
            <VBadge smooth content="Success" variant="success" />
            <VBadge content="Info" variant="info" />
          </div>
          <div class="flex gap-2 items-center flex-wrap">
            <VTextField label="Password :" type="password" prepend="i-carbon-password" append="i-carbon-view" />
            <VCheckbox label="Remember me" />
            <div class="bg-primary-50 dark:bg-primary-700 flex p-2 justify-center rounded">
              <VRadio name="align" aria-label="align-left" size="lg">
                <template #checked>
                  <div class="i-carbon-text-align-left text-primary-400" />
                </template>
                <template #unchecked>
                  <span class="i-carbon-text-align-left" />
                </template>
              </VRadio>
              <VRadio name="align" aria-label="align-center" size="lg">
                <template #checked>
                  <div class="i-carbon-text-align-center text-primary-400" />
                </template>
                <template #unchecked>
                  <span class="i-carbon-text-align-center" />
                </template>
              </VRadio>
              <VRadio name="align" aria-label="align-right" size="lg">
                <template #checked>
                  <div class="i-carbon-text-align-right text-primary-400" />
                </template>
                <template #unchecked>
                  <span class="i-carbon-text-align-right" />
                </template>
              </VRadio>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-32">
      <div class="text-left">
        <h2 class="text-2xl font-bold text-gray-600 dark:text-gray-400">
          Features
        </h2>
        <div class="grid gap-16 mt-10 md:grid-cols-2">
          <div v-for="feature in features" :key="feature.title" class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center w-12 h-12 rounded-md text-primary-700 dark:text-primary-50 bg-primary-50 dark:bg-primary-700"
              >
                <span class="text-xl" :class="feature.icon" />
              </div>
              <p class="ml-16 font-bold leading-6 text-gray-600 dark:text-gray-400">
                {{ feature.title }}
              </p>
            </dt>
            <dd class="max-w-xs mt-2 ml-16 text-sm text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed right-2 bottom-2">
      <div>
        <VBtn variant="primary" size="sm" icon="i-carbon-sun dark:i-carbon-moon" :title="t('button.toggle_dark')" @click="toggleDark()" />
      </div>
    </div>
  </main>
</template>
<style>
.right-side {
  /* transform: perspective(900px) rotateY(-24deg);*/
  @apply transform rotate-2 transition-transform duration-300 ease-in-out;

}
.right-side:hover {
  /* transform: perspective(900px) rotateY(-24deg) scale(1.05);*/
  @apply transform rotate-0 scale-105 transition-transform duration-300 ease-in-out ;
}
/*.right-side:hover{
  transition: .5s;
  transform: perspective(900px) rotateY(-35deg);

}*/
</style>
<route lang="yaml">
meta:
  layout: home
</route>
