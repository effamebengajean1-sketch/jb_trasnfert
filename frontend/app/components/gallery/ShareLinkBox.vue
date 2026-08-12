<script setup lang="ts">
const props = withDefaults(defineProps<{
  lien: string
}>(), {
  lien: '',
})

const copie = ref(false)

async function copierLien() {
  try {
    await navigator.clipboard.writeText(props.lien)
    copie.value = true
    setTimeout(() => {
      copie.value = false
    }, 2000)
  } catch {
    // Fallback silencieux
  }
}

function ouvrirLien() {
  window.open(props.lien, '_blank')
}
</script>

<template>
  <div class="bg-surface-container-lowest rounded-xl p-lg shadow-trust border border-outline-variant">
    <p class="font-label-md text-label-md text-on-surface-variant mb-sm">
      Lien de partage
    </p>
    <div class="flex items-center gap-sm">
      <code class="flex-1 bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-sm text-on-surface truncate">
        {{ lien }}
      </code>
      <div class="flex gap-xs">
        <button
          class="px-md py-sm bg-surface-container-low text-on-surface border border-outline-variant rounded-lg font-label-md hover:bg-surface-container-high transition-all active:scale-95 whitespace-nowrap flex items-center gap-xs"
          title="Ouvrir dans un nouvel onglet"
          @click="ouvrirLien"
        >
          <Icon name="material-symbols:open-in-new" class="text-sm" />
          Ouvrir
        </button>
        <button
          class="px-lg py-sm bg-primary text-on-primary rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95 whitespace-nowrap flex items-center gap-xs"
          @click="copierLien"
        >
          <Icon name="material-symbols:content-copy" class="text-sm" />
          {{ copie ? 'Copié !' : 'Copier' }}
        </button>
      </div>
    </div>
  </div>
</template>