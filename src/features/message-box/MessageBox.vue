<script setup>
const placeholder =
  'Enter your message here. You can include details about your inquiry, requests, or any information relevant to your email. Remember to keep it clear and concise for better understanding. Feel free to use bullet points or numbered lists for organization.'
</script>
<template>
  <textarea
    rows="5"
    class="textarea"
    required
    autocorrect="on"
    :placeholder="placeholder"
  ></textarea>
</template>

<style scoped>
.textarea {
  resize: vertical;
}
</style>
