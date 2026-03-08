<template>
  <section class="py-20 lg:py-24 bg-primary-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;" />
    </div>

    <UiContainer size="lg" class="relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.key"
          class="text-center"
        >
          <div class="mb-2">
            <span 
              ref="counterRefs"
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              :data-target="stat.value"
            >
              0
            </span>
            <span class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400">+</span>
          </div>
          <p class="text-primary-200 text-sm sm:text-base">
            {{ $t(`stats.${stat.key}`) }}
          </p>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import anime from 'animejs'

const stats = [
  { key: 'projects', value: 500 },
  { key: 'experience', value: 25 },
  { key: 'countries', value: 15 },
  { key: 'satisfaction', value: 98 },
]

const counterRefs = ref<HTMLElement[]>([])

// Counter animation
onMounted(() => {
  counterRefs.value.forEach((el, index) => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10)
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Special case for satisfaction percentage
          const isPercentage = index === 3
          const counter = { value: 0 }
          
          anime({
            targets: counter,
            value: target,
            duration: 2000,
            easing: 'easeOutExpo',
            round: 1,
            update: () => {
              el.innerHTML = counter.value.toLocaleString()
            },
            complete: () => {
              if (isPercentage) {
                el.innerHTML = target.toString()
              }
            },
          })
          
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })

    observer.observe(el)
  })
})
</script>