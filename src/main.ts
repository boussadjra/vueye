import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.use(autoAnimatePlugin)
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i:any) => i.install?.(ctx))
  },
)
