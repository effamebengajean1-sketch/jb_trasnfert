<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div 
      v-if="canInstall" 
      class="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant p-4 flex items-center gap-3"
    >
      <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shrink-0">
        <img src="/logo.png" alt="JB Transfert" class="w-6 h-6 object-contain">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-on-surface">Installer JB Transfert</p>
        <p class="text-xs text-on-surface-variant truncate">Accédez rapidement depuis votre écran d'accueil</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button 
          @click="canInstall = false" 
          class="px-3 py-1.5 text-xs font-medium text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors"
        >
          Plus tard
        </button>
        <button 
          @click="install" 
          class="px-3 py-1.5 text-xs font-medium bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity"
        >
          Installer
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { canInstall, install } = usePwa()
</script>