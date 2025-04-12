"use client";

import { useTheme } from "@mui/material";
import React, { ComponentPropsWithRef } from "react";
import { IconType } from "react-icons";

export type SVGIconType = IconType;

type SizeProps =
	| { size?: number; width?: never; height?: never }
	| { size?: never; width?: number; height?: number };

export type SVGIconProps = Omit<
	ComponentPropsWithRef<"svg">,
	"width" | "height" | "color"
> &
	SizeProps & { color?: string; icon: SVGIconType; isDisabled?: boolean };

export const SVGIcon = ({
	color,
	height,
	icon: Icon,
	isDisabled,
	size,
	width,
	...rest
}: SVGIconProps) => {
	const theme = useTheme();

	const finalSize = size ?? 24;
	const finalWidth = width ?? finalSize;
	const finalHeight = height ?? finalSize;

	if (typeof Icon === "object" && "src" in Icon) {
		console.log("icon:", Icon);
		throw new Error("img not supported, use ImageIcon component instead");
	}

	const finalColor = isDisabled
		? theme.palette.grey[400]
		: color || theme.palette.grey[900];

	return (
		<Icon
			{...rest}
			color={finalColor}
			height={finalHeight}
			style={{
				width: finalWidth,
				height: finalHeight,
				...rest.style,
			}}
			width={finalWidth}
		/>
	);
};
