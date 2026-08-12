<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <!-- Header -->
      <div class="mb-10">
        <div class="flex items-center gap-3 mb-2">
          <div class="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Administrateur</h1>
        </div>
        <p class="text-gray-500 dark:text-gray-400 ml-12">Panneau de contrôle et gestion de la plateforme</p>
      </div>

      <!-- Chargement -->
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <AppSpinner />
        <span class="ml-3 text-gray-500 dark:text-gray-400">Chargement des données...</span>
      </div>

      <!-- Erreur -->
      <div v-else-if="loadError" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8 text-center">
        <p class="text-red-700 dark:text-red-300 font-medium mb-2">Erreur de chargement</p>
        <p class="text-red-600 dark:text-red-400 text-sm mb-4">{{ loadError }}</p>
        <button @click="loadData" class="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">Réessayer</button>
      </div>

      <template v-else>
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border-l-4 border-indigo-500 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Utilisateurs</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ stats.users }}</p>
            </div>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border-l-4 border-emerald-500 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Galeries</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ stats.galleries }}</p>
            </div>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border-l-4 border-amber-500 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Photos</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ stats.photos }}</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
              <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border-l-4 border-rose-500 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Stockage utilisé</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ formatBytes(stats.storageUsed) }}</p>
            </div>
            <div class="p-3 bg-rose-50 dark:bg-rose-900/30 rounded-lg">
              <svg class="w-6 h-6 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
            </div>
          </div>
        </div>

        <!-- Mini Graphiques -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <!-- Répartition rôles -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
              <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
              Répartition des rôles
            </h3>
            <div class="flex items-center gap-4">
              <div class="relative w-24 h-24">
                <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                  <path class="text-gray-100 dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="4"/>
                  <path class="text-indigo-500" :stroke-dasharray="`${rolePercent.ADMIN}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="4"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300">{{ stats.users }}</div>
              </div>
              <div class="flex-1 space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-600 dark:text-gray-300"><span class="w-3 h-3 rounded-full bg-indigo-500"></span> Admin</span>
                  <span class="font-medium text-gray-900 dark:text-white">{{ roleCounts.ADMIN }}</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-600 dark:text-gray-300"><span class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></span> Utilisateurs</span>
                  <span class="font-medium text-gray-900 dark:text-white">{{ roleCounts.USER }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Top contributeurs -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              Top propriétaires de galeries
            </h3>
            <div class="space-y-3">
              <div v-for="(u, i) in topOwners.slice(0, 5)" :key="u.id" class="flex items-center gap-3">
                <span class="w-5 text-xs font-bold text-gray-400 dark:text-gray-500 text-center">{{ i + 1 }}</span>
                <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-xs font-bold text-indigo-700 dark:text-indigo-300">
                  {{ initials(u.nom) }}
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ u.nom }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ u.email }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-emerald-500 rounded-full" :style="{ width: Math.min((u._count.galeries / maxGalleries) * 100, 100) + '%' }"/>
                  </div>
                  <span class="text-xs font-medium text-gray-600 dark:text-gray-300 w-4 text-right">{{ u._count.galeries }}</span>
                </div>
              </div>
              <div v-if="topOwners.length === 0" class="text-sm text-gray-400 dark:text-gray-500 text-center py-4">Aucune donnée</div>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                activeTab === tab ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              ]"
            >
              {{ tab === 'users' ? 'Utilisateurs' : 'Galeries' }}
              <span :class="[
                'ml-1.5 px-1.5 py-0.5 text-xs rounded-full',
                activeTab === tab ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              ]">{{ tab === 'users' ? stats.users : stats.galleries }}</span>
            </button>
          </div>
        </div>

        <!-- Toolbar -->
        <div class="flex flex-col sm:flex-row gap-3 mb-4">
          <div class="relative flex-1">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="activeTab === 'users' ? 'Rechercher un utilisateur...' : 'Rechercher une galerie...'"
              class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            @click="exportCSV"
            class="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Exporter CSV
          </button>
        </div>

        <!-- Table Utilisateurs -->
        <div v-if="activeTab === 'users'" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <table class="w-full text-left text-sm">
            <thead class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Utilisateur</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Rôle</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Galeries</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Inscription</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
              <tr v-for="u in paginatedUsers" :key="u.id" class="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                <td class="px-5 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-xs font-bold text-indigo-700 dark:text-indigo-300">
                      {{ initials(u.nom) }}
                    </div>
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">{{ u.nom }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ u.email }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-4">
                  <span :class="[
                    'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
                    u.role === 'ADMIN' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300' : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  ]">{{ u.role }}</span>
                </td>
                <td class="px-5 py-4 text-gray-600 dark:text-gray-300">{{ u._count.galeries }}</td>
                <td class="px-5 py-4 text-gray-500 dark:text-gray-400 text-xs">{{ formatDate(u.dateCreation) }}</td>
                <td class="px-5 py-4 text-right">
                  <button @click="confirmDeleteUser(u)" class="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Supprimer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="filteredUsers.length === 0" class="p-8 text-center text-gray-500 dark:text-gray-400 text-sm">Aucun utilisateur trouvé</div>
        </div>

        <!-- Table Galeries -->
        <div v-if="activeTab === 'galleries'" class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <table class="w-full text-left text-sm">
            <thead class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Galerie</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Propriétaire</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Photos</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400">Création</th>
                <th class="px-5 py-3.5 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
              <tr v-for="g in paginatedGalleries" :key="g.id" class="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                <td class="px-5 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                      <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">{{ g.titre }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400 font-mono">{{ g.slug }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-4">
                  <p class="text-sm text-gray-700 dark:text-gray-200">{{ g.utilisateur.nom }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ g.utilisateur.email }}</p>
                </td>
                <td class="px-5 py-4">
                  <span class="inline-flex items-center px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-100 dark:border-amber-800">
                    {{ g._count.photos }} photo{{ g._count.photos > 1 ? 's' : '' }}
                  </span>
                </td>
                <td class="px-5 py-4 text-gray-500 dark:text-gray-400 text-xs">{{ formatDate(g.dateCreation) }}</td>
                <td class="px-5 py-4 text-right">
                  <button @click="confirmDeleteGallery(g)" class="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Supprimer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="filteredGalleries.length === 0" class="p-8 text-center text-gray-500 dark:text-gray-400 text-sm">Aucune galerie trouvée</div>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex items-center justify-between mt-6">
          <p class="text-sm text-gray-500 dark:text-gray-400">Page {{ page }} sur {{ totalPages }}</p>
          <div class="flex gap-2">
            <button @click="prevPage" :disabled="page === 1" :class="['px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors', page === 1 ? 'bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700']">Précédent</button>
            <button @click="nextPage" :disabled="page === totalPages" :class="['px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors', page === totalPages ? 'bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700']">Suivant</button>
          </div>
        </div>
      </template>
    </div>

    <!-- Modal confirmation -->
    <AppModal :open="showModal" title="Confirmer la suppression" @close="showModal = false">
      <p class="text-gray-600 dark:text-gray-300 mb-6">{{ modalMessage }}</p>
      <template #footer>
        <AppButton variant="secondary" @click="showModal = false">Annuler</AppButton>
        <AppButton variant="danger" :loading="loading" @click="executeDelete">Supprimer</AppButton>
      </template>
    </AppModal>

    <!-- Toast notification -->
    <Transition enter-active-class="transition ease-out duration-300" enter-from-class="translate-x-full opacity-0" enter-to-class="translate-x-0 opacity-100" leave-active-class="transition ease-in duration-200" leave-from-class="translate-x-0 opacity-100" leave-to-class="translate-x-full opacity-0">
      <div v-if="toast.visible" :class="['fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg border flex items-center gap-3', toast.type === 'success' ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200']">
        <svg v-if="toast.type === 'success'" class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <svg v-else class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        <p class="text-sm font-medium">{{ toast.message }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['admin'],
  layout: 'default',
});

