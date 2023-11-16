import { assert } from './assert'
import type { AssertOptions } from './assert'
import type { Guard, InferGuardReturn } from './types'

export function ensure<G extends Guard<T>, T>(guard: G, value: unknown): InferGuardReturn<G>
export function ensure<G extends Guard<T>, T>(
  guard: G,
  value: unknown,
  options: AssertOptions
): InferGuardReturn<G>
export function ensure<G extends Guard<T>, T>(
  guard: G,
  value: unknown,
  options?: AssertOptions
): InferGuardReturn<G> {
  assert(guard(value), ...(options ? [options] : []))
  return value as InferGuardReturn<G>
}
