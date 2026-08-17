<script setup lang="ts">
const props = withDefaults(defineProps<{
  open: boolean
  photo: {
    id: string
    nomFichier: string
    cheminFichier: string
    formatMime: string
  } | null
  index: number
  total: number
}>(), {
  photo: null,
  index: 0,
  total: 0,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  next: []
  prev: []
}>()

/**
 * cheminFichier contient désormais l'URL HTTPS complète renvoyée par
 * Cloudinary. Il n'y a plus rien à reconstruire côté client.
 */
function urlPhoto(cheminFichier: string): string {
  return cheminFichier
}

/**
 * Force le téléchargement plutôt que l'affichage.
 *
 * L'attribut download d'une balise <a> est ignoré pour une ressource
 * hébergée sur un autre domaine. Cloudinary expose la transformation
 * fl_attachment, qui renvoie l'en-tête Content-Disposition adéquat.
 */
function urlTelechargement(cheminFichier: string): string {
  if (!cheminFichier.includes('/upload/')) {
    return cheminFichier
  }

  return cheminFichier.replace('/upload/', '/upload/fl_attachment/')
}

watch(
  () => props.open,
  (ouvert) => {
    if (ouvert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)

function onOverlayClick() {
  emit('update:open', false)
}

function onContentClick(e: MouseEvent) {
  e.stopPropagation()
}

function telecharger() {
  if (!props.photo) return

  const a = document.createElement('a')
  a.href = urlTelechargement(props.photo.cheminFichier)
  a.download = props.photo.nomFichier
  a.rel = 'noopener'
  a.click()
}

function onKeydown(e: KeyboardEvent) {
  if (!props.open) return
  if (e.key === 'Escape') emit('update:open', false)
  if (e.key === 'ArrowRight') emit('next')
  if (e.key === 'ArrowLeft') emit('prev')
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open && photo"
        class="fixed inset-0 z-[100] flex flex-col"
        tabindex="0"
        @click="onOverlayClick"
        @keydown="onKeydown"
      >
        <!-- ✅ Overlay : bg-black/90 reste sombre dans les deux thèmes -->
        <div class="fixed inset-0 bg-black/90 backdrop-blur-sm" />

        <div class="relative flex-grow flex items-center justify-center p-gutter">
          <div class="relative max-w-full max-h-full" @click="onContentClick">
            <img
              :src="urlPhoto(photo.cheminFichier)"
              :alt="photo.nomFichier"
              class="max-w-full max-h-[calc(100vh-200px)] object-contain shadow-2xl rounded-lg"
            />

            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-md py-sm rounded-full font-label-sm">
              {{ index + 1 }} / {{ total }}
            </div>
          </div>

          <button
            class="absolute top-4 right-4 text-white hover:bg-white/10 p-base rounded-full transition-colors"
            @click="onOverlayClick"
          >
            <Icon name="material-symbols:close" class="text-3xl" />
          </button>

          <button
            v-if="total > 1"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-base rounded-full transition-colors"
            @click.stop="emit('prev')"
          >
            <Icon name="material-symbols:chevron-left" class="text-3xl" />
          </button>

          <button
            v-if="total > 1"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-base rounded-full transition-colors"
            @click.stop="emit('next')"
          >
            <Icon name="material-symbols:chevron-right" class="text-3xl" />
          </button>

          <div class="absolute bottom-4 right-4 flex gap-sm">
            <button
              class="bg-white/10 hover:bg-white/20 text-white px-md py-sm rounded-full font-label-sm flex items-center gap-xs transition-colors"
              @click.stop="telecharger"
            >
              <Icon name="material-symbols:download" class="text-sm" />
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
