import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>("../locales/*.y(a)?ml", {
      eager: true,
    })
  ).map(([key, value]) => {
    const yaml = key.endsWith(".yml");
    return [key.slice(11, yaml ? -4 : -3), value.default];
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
