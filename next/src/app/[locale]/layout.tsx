import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import LangSwitcher from "../components/LangSwitcher";
import {setRequestLocale} from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {

  const {locale} = await params 

  if(!hasLocale(routing.locales, locale)){
    notFound()
  }
  setRequestLocale(locale);
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <LangSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
