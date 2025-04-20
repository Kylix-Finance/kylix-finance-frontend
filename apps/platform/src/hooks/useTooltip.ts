import { arrow, autoPlacement, AutoPlacementOptions, autoUpdate, flip, offset, Placement, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, useRole } from "@floating-ui/react";
import { useRef, useState } from "react";

export interface UseTooltipParams {
    initialOpen?: boolean;
    placement?: Placement | "auto";
    placementOptions?: Partial<AutoPlacementOptions>;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    zIndex?: number;
    showArrow?: boolean
}

export function useTooltip({
    initialOpen = false,
    placement = "auto",
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    zIndex = 1000,
    showArrow,
    placementOptions
}: UseTooltipParams = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;
    const arrowRef = useRef(null);

    const data = useFloating({
        placement: placement === "auto" ? undefined : placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            placement === "auto" ? autoPlacement({
                allowedPlacements: ['top', 'right', 'bottom', 'left'],
                ...placementOptions
            }) : flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "start",
                padding: 5,
            }),
            autoPlacement({
            }),
            shift({ padding: 5 }),
            ...(showArrow ? [arrow({ element: arrowRef })] : [])
        ],
    });

    const context = data.context;

    const hover = useHover(context, {
        move: false,
        enabled: controlledOpen == null,
    });

    const focus = useFocus(context, {
        enabled: controlledOpen == null,
    });

    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });
    const interactions = useInteractions([hover, focus, dismiss, role]);

    return {
        arrowRef,
        showArrow,
        open,
        setOpen,
        zIndex,
        arrowStyles: showArrow ? {
            left: data.middlewareData.arrow?.x,
            top: data.middlewareData.arrow?.y,
        } : undefined,
        ...interactions,
        ...data,
    }
}