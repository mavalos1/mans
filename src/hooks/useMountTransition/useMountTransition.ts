import { useState, useEffect } from "react";

/**
 * A hook that keeps track of a boolean state with a delay.
 * Useful for mount/unmount transitioning dynamic element with animation/transition.
 */
export const useMountTransition = (isMounted: boolean, unmountDelay = 300) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [hasTransitionedIn, isMounted, unmountDelay]);

  return hasTransitionedIn;
};
