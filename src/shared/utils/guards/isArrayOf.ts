import type { Guard } from './types'

export const isArrayOf = <T>(guard: Guard<T>, value: unknown): value is Array<T> => {
  return Array.isArray(value) && value.every((item) => guard(item))
}
