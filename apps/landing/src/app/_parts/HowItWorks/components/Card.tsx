import { HowItsWork } from "~/types";
import clsx from "clsx";
interface Props {
  data: HowItsWork;
  className?: string;
}
const Card = ({
  data: { description, heading, image: Icon },
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "relative rounded-3xl bg-gradient-to-br from-white/20 via-transparent border border-primary-500/30 grid-item",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `radial-gradient(circle at top left, #56DDB490 0%, rgba(17, 23, 61, 0) 20%)`,
        }}
      />
      <div className="flex flex-col gap-20 bg-secondary-500 p-7 rounded-3xl">
        <div className="flex flex-col gap-2.5">
          <h3 className="font-heading font-bold text-4xl leading-[68px] text-white relative z-10">
            {heading}
          </h3>
          <p className="font-light text-sm leading-5 text-white relative z-10">
            {description}
          </p>
        </div>
        {Icon && (
          <div className="flex w-full h-full justify-center items-center">
            <Icon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
