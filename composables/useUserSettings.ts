import { useLocalStorage } from '@vueuse/core'

export default function () {
  let postFullSizeImages = ref<boolean>(false)
  let postsPerPage = ref<number>(29)

  if (import.meta.client) {
    postFullSizeImages = useLocalStorage('settings-postFullSizeImages', false, {
      writeDefaults: false
    })
    postsPerPage = useLocalStorage('settings-postsPerPage', 29, {
      writeDefaults: false
    })
  }

  return {
    postFullSizeImages,
    postsPerPage
  }
}
