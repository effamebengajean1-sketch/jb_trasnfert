// Composable useUpload : logique d'upload de photos.
// - Valide format/taille avant envoi
// - Envoie via FormData vers POST /galleries/:id/upload
// - Suit la progression via XMLHttpRequest ($fetch Nuxt n'expose pas onProgress)
// - Retourne les données créées par le backend

import { reactive, ref } from 'vue'
import { useApi } from './useApi'
import { useAuth } from './useAuth'

const FORMATS_ACCEPTES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif',
]

const TAILLE_MAX_MB = 10

export function useUpload() {
  const { baseURL } = useApi()
  const { token } = useAuth()
  const uploadsEnCours = ref([])

  function validerFichier(fichier) {
    if (!FORMATS_ACCEPTES.includes(fichier.type)) {
      return `Format non supporté : ${fichier.type}. Formats acceptés : JPG, PNG, GIF, WebP, HEIC.`
    }
    if (fichier.size > TAILLE_MAX_MB * 1024 * 1024) {
      return `Fichier trop volumineux : ${(fichier.size / (1024 * 1024)).toFixed(1)} Mo. Maximum : ${TAILLE_MAX_MB} Mo.`
    }
    return null
  }

  async function uploaderPhoto(galerieId, fichier, onProgression) {
    const erreur = validerFichier(fichier)
    if (erreur) {
      throw new Error(erreur)
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    const item = reactive({
      id,
      nom: fichier.name,
      progression: 0,
      statut: 'en-cours',
    })

    uploadsEnCours.value.push(item)

    try {
      const formData = new FormData()
      formData.append('photo', fichier)

      const response = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', `${baseURL}/galleries/${galerieId}/upload`)

        if (token.value) {
          xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)
        }

        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            const pct = Math.round((e.loaded / e.total) * 100)
            item.progression = pct
            if (onProgression) onProgression(pct)
          }
        }

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            item.progression = 100
            item.statut = 'termine'
            try {
              resolve(JSON.parse(xhr.responseText))
            } catch {
              resolve(null)
            }
          } else {
            let msg = `Erreur HTTP ${xhr.status}`
            try {
              const data = JSON.parse(xhr.responseText)
              if (data.error) msg = data.error
            } catch {
              // message par défaut conservé
            }
            item.erreur = msg
            item.statut = 'erreur'
            reject(new Error(msg))
          }
        }

        xhr.onerror = () => {
          item.erreur = 'Erreur réseau lors de l\'upload'
          item.statut = 'erreur'
          reject(new Error('Erreur réseau'))
        }

        xhr.send(formData)
      })

      return response
    } finally {
      setTimeout(() => {
        const idx = uploadsEnCours.value.findIndex((u) => u.id === id)
        if (idx !== -1) uploadsEnCours.value.splice(idx, 1)
      }, 3000)
    }
  }

  function reinitialiser() {
    uploadsEnCours.value = []
  }

  return {
    uploadsEnCours,
    validerFichier,
    uploaderPhoto,
    reinitialiser,
  }
}