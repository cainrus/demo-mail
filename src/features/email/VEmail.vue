<script setup lang="ts">
import type { Email } from '@/entities'
import { useBack } from '@/shared/services'
import { format } from '@/shared/utils'
defineProps<Email>()
const back = useBack()
</script>

<template>
  <header><span @click="back" aria-label="Close" class="close"></span> {{ subject }}</header>
  From: <em>{{ from }} on {{ format(sentAt) }}</em>
  <p>{{ body }}</p>
</template>

<style>
.close {
  cursor: pointer;
}
</style>
