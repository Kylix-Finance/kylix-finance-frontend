"use client";
import PieChart, { PieData } from "~/components/recharts/PieChart";
import styles from "./PortfolioValue.module.scss";
import {
  formatUnit,
  useGetAssetWiseBorrowsCollaterals,
  useGetAssetWiseSupplies,
} from "@repo/onchain";
import Skeleton from "~/components/skeleton";
import { useIsDesktop } from "~/hooks/useIsDesktop";
const PortfolioValue = () => {
  const isDesktop = useIsDesktop();
  const {
    data: assetWiseBorrowCollateral,
    isPending: isAssetWiseBorrowCollateralPending,
  } = useGetAssetWiseBorrowsCollaterals();
  const { data: assetWiseSupplies, isPending: isAssetWiseSuppliesPending } =
    useGetAssetWiseSupplies();
  const isLoading =
    isAssetWiseBorrowCollateralPending || isAssetWiseSuppliesPending;
  const rawTotalSupplied = formatUnit(assetWiseSupplies?.totalSupplied || 0, 4);
  const rawTotalBorrowed = formatUnit(
    assetWiseBorrowCollateral?.totalBorrowed || 0,
    4
  );
  const PIE_CHART_DATA: PieData[] = [
    { name: "Deposit", value: +rawTotalBorrowed, fill: "#5664D280" },
    { name: "Borrowing", value: +rawTotalSupplied, fill: "#26A17B80" },
    { name: "Governance", value: 0, fill: "#E6007A80" },
    { name: "Stake", value: 0, fill: "#7B78FF80" },
    { name: "Pool", value: 0, fill: "#37DB8C80" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <p className={styles.heading}>Total Portfolio Value</p>
        <Skeleton isLoading={isLoading} width="50%" height={38}>
          <p className={styles.value}>
            ${" "}
            {(
              Number(rawTotalBorrowed || 0) + Number(rawTotalSupplied || 0)
            ).toLocaleString()}{" "}
          </p>
        </Skeleton>
        <p className={styles.heading_description}>
          Net Earn APR
          <span className={styles.apr_value}>12.3%</span>
        </p>
      </div>
      {isDesktop && (
        <PieChart data={PIE_CHART_DATA} maxWidth={900} maxHeight={900} />
      )}
    </div>
  );
};

export default PortfolioValue;
