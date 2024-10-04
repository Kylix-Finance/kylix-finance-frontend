import { Security } from "~/types";

const Card = ({ description, heading, icon: Icon }: Security) => {
  return (
    <div className="flex flex-col gap-5 justify-center md:justify-start">
      <div className="flex gap-5 items-center md:flex-col md:items-start">
        <div className="relative rounded-xl bg-gradient-to-br from-white/20 via-transparent p-0.5 w-24 h-24">
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: `radial-gradient(circle at bottom right, #56DDB490 0%, rgba(17, 23, 61, 0) 70%)`,
            }}
          />
          <div className="bg-secondary-500 p-7 rounded-xl">
            <Icon />
          </div>
        </div>

        <h3 className="font-heading text-3xl leading-9 text-white">
          {heading}
        </h3>
      </div>
      <p className="font-light text-white text-sm leading-5">{description}</p>
    </div>
  );
};

export default Card;
