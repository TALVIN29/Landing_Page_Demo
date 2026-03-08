<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">P</span>
          </div>
          <span :class="['font-bold text-xl hidden sm:block', isScrolled ? 'text-secondary-900' : 'text-secondary-900']">
            {{ $t('companyName') }}
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            :class="[
              'text-sm font-medium transition-colors duration-200',
              isScrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-secondary-700 hover:text-primary-600'
            ]"
          >
            {{ $t(item.label) }}
          </NuxtLink>
        </div>

        <!-- Right side: Language switcher & CTA -->
        <div class="hidden lg:flex items-center space-x-4">
          <LayoutLanguageSwitcher />
          <NuxtLink 
            to="/contact"
            class="btn-primary"
          >
            {{ $t('getQuote') }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          class="lg:hidden p-2 rounded-md text-secondary-700 hover:bg-secondary-100"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-label="isMobileMenuOpen ? $t('closeMenu') : $t('openMenu')"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform -translate-x-full"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed inset-0 z-50 lg:hidden"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/50" 
          @click="isMobileMenuOpen = false"
        />
        
        <!-- Menu panel -->
        <div class="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-xl">
          <div class="p-6">
            <div class="flex items-center justify-between mb-8">
              <NuxtLink to="/" class="flex items-center space-x-2" @click="isMobileMenuOpen = false">
                <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-xl">P</span>
                </div>
                <span class="font-bold text-xl text-secondary-900">
                  {{ $t('companyName') }}
                </span>
              </NuxtLink>
              <button 
                class="p-2 rounded-md text-secondary-700 hover:bg-secondary-100"
                @click="isMobileMenuOpen = false"
                :aria-label="$t('closeMenu')"
              >
                <XMarkIcon class="w-6 h-6" />
              </button>
            </div>

            <nav class="space-y-4">
              <NuxtLink 
                v-for="item in navigationItems" 
                :key="item.path"
                :to="item.path"
                class="block text-lg font-medium text-secondary-700 hover:text-primary-600 transition-colors"
                @click="isMobileMenuOpen = false"
              >
                {{ $t(item.label) }}
              </NuxtLink>
            </nav>

            <div class="mt-8 pt-8 border-t border-secondary-200">
              <LayoutLanguageSwitcher class="mb-4" />
              <NuxtLink 
                to="/contact"
                class="btn-primary w-full justify-center"
                @click="isMobileMenuOpen = false"
              >
                {{ $t('getQuote') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
  
  <!-- Spacer for fixed header -->
  <div class="h-16 lg:h-20" />
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { path: '/', label: 'home' },
  { path: '/about', label: 'about' },
  { path: '/services', label: 'services' },
  { path: '/products', label: 'products' },
  { path: '/projects', label: 'projects' },
  { path: '/blog', label: 'blog' },
  { path: '/contact', label: 'contact' },
]

// Handle scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>