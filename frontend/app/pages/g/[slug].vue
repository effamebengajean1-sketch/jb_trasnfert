<!--
  Page publique de consultation d'une galerie par son slug.
  Layout public.vue, pas d'auth requise.
-->
<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { get } = useApi()
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
    const data = await get(`/g/${slug.value}`)
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
</script>

<template>
  <NuxtLayout name="public">
    <header class="w-full pt-xl pb-lg px-gutter max-w-container-max mx-auto text-center">
      <h1 v-if="galerie" class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        {{ galerie.titre }}
      </h1>
      <p v-else class="font-label-md text-label-md text-on-surface-variant mt-sm flex items-center justify-center gap-base">
        <Icon name="material-symbols:info" class="text-[18px]" />
        Chargement...
      </p>
    </header>

    <main class="w-full px-gutter max-w-container-max mx-auto pb-xl">
      <UploadErrorBanner :open="!!erreur" :message="erreur" />

      <div v-if="enChargement" class="flex justify-center py-xl">
        <AppSpinner size="lg" />
      </div>

      <div v-else-if="!photos.length" class="text-center py-xl bg-surface rounded-xl shadow-trust border border-outline-variant">
        <Icon name="material-symbols:photo-library" class="text-4xl text-outline mb-sm block" />
        <p class="font-body-md text-on-surface-variant">Cette galerie ne contient aucune photo.</p>
      </div>

      <GalleryGrid
        v-else
        :photos="photos"
        :editable="false"
        @photo-click="openLightbox"
      />

      <footer class="mt-xl pt-lg border-t border-outline-variant flex flex-col items-center gap-sm">
        <p class="font-label-sm text-label-sm text-on-surface-variant">
          Partagé via <span class="text-primary font-bold">JB Transfert</span>
        </p>
        <NuxtLink to="/register" class="font-label-sm text-label-sm text-primary font-bold hover:underline">
          Vous aussi, partagez vos photos → Créer un compte
        </NuxtLink>
      </footer>
    </main>

    <PhotoLightbox
      v-model:open="lightboxOuvert"
      :photo="photoLightbox"
      :index="indexLightbox"
      :total="photos.length"
      @next="suivant"
      @prev="precedent"
    />
  </NuxtLayout>
</template>