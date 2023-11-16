<script setup lang="ts">
import { format } from '@/shared/utils'
import type { Email } from '@/entities'

const { emails } = defineProps<{ emails: Email[] }>()
const emit = defineEmits<{
  (e: 'openEmail', id: number): void
  (e: 'archiveEmail', id: number): void
}>()

function strip(text: string, max = 50) {
  return text.length > max ? text.slice(0, max).trim() + '…' : text
}
</script>

<template>
  <table class="mail-table">
    <tbody>
      <tr
        v-for="email in emails"
        :key="email.id"
        :class="{ clickable: true, read: email.read }"
        @click="emit('openEmail', email.id)"
      >
        <td>
          <input type="checkbox" @click.stop />
        </td>
        <td>{{ email.from }}</td>
        <td>
          <strong>{{ strip(email.subject, 50) }}</strong> - {{ strip(email.body, 50) }}
        </td>
        <td class="date">{{ format(email.sentAt) }}</td>
        <td>
          <button @click.stop="emit('archiveEmail', email.id)">Archive</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.date {
  text-wrap: nowrap;
}
</style>
