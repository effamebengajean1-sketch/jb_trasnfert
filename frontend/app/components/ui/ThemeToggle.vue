<script setup>
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface flex items-center justify-center"
    title="Changer de thème"
    @click="toggleTheme"
  >
    <Icon
      v-if="isDark"
      name="material-symbols:dark-mode"
      class="text-xl"
    />
    <Icon
      v-else
      name="material-symbols:light-mode"
      class="text-xl"
    />
  </button>
</template>