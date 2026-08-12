<!--
  Création d'une nouvelle galerie.
  POST /galleries avec { titre } puis redirection vers la nouvelle galerie.
-->
<script setup lang="ts">
const router = useRouter()
const titre = ref('')
const enChargement = ref(false)
const erreur = ref('')

const { post } = useApi()

async function creerGalerie() {
  if (!titre.value.trim()) return

  enChargement.value = true
  erreur.value = ''

  try {
    const galerie = await post('/galleries', { titre: titre.value.trim() })
    router.push(`/galleries/${galerie.id}`)
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors de la création de la galerie'
  } finally {
    enChargement.value = false
  }
}
</script>

<template>
  <div class="max-w-container-max mx-auto px-gutter py-xl">
    <div class="max-w-2xl mx-auto">
      <h1 class="font-headline-xl text-headline-xl text-primary mb-lg">Nouvelle galerie</h1>

      <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
        <AppInput
          v-model="titre"
          label="Titre de la galerie"
          placeholder="Ex. : Mariage - Julie & Thomas"
          icon="title"
        />

        <UploadErrorBanner :open="!!erreur" :message="erreur" />

        <div class="flex justify-end gap-sm mt-lg">
          <NuxtLink to="/galleries">
            <AppButton variant="secondary">Annuler</AppButton>
          </NuxtLink>
          <AppButton :loading="enChargement" :disabled="!titre.trim()" @click="creerGalerie">
            Créer la galerie
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>