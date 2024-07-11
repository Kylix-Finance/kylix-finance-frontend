import Doughnut from "~/components/Charts/DoughnutChart";
import FinanceSummary from "~/components/FinanceSummary/FinanceSummary";
import { palette } from "~/config/palette";
import { numToLocalString } from "~/utils";

const TotalLocked = () => {
  return (
    <div>
      <p>
        {numToLocalString(65800200)} <span>USD</span>
      </p>
      <div>
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
            color={palette.primary.main}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalLocked;
