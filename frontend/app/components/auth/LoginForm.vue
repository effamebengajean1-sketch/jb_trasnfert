<script setup lang="ts">
const emit = defineEmits<{
  submit: [data: { email: string; motDePasse: string }]
  switchToRegister: []
}>()

const email = ref('')
const motDePasse = ref('')
const erreur = ref('')
const enChargement = ref(false)

// Erreurs par champ
const errors = ref<Record<string, string>>({})

function validateEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function valider(): boolean {
  errors.value = {}
  let valide = true

  // Email
  if (!email.value.trim()) {
    errors.value.email = 'L\'email est requis'
    valide = false
  } else if (!validateEmail(email.value.trim())) {
    errors.value.email = 'Format d\'email invalide'
    valide = false
  }

  // Mot de passe
  if (!motDePasse.value) {
    errors.value.motDePasse = 'Le mot de passe est requis'
    valide = false
  }

  return valide
}

function clearError(field: string) {
  delete errors.value[field]
  if (erreur.value) erreur.value = ''
}

async function onSubmit() {
  erreur.value = ''
  
  if (!valider()) return

  enChargement.value = true
  try {
    emit('submit', {
      email: email.value.trim(),
      motDePasse: motDePasse.value,
    })
  } catch (e: any) {
    erreur.value = e.message || 'Identifiants invalides'
  } finally {
    enChargement.value = false
  }
}
</script>

<template>
  <form class="space-y-lg" @submit.prevent="onSubmit" method="post" action="#">
    
    <!-- Email -->
    <div>
      <AppInput
        v-model="email"
        type="email"
        name="email"
        autocomplete="email"
        label="E-mail"
        placeholder="nom@exemple.com"
        icon="mail"
        @input="clearError('email')"
      />
      <p v-if="errors.email" class="mt-1.5 text-sm text-error font-body-sm flex items-center gap-1">
        <Icon name="material-symbols:error-outline" class="text-base" />
        {{ errors.email }}
      </p>
    </div>

    <!-- Mot de passe -->
    <div>
      <AppInput
        v-model="motDePasse"
        type="password"
        name="password"
        autocomplete="current-password"
        label="Mot de passe"
        placeholder="••••••••"
        icon="lock"
        @input="clearError('motDePasse')"
      />
      <p v-if="errors.motDePasse" class="mt-1.5 text-sm text-error font-body-sm flex items-center gap-1">
        <Icon name="material-symbols:error-outline" class="text-base" />
        {{ errors.motDePasse }}
      </p>
    </div>

    <div class="flex items-center justify-between">
      <NuxtLink to="/forgot-password" class="text-sm font-body-sm text-primary hover:underline">
        Mot de passe oublié ?
      </NuxtLink>
    </div>

    <!-- Erreur serveur globale -->
    <div v-if="erreur" class="p-md bg-error-container rounded-xl">
      <p class="font-body-sm text-on-error-container">{{ erreur }}</p>
    </div>

    <AppButton type="submit" :loading="enChargement" block>
      Se connecter
    </AppButton>

    <p class="text-center font-body-sm text-on-surface-variant">
      Pas encore de compte ?
      <button type="button" class="text-primary font-semibold hover:underline" @click="$emit('switchToRegister')">
        Créer un compte
      </button>
    </p>
  </form>
</template>