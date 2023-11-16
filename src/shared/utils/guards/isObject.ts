type UnknownObject = Record<string, unknown>
type BaseObject = {
  [index: string]: unknown
}

export function isObject<T extends BaseObject = UnknownObject>(argument: unknown): argument is T {
  return argument !== null && typeof argument === 'object'
}
