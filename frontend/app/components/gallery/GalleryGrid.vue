<script setup lang="ts">
const props = withDefaults(defineProps<{
  photos: Array<{
    id: string
    nomFichier: string
    cheminFichier: string
    formatMime: string
    tailleOctets: number
    dateUpload: string
  }>
  editable?: boolean
}>(), {
  editable: false,
})

const emit = defineEmits<{
  'photo-click': [photo: any, index: number]
  'delete': [photoId: string]
}>()

// cheminFichier contient désormais l'URL HTTPS complète de Cloudinary.
// Il n'y a plus rien à reconstruire côté client.
function urlPhoto(cheminFichier: string): string {
  return cheminFichier
}

function formatterTaille(octets: number): string {
  if (octets < 1024) return `${octets} o`
  if (octets < 1024 * 1024) return `${(octets / 1024).toFixed(1)} Ko`
  return `${(octets / (1024 * 1024)).toFixed(1)} Mo`
}

function openLightbox(photo: any, index: number) {
  emit('photo-click', photo, index)
}
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-md">
    <div
      v-for="(photo, index) in photos"
      :key="photo.id"
      class="relative aspect-square rounded-xl overflow-hidden group shadow-trust cursor-zoom-in"
      @click="openLightbox(photo, index)"
    >
      <img
        :src="urlPhoto(photo.cheminFichier)"
        :alt="photo.nomFichier"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-sm">
        <div class="min-w-0">
          <p class="text-white text-label-sm truncate">{{ photo.nomFichier }}</p>
          <p class="text-white/70 text-label-sm">{{ formatterTaille(photo.tailleOctets) }}</p>
        </div>
      </div>

      <button
        v-if="editable"
        class="absolute top-2 right-2 p-2 bg-error text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        title="Supprimer"
        @click.stop="emit('delete', photo.id)"
      >
        <Icon name="material-symbols:delete" class="text-sm" />
      </button>
    </div>
  </div>
</template>
