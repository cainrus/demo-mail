import type { Email } from '@/entities'

import { endpoint } from './constants'

export function patchEmail(email: Partial<Email> & { id: number }) {
  return fetch(`${endpoint}/${email.id}`, {
    method: 'PUT',
    body: JSON.stringify(email),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
