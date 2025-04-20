import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { ComponentPropsWithRef, ReactNode, RefObject } from "react";
import { useTooltip } from "~/hooks/useTooltip";
import { DataAttributes } from "~/types";
import styles from "./Content.module.scss";
interface Props extends ComponentPropsWithRef<"div">, DataAttributes {
  tooltipState: ReturnType<typeof useTooltip>;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

const TooltipContent = ({
  style,
  tooltipState,
  children,
  ref,
  ...rest
}: Props) => {
  const finalRef = useMergeRefs([tooltipState.refs.setFloating, ref]);

  if (!tooltipState.open) return null;

  return (
    <FloatingPortal>
      <div
        ref={finalRef}
        style={{
          ...tooltipState.floatingStyles,
          zIndex: tooltipState.zIndex,
          ...style,
        }}
        className={styles.container}
        {...tooltipState.getFloatingProps(rest)}
      >
        {children}
        {tooltipState.showArrow && (
          <div
            ref={tooltipState.arrowRef}
            className={styles.tail}
            style={{
              ...tooltipState.arrowStyles,
            }}
          >
            <div
              className={styles.tail_content}
              style={{
                ...(tooltipState.placement.includes("top") && {
                  bottom: "-4px",
                  right: "50%",
                }),
                ...(tooltipState.placement.includes("bottom") && {
                  top: "-4px",
                  left: "50%",
                }),
                ...(tooltipState.placement.includes("left") && {
                  right: "-4px",
                  top: "50%",
                }),
                ...(tooltipState.placement.includes("right") && {
                  left: "-4px",
                  top: "50%",
                }),
              }}
            />
          </div>
        )}
      </div>
    </FloatingPortal>
  );
};
export default TooltipContent;
