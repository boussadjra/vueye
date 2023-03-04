import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'



const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>("../../locales/**/*.y(a)?ml", {
      eager: true,
    })
  ).map(([key, value]) => {
   const [,langKey]=key.split(/[\.\/]/g).reverse()
    return [langKey, value.default];
  })
);
export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