const { fetchStats, fetchUsers, fetchGalleries, deleteUser, deleteGallery, loading } = useAdmin();

const stats = ref({ users: 0, galleries: 0, photos: 0, storageUsed: 0 });
const users = ref([]);
const galleries = ref([]);
const activeTab = ref('users');
const tabs = ['users', 'galleries'];
const page = ref(1);
const totalPages = ref(1);
const showModal = ref(false);
const modalTarget = ref(null);
const modalMessage = ref('');
const loadError = ref(null);
const isLoading = ref(false);
const searchQuery = ref('');
const toast = ref({ visible: false, message: '', type: 'success' });

onMounted(loadData);

async function loadData() {
  loadError.value = null;
  isLoading.value = true;
  try {
    stats.value = await fetchStats();
    if (activeTab.value === 'users') {
      const res = await fetchUsers({ page: 1, limit: 1000 });
      users.value = res.users;
      totalPages.value = Math.ceil(res.total / 20);
    } else {
      const res = await fetchGalleries({ page: 1, limit: 1000 });
      galleries.value = res.galleries;
      totalPages.value = Math.ceil(res.total / 20);
    }
  } catch (err) {
    loadError.value = err?.data?.error || err?.message || 'Impossible de charger les données';
  } finally {
    isLoading.value = false;
  }
}

