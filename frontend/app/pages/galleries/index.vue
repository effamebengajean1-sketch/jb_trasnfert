<!--
  Liste des galeries de l'utilisateur connecté.
  Affiche les galeries en grille via GalleryCard.vue.
-->
<script setup lang="ts">
const { get } = useApi()

const galeries = ref<Array<any>>([])
const enChargement = ref(true)
const erreur = ref('')

async function chargerGaleries() {
  enChargement.value = true
  erreur.value = ''
  try {
    const data = await get('/galleries')
    galeries.value = data
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors du chargement des galeries'
  } finally {
    enChargement.value = false
  }
}

onMounted(() => {
  chargerGaleries()
})

function onNouvelleCree() {
  chargerGaleries()
}
</script>

<template>
  <div class="max-w-container-max mx-auto px-gutter py-xl">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-xl">
      <div>
        <h1 class="font-headline-xl text-headline-xl text-primary mb-2">Mes Galeries</h1>
        <p class="font-body-md text-on-surface-variant">
          Organisez, partagez et gérez vos portfolios photographiques.
        </p>
      </div>

      <NuxtLink to="/galleries/new">
        <AppButton>
          <Icon name="material-symbols:add" class="text-sm" />
          Nouvelle galerie
        </AppButton>
      </NuxtLink>
    </div>

    <UploadErrorBanner :open="!!erreur" :message="erreur" />

    <div v-if="enChargement" class="flex justify-center py-xl">
      <AppSpinner size="lg" />
    </div>

    <div v-else-if="!galeries.length" class="text-center py-xl">
      <Icon name="material-symbols:photo-library" class="text-6xl text-outline mb-md block" />
      <h3 class="font-headline-sm text-headline-sm text-primary mb-sm">Aucune galerie pour l'instant</h3>
      <p class="font-body-md text-on-surface-variant mb-lg">
        Créez votre première galerie pour commencer à partager vos photos.
      </p>
      <NuxtLink to="/galleries/new">
        <AppButton>Créer une galerie</AppButton>
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
      <GalleryCard
        v-for="galerie in galeries"
        :key="galerie.id"
        :gallery="galerie"
      />
    </div>
  </div>
</template>