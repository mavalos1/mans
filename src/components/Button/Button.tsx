import type { PropsOfExtend } from "@/types/PropsOf";

import { forwardRef } from "react";

import { tx } from "@/libs/tailwindMerge";

export type MansButtonProps = PropsOfExtend<
  "button",
  {
    /**
     * Add more customisation as the design system expands.
     *
     * variants?: MansVariantKeys
     * size?: MansSizeKeys
     */
  }
>;

export const MansButton = forwardRef<HTMLButtonElement, MansButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={tx(
          "rounded bg-gray-400 p-3 font-semibold text-white",
          className
        )}
        {...props}
      />
    );
  }
);
