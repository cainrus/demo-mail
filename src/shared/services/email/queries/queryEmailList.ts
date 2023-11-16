import { useQuery } from 'vue-query'

import type { Email } from '@/entities'
import { isEmailList } from '@/entities'
import { ensure, constant } from '@/shared/utils'

import { fetchEmails } from '@/shared/api'

export function queryEmailList({
  middleware = constant
}: { middleware?: (list: Email[]) => Email[] } = {}) {
  return useQuery('fetchEmails', async () => {
    return middleware(ensure(isEmailList, await fetchEmails(), 'Invalid email list'))
  })
}
