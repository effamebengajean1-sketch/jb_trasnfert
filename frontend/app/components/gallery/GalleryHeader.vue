<script setup lang="ts">
const props = withDefaults(defineProps<{
  titre: string
  dateCreation: string
  nombrePhotos: number
  taille?: string
  statut?: 'partagee' | 'privee'
}>(), {
  taille: '',
  statut: 'privee',
})

const emit = defineEmits<{
  'edit': []
  'share': []
  'delete': []
  'rename': [titre: string]
}>()

const estEnEdition = ref(false)
const titreEdit = ref(props.titre)
const inputRef = ref<HTMLInputElement | null>(null)

watch(() => props.titre, (newTitre) => {
  if (!estEnEdition.value) {
    titreEdit.value = newTitre
  }
})

function demarrerEdition() {
  titreEdit.value = props.titre
  estEnEdition.value = true
  nextTick(() => {
    inputRef.value?.focus()
    inputRef.value?.select()
  })
}

function validerEdition() {
  const nouveauTitre = titreEdit.value.trim()
  if (nouveauTitre && nouveauTitre !== props.titre) {
    emit('rename', nouveauTitre)
  }
  estEnEdition.value = false
}

function annulerEdition() {
  titreEdit.value = props.titre
  estEnEdition.value = false
}

function copierLien() {
  emit('share')
}
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
    <div class="flex-grow max-w-2xl">
      <div class="flex items-center gap-sm group">
        <h1
          v-if="!estEnEdition"
          class="font-headline-xl text-headline-xl text-primary"
        >
          {{ titre }}
        </h1>

        <input
          v-else
          ref="inputRef"
          v-model="titreEdit"
          class="font-headline-xl text-headline-xl text-primary border-b-2 border-primary outline-none bg-transparent w-full"
          @blur="validerEdition"
          @keydown.enter.prevent="validerEdition"
          @keydown.escape="annulerEdition"
        />

        <button
          v-if="!estEnEdition"
          class="text-outline cursor-pointer opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"
          title="Renommer"
          @click="demarrerEdition"
        >
          <Icon name="material-symbols:edit" />
        </button>
      </div>

      <p class="font-body-md text-on-surface-variant mt-sm">
        Créée le {{ new Date(dateCreation).toLocaleDateString('fr-FR') }}
        <span v-if="nombrePhotos !== undefined">• {{ nombrePhotos }} photo{{ nombrePhotos > 1 ? 's' : '' }}</span>
        <span v-if="taille">• {{ taille }}</span>
      </p>
    </div>

    <div class="flex gap-sm">
      <button
        class="flex items-center gap-sm border border-primary text-primary hover:bg-primary-fixed px-lg py-sm rounded-xl transition-all font-label-md"
        @click="copierLien"
      >
        <Icon name="material-symbols:content-copy" class="text-lg" />
        Copier le lien
      </button>
    </div>
  </div>
</template>