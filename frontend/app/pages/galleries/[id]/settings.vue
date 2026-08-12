<!--
  Réglages d'une galerie : renommer, copier le lien, supprimer.
-->
<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const galerieId = computed(() => route.params.id as string)
const baseUrl = computed(() => `${window.location.protocol}//${window.location.host}`)

const { get, patch } = useApi()
const { token } = useAuth()

const galerie = ref<any>(null)
const titre = ref('')
const enChargement = ref(true)
const sauvegardeEnCours = ref(false)
const erreur = ref('')
const copie = ref(false)

async function chargerGalerie() {
  enChargement.value = true
  erreur.value = ''
  try {
    const data = await get(`/galleries/${galerieId.value}`)
    galerie.value = data
    titre.value = data.titre
  } catch (e: any) {
    erreur.value = e.message || 'Galerie introuvable'
  } finally {
    enChargement.value = false
  }
}

onMounted(() => {
  chargerGalerie()
})

async function sauvegarderTitre() {
  if (!titre.value.trim() || titre.value === galerie.value.titre) return

  sauvegardeEnCours.value = true
  erreur.value = ''
  try {
    const miseAJour = await patch(`/galleries/${galerieId.value}`, { titre: titre.value.trim() })
    galerie.value = miseAJour
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors de la mise à jour'
  } finally {
    sauvegardeEnCours.value = false
  }
}

async function copierLien() {
  const lien = `${baseUrl}/g/${galerie.value.slug}`
  try {
    await navigator.clipboard.writeText(lien)
    copie.value = true
    setTimeout(() => {
      copie.value = false
    }, 2000)
  } catch {
    // silencieux
  }
}

async function supprimerGalerie() {
  if (!confirm('Êtes-vous sûr de vouloir supprimer cette galerie ? Cette action est irréversible.')) {
    return
  }

  try {
    await get(`/galleries/${galerieId.value}`, { method: 'DELETE' })
    router.push('/galleries')
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors de la suppression'
  }
}
</script>

<template>
  <div class="max-w-container-max mx-auto px-gutter py-xl">
    <div class="max-w-2xl mx-auto">
      <h1 class="font-headline-xl text-headline-xl text-primary mb-lg">
        Réglages de la galerie
      </h1>

      <div v-if="enChargement" class="flex justify-center py-xl">
        <AppSpinner size="lg" />
      </div>

      <div v-else-if="erreur" class="p-md bg-error-container rounded-xl">
        <p class="font-body-sm text-on-error-container">{{ erreur }}</p>
      </div>

      <div v-else class="space-y-lg">
        <!-- Informations -->
        <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-md">
            Informations
          </h3>

          <AppInput
            v-model="titre"
            label="Titre de la galerie"
            placeholder="Titre"
            icon="title"
          />

          <div class="flex justify-end gap-sm mt-lg">
            <AppButton
              :loading="sauvegardeEnCours"
              :disabled="titre === galerie.titre"
              @click="sauvegarderTitre"
            >
              Sauvegarder
            </AppButton>
          </div>
        </div>

        <!-- Partage -->
        <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-md">
            Partage
          </h3>
          <p class="font-body-sm text-on-surface-variant mb-md">
            Partagez cette galerie en envoyant le lien ci-dessous.
          </p>

          <ShareLinkBox :lien="`${baseUrl}/g/${galerie.slug}`" />
        </div>

        <!-- Zone de danger -->
        <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
          <h3 class="font-headline-sm text-headline-sm text-error mb-md">
            Danger
          </h3>
          <p class="font-body-sm text-on-surface-variant mb-md">
            La suppression de la galerie est irréversible. Toutes les photos seront perdues.
          </p>

          <AppButton variant="danger" @click="supprimerGalerie">
            <Icon name="material-symbols:delete" class="text-sm" />
            Supprimer la galerie
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>