import { redirect } from "~/i18n/navigation";
import { Locale } from "~/types";

export default function Home({ params }: { params: { locale: Locale } }) {
  redirect({
    href: "/dashboard",
    locale: "en",
  });
  return null;
}
