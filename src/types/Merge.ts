/**
 * Merge two types into a new type. Keys of the second type overrides keys of the first type.
 * A more lenient version of type-fest Merge that still works with Omit in subsequent type layers.
 *
 * @param T base type to be merged into.
 * @param U overriding type to merge.
 */
export type Merge<T, U> = Omit<T, keyof U> & U;
