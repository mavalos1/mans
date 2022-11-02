import type {
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
  PropsWithChildren,
} from "react";
import type { Merge } from "./Merge";

/**
 * Better ComponentProps<T> utility types than the default provided by React.
 * Source: https://github.com/emotion-js/emotion/blob/main/packages/react/types/helper.d.ts
 */
export type PropsOf<
  C extends
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<Record<string, unknown>>
> = Omit<
  JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>,
  /**
   * This is specifically to prevent emotion/styled-components polluting react components' namespace
   * until we rid of styled-components' dependency.
   */
  "css"
>;

/**
 * Utility type to extend a native HTML element props with a custom list of props.
 * @param E the element type to extends from, either an HTML element or a React component.
 * @param P the custom (non-HTML) props of the passed in React component (default = {})
 */
export type PropsOfExtend<
  E extends ElementType,
  P extends object = object
> = Merge<PropsOf<E>, PropsWithChildren<P>>;
