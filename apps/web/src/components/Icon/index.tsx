"use client";
import React from "react";
import { createAvatar } from "@dicebear/core";
import { glass } from "@dicebear/collection";
import { data } from "~/config/data";
import Image from "next/image";

interface Props {
  symbol: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string;
}

const Icon = ({ symbol, height = 32, width = 32, className }: Props) => {
  const IconComponent = data.coins[symbol];

  if (!IconComponent) {
    const avatar = createAvatar(glass, {
      size: 128,
      radius: 100,
      seed: symbol,
    }).toDataUri();

    return (
      <Image
        src={avatar}
        alt="Avatar"
        height={height}
        width={width}
        draggable="false"
      />
    );
  }

  return (
    <IconComponent
      height={height}
      width={width}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      viewBox="0 0 32 32"
    />
  );
};

export default Icon;
