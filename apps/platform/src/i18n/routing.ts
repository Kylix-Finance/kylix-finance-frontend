import { defineRouting } from "next-intl/routing";
import { locales } from "~/constants/locales";
export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});
