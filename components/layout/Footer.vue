<template>
  <footer class="bg-secondary-900 text-white">
    <!-- Main footer content -->
    <div class="container-custom py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">P</span>
            </div>
            <span class="font-bold text-xl">{{ $t('companyName') }}</span>
          </div>
          <p class="text-secondary-400 text-sm leading-relaxed">
            {{ $t('footer.companyDescription') }}
          </p>
          <div class="flex space-x-4 pt-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="text-secondary-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="text-secondary-400 hover:text-white transition-colors text-sm"
              >
                {{ $t(link.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.services') }}</h3>
          <ul class="space-y-2">
            <li v-for="service in serviceLinks" :key="service.path">
              <NuxtLink 
                :to="service.path"
                class="text-secondary-400 hover:text-white transition-colors text-sm"
              >
                {{ $t(service.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info & Newsletter -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact') }}</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start space-x-3">
                <MapPinIcon class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span class="text-secondary-400">{{ $t('footer.address') }}</span>
              </li>
              <li class="flex items-center space-x-3">
                <PhoneIcon class="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a :href="`tel:${$t('footer.phone')}`" class="text-secondary-400 hover:text-white transition-colors">
                  {{ $t('footer.phone') }}
                </a>
              </li>
              <li class="flex items-center space-x-3">
                <EnvelopeIcon class="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a :href="`mailto:${$t('footer.email')}`" class="text-secondary-400 hover:text-white transition-colors">
                  {{ $t('footer.email') }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="text-sm font-semibold mb-2">{{ $t('footer.newsletter') }}</h4>
            <form @submit.prevent="subscribeNewsletter" class="flex">
              <input 
                v-model="email"
                type="email"
                :placeholder="$t('footer.emailPlaceholder')"
                class="flex-1 px-3 py-2 bg-secondary-800 border border-secondary-700 rounded-l-md text-sm text-white placeholder-secondary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                required
              />
              <button 
                type="submit"
                class="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-md text-sm font-medium transition-colors"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? $t('common.loading') : $t('footer.subscribe') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-secondary-800">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-secondary-400 text-sm">
            © {{ currentYear }} {{ $t('companyName') }}. {{ $t('footer.allRightsReserved') }}
          </p>
          <div class="flex space-x-6 text-sm">
            <NuxtLink to="/privacy" class="text-secondary-400 hover:text-white transition-colors">
              {{ $t('footer.privacyPolicy') }}
            </NuxtLink>
            <NuxtLink to="/terms" class="text-secondary-400 hover:text-white transition-colors">
              {{ $t('footer.termsOfService') }}
            </NuxtLink>
            <NuxtLink to="/sitemap" class="text-secondary-400 hover:text-white transition-colors">
              {{ $t('footer.sitemap') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to top button -->
    <button 
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      :aria-label="$t('footer.backToTop')"
    >
      <ArrowUpIcon class="w-5 h-5" />
    </button>
  </footer>
</template>

<script setup lang="ts">
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ArrowUpIcon 
} from '@heroicons/vue/24/outline'

// Social icons as simple SVG components
const LinkedInIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
}

const TwitterIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
}

const FacebookIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
}

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
  { name: 'Twitter', url: 'https://twitter.com', icon: TwitterIcon },
  { name: 'Facebook', url: 'https://facebook.com', icon: FacebookIcon },
]

const quickLinks = [
  { path: '/about', label: 'nav.about' },
  { path: '/services', label: 'nav.services' },
  { path: '/products', label: 'nav.products' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/blog', label: 'nav.blog' },
  { path: '/contact', label: 'nav.contact' },
  { path: '/investors', label: 'nav.investors' },
]

const serviceLinks = [
  { path: '/services/consultation', label: 'services.consultation' },
  { path: '/services/manufacturing', label: 'services.manufacturing' },
  { path: '/services/installation', label: 'services.installation' },
  { path: '/services/training', label: 'services.training' },
  { path: '/services/maintenance', label: 'services.maintenance' },
]

const currentYear = new Date().getFullYear()
const email = ref('')
const isSubmitting = ref(false)
const showBackToTop = ref(false)

const subscribeNewsletter = async () => {
  isSubmitting.value = true
  try {
    // TODO: Implement newsletter subscription with Supabase
    await new Promise(resolve => setTimeout(resolve, 1000))
    email.value = ''
    alert('Thank you for subscribing!')
  } catch (error) {
    alert('Subscription failed. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Handle scroll for back to top button
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>