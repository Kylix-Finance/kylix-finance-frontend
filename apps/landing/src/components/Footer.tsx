import Link from "next/link";
import {
  Discord,
  Instagram,
  KylixCircle,
  LinkedIn,
  Twitter,
} from "~/assets/svgs";
import { footerData } from "~/data";

const Footer = () => {
  return (
    <div className="absolute w-full text-white flex flex-col justify-center">
      <div className="footer-top-border" />
      <div className="w-full h-full py-12 px-5 lg:px-36 footer-bg">
        <div className="flex flex-col lg:flex-row w-full justify-between mb-10">
          <div className="flex flex-col items-center justify-center lg:justify-start gap-7">
            <KylixCircle />
            <div className="flex items-center justify-center gap-3 mb-10">
              {footerData.left.map(({ icon: Icon, link }, index) => {
                return (
                  <Link
                    className="w-10 h-10 flex justify-center items-center"
                    key={index}
                    href={link}
                  >
                    <Icon width={24} height={24} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {footerData.right.map((item, index) => {
              return (
                <div className="flex flex-col gap-5 lg:gap-8 p-2 " key={index}>
                  <p className="font-semibold lg:font-bold leading-4 lg:leading-8 text-xl lg:text-2xl">
                    {item.title}
                  </p>
                  <div className="flex flex-col gap-1.5 lg:gap-2.5">
                    {item.items.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          href={item.link}
                          className="font-normal leading-8 text-sm text-primaryText hover:text-primaryText/70 transition-all duration-150 w-fit"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-primaryText text-xs lg:text-sm font-light leading-5 text-center">
          &copy; KYLIX 2024-2025. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
