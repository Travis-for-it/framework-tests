import { useTranslations } from "next-intl"
import Link from "next/link"
import {use} from 'react';
import { setRequestLocale } from "next-intl/server";

export default function aboutPage({params}: {params: Promise<{locale: string}>}) {
    const {locale} = use(params);
    setRequestLocale(locale);
    const t = useTranslations('about')
    return (
        <div className="flex flex-col gap-1">
            <h1>{t('text')}</h1>
            <Link href={'/'}>
                home
            </Link>
        </div>
    )
}