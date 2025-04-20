import { useTooltip, UseTooltipParams } from "~/hooks/useTooltip";
import { TooltipTrigger } from "./trigger";
import { TooltipContent } from "./content";
import { ReactNode } from "react";

interface Props extends UseTooltipParams {
  children: ReactNode;
  content: string;
}

const Tooltip = ({ children, content, ...options }: Props) => {
  const tooltipState = useTooltip(options);

  return (
    <>
      <TooltipTrigger tooltipState={tooltipState}>{children}</TooltipTrigger>
      <TooltipContent tooltipState={tooltipState}>{content}</TooltipContent>
    </>
  );
};
export default Tooltip;
