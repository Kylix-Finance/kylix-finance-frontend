"use client";
import { useAssetPrice } from "@repo/onchain";
import { useTranslations } from "next-intl";
const Temp = () => {
  const { data } = useAssetPrice();
  const t = useTranslations("Dashboard");

  console.log("__________data", data);

  return <div>{t("test")}</div>;
};

export default Temp;
