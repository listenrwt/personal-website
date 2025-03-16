import '@/app/globals.css';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { JSX } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Winter Lau (ListenRwT)',
  description: 'Winter Lau',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function LocaleLayout({ children }: { children: JSX.Element }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  /*   if (params.locale !== locale) {
    notFound();
  } */

  return (
    <html lang={locale} className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
