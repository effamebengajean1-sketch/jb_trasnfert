<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string
  type?: string
  placeholder?: string
  label?: string
  error?: string
  icon?: string
  autocomplete?: string
  name?: string
}>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  icon: '',
  autocomplete: '',
  name: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputId = useId()

const autocompleteValue = computed(() => {
  if (props.autocomplete) return props.autocomplete
  if (props.type === 'email') return 'email'
  if (props.type === 'password') return 'current-password'
  return 'off'
})

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="space-y-xs">
    <label v-if="label" :for="inputId" class="font-label-md text-label-md text-on-surface block">
      {{ label }}
    </label>
    <div class="relative">
      <Icon
        v-if="icon"
        :name="`material-symbols:${icon}`"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg"
      />
      <input
        :id="inputId"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocompleteValue"
        :class="[
          'w-full bg-surface border rounded-xl text-body-md text-on-surface placeholder:text-outline transition-all',
          icon ? 'pl-10 pr-4' : 'px-4',
          'py-3',
          error
            ? 'border-error focus:border-error focus:ring-2 focus:ring-error/15'
            : 'border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/15',
        ]"
        @input="onInput"
        @focus="(e) => $emit('focus', e)"
        @blur="(e) => $emit('blur', e)"
      />
    </div>
    <p v-if="error" class="font-label-sm text-label-sm text-error">
      {{ error }}
    </p>
  </div>
</template>