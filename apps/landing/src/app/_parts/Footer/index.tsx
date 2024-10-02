import {
  Copyright,
  Discord,
  Instagram,
  KylixCircle,
  LinkedIn,
  Twitter,
} from "~/assets/svgs";
import { footerItems } from "~/data";
const createItem = (icon: React.FC, link: string) => ({
  link,
  Icon: icon,
});
const Footer = () => {
  return (
    <div className="absolute w-full text-[#fff]">
      <div className="footer-top-border"></div>

      <div className="w-full h-[569px] flex py-[50px] px-[140px] flex-col justify-between footer-bg">
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-[30px] justify-between w-[374px] h-[175px]">
            <div>
              <KylixCircle />
            </div>

            <div className="flex items-start gap-[13px]">
              {[
                createItem(Twitter, "twitter"),
                createItem(LinkedIn, "linkedIn"),
                createItem(Instagram, "instagram"),
                createItem(Discord, "discord"),
              ].map((item, index) => {
                return (
                  <div
                    className="w-[40px] h-[40px] flex justify-center items-center"
                    key={index}
                  >
                    {<item.Icon />}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex h-[288px] ">
            {footerItems.map((item, index) => {
              return (
                <div
                  className="flex flex-col gap-[30px] w-[200px] h-[288px] p-[10px]"
                  key={index}
                >
                  <span className="font-[Poppins] font-[700] leading-[32px] text-[24px]">
                    {item.title}
                  </span>
                  <div className="flex flex-col gap-[10px]">
                    {item.items.map((item, index) => {
                      return (
                        <div key={index}>
                          <a href={`#${item.link}`}>
                            <span className="font-[Poppins] font-[400] leading-[32px] text-[16px] text-[#7E8590]">
                              {item.label}
                            </span>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="flex w-fit gap-[4px] justify-between items-center">
            <Copyright />

            <span className="text-[#7E8B87] text-center font-[Roboto] text-[14px] font-[300] leading-[20px]">
              KYLIX 2023. ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
