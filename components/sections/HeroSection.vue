<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/95 z-10" />
      
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;" />
      </div>
    </div>

    <!-- Content -->
    <UiContainer size="lg" class="relative z-20 py-20 lg:py-32">
      <div class="max-w-4xl">
        <!-- Animated headline -->
        <h1 
          ref="headlineRef"
          class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
        >
          {{ $t('hero.headline') }}
        </h1>

        <!-- Subheadline -->
        <p 
          ref="subheadlineRef"
          class="text-lg sm:text-xl lg:text-2xl text-primary-100 mb-10 max-w-2xl leading-relaxed"
        >
          {{ $t('hero.subheadline') }}
        </p>

        <!-- CTA Buttons -->
        <div 
          ref="buttonsRef"
          class="flex flex-col sm:flex-row gap-4"
        >
          <NuxtLink to="/products">
            <UiButton 
              size="lg" 
              variant="accent"
              class="text-lg px-8 py-4"
            >
              {{ $t('hero.ctaPrimary') }}
            </UiButton>
          </NuxtLink>
          
          <NuxtLink to="/contact">
            <UiButton 
              size="lg" 
              variant="outline"
              class="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900"
            >
              {{ $t('hero.ctaSecondary') }}
            </UiButton>
          </NuxtLink>
        </div>

        <!-- Trust badges -->
        <div 
          ref="badgesRef"
          class="mt-16 pt-8 border-t border-white/20"
        >
          <p class="text-sm text-primary-200 mb-4">{{ $t('hero.trustedBy') }}</p>
          <div class="flex flex-wrap gap-8 opacity-70">
            <div class="h-8 w-24 bg-white/20 rounded" />
            <div class="h-8 w-28 bg-white/20 rounded" />
            <div class="h-8 w-20 bg-white/20 rounded" />
            <div class="h-8 w-32 bg-white/20 rounded" />
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- Decorative elements -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    
    <!-- Animated shapes -->
    <div class="absolute top-20 right-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
    <div class="absolute bottom-40 right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div class="flex flex-col items-center text-white/60 animate-bounce">
        <span class="text-sm mb-2">{{ $t('hero.scrollDown') }}</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import anime from 'animejs'

const headlineRef = ref<HTMLElement | null>(null)
const subheadlineRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const badgesRef = ref<HTMLElement | null>(null)

// Page load animations
onMounted(() => {
  // Animate headline
  if (headlineRef.value) {
    anime({
      targets: headlineRef.value,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 200,
    })
  }

  // Animate subheadline
  if (subheadlineRef.value) {
    anime({
      targets: subheadlineRef.value,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: 600,
    })
  }

  // Animate buttons
  if (buttonsRef.value) {
    const buttons = buttonsRef.value.querySelectorAll('button')
    anime({
      targets: buttons,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutExpo',
      delay: anime.stagger(100, { start: 1000 }),
    })
  }

  // Animate badges
  if (badgesRef.value) {
    anime({
      targets: badgesRef.value,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: 1400,
    })
  }
})
</script>