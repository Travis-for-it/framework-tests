import { useTranslations } from "next-intl";;
import { Link } from "@/i18n/navigation";
import {use} from 'react';
import { setRequestLocale } from "next-intl/server";

export default function Home({params}: {params: Promise<{locale: string}>}) {
const {locale} = use(params);
setRequestLocale(locale);
  const t = useTranslations('HomePage')

  return (
    <div>
      <h1>home page</h1>
      <h2>{t('title')}</h2>
      <Link href={'/about'}>
        about
      </Link>
    </div>
  );
}
