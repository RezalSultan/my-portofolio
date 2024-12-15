import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

const locales = ["id", "en"];

export default getRequestConfig(async () => {
  const locale = (await headers()).get("X-NEXT-INTL-LOCALE");
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
