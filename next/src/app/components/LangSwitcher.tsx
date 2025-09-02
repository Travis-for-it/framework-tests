'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { routing } from "@/i18n/routing";

const LangSwitcher = () => {

  const locales = routing.locales
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };
  return (
    <div>
      <select value={locale} onChange={(e) => switchLocale(e.target.value)}>
        {locales.map((locale: string) => (
          <option key={locale} value={locale}>{locale}</option>
        ))}
      </select>
    </div>
  )
}
export default LangSwitcher