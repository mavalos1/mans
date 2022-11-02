import type { RefObject } from "react";

import { useEffect } from "react";

import { useIsClient } from "../useIsClient";

/**
 * A hook that will trigger a callback when the user clicks outside of the
 * specified elements. This is useful for modal elements that needs to be
 * dismissed when clicked outside.
 *
 * @param onClickOutside the callback that will be triggered when the user clicks outside of the specified elements.
 * @param elements a list of elements that which clicked on, will not trigger the click outside callback.
 */
export const useClickOutside = (
  onClickOutside: () => void,
  elements: (RefObject<HTMLElement> | null | HTMLElement)[]
) => {
  const isClient = useIsClient();

  useEffect(() => {
    const handleClick = (e: Event) => {
      const clickedOutside = !elements.some((node) => {
        if (node instanceof HTMLElement) {
          return node.contains(e.target as HTMLElement);
        }
        return node?.current?.contains(e.target as HTMLElement);
      });

      if (clickedOutside) {
        onClickOutside();
      }
    };

    /** Add when mounted. */
    if (isClient) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("touchstart", handleClick);
    }

    /** Clean-up function to be called when unmounted. */
    return () => {
      if (isClient) {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
      }
    };
  }, [elements, isClient, onClickOutside]);
};
