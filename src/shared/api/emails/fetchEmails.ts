import type { Email } from '@/entities'

import { endpoint } from './constants'

export async function fetchEmails(): Promise<Email[]> {
  const response = await fetch(endpoint)
  return await response.json()
}
