import '@/app/globals.css';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { JSX } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '400', '700', '900'],
  subsets: ['latin'],
});
export default function LocaleLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.className}>
      <Head>
        <title>Bob Ross | Web Developer</title>
        <meta name='description' content='Bleep boop' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>{children}</body>
    </html>
  );
}
