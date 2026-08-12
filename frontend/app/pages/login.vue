<!--
  Page de connexion.
  Utilise LoginForm.vue et gère l'appel à useAuth.login().
-->
<script setup lang="ts">
const router = useRouter()
const erreurGlobale = ref('')

const { login } = useAuth()

async function onLogin(data: { email: string; motDePasse: string }) {
  erreurGlobale.value = ''
  try {
    await login(data.email, data.motDePasse)
    router.push('/galleries')
  } catch (e: any) {
    erreurGlobale.value = e.message || 'Identifiants invalides'
  }
}

function switchToRegister() {
  router.push('/register')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-margin-mobile pt-20 pb-12 bg-background">
    <div class="w-full max-w-[440px] bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
      <div class="mb-xl text-center">
        <h2 class="font-headline-lg text-headline-lg text-primary mb-xs">Bon retour</h2>
        <p class="font-body-md text-on-surface-variant">Accédez à vos fichiers sécurisés</p>
      </div>

      <LoginForm @submit="onLogin" @switch-to-register="switchToRegister" />

      <div v-if="erreurGlobale" class="mt-lg p-md bg-error-container rounded-xl">
        <p class="font-body-sm text-on-error-container">{{ erreurGlobale }}</p>
      </div>
    </div>
  </div>
</template>