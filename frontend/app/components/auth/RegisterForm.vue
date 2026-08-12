<script setup lang="ts">
const emit = defineEmits<{
  submit: [data: { email: string; motDePasse: string; nom: string }]
  switchToLogin: []
}>()

const nom = ref('')
const email = ref('')
const motDePasse = ref('')
const confirmation = ref('')
const erreur = ref('')
const enChargement = ref(false)

// Objet des erreurs par champ
const errors = ref<Record<string, string>>({})

// Indicateur de force (0-4)
const force = computed(() => {
  const mdp = motDePasse.value
  if (!mdp) return 0
  let score = 0
  if (mdp.length >= 8) score++
  if (/[a-z]/.test(mdp) && /[A-Z]/.test(mdp)) score++
  if (/[0-9]/.test(mdp)) score++
  if (/[^A-Za-z0-9]/.test(mdp)) score++
  return score
})

const forceLabels = ['Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort']
const forceColors = ['bg-red-500', 'bg-amber-500', 'bg-yellow-500', 'bg-emerald-400', 'bg-emerald-600']

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function valider(): boolean {
  errors.value = {}
  let valide = true

  // Nom
  if (!nom.value.trim()) {
    errors.value.nom = 'Le nom est requis'
    valide = false
  } else if (nom.value.trim().length < 2) {
    errors.value.nom = 'Minimum 2 caractères'
    valide = false
  } else if (nom.value.trim().length > 50) {
    errors.value.nom = 'Maximum 50 caractères'
    valide = false
  }

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
  } else if (motDePasse.value.length < 8) {
    errors.value.motDePasse = 'Minimum 8 caractères'
    valide = false
  } else if (!/[A-Z]/.test(motDePasse.value)) {
    errors.value.motDePasse = 'Au moins une majuscule'
    valide = false
  } else if (!/[a-z]/.test(motDePasse.value)) {
    errors.value.motDePasse = 'Au moins une minuscule'
    valide = false
  } else if (!/[0-9]/.test(motDePasse.value)) {
    errors.value.motDePasse = 'Au moins un chiffre'
    valide = false
  } else if (!/[^A-Za-z0-9]/.test(motDePasse.value)) {
    errors.value.motDePasse = 'Au moins un caractère spécial (!@#$%^&*)'
    valide = false
  }

  // Confirmation
  if (!confirmation.value) {
    errors.value.confirmation = 'Veuillez confirmer le mot de passe'
    valide = false
  } else if (confirmation.value !== motDePasse.value) {
    errors.value.confirmation = 'Les mots de passe ne correspondent pas'
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
      nom: nom.value.trim(),
    })
  } catch (e: any) {
    erreur.value = e.message || 'Erreur lors de la création du compte'
  } finally {
    enChargement.value = false
  }
}
</script>

<template>
  <form class="space-y-lg" @submit.prevent="onSubmit" method="post" action="#">
    
    <!-- Nom -->
    <div>
      <AppInput
        v-model="nom"
        type="text"
        name="username"
        autocomplete="username"
        label="Nom complet"
        placeholder="Jean Dupont"
        icon="person"
        @input="clearError('nom')"
      />
      <p v-if="errors.nom" class="mt-1.5 text-sm text-error font-body-sm flex items-center gap-1">
        <Icon name="material-symbols:error-outline" class="text-base" />
        {{ errors.nom }}
      </p>
    </div>

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
        name="new-password"
        autocomplete="new-password"
        label="Mot de passe"
        placeholder="••••••••"
        icon="lock"
        @input="clearError('motDePasse')"
      />
      
      <!-- Indicateur de force -->
      <div v-if="motDePasse" class="mt-2.5 space-y-1.5">
        <div class="flex gap-1 h-1.5">
          <div 
            v-for="n in 4" 
            :key="n"
            :class="[
              'flex-1 rounded-full transition-colors duration-300',
              n <= force ? forceColors[force] : 'bg-outline-variant/40'
            ]"
          />
        </div>
        <p class="text-xs font-body-sm" :class="force === 0 ? 'text-error' : force <= 2 ? 'text-amber-600' : 'text-emerald-600'">
          {{ forceLabels[force] }}
        </p>
        <ul class="text-xs text-on-surface-variant font-body-sm space-y-0.5 mt-1">
          <li :class="motDePasse.length >= 8 ? 'text-emerald-600' : ''">• 8 caractères minimum</li>
          <li :class="/[A-Z]/.test(motDePasse) && /[a-z]/.test(motDePasse) ? 'text-emerald-600' : ''">• Majuscule et minuscule</li>
          <li :class="/[0-9]/.test(motDePasse) ? 'text-emerald-600' : ''">• Au moins un chiffre</li>
          <li :class="/[^A-Za-z0-9]/.test(motDePasse) ? 'text-emerald-600' : ''">• Caractère spécial (!@#$...)</li>
        </ul>
      </div>

      <p v-if="errors.motDePasse" class="mt-1.5 text-sm text-error font-body-sm flex items-center gap-1">
        <Icon name="material-symbols:error-outline" class="text-base" />
        {{ errors.motDePasse }}
      </p>
    </div>

    <!-- Confirmation -->
    <div>
      <AppInput
        v-model="confirmation"
        type="password"
        name="confirm-password"
        autocomplete="new-password"
        label="Confirmer le mot de passe"
        placeholder="••••••••"
        icon="lock"
        @input="clearError('confirmation')"
      />
      <p v-if="errors.confirmation" class="mt-1.5 text-sm text-error font-body-sm flex items-center gap-1">
        <Icon name="material-symbols:error-outline" class="text-base" />
        {{ errors.confirmation }}
      </p>
    </div>

    <!-- Erreur serveur globale -->
    <div v-if="erreur" class="p-md bg-error-container rounded-xl">
      <p class="font-body-sm text-on-error-container">{{ erreur }}</p>
    </div>

    <AppButton type="submit" :loading="enChargement" block>
      Créer mon compte
    </AppButton>

    <p class="text-center font-body-sm text-on-surface-variant">
      Déjà un compte ?
      <button type="button" class="text-primary font-semibold hover:underline" @click="$emit('switchToLogin')">
        Se connecter
      </button>
    </p>
  </form>
</template>