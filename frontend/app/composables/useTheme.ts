export function useTheme() {
  const theme = useState<'light' | 'dark' | 'system'>('jb-theme', () => 'system')

  const isDark = computed(() => {
    if (theme.value === 'dark') return true
    if (theme.value === 'light') return false
    // system
    if (process.client) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  function setTheme(val: 'light' | 'dark' | 'system') {
    theme.value = val
  }

  function toggleTheme() {
    theme.value = isDark.value ? 'light' : 'dark'
  }

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
  }
}