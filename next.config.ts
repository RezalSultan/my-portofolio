/** @type {import('next').NextConfig} */
const nextConfig = {};

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

module.exports = withNextIntl(nextConfig);
