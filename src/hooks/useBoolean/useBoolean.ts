/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from "react";

export type UseBooleanProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

/**
 * A hook that provides a boolean state & basic callbacks to control the state.
 * @param initialValue the initial value of the boolean state
 * @param isDisabled if the boolean helpers should be disabled.
 */
export const useBoolean = ({
  initialValue = false,
  isDisabled = false,
}: {
  initialValue?: boolean;
  isDisabled?: boolean;
}): UseBooleanProps => {
  const [value, setValue] = useState(initialValue);

  const open = useCallback(() => {
    if (!isDisabled) {
      setValue(true);
    }
  }, [isDisabled]);

  const close = useCallback(() => {
    if (!isDisabled) {
      setValue(false);
    }
  }, [isDisabled]);

  const toggle = useCallback(() => {
    if (!isDisabled) {
      setValue((prev) => !prev);
    }
  }, [isDisabled]);

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
    }
  }, [initialValue]);

  return { isOpen: value, open, close, toggle };
};
