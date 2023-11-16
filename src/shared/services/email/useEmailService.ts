import type { Email } from '@/entities'
import { useEmailStore } from '@/shared/stores'
import { saveEmail } from '@/shared/api/emails'

import { queryEmail, queryEmailList } from './queries'

export const useEmailService = () => {
  const store = useEmailStore()

  const cacheEmailList = (result: Email[]) => {
    store.setEmailList(result)
    return result
  }

  const cacheEmail = (result: Email) => {
    store.emails.set(result.id, result)
    return result
  }

  return {
    fetchEmails() {
      return queryEmailList({ middleware: cacheEmailList })
    },
    fetchEmail(id: number) {
      return queryEmail({ id, middleware: cacheEmail })
    },
    async archiveEmail(id: number) {
      const email = store.emails.get(id)
      if (email) {
        email.archived = true
        return saveEmail(email)
      }
    }
  }
}
