import type { Guard } from './Guard'

export type InferGuardReturn<T> = T extends Guard<infer R> ? R : never
