<script setup lang="ts">
const props = withDefaults(defineProps<{
  open: boolean
  title?: string
}>(), {
  title: '',
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  'close': []
}>()

function close() {
  emit('update:open', false)
  emit('close')
}

function onOverlayClick() {
  close()
}

function onContentClick(e: MouseEvent) {
  e.stopPropagation()
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
        v-if="open"
        class="fixed inset-0 z-[90] flex items-center justify-center p-gutter"
        @click="onOverlayClick"
      >
        <!-- ✅ Overlay corrigé : bg-black/60 reste sombre en dark et light -->
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div
          class="relative w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-modal"
          @click="onContentClick"
        >
          <div class="flex items-center justify-between p-lg border-b border-outline-variant">
            <h3 v-if="title" class="font-headline-md text-headline-md text-primary">
              {{ title }}
            </h3>
            <button
              class="p-sm text-on-surface-variant hover:text-primary transition-colors rounded-lg"
              @click="close"
            >
              <Icon name="material-symbols:close" />
            </button>
          </div>
          <div class="p-lg">
            <slot />
          </div>
          <div v-if="$slots.footer" class="p-lg border-t border-outline-variant flex justify-end gap-sm">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>