const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = withNextIntl({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    RESUME_PASSWORD: process.env.RESUME_PASSWORD,
  },
});
