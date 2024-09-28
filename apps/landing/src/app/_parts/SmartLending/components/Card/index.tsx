import Link from "next/link";
import { ArrowRight } from "~/assets/svgs";
import { SmartLending } from "~/types";
const Card = ({ to, description, heading }: SmartLending) => {
  return (
    <Link
      href={to}
      className="relative w-full h-72 lg:h-[411px] rounded-3xl p-7 bg-secondary-500 overflow-hidden"
    >
      <div className="flex flex-col justify-between text-white w-full h-full">
        <p className="text-sm lg:text-base font-light leading-6">
          {description}
        </p>
        <div className="flex justify-between">
          <h3 className="font-heading text-3xl md:font-bold md:text-5xl leading-[68px]">
            {heading}
          </h3>
          <ArrowRight />
        </div>
      </div>
      {/* <div className="absolute w-full h-full smartLandingItem  -right-[70%] top-[40%]" />
            <div className="absolute w-full h-full smartLandingItem  -right-[30%] top-[70%]" /> */}
    </Link>
  );
};

export default Card;
