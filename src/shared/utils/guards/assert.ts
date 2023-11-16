export class AssertionError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, AssertionError.prototype)
  }
}
const defaultAssertionMessage = 'Assert failed'

export function assert(
  condition: unknown,
  options?:
    | string
    | {
        message?: string
        error?: (() => Error) | Error
      }
): asserts condition {
  let optionsData
  if (options) {
    optionsData =
      typeof options === 'string'
        ? {
            message: options,
            error: undefined
          }
        : options
  } else {
    optionsData = {
      message: undefined,
      error: undefined
    }
  }

  const { message = defaultAssertionMessage, error } = optionsData

  if (!condition) {
    if (error) {
      if (typeof error === 'function') {
        throw error()
      } else {
        throw error
      }
    } else {
      throw new AssertionError(message)
    }
  }
}

export type AssertOptions = Parameters<typeof assert>[1]
