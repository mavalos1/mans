import type { PropsOfExtend } from "@/types/PropsOf";
import type { ReactNode } from "react";
import type { UseBooleanProps } from "@/hooks";

import { forwardRef, useImperativeHandle, useState } from "react";

import { tx } from "@/libs";
import { MansCard } from "@/components/Card";
import { MansPortal } from "@/components/Portal";
import { useBoolean, useClickOutside } from "@/hooks";
import { useMountTransition } from "@/hooks/useMountTransition";

export type MansDialogProps = PropsOfExtend<
  "div",
  {
    /**
     * If `true`, the dialog is open & mounted onto the page.
     */
    open?: boolean;
    /**
     * Render props to inject trigger-related props.
     * Subcomponents & polymorphism are the superior alternatives but too complex for this entry test.
     *
     * e.g.
     * <MansDialog>
     *  <MansDialog.Trigger as={MansChip}>PAID</MansDialog.Trigger>
     * </MansDialog>
     */
    triggerFn: (props: UseBooleanProps) => ReactNode;
    children: ReactNode | ((props: Partial<UseBooleanProps>) => ReactNode);
  }
>;

export const MansDialog = forwardRef<HTMLDivElement, MansDialogProps>(
  (
    { triggerFn, open: openProps = false, className, children, ...props },
    ref
  ) => {
    const { isOpen, open, close, toggle } = useBoolean({
      initialValue: openProps,
    });

    const transitioned = useMountTransition(isOpen);

    /**
     * Callback & imperative ref to handle dynamically mounted dialog ref.
     */
    const [dialogRef, setDialogRef] = useState<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => dialogRef as HTMLDivElement, [dialogRef]);

    /**
     * Close the dilaog on clicking outside of the dialog ref.
     */
    useClickOutside(close, [dialogRef]);

    return (
      <>
        {triggerFn({ isOpen, open, close, toggle })}
        <MansPortal>
          {(isOpen || transitioned) && (
            <div
              ref={ref}
              className={tx(
                "fixed inset-0 flex h-screen w-screen flex-col p-8 opacity-0",
                "transition-all duration-300 motion-reduce:transition-none",
                {
                  "bg-gray-500/20 opacity-100 backdrop-blur":
                    isOpen && transitioned,
                }
              )}
              {...props}
            >
              <MansCard
                ref={setDialogRef}
                role="dialog"
                className={tx(
                  "container-sm m-auto flex min-w-96 flex-col",
                  className
                )}
              >
                {typeof children === "function"
                  ? children({ isOpen, open, close, toggle })
                  : children}
              </MansCard>
            </div>
          )}
        </MansPortal>
      </>
    );
  }
);
