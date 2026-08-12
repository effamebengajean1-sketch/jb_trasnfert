<script setup lang="ts">
const { user, updateUser } = useAuth()
const { patch } = useApi()

const nomEdit = ref('')
const emailEdit = ref('')
const ancienMdp = ref('')
const nouveauMdp = ref('')
const confirmationMdp = ref('')

const enChargementProfil = ref(false)
const enChargementMdp = ref(false)
const erreurProfil = ref('')
const erreurMdp = ref('')
const succesProfil = ref('')
const succesMdp = ref('')

watch(() => user.value, (u) => {
  if (u) {
    nomEdit.value = u.nom || ''
    emailEdit.value = u.email || ''
  }
}, { immediate: true })

async function sauvegarderProfil() {
  erreurProfil.value = ''
  succesProfil.value = ''
  enChargementProfil.value = true

  try {
    const updated = await patch('/users/me', {
      nom: nomEdit.value.trim(),
      email: emailEdit.value.trim(),
    })

    if (updated) {
      updateUser(updated)
    }

    succesProfil.value = 'Profil mis à jour avec succès.'
  } catch (e: any) {
    erreurProfil.value = e.message || 'Erreur lors de la mise à jour du profil'
  } finally {
    enChargementProfil.value = false
  }
}

async function changerMotDePasse() {
  erreurMdp.value = ''
  succesMdp.value = ''

  if (!ancienMdp.value || !nouveauMdp.value) {
    erreurMdp.value = 'Tous les champs sont obligatoires'
    return
  }
  if (nouveauMdp.value !== confirmationMdp.value) {
    erreurMdp.value = 'Les nouveaux mots de passe ne correspondent pas'
    return
  }
  if (nouveauMdp.value.length < 6) {
    erreurMdp.value = 'Le mot de passe doit contenir au moins 6 caractères'
    return
  }

  enChargementMdp.value = true
  try {
    await patch('/users/me/password', {
      ancienMotDePasse: ancienMdp.value,
      nouveauMotDePasse: nouveauMdp.value,
    })

    succesMdp.value = 'Mot de passe modifié avec succès.'
    ancienMdp.value = ''
    nouveauMdp.value = ''
    confirmationMdp.value = ''
  } catch (e: any) {
    erreurMdp.value = e.message || 'Erreur lors du changement de mot de passe'
  } finally {
    enChargementMdp.value = false
  }
}
</script>

<template>
  <div class="max-w-container-max mx-auto px-gutter py-xl">
    <h1 class="font-headline-xl text-headline-xl text-primary mb-lg">Mon Profil</h1>

    <div class="max-w-2xl space-y-lg">
      <!-- ═══ CARTE PROFIL ═══ -->
      <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
        <div class="flex items-center gap-md mb-lg">
          <div class="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center shrink-0">
            <Icon name="material-symbols:person" class="text-3xl text-primary" />
          </div>
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary">
              {{ user?.nom || 'Utilisateur' }}
            </h2>
            <p class="font-body-md text-on-surface-variant">{{ user?.email }}</p>
          </div>
        </div>

        <div class="space-y-md">
          <AppInput v-model="nomEdit" label="Nom" icon="person" autocomplete="name" :disabled="enChargementProfil" />
          <AppInput v-model="emailEdit" type="email" label="Email" icon="mail" autocomplete="email" :disabled="enChargementProfil" />
        </div>

        <div v-if="erreurProfil" class="mt-md p-md bg-error-container rounded-xl">
          <p class="font-body-sm text-on-error-container">{{ erreurProfil }}</p>
        </div>
        <div v-if="succesProfil" class="mt-md p-md bg-success-container rounded-xl">
          <p class="font-body-sm text-on-success-container">{{ succesProfil }}</p>
        </div>

        <div class="mt-lg flex justify-end">
          <AppButton :loading="enChargementProfil" @click="sauvegarderProfil">
            Enregistrer les modifications
          </AppButton>
        </div>
      </div>

      <!-- ═══ CARTE MOT DE PASSE ═══ -->
      <div class="bg-surface rounded-xl shadow-trust p-lg md:p-xl border border-outline-variant">
        <h2 class="font-headline-md text-headline-md text-primary mb-xs">Sécurité</h2>
        <p class="font-body-sm text-on-surface-variant mb-lg">Modifiez votre mot de passe ci-dessous.</p>

        <div class="space-y-md">
          <AppInput v-model="ancienMdp" type="password" name="current-password" autocomplete="current-password" label="Mot de passe actuel" icon="lock" :disabled="enChargementMdp" />
          <AppInput v-model="nouveauMdp" type="password" name="new-password" autocomplete="new-password" label="Nouveau mot de passe" icon="lock" :disabled="enChargementMdp" />
          <AppInput v-model="confirmationMdp" type="password" name="new-password" autocomplete="new-password" label="Confirmer le nouveau mot de passe" icon="lock" :disabled="enChargementMdp" />
        </div>

        <div v-if="erreurMdp" class="mt-md p-md bg-error-container rounded-xl">
          <p class="font-body-sm text-on-error-container">{{ erreurMdp }}</p>
        </div>
        <div v-if="succesMdp" class="mt-md p-md bg-success-container rounded-xl">
          <p class="font-body-sm text-on-success-container">{{ succesMdp }}</p>
        </div>

        <div class="mt-lg flex justify-end">
          <AppButton :loading="enChargementMdp" @click="changerMotDePasse">
            Changer le mot de passe
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>