import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import { createApp } from 'vue'
import generatedRoutes from '~pages'
import i18n from './modules/i18n'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)


export const app = createApp(App)
    .use(createRouter({ routes, history: createWebHistory() }))
    .use(i18n)
    .mount('#app')
