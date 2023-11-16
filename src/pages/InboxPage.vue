<script setup lang="ts">
import { useRouter } from 'vue-router'
import { EmailRoute } from '@/app/router'
import { InboxList } from '@/features'
import { useEmailService } from '@/shared/services'

const { push } = useRouter()
const emailService = await useEmailService()
function openEmail(id: number) {
  push({ name: EmailRoute, params: { id } })
}

const { isLoading, data: emails } = emailService.fetchEmails()
</script>

<template>
  <Teleport to="#header"><h1>VMail Inbox</h1></Teleport>

  <template v-if="isLoading"> Loading... </template>
  <InboxList
    v-else-if="emails?.length"
    :emails="emails"
    @openEmail="openEmail"
    @archiveEmail="emailService.archiveEmail"
  />
</template>
