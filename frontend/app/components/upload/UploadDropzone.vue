<script setup lang="ts">
const props = withDefaults(defineProps<{
  galerieId: string
}>(), {
  galerieId: '',
})

const emit = defineEmits<{
  'uploaded': [photo: any]
}>()

const { uploaderPhoto, validerFichier, uploadsEnCours } = useUpload()
const enTrainDraguer = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

async function onFichiersSelectionnes(fichiers: FileList | null) {
  if (!fichiers || !fichiers.length) return

  for (const fichier of Array.from(fichiers)) {
    try {
      const photo = await uploaderPhoto(props.galerieId, fichier)
      emit('uploaded', photo)
    } catch {
      // L'erreur est déjà gérée dans useUpload et affichée dans la liste
    }
  }

  if (inputRef.value) {
    inputRef.value.value = ''
  }
}

function onDrop(e: DragEvent) {
  enTrainDraguer.value = false
  onFichiersSelectionnes(e.dataTransfer?.files ?? null)
}

function onDragOver(e: DragEvent) {
  e.preventDefault()
  enTrainDraguer.value = true
}

function onDragLeave() {
  enTrainDraguer.value = false
}

function ouvrirExplorateur() {
  inputRef.value?.click()
}
</script>

<template>
  <div>
    <div
      class="relative border-2 border-dashed rounded-xl p-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all"
      :class="enTrainDraguer
        ? 'border-primary-container bg-primary-fixed/30'
        : 'border-outline-variant hover:border-primary-container hover:bg-surface-container-low'"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @click="ouvrirExplorateur"
    >
      <input
        ref="inputRef"
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp,image/heic,image/heif"
        multiple
        class="hidden"
        @change="(e) => onFichiersSelectionnes((e.target as HTMLInputElement).files)"
      />

      <div
        class="w-16 h-16 rounded-full flex items-center justify-center mb-md transition-transform"
        :class="enTrainDraguer
          ? 'bg-primary-container text-on-primary-container scale-110'
          : 'bg-primary-fixed text-primary'"
      >
        <Icon name="material-symbols:cloud-upload" class="text-3xl" />
      </div>

      <h3 class="font-headline-sm text-headline-sm text-primary mb-xs">
        {{ enTrainDraguer ? 'Déposez les photos ici' : 'Ajouter des photos' }}
      </h3>
      <p class="font-body-sm text-on-surface-variant max-w-sm">
        Glissez vos images ici ou cliquez pour parcourir
      </p>
      <p class="font-label-sm text-outline mt-sm">
        JPG, PNG, GIF, WebP, HEIC — 10 Mo max par fichier
      </p>
    </div>

    <UploadProgressList :uploads="uploadsEnCours" />
  </div>
</template>