import type { Guard } from '../types'
import { isArrayOf } from '../isArrayOf'

export function createArrayOfGuard<T>(guard: Guard<T>) {
  return (value: unknown): value is Array<T> => isArrayOf(guard, value)
}
