const TOKEN_STATE_KEY = 'auth-token'
const USER_STATE_KEY = 'auth-user'

export function useAuth() {
  const tokenState = useState(TOKEN_STATE_KEY, () => null)
  const userState = useState(USER_STATE_KEY, () => null)

  const isAuthenticated = computed(() => Boolean(tokenState.value && userState.value))

  function setSession(token, utilisateur) {
    tokenState.value = token
    userState.value = utilisateur
  }

  function clearSession() {
    tokenState.value = null
    userState.value = null
  }

  // ✅ AJOUTÉ : met à jour les données utilisateur sans toucher au token
  function updateUser(partial) {
    if (userState.value) {
      userState.value = { ...userState.value, ...partial }
    }
  }

  async function login(email, motDePasse) {
    const api = useApi()
    const data = await api.post('/auth/login', { email, motDePasse })
    setSession(data.token, data.utilisateur)
    return data
  }

  async function register(email, motDePasse, nom) {
    const api = useApi()
    const data = await api.post('/auth/register', { email, motDePasse, nom })
    setSession(data.token, data.utilisateur)
    return data
  }

  async function logout() {
    clearSession()
  }

  return {
    token: readonly(tokenState),
    user: readonly(userState),
    isAuthenticated,
    setSession,
    clearSession,
    updateUser,   // ← AJOUTÉ
    login,
    register,
    logout,
  }
}