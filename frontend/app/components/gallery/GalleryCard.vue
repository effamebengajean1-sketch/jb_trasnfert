<script setup lang="ts">
const props = withDefaults(defineProps<{
  gallery: {
    id: string
    titre: string
    dateCreation: string
    photos?: Array<{ nomFichier: string; cheminFichier: string }>
  }
}>(), {
  gallery: () => ({ id: '', titre: '', dateCreation: '', photos: [] }),
})

const config = useRuntimeConfig()

function urlPhoto(chemin: string): string {
  return `${config.public.apiBase}/uploads/${chemin}`
}
</script>

<template>
  <NuxtLink
    :to="`/galleries/${gallery.id}`"
    class="block bg-surface rounded-xl shadow-trust border border-outline-variant overflow-hidden hover:border-primary-fixed transition-all group"
  >
    <div class="aspect-video bg-surface-container-high relative overflow-hidden">
      <img
        v-if="gallery.photos && gallery.photos.length"
        :src="urlPhoto(gallery.photos[0].cheminFichier)"
        :alt="gallery.titre"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center"
      >
        <Icon name="material-symbols:photo-library" class="text-4xl text-outline" />
      </div>

      <div
        v-if="gallery.photos && gallery.photos.length"
        class="absolute top-2 right-2 bg-black/50 text-white text-label-sm px-2 py-1 rounded-full"
      >
        {{ gallery.photos.length }} photo{{ gallery.photos.length > 1 ? 's' : '' }}
      </div>
    </div>

    <div class="p-md">
      <h3 class="font-headline-sm text-headline-sm text-primary truncate">
        {{ gallery.titre }}
      </h3>
      <p class="font-label-sm text-label-sm text-outline mt-xs">
        Créée le {{ new Date(gallery.dateCreation).toLocaleDateString('fr-FR') }}
      </p>
    </div>
  </NuxtLink>
</template>