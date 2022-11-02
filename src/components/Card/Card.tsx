import type { PropsOfExtend } from "@/types/PropsOf";

import { forwardRef } from "react";

import { tx } from "@/libs/tailwindMerge";

export type MansCardProps = PropsOfExtend<"div">;

export const MansCard = forwardRef<HTMLDivElement, MansCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={tx("flex flex-col rounded bg-white p-6", className)}
        {...props}
      />
    );
  }
);
