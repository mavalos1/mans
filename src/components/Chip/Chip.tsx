import type { PropsOfExtend } from "@/types/PropsOf";

import { forwardRef } from "react";

import { tx } from "@/libs";

export type MansChipProps = PropsOfExtend<"span">;

export const MansChip = forwardRef<HTMLSpanElement, MansChipProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={tx(
          "cursor-pointer rounded-full bg-gray-300 px-2 py-1 text-xs font-semibold uppercase text-gray-500",
          className
        )}
        {...props}
      />
    );
  }
);
