<template>
  <section class="py-20 lg:py-32 bg-white">
    <UiContainer size="lg">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          {{ $t('industries.title') }}
        </h2>
        <p class="text-lg text-secondary-600">
          {{ $t('industries.subtitle') }}
        </p>
      </div>

      <!-- Industries grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink
          v-for="(industry, index) in industries"
          :key="industry.key"
          :to="`/industries/${industry.key}`"
          class="block"
        >
          <UiCard
            class="group cursor-pointer h-full"
            hoverable
          >
            <!-- Icon -->
            <div class="mb-6">
              <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                <component 
                  :is="industry.icon" 
                  class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
              {{ $t(`industries.${industry.key}.title`) }}
            </h3>
            <p class="text-secondary-600 text-sm leading-relaxed">
              {{ $t(`industries.${industry.key}.description`) }}
            </p>

            <!-- Arrow -->
            <div class="mt-6 flex items-center text-primary-600 text-sm font-medium">
              {{ $t('common.learnMore') }}
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </UiCard>
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { 
  HeartIcon, 
  BeakerIcon, 
  HandRaisedIcon, 
  ShoppingBagIcon 
} from '@heroicons/vue/24/outline'

const industries = [
  {
    key: 'medical',
    icon: HeartIcon,
  },
  {
    key: 'pharma',
    icon: BeakerIcon,
  },
  {
    key: 'glove',
    icon: HandRaisedIcon,
  },
  {
    key: 'fmcg',
    icon: ShoppingBagIcon,
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