import type { PropsWithChildren } from "react";

import { createPortal } from "react-dom";

import { useIsClient } from "@/hooks";

export type MansPortalProps = PropsWithChildren<{
  container?: Element | DocumentFragment;
}>;

export const MansPortal = ({ container, children }: MansPortalProps) => {
  const isClient = useIsClient();

  return isClient ? (
    createPortal(children, container ?? document.body)
  ) : (
    <>{children}</>
  );
};
