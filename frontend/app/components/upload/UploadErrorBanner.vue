<script setup lang="ts">
const props = withDefaults(defineProps<{
  open: boolean
  message?: string
}>(), {
  message: '',
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="open && message"
      class="mb-lg p-md bg-error-container border border-error rounded-xl flex items-start gap-sm"
    >
      <Icon name="material-symbols:error" class="text-error flex-shrink-0" />
      <p class="font-body-sm text-on-error-container">{{ message }}</p>
    </div>
  </Transition>
</template>