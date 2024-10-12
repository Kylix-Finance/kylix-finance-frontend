import { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import { cn } from "~/utils";

interface Props extends ComponentProps<"div"> {
  children: ReactNode;
  heading: {
    right: string;
    left: string;
  };
  description: string;
}

const Section = ({ children, description, heading, ...rest }: Props) => {
  return (
    <div className={cn("relative w-full h-full", rest.className)} {...rest}>
      <div className="relative z-[1] flex flex-col gap-24 w-full h-full justify-center items-center px-8 py-10 md:px-16 md:py-20 lg:px-32 lg:py-44">
        <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
          <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2.5 font-bold font-heading w-full h-full text-4xl md:text-5xl lg:text-6xl">
            <span className="text-primary-500">{heading.left}</span>
            <span className="text-white">{heading.right}</span>
          </h2>
          <p className="font-light text-xs md:text-sm lg:text-base leading-6 text-secondary-100 text-center">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
