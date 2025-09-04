import { allLocales } from "./allLocales"

export const paramsForLangPaths = () => {
    return allLocales.map((locale) => {
        if (locale === 'en_us') {
            return { params: {lang: undefined} }
        }
        return { params:{lang: locale } }
    })
}