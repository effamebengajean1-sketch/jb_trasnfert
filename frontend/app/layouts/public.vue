<!--
  Layout public : utilisé uniquement par la page /g/[slug].
  Pas de navigation privée, pas de footer lourd.
  Le visiteur ne doit voir aucun élément réservé aux utilisateurs inscrits.
-->
<template>
  <div class="min-h-screen flex flex-col bg-background text-on-surface font-body-md">
    <header class="w-full pt-xl pb-lg px-gutter max-w-container-max mx-auto text-center">
      <NuxtLink to="/" class="inline-flex items-center gap-2 no-underline">
        <span class="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
        <span class="font-headline-md text-headline-md font-bold text-primary">JB Transfert</span>
      </NuxtLink>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="w-full py-xl px-gutter flex flex-col items-center border-t border-outline-variant bg-surface-container-lowest">
      <p class="font-label-sm text-label-sm text-on-surface-variant">
        Partagé via <span class="text-primary font-bold">JB Transfert</span>
      </p>
      <p class="font-label-sm text-label-sm text-outline mt-sm">© 2026 JB Transfert. Tous droits réservés.</p>
    </footer>
  </div>
</template>
