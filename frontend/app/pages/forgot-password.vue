<template>
  <div class="min-h-screen flex items-center justify-center px-4 bg-background">
    <div class="w-full max-w-md space-y-6">
      <div class="text-center">
        <img src="~/assets/images/logo.png" alt="JB Transfert" class="h-10 mx-auto mb-4">
        <h1 class="text-2xl font-bold text-on-surface">Mot de passe oublié ?</h1>
        <p class="text-sm text-on-surface-variant mt-2">
          Entrez votre email et nous vous enverrons un lien de réinitialisation.
        </p>
      </div>

      <form v-if="!sent" @submit.prevent="handleSubmit" class="space-y-4">
        <AppInput
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          label="E-mail"
          placeholder="nom@exemple.com"
          icon="mail"
        />
        
        <AppButton type="submit" block :loading="loading">
          Envoyer le lien
        </AppButton>
      </form>

      <!-- Confirmation -->
      <div v-else class="p-6 bg-primary-container/30 rounded-xl text-center space-y-4">
        <div class="w-12 h-12 mx-auto rounded-full bg-primary-container flex items-center justify-center">
          <Icon name="material-symbols:mark-email-read" class="text-2xl text-primary" />
        </div>
        <p class="text-on-surface font-medium">
          Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.
        </p>
        <p class="text-sm text-on-surface-variant">
          Vérifiez votre boîte de réception et vos spams.
        </p>
      </div>

      <p class="text-center text-sm text-on-surface-variant">
        <NuxtLink to="/login" class="text-primary hover:underline font-medium">
          ← Retour à la connexion
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default', // ou 'public' selon ton projet
})

const email = ref('')
const loading = ref(false)
const sent = ref(false)

async function handleSubmit() {
  if (!email.value.trim()) return
  
  loading.value = true
  try {
    // TODO: brancher le backend quand il sera prêt
    // await useApi().post('/auth/forgot-password', { email: email.value.trim() })
    
    // Simulation pour l'instant
    await new Promise(r => setTimeout(r, 1200))
    sent.value = true
  } catch (err) {
    // On ne révèle pas si l'email existe ou non (sécurité)
    sent.value = true
  } finally {
    loading.value = false
  }
}
</script>