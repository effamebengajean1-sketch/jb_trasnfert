<script setup lang="ts">
const props = defineProps<{
  uploads: Array<{
    id: string
    nom: string
    progression: number
    statut: 'en-cours' | 'termine' | 'erreur'
    erreur?: string
  }>
}>()
</script>

<template>
  <div v-if="uploads.length" class="mt-lg space-y-md">
    <h4 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
      Téléchargements en cours
    </h4>

    <div
      v-for="upload in uploads"
      :key="upload.id"
      class="bg-surface-container-lowest rounded-xl p-md shadow-trust border border-outline-variant space-y-sm"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-sm min-w-0">
          <Icon name="material-symbols:image" class="text-primary flex-shrink-0" />
          <span class="font-label-md text-label-md truncate">{{ upload.nom }}</span>
        </div>

        <span
          class="font-label-sm text-label-sm font-bold flex-shrink-0"
          :class="{
            'text-primary': upload.statut === 'en-cours',
            'text-outline': upload.statut === 'termine',
            'text-error': upload.statut === 'erreur',
          }"
        >
          {{ upload.statut === 'erreur' ? 'Erreur' : `${upload.progression}%` }}
        </span>
      </div>

      <div class="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-300"
          :class="upload.statut === 'erreur' ? 'bg-error' : 'bg-primary-container'"
          :style="{ width: `${upload.progression}%` }"
        />
      </div>

      <p
        v-if="upload.statut === 'erreur' && upload.erreur"
        class="font-label-sm text-label-sm text-error"
      >
        {{ upload.erreur }}
      </p>
    </div>
  </div>
</template>