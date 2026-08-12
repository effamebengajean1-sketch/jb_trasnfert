<!--
  Page d'inscription.
  Utilise RegisterForm.vue et gère l'appel à useAuth.register().
  Pas d'import manuel de useAuth : les composables sont auto-importés
  partout par Nuxt.
-->
<script setup lang="ts">
const router = useRouter()
const erreurGlobale = ref('')

const { register } = useAuth()

async function onRegister(data: { email: string; motDePasse: string; nom: string }) {
  erreurGlobale.value = ''
  try {
    await register(data.email, data.motDePasse, data.nom)
    router.push('/galleries')
  } catch (e: any) {
    erreurGlobale.value = e.message || 'Erreur lors de la création du compte'
  }
}

function switchToLogin() {
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-margin-mobile pt-20 pb-12 bg-background">
    <div class="w-full max-w-[480px]">
      <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
        <div class="mb-xl text-center">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-xs">Créer un compte</h2>
          <p class="font-body-md text-on-surface-variant">Rejoignez JB Transfert dès aujourd'hui</p>
        </div>

        <RegisterForm @submit="onRegister" @switch-to-login="switchToLogin" />

        <div v-if="erreurGlobale" class="mt-lg p-md bg-error-container rounded-xl">
          <p class="font-body-sm text-on-error-container">{{ erreurGlobale }}</p>
        </div>
      </div>
    </div>
  </div>
</template>