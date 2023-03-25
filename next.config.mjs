// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["images.clerk.dev", "i.pravatar.cc"],
  },
  // see - https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};

export default config;
