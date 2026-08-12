// Composable useApi : point d'entrée unique vers le backend.
// Injecte automatiquement le header Authorization en consommant useAuth.
// Tous les composants doivent utiliser useApi, jamais $fetch directement.

import { useAuth } from './useAuth'

export function useApi() {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase
  const { token } = useAuth()

  async function requete(path, options = {}) {
    const headers = { ...(options.headers || {}) }

    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`
    }

    try {
      return await $fetch(path, {
        baseURL,
        ...options,
        headers,
      })
    } catch (err) {
      const message = err?.data?.error || err?.message || 'Erreur réseau'
      throw new Error(message)
    }
  }

  return {
    baseURL,
    get: (path, options) => requete(path, { ...options, method: 'GET' }),
    post: (path, body, options) => requete(path, { ...options, method: 'POST', body }),
    patch: (path, body, options) => requete(path, { ...options, method: 'PATCH', body }),
    delete: (path, options) => requete(path, { ...options, method: 'DELETE' }),

    upload: (path, formData) =>
      requete(path, {
        method: 'POST',
        body: formData,
        headers: {},
      }),
  }
}
