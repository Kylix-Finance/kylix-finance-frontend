import { Box, Typography } from "@mui/material";
import { ComponentType, PropsWithChildren, SVGProps, ReactNode } from "react";
import { cn } from "~/utils";

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
  hasIcon: boolean;
}

interface Props extends PropsWithChildren, Header {
  className?: string;
}

const IconWithBackground = ({ icon: Icon, iconColor }: IconProps) => (
  <Box className="p-2 bg-[#F4FAF9] dark:bg-transparent rounded-lg">
    <Icon
      width="16px"
      height="16px"
      className={`${iconColor ?? "text-primary-500"}`}
    />
  </Box>
);

const Title = ({ title, hasIcon }: TitleProps) => (
  <Typography
    variant="h6"
    className={cn("text-[#1A433B] dark:text-[#FFFFFF]", {
      ["text-[#1A433B] dark:text-[#FFFFFF]"]: hasIcon,
    })}
  >
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
}: Props) => {
  return (
    <Box
      className={`shadow-box z-[999] rounded-lg p-6 bg-white dark:bg-black-500 w-full h-full flex flex-col ${className}`}
    >
      <Box className="flex justify-between items-center w-full mb-2">
        {(Icon || title) && (
          <Box className={`flex items-center gap-1`}>
            {Icon && <IconWithBackground icon={Icon} iconColor={iconColor} />}
            {title && <Title title={title} hasIcon={Boolean(Icon)} />}
          </Box>
        )}
        {RightComponent}
      </Box>
      {children}
    </Box>
  );
};

export default Card;
