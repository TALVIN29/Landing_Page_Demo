<template>
  <section class="py-20 lg:py-32 bg-secondary-50">
    <UiContainer size="lg">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          {{ $t('services.title') || 'Our Services' }}
        </h2>
        <p class="text-lg text-secondary-600">
          {{ $t('services.subtitle') || 'Comprehensive solutions from consultation to support' }}
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UiCard
          v-for="(service, index) in services"
          :key="service.key"
          class="group"
          hoverable
        >
          <!-- Icon -->
          <div class="mb-6">
            <div class="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center">
              <component 
                :is="service.icon" 
                class="w-7 h-7 text-accent-600"
              />
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-secondary-900 mb-3">
            {{ $t(`services.${service.key}`) }}
          </h3>
          <p class="text-secondary-600 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </UiCard>
      </div>

      <!-- View all button -->
      <div class="text-center mt-12">
        <NuxtLink to="/services">
          <UiButton 
            variant="outline" 
            size="lg"
          >
            {{ $t('common.viewAll') }}
            <template #rightIcon>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </template>
          </UiButton>
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { 
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  TruckIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    key: 'consultation',
    icon: ChatBubbleLeftRightIcon,
    description: 'Expert consultation and custom system design tailored to your specific production requirements and industry standards.',
  },
  {
    key: 'manufacturing',
    icon: Cog6ToothIcon,
    description: 'State-of-the-art manufacturing capabilities producing high-quality automation equipment with precision engineering.',
  },
  {
    key: 'installation',
    icon: WrenchScrewdriverIcon,
    description: 'Professional installation and commissioning services ensuring your equipment operates at peak performance.',
  },
  {
    key: 'training',
    icon: AcademicCapIcon,
    description: 'Comprehensive training programs and knowledge transfer to empower your team with the skills they need.',
  },
  {
    key: 'maintenance',
    icon: TruckIcon,
    description: 'Reliable maintenance services and spare parts support to minimize downtime and maximize productivity.',
  },
]

// Scroll reveal animation
onMounted(() => {
  const { $anime } = useNuxtApp()
  if ($anime) {
    $anime.scrollReveal('.group', 'slideUp', { stagger: 100 })
  }
})
</script>