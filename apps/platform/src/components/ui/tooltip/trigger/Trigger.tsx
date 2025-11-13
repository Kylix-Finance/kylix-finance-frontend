import { useMergeRefs } from "@floating-ui/react";
import { cloneElement, ComponentPropsWithRef, isValidElement } from "react";
import { useTooltip } from "~/hooks/useTooltip";
import { DataAttributes } from "~/types";

interface Props extends ComponentPropsWithRef<"div">, DataAttributes {
  tooltipState: ReturnType<typeof useTooltip>;
  children: React.ReactNode;
  asChild?: boolean;
}
const Trigger = ({
  children,
  asChild = false,
  tooltipState,
  ref,
  ...rest
}: Props) => {
  const finalRef = useMergeRefs([
    tooltipState.refs.setReference,
    ref,
    ...(isValidElement(children) && (children as any).ref
      ? [(children as any).ref]
      : []),
  ]);

  if (asChild && isValidElement(children)) {
    const referenceProps = tooltipState.getReferenceProps({
      ref,
      ...rest,
      "data-state": tooltipState.open ? "open" : "closed",
    } as React.HTMLProps<HTMLElement> & DataAttributes);

    return cloneElement(children, {
      ...referenceProps,
      ...(children.props as object),
    });
  }

  return (
    <div
      ref={finalRef}
      data-state={tooltipState.open ? "open" : "closed"}
      {...tooltipState.getReferenceProps(rest)}
    >
      {children}
    </div>
  );
};
export default Trigger;
