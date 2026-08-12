<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  block?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  block: false,
  type: 'button',
})

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary hover:opacity-90 shadow-sm',
  secondary: 'bg-surface-container-low text-on-surface hover:bg-surface-container-high border border-outline-variant',
  ghost: 'text-on-surface-variant hover:bg-surface-container-low',
  danger: 'bg-error text-on-error hover:opacity-90',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-md py-sm text-label-sm',
  md: 'px-lg py-sm font-label-md',
  lg: 'px-xl py-md font-label-md',
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center gap-sm rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
      variantClasses[variant],
      sizeClasses[size],
      { 'w-full': block },
    ]"
  >
    <Icon v-if="loading" name="material-symbols:progress-activity" class="text-lg animate-spin" />
    <slot />
  </button>
</template>