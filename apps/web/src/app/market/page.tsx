import Borrow from "./_parts/Borrow";
import MarketsTable from "./_parts/MarketsTable";
import Supply from "./_parts/Supply";

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <Supply />
        <Borrow />
      </div>
      <MarketsTable />
    </div>
  );
}
