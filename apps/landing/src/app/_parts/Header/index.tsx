import { Kylix } from "~/assets/svgs";
import { Actions } from "./Actions";
import { Nav } from "./Nav";

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 text-white py-[16px]">
      <div className="container mx-auto py-[16px] px-[33px] flex justify-between items-center rounded-[16px] border border-[#20332D] bg-gradient-to-r from-[#11121439] to-[#0C0D0F45]">
        <div className="font-bold text-lg">
          <span className="tracking-wide">
            <Kylix />
          </span>
        </div>

        <Nav />

        <Actions />
      </div>
    </header>
  );
};

export default StickyHeader;
