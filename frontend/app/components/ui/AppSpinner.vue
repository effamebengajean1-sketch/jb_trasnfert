<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  color?: string
}>(), {
  size: 'md',
  color: 'currentColor',
})

const sizeClasses: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
}
</script>

<template>
  <svg
    :class="sizeClasses[size]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-dasharray="32"
      stroke-dashoffset="32"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="32;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>