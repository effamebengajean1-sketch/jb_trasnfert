<script setup lang="ts">
// ⚠️ Script inchangé (uniquement la présentation a été modifiée)
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
    <!-- En-tête de page amélioré -->
    <header class="mb-lg">
      <h1 class="font-headline-xl text-headline-xl text-primary mb-sm">
        Mon Profil
      </h1>
      <p class="font-body-md text-on-surface-variant max-w-2xl">
        Gérez vos informations personnelles et votre mot de passe.
      </p>
    </header>

    <div class="max-w-2xl space-y-lg">
      <!-- ═══ CARTE PROFIL ═══ -->
      <section class="bg-surface rounded-xl shadow-trust border border-outline-variant overflow-hidden">
        <!-- En-tête de la carte -->
        <div class="p-lg md:p-xl bg-surface-container-low border-b border-outline-variant">
          <div class="flex items-center gap-md">
            <!-- Avatar avec initiale -->
            <div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 ring-4 ring-primary-container">
              <span v-if="user?.nom" class="font-headline-md text-headline-md text-primary uppercase">
                {{ user.nom.charAt(0) }}
              </span>
              <Icon v-else name="material-symbols:person" class="text-3xl text-primary" />
            </div>
            <div class="min-w-0">
              <h2 class="font-headline-lg text-headline-lg text-primary truncate">
                {{ user?.nom || 'Utilisateur' }}
              </h2>
              <p class="font-body-sm text-on-surface-variant truncate">
                {{ user?.email || 'Aucun email renseigné' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Corps de la carte -->
        <div class="p-lg md:p-xl space-y-md">
          <AppInput
            v-model="nomEdit"
            label="Nom"
            icon="person"
            autocomplete="name"
            :disabled="enChargementProfil"
            placeholder="Votre nom complet"
          />
          <AppInput
            v-model="emailEdit"
            type="email"
            label="Email"
            icon="mail"
            autocomplete="email"
            :disabled="enChargementProfil"
            placeholder="exemple@domaine.fr"
          />

          <!-- Messages de statut -->
          <div v-if="erreurProfil" class="flex items-start gap-2 p-md bg-error-container rounded-xl">
            <Icon name="material-symbols:error" class="text-xl shrink-0 mt-0.5 text-on-error-container" />
            <p class="font-body-sm text-on-error-container">{{ erreurProfil }}</p>
          </div>
          <div v-else-if="succesProfil" class="flex items-start gap-2 p-md bg-success-container rounded-xl">
            <Icon name="material-symbols:check-circle" class="text-xl shrink-0 mt-0.5 text-on-success-container" />
            <p class="font-body-sm text-on-success-container">{{ succesProfil }}</p>
          </div>

          <div class="pt-sm flex justify-end">
            <AppButton :loading="enChargementProfil" @click="sauvegarderProfil">
              Enregistrer les modifications
            </AppButton>
          </div>
        </div>
      </section>

      <!-- ═══ CARTE MOT DE PASSE ═══ -->
      <section class="bg-surface rounded-xl shadow-trust border border-outline-variant overflow-hidden">
        <!-- En-tête de la carte -->
        <div class="p-lg md:p-xl bg-surface-container-low border-b border-outline-variant">
          <div class="flex items-center gap-sm">
            <Icon name="material-symbols:lock" class="text-2xl text-primary" />
            <h2 class="font-headline-md text-headline-md text-primary">Sécurité</h2>
          </div>
          <p class="font-body-sm text-on-surface-variant mt-xs">
            Modifiez votre mot de passe ci-dessous.
          </p>
        </div>

        <!-- Corps de la carte -->
        <div class="p-lg md:p-xl space-y-md">
          <AppInput
            v-model="ancienMdp"
            type="password"
            name="current-password"
            autocomplete="current-password"
            label="Mot de passe actuel"
            icon="lock"
            :disabled="enChargementMdp"
          />
          <AppInput
            v-model="nouveauMdp"
            type="password"
            name="new-password"
            autocomplete="new-password"
            label="Nouveau mot de passe"
            icon="lock"
            :disabled="enChargementMdp"
            hint="6 caractères minimum"
          />
          <AppInput
            v-model="confirmationMdp"
            type="password"
            name="new-password"
            autocomplete="new-password"
            label="Confirmer le nouveau mot de passe"
            icon="lock"
            :disabled="enChargementMdp"
          />

          <!-- Messages de statut -->
          <div v-if="erreurMdp" class="flex items-start gap-2 p-md bg-error-container rounded-xl">
            <Icon name="material-symbols:error" class="text-xl shrink-0 mt-0.5 text-on-error-container" />
            <p class="font-body-sm text-on-error-container">{{ erreurMdp }}</p>
          </div>
          <div v-else-if="succesMdp" class="flex items-start gap-2 p-md bg-success-container rounded-xl">
            <Icon name="material-symbols:check-circle" class="text-xl shrink-0 mt-0.5 text-on-success-container" />
            <p class="font-body-sm text-on-success-container">{{ succesMdp }}</p>
          </div>

          <div class="pt-sm flex justify-end">
            <AppButton :loading="enChargementMdp" @click="changerMotDePasse">
              Changer le mot de passe
            </AppButton>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
