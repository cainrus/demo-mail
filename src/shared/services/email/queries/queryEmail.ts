import { useQuery } from 'vue-query'

import type { Email } from '@/entities'
import { isEmail } from '@/entities'
import { constant, ensure } from '@/shared/utils'

import { fetchEmail } from '@/shared/api'

export function queryEmail({
  id,
  middleware = constant
}: {
  id: number
  middleware: (email: Email) => Email
}) {
  return useQuery('fetchEmail', async () => {
    return middleware(ensure(isEmail, await fetchEmail({ id }), `Invalid email#${id}}`))
  })
}
