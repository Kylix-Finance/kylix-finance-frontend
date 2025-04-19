import { redirect } from "~/i18n/navigation";
import { Locale } from "~/types";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  redirect({
    href: "/dashboard",
    locale,
  });
  return null;
}
