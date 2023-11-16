import { isObject } from '@/shared/utils'
import type { Email } from '@/entities'

export const isEmail = (item: unknown): item is Email => {
  return (
    isObject(item) &&
    typeof item.id === 'number' &&
    typeof item.from === 'string' &&
    typeof item.subject === 'string' &&
    typeof item.body === 'string' &&
    typeof item.sentAt === 'string' &&
    typeof item.archived === 'boolean' &&
    typeof item.read === 'boolean'
  )
}
