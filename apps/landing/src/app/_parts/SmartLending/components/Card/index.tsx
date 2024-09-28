import Link from "next/link";
import { ArrowRight } from "~/assets/svgs";
import { SmartLending } from "~/types";

const Card = ({ to, description, heading }: SmartLending) => {
  return (
    <Link
      href={to}
      className=" p-0.5 w-full h-72 lg:h-[411px] rounded-3xl bg-gradient-to-br from-white/20 via-transparent"
    >
      <div className="relative w-full h-full rounded-3xl p-7 overflow-hidden bg-secondary-500">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at bottom, #56DDB490 0%, rgba(17, 23, 61, 0) 70%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at bottom right, #56DDB490 0%, rgba(17, 23, 61, 0) 70%)`,
          }}
        />

        <div className="flex flex-col justify-between text-white w-full h-full relative z-10">
          <p className="text-sm lg:text-base font-light leading-6">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <h3 className="font-heading text-3xl md:font-bold md:text-4xl lg:text-5xl leading-5 md:leading-9 lg:leading-[68px]">
              {heading}
            </h3>
            <ArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
