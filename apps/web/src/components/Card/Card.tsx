import { Box, Typography } from "@mui/material";
import {
  FC,
  ComponentType,
  PropsWithChildren,
  SVGProps,
  ReactNode,
} from "react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

interface Header {
  hasIconBackground?: boolean;
  icon?: Icon;
  iconColor?: string;
  rightComponent?: ReactNode;
  subTitle?: string;
  title?: string;
}
interface IconProps {
  icon: Icon;
  iconColor?: string;
}

interface TitleProps {
  title: string;
  fontSize?: number | string;
}

interface Props extends PropsWithChildren, Header {
  className?: string;
  headingFontSize?: number | string;
  subHeadingFontSize?: number | string;
}

const IconWithBackground = ({ icon: Icon, iconColor }: IconProps) => (
  <Box className="p-2 bg-[#F4FAF9] rounded-lg">
    <Icon
      width="16px"
      height="16px"
      className={`${iconColor ?? "text-primary-500"}`}
    />
  </Box>
);

const Heading = ({ title, fontSize }: TitleProps) => (
  <Typography variant="h6" fontSize={fontSize}>
    {" "}
    {title}
  </Typography>
);

const SubHeading = ({ title, fontSize }: TitleProps) => (
  <Typography
    className="!text-[19px] !font-[400] !leading-[20px] !tracking-[-0.02em]"
    fontSize={fontSize}
  >
    {title}
  </Typography>
);

const Card = ({
  children,
  className,
  hasIconBackground,
  headingFontSize,
  icon: Icon,
  iconColor,
  rightComponent: RightComponent,
  subHeadingFontSize = "19px",
  subTitle,
  title,
}: Props) => {
  return (
    <Box
      className={`shadow-box rounded-lg p-6 bg-white w-full h-full flex flex-col ${className}`}
    >
      <Box className="flex justify-between items-center w-full mb-2">
        {(Icon || title) && (
          <Box>
            <Box className={`flex items-center gap-2`}>
              {Icon &&
                (hasIconBackground ? (
                  <IconWithBackground icon={Icon} iconColor={iconColor} />
                ) : (
                  <Icon />
                ))}
              <Box className="flex flex-col gap-[16px]">
                {title && <Heading title={title} fontSize={headingFontSize} />}
                {subTitle && (
                  <SubHeading title={subTitle} fontSize={subHeadingFontSize} />
                )}
              </Box>
            </Box>
          </Box>
        )}
        {RightComponent}
      </Box>
      {children}
    </Box>
  );
};

export default Card;
