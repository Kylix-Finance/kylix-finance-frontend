import { featuredPartnersData } from "~/data";
import styles from "./styles.module.css";
import Link from "next/link";

const FeaturedPartners = () => {
  return (
    <div
      className="flex flex-col gap-10 justify-center items-center w-full relative z-10 scroll-m-[11rem]"
      id={featuredPartnersData.id}
    >
      <h2 className="text-xl lg:text-3xl font-bold text-white">
        {featuredPartnersData.heading.left}
      </h2>
      <div className="w-full flex items-center gap-32 justify-center flex-wrap ">
        {featuredPartnersData.items.map(({ icon: Icon, link, name }) => (
          <Link
            href={link}
            key={link}
            className="w-32 lg:w-24 h-20 lg:h-28 flex flex-col items-center justify-center lg:gap-9"
          >
            <Icon />
            <p className="text-sm lg:text-lg font-medium text-white text-nowrap leading-loose lg:leading-3 -mt-1 text-center text-wrap">
              {name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPartners;
