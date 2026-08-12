export function usePwa() {
  const installPrompt = ref(null)
  const canInstall = ref(false)

  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      installPrompt.value = e
      canInstall.value = true
    })

    window.addEventListener('appinstalled', () => {
      installPrompt.value = null
      canInstall.value = false
    })
  })

  async function install() {
    if (!installPrompt.value) return
    installPrompt.value.prompt()
    const { outcome } = await installPrompt.value.userChoice
    if (outcome === 'accepted') {
      installPrompt.value = null
      canInstall.value = false
    }
  }

  return { canInstall, install }
}