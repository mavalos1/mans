import type { PropsOfExtend } from "@/types/PropsOf";

import { forwardRef } from "react";

import { tx } from "@/libs";

export type MansInputProps = PropsOfExtend<"input">;

export const MansInput = forwardRef<HTMLInputElement, MansInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={tx(
          "rounded border border-gray-300 p-1 focus:border-gray-500",
          className
        )}
        {...props}
      />
    );
  }
);
