import type { Email } from '@/entities'

import { endpoint } from './constants'

export async function fetchEmail({ id }: { id: number }): Promise<Email> {
  const response = await fetch(`${endpoint}/${id}`)
  return await response.json()
}
