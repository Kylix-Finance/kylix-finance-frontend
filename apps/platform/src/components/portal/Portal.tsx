"use client";
import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  id: string;
  children: ReactNode;
}

const Portal = ({ children, id }: Props) => {
  const [node, setNode] = useState<HTMLElement>();
  useLayoutEffect(() => {
    const nodeElement = document.getElementById(id);
    if (nodeElement) setNode(nodeElement);
  }, [id]);
  if (!node) return;
  return createPortal(children, node);
};

export default Portal;
