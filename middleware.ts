import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["id", "en"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(id|en)/:path*"],
};
