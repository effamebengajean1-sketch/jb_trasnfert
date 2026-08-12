<!--
  Détail d'une galerie : titre, dropzone d'upload, grille de photos.
  Page protégée par middleware auth.global.js.
-->
<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const galerieId = computed(() => route.params.id as string)

// URL de base sécurisée (SSR-safe)
const baseUrl = computed(() => {
  if (process.client) {
    return `${window.location.protocol}//${window.location.host}`
  }
  return ''
})

const { get, patch, delete: deleteApi } = useApi()
const { uploaderPhoto, validerFichier, uploadsEnCours, reinitialiser: reinitialiserUploads } = useUpload()

const galerie = ref<any>(null)
const photos = ref<Array<any>>([])
const enChargement = ref(true)
const erreur = ref('')
const lightboxOuvert = ref(false)
const photoLightbox = ref<any>(null)
const indexLightbox = ref(0)

async function chargerGalerie() {
  enChargement.value = true
  erreur.value = ''
  try {
    const data = await get(`/galleries/${galerieId.value}`)
    galerie.value = data
    photos.value = data.photos || []
  } catch (e: any) {
    erreur.value = e.message || 'Galerie introuvable'
  } finally {
    enChargement.value = false
  }
}

onMounted(() => {
  chargerGalerie()
})

async function renommerGalerie(nouveauTitre: string) {
  erreur.value = ''
  try {
    await patch(`/galleries/${galerieId.value}`, { titre: nouveauTitre })
    galerie.value.titre = nouveauTitre
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors du renommage'
    await chargerGalerie()
  }
}

async function onUploaded(photo: any) {
  photos.value.push(photo)
  reinitialiserUploads()
}

function openLightbox(photo: any, index: number) {
  photoLightbox.value = photo
  indexLightbox.value = index
  lightboxOuvert.value = true
}

function suivant() {
  if (!photoLightbox.value) return
  const idx = photos.value.findIndex((p) => p.id === photoLightbox.value.id)
  const next = (idx + 1) % photos.value.length
  photoLightbox.value = photos.value[next]
  indexLightbox.value = next
}

function precedent() {
  if (!photoLightbox.value) return
  const idx = photos.value.findIndex((p) => p.id === photoLightbox.value.id)
  const prev = (idx - 1 + photos.value.length) % photos.value.length
  photoLightbox.value = photos.value[prev]
  indexLightbox.value = prev
}

async function supprimerPhoto(photoId: string) {
  try {
    await deleteApi(`/galleries/${galerieId.value}/photos/${photoId}`)
    photos.value = photos.value.filter((p) => p.id !== photoId)
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors de la suppression'
  }
}

async function supprimerGalerie() {
  if (!confirm('Voulez-vous vraiment supprimer cette galerie ? Cette action est irréversible.')) {
    return
  }
  try {
    await deleteApi(`/galleries/${galerieId.value}`)
    router.push('/galleries')
  } catch (e: any) {
    console.error('Erreur lors de la suppression:', e)
    erreur.value = e.message || 'Erreur lors de la suppression de la galerie'
  }
}
</script>

<template>
  <div class="max-w-container-max mx-auto px-gutter py-xl">
    <GalleryHeader
      v-if="galerie"
      :titre="galerie.titre"
      :date-creation="galerie.dateCreation"
      :nombre-photos="photos.length"
      @share="() => {}"
      @rename="renommerGalerie"
    />

    <ShareLinkBox v-if="galerie" :lien="`${baseUrl}/g/${galerie.slug}`" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-lg mt-xl">
      <div class="lg:col-span-4 space-y-lg">
        <UploadDropzone :galerie-id="galerieId" @uploaded="onUploaded" />
      </div>

      <div class="lg:col-span-8">
        <UploadErrorBanner :open="!!erreur" :message="erreur" />

        <div v-if="enChargement" class="flex justify-center py-xl">
          <AppSpinner size="lg" />
        </div>

        <div v-else-if="!photos.length" class="text-center py-xl bg-surface rounded-xl shadow-trust border border-outline-variant">
          <Icon name="material-symbols:add-photo-alternate" class="text-4xl text-outline mb-sm block" />
          <p class="font-body-md text-on-surface-variant">
            Aucune photo. Déposez vos premières images dans la zone d'upload.
          </p>
        </div>

        <GalleryGrid
          v-else
          :photos="photos"
          :editable="true"
          @photo-click="openLightbox"
          @delete="supprimerPhoto"
        />
      </div>
    </div>

    <div class="mt-xl pt-lg border-t border-outline-variant flex justify-center">
      <button
        class="font-label-md text-label-md text-outline hover:text-error transition-colors flex items-center gap-xs"
        @click="supprimerGalerie"
      >
        <Icon name="material-symbols:delete" class="text-lg" />
        Supprimer la galerie
      </button>
    </div>

    <PhotoLightbox
      v-model:open="lightboxOuvert"
      :photo="photoLightbox"
      :index="indexLightbox"
      :total="photos.length"
      @next="suivant"
      @prev="precedent"
    />
  </div>
</template>