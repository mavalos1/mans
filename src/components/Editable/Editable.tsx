import type { ReactNode } from "react";
import type { UseBooleanProps } from "@/hooks";
import type { PropsOfExtend } from "@/types/PropsOf";

import { useState } from "react";

import { useClickOutside, useBoolean } from "@/hooks";
import { MansInput } from "@/components/Input";
import { tx } from "@/libs";

export type EditableData = UseBooleanProps & {
  value?: string | number | string[];
};

export type MansEditableProps<T extends string | number | string[] = string> =
  PropsOfExtend<
    "button",
    {
      value: T;
      /**
       * Render props to inject trigger-related props.
       * Subcomponents & polymorphism are the superior alternatives but too complex for this entry test.
       */
      renderEditable?: (props: EditableData) => ReactNode;
      onChange?: (value: T) => void;
    }
  >;

export const MansEditable = <T extends string | number | string[] = string>({
  className,
  value: valueProps,
  renderEditable,
  onChange,
  ...props
}: MansEditableProps<T>) => {
  const { isOpen, open, close, toggle } = useBoolean({});

  const [value, setValue] = useState<T>(valueProps);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  useClickOutside(() => {
    /**
     * Emit the final value after save via clicking outside.
     */
    onChange?.(value);
    close();
  }, [inputRef]);

  return (
    <>
      {isOpen ? (
        <MansInput
          autoFocus
          ref={setInputRef}
          value={value}
          onChange={(e) => setValue(e.target.value as T)}
          className={tx("w-full", className)}
        />
      ) : (
        <button
          onClick={open}
          className={tx(
            "w-full cursor-pointer rounded border border-transparent p-1 text-left hover:bg-gray-200",
            "transition-colors duration-300 motion-reduce:transition-none",
            className
          )}
          {...props}
        >
          {renderEditable
            ? renderEditable({ value, isOpen, open, close, toggle })
            : value}
        </button>
      )}
    </>
  );
};
