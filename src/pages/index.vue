<script setup lang="ts">
import flower3 from "~/assets/img/flowers/f (3).jpg";
import landscape from "~/assets/img/landscape.jpg";
import { toggleDark } from "~/composables";

const { t } = useI18n();

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "The Vueye home page",
    },
    {
      name: "keywords",
      content: "vueye,template starter,vue.js,vue,vue3",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "The Vueye home page",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: "Vue template",
    },
    {
      hid: "og:image",
      name: "og:image",
      content:
        "https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: "https://vueye.netlify.app/",
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Vueye",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Vueye",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Vueye",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content:
        "https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@vueye",
    },
  ],
});

const features = [
  {
    title: "Using the new tools",
    description: "Using the new versions and new tools like Vue 3, Vite 2, pnpm, ESBuild",
    icon: "i-carbon-flash",
  },
  {
    title: "File based routing",
    description: "Using the vite-plugin-pages plugin to create file based routing",
    icon: "i-carbon-direction-fork",
  },
  {
    title: "Components auto importing",
    description: "Using the unplugin-vue-components plugin to auto import components",
    icon: "i-carbon-document-import",
  },
  {
    title: "State Management via Pinia",
    description: "Manage your state with the new tool Pinia",
    icon: "i-carbon-chart-relationship",
  },
  {
    title: "Layout system",
    description: "vite-plugin-vue-layouts plugin helps you to create layouts",
    icon: "i-carbon-gui",
  },
  {
    title: "Use icons from carbon-icons",
    description: "Using the unplugin-icons plugin to use icons from carbon-icons",
    icon: "i-carbon-carbon",
  },
  {
    title: "I18n ready",
    description: "vue-i18n plugin is used to support i18n based on YAML files",

    icon: "i-carbon-language",
  },
  {
    title: "Other tools",
    description: "... and many more tools such as TypeScript, Prettier, ESLint, etc.",
    icon: "i-carbon-tool-kit",
  },
];
</script>

<template>
  <main class="relative landing-page z-10 flex px-8 flex-col items-center w-full h-full min-h-screen pt-16 overflow-hidden bg-slate-50 dark:bg-primary-900 dark:text-white">

 
      <div class="grid lg:grid-cols-2 place-content-center w-full h-full pt-6">
        <div
          class="flex flex-col items-start w-full h-full px-16 pb-8 mb-4 rounded md:w-1/2 max-w-[500px]"
        >
          <div class="flex flex-col mb-4 md:text-left md:rtl:text-right">
            <h1
              class="text-8xl font-bold uppercase text-primary-500 dark:text-primary-400"
            >
              Vueye
              <span
                class="block text-2xl mt-4 font-bold text-primary-500 dark:text-primary-400"
              >
                {{ t("hero.subtitle") }}
              </span>
            </h1>

            <p class="py-4 text-lg text-slate-600 dark:text-slate-100 min-w-[400px]">
              {{ t("hero.desc") }}
            </p>
          </div>

          <!-- CTA -->
          <div
            class="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 mb-4 rtl:space-x-reverse"
          >
            <VBtn
              variant="primary"
              append="i-carbon-arrow-right"
              class="uppercase"
              @click="$router.push('/components/alerts')"
            >
              {{ t("hero.cta") }}
            </VBtn>

            <VBtn
              prepend="i-carbon-logo-github"
              smooth
              tag="a"
              target="_blank"
              href="https://github.com/boussadjra/vueye"
            >
              Github
            </VBtn>
          </div>
        </div>
        <div
          class="w-full p-4 pr-10 mr-4 bg-gray-100 rounded-lg  dark:bg-primary-800   right-side dark:shadow-primary-800"
        >
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap gap-2">
              <VBtn>Cancel</VBtn>
              <VBtn variant="primary"> إرسال </VBtn>
              <VBtn variant="secondary" smooth> Envoyer </VBtn>
              <VBtn variant="info" smooth> More details </VBtn>
              <VBtn size="sm" variant="primary" outlined icon="i-carbon-location" />
              <VBtn size="sm" variant="warning" icon="i-carbon-delete" />
            </div>
            <div class="flex gap-2">
              <VAlert variant="warning" smooth>
                {{ t("home.example.alert") }}
              </VAlert>
            </div>
            <div class="flex items-center gap-2">
              <VAvatar corner="full" :src="flower3" />
              <VAvatar corner="xl" :src="landscape" alt="vue" />
              <VAvatar class="text-white bg-green-600 dark:bg-green-700" corner="full">
                A
              </VAvatar>
              <VBadge smooth content="Angular" variant="secondary" />
              <VBadge smooth content="Vue" variant="success" />
              <VBadge content="React" variant="info" />
            </div>
            <div class="flex gap-2 items-center flex-wrap">
              <VTextField
                :label="`${t('home.example.password')} :`"
                type="password"
                prepend="i-carbon-password"
                append="i-carbon-view"
              />
              <VCheckbox :label="t('home.example.rememberMe')" />
              <div
                class="bg-primary-50 dark:bg-primary-700 flex p-2 justify-center rounded"
              >
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
          <h2 class="text-2xl font-bold text-gray-600 dark:text-gray-400">Features</h2>
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

      <div class="fixed right-2 top-2">
        <div class="space-x-2 rtl:space-x-reverse flex">
          <VBtn
            variant="primary"
            size="sm"
            icon="i-carbon-sun dark:i-carbon-moon"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
          />
          <div class="mx-2">
            <LanguageToggler />
          </div>
        </div>
      </div>
  </main>
</template>
<style>
.right-side {
  @apply transform rotate-0 transition-transform duration-300 ease-in-out;
}

</style>
<route lang="yaml">
meta:
  layout: home
</route>
