<script setup>
import { useAuth } from '~/composables/useAuth'

const { user, isAuthenticated, logout } = useAuth()
const router = useRouter()
const route = useRoute()

const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})

function handleLogout() {
  logout()
  mobileMenuOpen.value = false
  userMenuOpen.value = false
  router.push('/login')
}

function closeMenus() {
  mobileMenuOpen.value = false
  userMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-on-background font-body-md">
    
    <!-- Header -->
    <header 
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        scrolled 
          ? 'bg-surface-container-lowest/90 backdrop-blur-md shadow-lg border-b border-outline-variant/50' 
          : 'bg-surface-container-lowest shadow-trust'
      ]"
    >
      <div class="flex justify-between items-center w-full px-4 sm:px-6 lg:px-gutter max-w-container-max mx-auto h-16 sm:h-20">
        
        <!-- Logo -->
        <NuxtLink 
          to="/" 
          class="flex items-center gap-2.5 shrink-0 group" 
          @click="closeMenus"
        >
          <img 
            src="~/assets/images/logo.png" 
            alt="JB Transfert" 
            class="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          >
        </NuxtLink>

        <!-- Navigation Desktop -->
        <nav 
          v-show="isAuthenticated" 
          class="hidden md:flex items-center gap-1"
        >
          <NuxtLink 
            to="/galleries" 
            :class="[
              'relative px-4 py-2 rounded-xl font-label-md transition-all duration-200 ease-out',
              route.path.startsWith('/galleries') 
                ? 'text-primary bg-primary-container/60 font-semibold' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
            ]"
          >
            Galeries
            <span 
              :class="[
                'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-primary transition-all duration-300',
                route.path.startsWith('/galleries') ? 'w-6 opacity-100' : 'w-0 opacity-0'
              ]" 
            />
          </NuxtLink>

          <NuxtLink 
            to="/profile" 
            :class="[
              'relative px-4 py-2 rounded-xl font-label-md transition-all duration-200 ease-out',
              route.path === '/profile' 
                ? 'text-primary bg-primary-container/60 font-semibold' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
            ]"
          >
            Profil
            <span 
              :class="[
                'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-primary transition-all duration-300',
                route.path === '/profile' ? 'w-6 opacity-100' : 'w-0 opacity-0'
              ]" 
            />
          </NuxtLink>

          <NuxtLink 
            v-if="user?.role === 'ADMIN'" 
            to="/admin" 
            :class="[
              'relative px-4 py-2 rounded-xl font-label-md transition-all duration-200 ease-out',
              route.path.startsWith('/admin') 
                ? 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 font-semibold' 
                : 'text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            ]"
          >
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              Admin
            </span>
            <span 
              :class="[
                'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-purple-500 transition-all duration-300',
                route.path.startsWith('/admin') ? 'w-6 opacity-100' : 'w-0 opacity-0'
              ]" 
            />
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Non connecté -->
          <div v-show="!isAuthenticated" class="flex items-center gap-2 sm:gap-3">
            <NuxtLink 
              to="/login" 
              class="px-3 sm:px-5 py-1.5 sm:py-2 border border-outline text-on-surface-variant font-label-md rounded-full hover:border-primary hover:text-primary hover:bg-surface-container-high transition-all duration-200 active:scale-95 text-xs sm:text-sm"
            >
              <span class="hidden sm:inline">Se connecter</span>
              <span class="sm:hidden">Connexion</span>
            </NuxtLink>
            <NuxtLink 
              to="/register" 
              class="px-3 sm:px-5 py-1.5 sm:py-2 bg-primary text-on-primary font-label-md rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200 active:scale-95 text-xs sm:text-sm whitespace-nowrap"
            >
              <span class="hidden sm:inline">Créer un compte</span>
              <span class="sm:hidden">S'inscrire</span>
            </NuxtLink>
          </div>

          <!-- Connecté: Profil utilisateur (desktop) -->
          <div v-show="isAuthenticated" class="hidden md:block relative">
            <button 
              @click="userMenuOpen = !userMenuOpen"
              :class="[
                'flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-full transition-all duration-200 border',
                userMenuOpen 
                  ? 'bg-surface-container-high border-outline shadow-md' 
                  : 'bg-surface-container-low border-transparent hover:border-outline-variant hover:bg-surface-container-high'
              ]"
            >
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-xs font-bold text-on-primary shadow-sm">
                {{ user?.nom?.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() || 'U' }}
              </div>
              <div class="text-left hidden lg:block">
                <p class="text-xs font-semibold text-on-surface leading-tight">{{ user?.nom }}</p>
                <p class="text-[10px] text-on-surface-variant leading-tight">{{ user?.email }}</p>
              </div>
              <svg 
                :class="['w-4 h-4 text-on-surface-variant transition-transform duration-200', userMenuOpen ? 'rotate-180' : '']" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown menu -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-1 scale-95"
            >
              <div 
                v-if="userMenuOpen" 
                class="absolute right-0 mt-2 w-56 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant py-2 z-50 overflow-hidden"
              >
                <div class="px-4 py-3 border-b border-outline-variant/50 mb-1">
                  <p class="text-sm font-semibold text-on-surface">{{ user?.nom }}</p>
                  <p class="text-xs text-on-surface-variant truncate">{{ user?.email }}</p>
                </div>
                <NuxtLink 
                  to="/profile" 
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors"
                  @click="userMenuOpen = false"
                >
                  <Icon name="material-symbols:person-outline" class="text-lg" />
                  Mon profil
                </NuxtLink>
                <NuxtLink 
                  v-if="user?.role === 'ADMIN'" 
                  to="/admin" 
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  @click="userMenuOpen = false"
                >
                  <Icon name="material-symbols:admin-panel-settings" class="text-lg" />
                  Administration
                </NuxtLink>
                <div class="border-t border-outline-variant/50 my-1" />
                <button 
                  @click="handleLogout" 
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left"
                >
                  <Icon name="material-symbols:logout" class="text-lg" />
                  Déconnexion
                </button>
              </div>
            </Transition>
          </div>

          <!-- ThemeToggle - ClientOnly avec fallback -->
          <ClientOnly>
            <ThemeToggle />
            <template #fallback>
              <div class="w-9 h-9 rounded-full"></div>
            </template>
          </ClientOnly>

          <!-- Menu hamburger mobile -->
          <button 
            v-show="isAuthenticated" 
            class="md:hidden p-2 rounded-xl hover:bg-surface-container-high transition-colors duration-200" 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            aria-label="Menu"
          >
            <div class="relative w-6 h-6">
              <span 
                :class="[
                  'absolute left-0 block w-6 h-0.5 bg-on-surface-variant rounded-full transition-all duration-300 ease-out',
                  mobileMenuOpen ? 'top-3 rotate-45' : 'top-1.5'
                ]"
              />
              <span 
                :class="[
                  'absolute left-0 top-3 block w-6 h-0.5 bg-on-surface-variant rounded-full transition-all duration-300 ease-out',
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                ]"
              />
              <span 
                :class="[
                  'absolute left-0 block w-6 h-0.5 bg-on-surface-variant rounded-full transition-all duration-300 ease-out',
                  mobileMenuOpen ? 'top-3 -rotate-45' : 'top-[18px]'
                ]"
              />
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Drawer -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="-translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-4 opacity-0"
      >
        <div 
          v-if="mobileMenuOpen && isAuthenticated" 
          class="md:hidden absolute top-16 left-0 right-0 bg-surface-container-lowest/95 backdrop-blur-lg border-b border-outline-variant shadow-xl px-4 py-4 space-y-1"
        >
          <div class="flex items-center gap-3 px-4 py-3 mb-2 bg-surface-container-low rounded-2xl border border-outline-variant/50">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-sm font-bold text-on-primary">
              {{ user?.nom?.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() || 'U' }}
            </div>
            <div>
              <p class="font-semibold text-on-surface text-sm">{{ user?.nom }}</p>
              <p class="text-xs text-on-surface-variant">{{ user?.email }}</p>
            </div>
          </div>

          <NuxtLink 
            to="/galleries" 
            :class="[
              'flex items-center gap-3 px-4 py-3 rounded-xl font-label-md transition-all duration-200',
              route.path.startsWith('/galleries') 
                ? 'text-primary bg-primary-container/40 font-semibold' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            ]"
            @click="closeMenus"
          >
            <Icon name="material-symbols:grid-view" class="text-xl" />
            Galeries
          </NuxtLink>

          <NuxtLink 
            to="/profile" 
            :class="[
              'flex items-center gap-3 px-4 py-3 rounded-xl font-label-md transition-all duration-200',
              route.path === '/profile' 
                ? 'text-primary bg-primary-container/40 font-semibold' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            ]"
            @click="closeMenus"
          >
            <Icon name="material-symbols:person" class="text-xl" />
            Profil
          </NuxtLink>

          <NuxtLink 
            v-if="user?.role === 'ADMIN'" 
            to="/admin" 
            :class="[
              'flex items-center gap-3 px-4 py-3 rounded-xl font-label-md transition-all duration-200',
              route.path.startsWith('/admin') 
                ? 'text-purple-700 bg-purple-100 dark:bg-purple-900/30 font-semibold' 
                : 'text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            ]"
            @click="closeMenus"
          >
            <Icon name="material-symbols:admin-panel-settings" class="text-xl" />
            Administration
          </NuxtLink>

          <div class="border-t border-outline-variant my-2 pt-2">
            <button 
              @click="handleLogout" 
              class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-label-md text-left"
            >
              <Icon name="material-symbols:logout" class="text-xl" />
              Déconnexion
            </button>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main -->
    <main class="flex-grow pt-16 sm:pt-20 pb-16 md:pb-0">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-surface-container border-t border-outline-variant mt-xl">
      <div class="w-full py-8 sm:py-xl px-4 sm:px-gutter flex flex-col items-center md:flex-row md:justify-between max-w-container-max mx-auto gap-4 sm:gap-md text-center md:text-left">
        <div class="flex items-center justify-center gap-2">
          <img 
            src="~/assets/images/logo.png" 
            alt="JB Transfert" 
            class="h-6 sm:h-8 w-auto object-contain opacity-80"
          >
        </div>
        <nav class="flex flex-wrap justify-center gap-4 sm:gap-lg">
          <a href="#" class="font-label-sm text-on-surface-variant hover:text-primary transition-all duration-200">Conditions</a>
          <a href="#" class="font-label-sm text-on-surface-variant hover:text-primary transition-all duration-200">Confidentialité</a>
          <a href="#" class="font-label-sm text-on-surface-variant hover:text-primary transition-all duration-200">Aide</a>
        </nav>
        <p class="font-label-sm text-outline text-xs sm:text-sm">© 2026 JB Transfert</p>
      </div>
    </footer>

    <!-- Bottom Nav Mobile -->
    <nav 
      v-show="isAuthenticated" 
      class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 bg-surface md:hidden border-t border-outline-variant shadow-[0px_-4px_20px_rgba(15,27,45,0.08)]"
    >
      <NuxtLink 
        to="/galleries" 
        :class="[
          'flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200',
          route.path.startsWith('/galleries') ? 'text-primary font-bold bg-primary-container/30' : 'text-on-surface-variant'
        ]"
      >
        <Icon name="material-symbols:grid-view" class="text-xl" />
        <span class="font-label-sm scale-90">Galeries</span>
      </NuxtLink>

      <NuxtLink 
        to="/profile" 
        :class="[
          'flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200',
          route.path === '/profile' ? 'text-primary font-bold bg-primary-container/30' : 'text-on-surface-variant'
        ]"
      >
        <Icon name="material-symbols:person" class="text-xl" />
        <span class="font-label-sm scale-90">Profil</span>
      </NuxtLink>

      <NuxtLink 
        v-if="user?.role === 'ADMIN'" 
        to="/admin" 
        :class="[
          'flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200',
          route.path.startsWith('/admin') ? 'text-purple-600 font-bold bg-purple-100 dark:bg-purple-900/30' : 'text-on-surface-variant'
        ]"
      >
        <Icon name="material-symbols:admin-panel-settings" class="text-xl" />
        <span class="font-label-sm scale-90">Admin</span>
      </NuxtLink>
    </nav>

    <!-- ✅ PWA Install Prompt (ClientOnly pour éviter SSR mismatch) -->
    <ClientOnly>
      <PwaInstallPrompt />
    </ClientOnly>
  </div>
</template>