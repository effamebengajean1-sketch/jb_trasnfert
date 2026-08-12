// Middleware auth.global.js : protège les routes privées.
// Toute route sauf /, /login, /register, /g/[slug] et /health
// nécessite une session valide. On utilise une redirection 302
// (Nuxt la gère automatiquement) vers /login.

import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  const routesPubliques = ['/', '/login', '/register']
  const estRoutePublique = routesPubliques.includes(to.path) || to.path.startsWith('/g/')

  if (!isAuthenticated.value && !estRoutePublique) {
    return navigateTo('/login')
  }
})
