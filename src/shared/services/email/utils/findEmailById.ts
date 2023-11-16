import type { Email } from '@/entities'

export const findEmailById = (emails: Email[], id: number): Email | undefined => {
  return emails.find((email) => email.id === id)
}
