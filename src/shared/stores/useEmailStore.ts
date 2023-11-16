import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Email } from '@/entities'

export const useEmailStore = defineStore('emails', () => {
  const emails = reactive(new Map<number, Email>())

  const emailList = computed(() => {
    return [...emails.entries()].map(([, value]) => value)
  })

  const sortedEmails = computed(() => {
    return emailList.value
      .slice(0)
      .sort((emailA, emailB) => Date.parse(emailA.sentAt) - Date.parse(emailB.sentAt))
  })

  const unarchivedEmails = computed(() => {
    return emailList.value.filter((email) => !email.archived)
  })

  const setEmailList = (list: Email[]) => {
    for (const item of list) {
      emails.set(item.id, item)
    }
  }

  return {
    emails,
    emailList,
    sortedEmails,
    unarchivedEmails,

    setEmailList
  }
})
