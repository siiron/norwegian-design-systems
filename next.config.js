/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  sassOptions: {
    charset: true,
    sourceMap: true
  },
}

module.exports = nextConfig
