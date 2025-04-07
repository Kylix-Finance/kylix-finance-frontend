"use client";
import React from "react";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import Image from "next/image";
import { TokenIcons } from "~/config";

interface Props {
  symbol?: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string;
}

const TokenIcon = ({
  symbol = "",
  height = 32,
  width = 32,
  className,
}: Props) => {
  const upperCaseSymbol = symbol.toUpperCase();
  const IconComponent = TokenIcons[upperCaseSymbol];

  if (!IconComponent) {
    const avatar = createAvatar(glass, {
      size: 128,
      radius: 100,
      seed: symbol,
    }).toDataUri();

    return (
      <Image
        alt="Avatar"
        draggable="false"
        height={height}
        src={avatar}
        style={{ flexShrink: 0 }}
        width={width}
      />
    );
  }

  return (
    <IconComponent
      className={className}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      style={{ flexShrink: 0 }}
      width={width}
      // viewBox="0 0 32 32"
    />
  );
};

export default TokenIcon;
