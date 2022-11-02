import type { Argument } from "classnames";

import cx from "classnames";
import { twMerge } from "tailwind-merge";

/**
 * Combine the functionality of classnames & tailwind-merge to manage overridable utility classes.
 */
const tx = (...args: Argument[]): string => twMerge(cx(...args));

export { tx };
