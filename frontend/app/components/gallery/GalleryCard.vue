<script setup lang="ts">
// 1. Typage plus propre et réutilisable
interface GalleryPhoto {
  nomFichier: string
  cheminFichier: string
}

interface GalleryCard {
  id: string
  titre: string
  dateCreation: string
  photos?: GalleryPhoto[]
}

const props = withDefaults(defineProps<{
  gallery: GalleryCard
}>(), {
  gallery: () => ({ id: '', titre: '', dateCreation: '', photos: [] }),
})

const config = useRuntimeConfig()

// 2. État pour gérer l'erreur de chargement de l'image (si le fichier est manquant)
const imageError = ref(false)

// 3. Computed pour formater la date proprement et une seule fois
const formattedDate = computed(() => {
  if (!props.gallery.dateCreation) return ''
  return new Date(props.gallery.dateCreation).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

// 4. Fonction pour construire l'URL de l'image
function urlPhoto(chemin: string): string {
  return `${config.public.apiBase}/uploads/${chemin}`
}

// 5. Fonction déclenchée si l'image fail à charger sur le serveur
function handleImageError() {
  imageError.value = true
}
</script>

<template>
  <NuxtLink
    :to="`/galleries/${gallery.id}`"
    class="block bg-surface rounded-xl shadow-trust border border-outline-variant overflow-hidden hover:border-primary-fixed transition-all group"
  >
    <!-- Zone de l'image / Aperçu -->
    <div class="aspect-video bg-surface-container-high relative overflow-hidden">
      
      <!-- Si on a des photos ET que l'image ne provoque pas d'erreur 404 -->
      <img
        v-if="gallery.photos?.length && !imageError"
        :src="urlPhoto(gallery.photos[0].cheminFichier)"
        :alt="`Aperçu de ${gallery.titre}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        @error="handleImageError"
      />
      
      <!-- Placeholder avec la nouvelle icône si pas de photos OU si l'image a fail -->
      <div
        v-else
        class="w-full h-full flex items-center justify-center"
      >
        <!-- Remplacement par une icône Iconify plus adaptée à une galerie -->
        <Icon name="mdi:image-multiple-outline" class="text-5xl text-outline-variant" />
      </div>

      <!-- Badge du nombre de photos -->
      <div
        v-if="gallery.photos?.length"
        class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-label-sm px-2 py-1 rounded-md"
      >
        {{ gallery.photos.length }} photo{{ gallery.photos.length > 1 ? 's' : '' }}
      </div>
    </div>

    <!-- Zone des informations texte -->
    <div class="p-md">
      <h3 class="font-headline-sm text-headline-sm text-primary truncate">
        {{ gallery.titre }}
      </h3>
      <p class="font-label-sm text-label-sm text-outline mt-xs">
        Créée le {{ formattedDate }}
      </p>
    </div>
  </NuxtLink>
</template>
