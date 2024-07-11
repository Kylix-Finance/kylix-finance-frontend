import { numToLocalString } from "~/utils";

type FinanceSummaryProps = {
  label: string;
  value: number;
  color: string;
};

const FinanceSummary = ({ label, value, color }: FinanceSummaryProps) => {
  return (
    <div className="flex flex-col gap-1  ">
      <div className="flex items-center">
        <div
          className="w-3 h-3 rounded-sm mr-2"
          style={{ backgroundColor: color }}
        ></div>
        <p>{label}</p>
      </div>
      <p>$ {numToLocalString(value)}</p>
    </div>
  );
};

export default FinanceSummary;
