import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale: string = (await requestLocale) || 'en';
  return {
    locale: await locale,
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
