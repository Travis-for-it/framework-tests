import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en_us', 'ja_jp'],
    defaultLocale: 'en_us',
    localePrefix: 'as-needed'
})