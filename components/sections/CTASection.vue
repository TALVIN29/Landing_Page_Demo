<template>
  <section class="py-20 lg:py-32 bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-accent-500/5 skew-x-12 transform translate-x-1/4" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
    
    <UiContainer size="lg" class="relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {{ $t('cta.title') }}
        </h2>
        <p class="text-lg sm:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          {{ $t('cta.subtitle') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <UiButton 
              size="lg" 
              variant="accent"
              class="text-lg px-8 py-4"
            >
              {{ $t('cta.button') }}
            </UiButton>
          </NuxtLink>
          
          <NuxtLink to="/products">
            <UiButton 
              size="lg" 
              variant="outline"
              class="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-900"
            >
              {{ $t('common.viewAll') }}
            </UiButton>
          </NuxtLink>
        </div>

        <!-- Trust indicators -->
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-primary-200 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Free Consultation
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            24/7 Support
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Custom Solutions
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>