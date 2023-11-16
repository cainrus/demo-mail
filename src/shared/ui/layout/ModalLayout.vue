<script lang="ts" setup>
defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <dialog
    :class="$style['dialog']"
    open
    v-focus
    @click="$emit('close')"
    @keydown.esc="$emit('close')"
  >
    <div @click.stop>
      <slot />
    </div>
  </dialog>
</template>

<style module>
.dialog:focus {
  outline: none;
}
</style>
