<script setup>
const email = ref('')
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-xl md:py-32 overflow-hidden bg-surface">
      <!-- Glow décoratif (remplace le radial-gradient en dur) -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-fixed/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-fixed/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
        <!-- Texte -->
        <div>
          <div class="inline-flex items-center gap-2 px-sm py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full mb-lg font-label-sm">
            <Icon name="material-symbols:verified" class="text-[16px]" />
            Qualité originale garantie
          </div>
          <h2 class="font-headline-xl text-headline-xl text-primary mb-md tracking-tight">
            Partagez vos images en qualité originale.
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
            La plateforme sécurisée pour partager vos fichiers haute résolution
            sans compression, sans compromis.
          </p>
          <form class="flex flex-col sm:flex-row gap-md" @submit.prevent="$router.push('/register')">
            <div class="flex-1 bg-surface border border-outline-variant rounded-full flex items-center px-lg py-md shadow-sm focus-within:border-primary transition-all">
              <Icon name="material-symbols:mail" class="text-outline mr-sm" />
              <input
                v-model="email"
                type="email"
                placeholder="votre@email.com"
                class="bg-transparent border-none focus:ring-0 w-full text-body-md p-0 text-on-surface placeholder:text-outline"
              />
            </div>
            <button
              type="submit"
              class="bg-primary text-on-primary px-xl py-md rounded-full font-label-md hover:opacity-90 shadow-lg transition-all"
            >
              Commencer gratuitement
            </button>
          </form>
          <p class="mt-md font-label-sm text-outline">
            Aucune carte de crédit requise
          </p>
        </div>

        <!-- Visuel : grille bento -->
        <div class="relative">
          <div class="grid grid-cols-6 grid-rows-6 gap-sm h-[500px] md:h-[600px]">
            <div class="col-span-3 row-span-4 rounded-xl overflow-hidden shadow-trust bg-surface-container">
              <img
                src="~/assets/images/jouer.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="col-span-3 row-span-2 rounded-xl overflow-hidden shadow-trust bg-surface-container">
              <img
                src="~/assets/images/village.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-trust bg-surface-container">
              <img
                src="~/assets/images/couple.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="col-span-1 row-span-2 rounded-xl bg-primary flex items-center justify-center text-on-primary">
              <Icon name="material-symbols:add" class="text-4xl" />
            </div>
            <div class="col-span-3 row-span-2 rounded-xl overflow-hidden shadow-trust bg-surface-container">
              <img
                src="~/assets/images/famille.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Élément flottant -->
          <div class="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md border border-outline-variant/30 p-md rounded-xl shadow-lg flex items-center gap-md max-w-xs">
            <div class="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center">
              <Icon name="material-symbols:download-done" class="text-primary" />
            </div>
            <div>
              <p class="font-label-md text-primary font-bold">
                Transfert terminé
              </p>
              <p class="font-label-sm text-on-surface-variant">
                42 images (1.2 Go) partagées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-xl bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-xl">
          <h3 class="font-headline-lg text-headline-lg text-primary mb-sm">
            Pensé pour votre flux de travail
          </h3>
          <p class="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour envoyer, recevoir et gérer vos
            photos haute définition en toute sécurité.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div class="bg-surface p-lg rounded-xl shadow-trust border border-outline-variant hover:border-primary transition-all">
            <div class="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-md">
              <Icon name="material-symbols:photo-library" class="text-primary" />
            </div>
            <h4 class="font-headline-sm text-headline-sm mb-sm text-on-surface">
              Galeries de prévisualisation
            </h4>
            <p class="font-body-sm text-on-surface-variant">
              Vos destinataires peuvent visualiser les photos directement dans
              leur navigateur avant de les télécharger.
            </p>
          </div>
          <div class="bg-surface p-lg rounded-xl shadow-trust border border-outline-variant hover:border-primary transition-all">
            <div class="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-md">
              <Icon name="material-symbols:lock" class="text-primary" />
            </div>
            <h4 class="font-headline-sm text-headline-sm mb-sm text-on-surface">
              Partage par lien sécurisé
            </h4>
            <p class="font-body-sm text-on-surface-variant">
              Chaque galerie a un lien unique, accessible uniquement à qui vous
              le partagez.
            </p>
          </div>
          <div class="bg-surface p-lg rounded-xl shadow-trust border border-outline-variant hover:border-primary transition-all">
            <div class="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-md">
              <Icon name="material-symbols:speed" class="text-primary" />
            </div>
            <h4 class="font-headline-sm text-headline-sm mb-sm text-on-surface">
              Qualité d'origine
            </h4>
            <p class="font-body-sm text-on-surface-variant">
              Aucune compression, aucune transformation : vos images restent
              exactement telles que déposées.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>