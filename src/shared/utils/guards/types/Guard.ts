export type Guard<T> = (input: unknown, ...rest: unknown[]) => input is T
