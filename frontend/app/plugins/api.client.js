// Plugin api.client.js : configure l'instance $fetch de Nuxt.
// Ajoute automatiquement la base URL et les headers communs
// (Content-Type par défaut, Accept).
// useApi.js se charge ensuite d'ajouter Authorization par appel.

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  return {
    provide: {
      apiBase: baseURL,
    },
  }
})
