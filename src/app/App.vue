<script setup lang="ts">
import DefaultLayout from '@/shared/ui/layout/DefaultLayout.vue'
import ModalLayout from '@/shared/ui/layout/ModalLayout.vue'
</script>

<template>
  <DefaultLayout>
    <Suspense>
      <RouterView />
    </Suspense>
  </DefaultLayout>
  <ModalLayout v-if="$route.meta.modal" @close="$router.push($route.meta.onClose?.goto)">
    <RouterView name="modal" :key="$route.fullPath" />
  </ModalLayout>
</template>
