import { createI18n } from 'vue-i18n'

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


const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
})

export default i18n