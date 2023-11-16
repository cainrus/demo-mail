import { useRoute, useRouter } from 'vue-router'

export const useBack = () => {
  const router = useRouter()
  const goto = useRoute().meta.onClose?.goto
  return () => {
    if (goto) void router.push(goto)
    else router.back()
  }
}
