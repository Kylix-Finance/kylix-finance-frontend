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
  title?: string;
  icon?: Icon;
  hasIconBackground?: boolean;
  rightComponent?: ReactNode;
  iconColor?: string;
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

const Title = ({ title, fontSize }: TitleProps) => (
  <Typography variant="h6" fontSize={fontSize}>
    {" "}
    {title}
  </Typography>
);

const Card = ({
  icon: Icon,
  title,
  children,
  rightComponent: RightComponent,
  className,
  iconColor,
  headingFontSize,
}: Props) => {
  return (
    <Box
      className={`shadow-box rounded-lg p-6 bg-white w-full h-full flex flex-col ${className}`}
    >
      <Box className="flex justify-between items-center w-full mb-2">
        {(Icon || title) && (
          <Box className={`flex items-center gap-2`}>
            {Icon && <IconWithBackground icon={Icon} iconColor={iconColor} />}
            {title && <Title title={title} fontSize={headingFontSize} />}
          </Box>
        )}
        {RightComponent}
      </Box>
      {children}
    </Box>
  );
};

export default Card;
