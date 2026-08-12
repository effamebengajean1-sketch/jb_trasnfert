export default defineNuxtPlugin(() => {
  const theme = useState<'light' | 'dark' | 'system'>('jb-theme', () => 'system')

  // Lecture localStorage au démarrage client
  const saved = localStorage.getItem('jb-theme') as 'light' | 'dark' | 'system' | null
  if (saved && ['light', 'dark', 'system'].includes(saved)) {
    theme.value = saved
  }

  // Applique immédiatement
  applyTheme(theme.value)

  // Réagit aux changements
  watch(theme, (val) => {
    applyTheme(val)
    localStorage.setItem('jb-theme', val)
  })

  // Réagit au changement système si mode "system"
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (theme.value === 'system') {
      applyTheme('system')
    }
  })
})

function applyTheme(theme: string) {
  const html = document.documentElement
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  if (isDark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}