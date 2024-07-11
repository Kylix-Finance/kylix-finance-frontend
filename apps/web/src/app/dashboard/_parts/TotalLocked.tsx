import Doughnut from "~/components/Charts/DoughnutChart";
import FinanceSummary from "~/components/FinanceSummary/FinanceSummary";
import LineBreak from "~/components/LineBreak";
import { palette } from "~/config/palette";
import { numToLocalString } from "~/utils";

const TotalLocked = () => {
  return (
    <div className="flex flex-col h-full">
      <p className="mb-9">
        {numToLocalString(65800200)} <span>USD</span>
      </p>
      <div className="flex justify-between mb-auto">
        <Doughnut />
        <div>
          <FinanceSummary
            label="Total Deposit"
            value={1502300}
            color={palette.primary.main}
          />
          <FinanceSummary
            label="Total Borrow"
            value={1502300}
            color={palette.secondary.main}
          />
        </div>
      </div>
      <LineBreak />
      <p className="mb-2">Kylix Treasury Amount</p>
      <p>
        {numToLocalString(20800000)} <span>USD</span>
      </p>
    </div>
  );
};

export default TotalLocked;
