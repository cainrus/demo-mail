<script setup lang="ts">
import { VEmail, MessageBox } from '@/features'
import { useEmailService } from '@/shared/services'
import VAccordion from '@/shared/ui/accordion/VAccordion.vue'
const props = defineProps<{ id: number }>()
const emailService = useEmailService()
const { data, isLoading } = emailService.fetchEmail(props.id)
</script>

<template>
  <article>
    <template v-if="data">
      <VEmail v-bind="data" />
      <footer>
        <VAccordion title="Make Response">
          <MessageBox />
        </VAccordion>
      </footer>
    </template>
    <div v-if="isLoading">Loading...</div>
  </article>
</template>
