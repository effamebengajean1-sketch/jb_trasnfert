<script setup lang="ts">
const props = withDefaults(defineProps<{
  photo: {
    id: string
    nomFichier: string
    cheminFichier: string
  } | null
}>(), {
  photo: null,
})

const enCours = ref(false)

/**
 * Repli utilisé si la récupération du blob échoue.
 *
 * L'attribut download d'une balise <a> est ignoré pour une ressource
 * servie par un autre domaine. Cloudinary expose la transformation
 * fl_attachment, qui renvoie l'en-tête Content-Disposition attendu,
 * mais le fichier porte alors son nom Cloudinary.
 */
function urlTelechargementForce(cheminFichier: string): string {
  if (!cheminFichier.includes('/upload/')) {
    return cheminFichier
  }

  return cheminFichier.replace('/upload/', '/upload/fl_attachment/')
}

/**
 * Télécharge la photo en conservant son nom d'origine.
 *
 * Le fichier est d'abord récupéré en mémoire sous forme de blob, ce qui
 * le place sur la même origine que la page. L'attribut download est
 * alors respecté par le navigateur.
 */
async function telecharger() {
  if (!props.photo || enCours.value) return

  enCours.value = true

  try {
    const reponse = await fetch(props.photo.cheminFichier, {
      mode: 'cors',
    })

    if (!reponse.ok) {
      throw new Error(`Téléchargement impossible (HTTP ${reponse.status})`)
    }

    const blob = await reponse.blob()
    const urlObjet = URL.createObjectURL(blob)

    const lien = document.createElement('a')
    lien.href = urlObjet
    lien.download = props.photo.nomFichier
    lien.style.display = 'none'

    document.body.appendChild(lien)
    lien.click()
    document.body.removeChild(lien)

    // Libère la mémoire une fois le téléchargement lancé
    setTimeout(() => URL.revokeObjectURL(urlObjet), 1000)
  } catch (err) {
    console.error('Téléchargement direct impossible, bascule sur Cloudinary :', err)

    const lien = document.createElement('a')
    lien.href = urlTelechargementForce(props.photo.cheminFichier)
    lien.download = props.photo.nomFichier
    lien.rel = 'noopener'
    lien.click()
  } finally {
    enCours.value = false
  }
}
</script>

<template>
  <button
    class="p-md bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="enCours || !photo"
    title="Télécharger"
    @click="telecharger"
  >
    <Icon
      :name="enCours ? 'material-symbols:progress-activity' : 'material-symbols:download'"
      :class="enCours ? 'animate-spin' : ''"
    />
  </button>
</template>