watch(activeTab, () => { searchQuery.value = ''; page.value = 1; loadData(); });

// Recherche locale
const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value;
  const q = searchQuery.value.toLowerCase();
  return users.value.filter(u => u.nom.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
});

const filteredGalleries = computed(() => {
  if (!searchQuery.value) return galleries.value;
  const q = searchQuery.value.toLowerCase();
  return galleries.value.filter(g => g.titre.toLowerCase().includes(q) || g.utilisateur.nom.toLowerCase().includes(q));
});

// Pagination locale
const paginatedUsers = computed(() => {
  const start = (page.value - 1) * 20;
  return filteredUsers.value.slice(start, start + 20);
});

const paginatedGalleries = computed(() => {
  const start = (page.value - 1) * 20;
  return filteredGalleries.value.slice(start, start + 20);
});

watch([filteredUsers, filteredGalleries], () => {
  const total = activeTab.value === 'users' ? filteredUsers.value.length : filteredGalleries.value.length;
  totalPages.value = Math.max(1, Math.ceil(total / 20));
  if (page.value > totalPages.value) page.value = totalPages.value || 1;
}, { deep: true });

function prevPage() { if (page.value > 1) { page.value--; } }
function nextPage() { if (page.value < totalPages.value) { page.value++; } }

// Graphiques calculés
const roleCounts = computed(() => ({
  ADMIN: users.value.filter(u => u.role === 'ADMIN').length,
  USER: users.value.filter(u => u.role === 'USER').length,
}));

const rolePercent = computed(() => {
  const total = users.value.length || 1;
  return {
    ADMIN: (roleCounts.value.ADMIN / total) * 100,
    USER: (roleCounts.value.USER / total) * 100,
  };
});

const topOwners = computed(() => [...users.value].sort((a, b) => b._count.galeries - a._count.galeries));
const maxGalleries = computed(() => Math.max(...users.value.map(u => u._count.galeries), 1));

// Helpers
function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR');
}

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function showToast(message, type = 'success') {
  toast.value = { visible: true, message, type };
  setTimeout(() => { toast.value.visible = false; }, 3000);
}

// Export CSV
function exportCSV() {
  const isUsers = activeTab.value === 'users';
  const data = isUsers ? filteredUsers.value : filteredGalleries.value;
  if (data.length === 0) {
    showToast('Aucune donnée à exporter', 'error');
    return;
  }

  let csv = '';
  if (isUsers) {
    csv = 'ID,Nom,Email,Rôle,Galeries,Date inscription\n';
    csv += data.map(u => `${u.id},"${u.nom}","${u.email}",${u.role},${u._count.galeries},${formatDate(u.dateCreation)}`).join('\n');
  } else {
    csv = 'ID,Titre,Slug,Propriétaire,Email,Photos,Date création\n';
    csv += data.map(g => `${g.id},"${g.titre}","${g.slug}","${g.utilisateur.nom}","${g.utilisateur.email}",${g._count.photos},${formatDate(g.dateCreation)}`).join('\n');
  }

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `jb-transfert-${activeTab.value}-${new Date().toISOString().slice(0,10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('Export CSV téléchargé');
}

// Suppression
function confirmDeleteUser(u) {
  modalTarget.value = { type: 'user', id: u.id };
  modalMessage.value = `Supprimer définitivement l'utilisateur "${u.nom}" ? Toutes ses galeries et photos seront perdues.`;
  showModal.value = true;
}

function confirmDeleteGallery(g) {
  modalTarget.value = { type: 'gallery', id: g.id };
  modalMessage.value = `Supprimer définitivement la galerie "${g.titre}" ?`;
  showModal.value = true;
}

async function executeDelete() {
  if (!modalTarget.value) return;
  try {
    if (modalTarget.value.type === 'user') await deleteUser(modalTarget.value.id);
    else await deleteGallery(modalTarget.value.id);
    showModal.value = false;
    showToast('Suppression effectuée avec succès');
    await loadData();
  } catch (err) {
    showToast('Erreur lors de la suppression', 'error');
  }
}
</script>