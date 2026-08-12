<script setup lang="ts">
const props = withDefaults(defineProps<{
  photo: {
    id: string
    nomFichier: string
    cheminFichier: string
  } | null
}>(), {
  photo: null,
})

function telecharger() {
  if (!props.photo) return
  const lien = `/uploads/${props.photo.cheminFichier}`
  const a = document.createElement('a')
  a.href = lien
  a.download = props.photo.nomFichier
  a.click()
}
</script>

<template>
  <button
    class="p-md bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm"
    title="Télécharger"
    @click="telecharger"
  >
    <Icon name="material-symbols:download" />
  </button>
</template>