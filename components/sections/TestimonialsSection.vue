<template>
  <section class="py-20 lg:py-32 bg-secondary-50">
    <UiContainer size="lg">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          {{ $t('testimonials.title') }}
        </h2>
      </div>

      <!-- Testimonials carousel -->
      <div class="relative max-w-4xl mx-auto">
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <UiCard class="text-center py-12 px-8">
                <!-- Stars -->
                <div class="flex justify-center gap-1 mb-6">
                  <StarIcon 
                    v-for="i in 5" 
                    :key="i"
                    class="w-5 h-5 text-yellow-400"
                    :class="{ 'text-yellow-400': i <= testimonial.rating, 'text-secondary-300': i > testimonial.rating }"
                  />
                </div>

                <!-- Quote -->
                <blockquote class="text-xl sm:text-2xl text-secondary-700 mb-8 leading-relaxed">
                  "{{ testimonial.quote }}"
                </blockquote>

                <!-- Author -->
                <div class="flex items-center justify-center gap-4">
                  <div class="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center">
                    <span class="text-xl font-bold text-primary-600">
                      {{ testimonial.name.charAt(0) }}
                    </span>
                  </div>
                  <div class="text-left">
                    <p class="font-bold text-secondary-900">{{ testimonial.name }}</p>
                    <p class="text-sm text-secondary-500">{{ testimonial.position }}, {{ testimonial.company }}</p>
                  </div>
                </div>
              </UiCard>
            </div>
          </div>
        </div>

        <!-- Navigation dots -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="currentIndex === index ? 'bg-primary-600' : 'bg-secondary-300 hover:bg-secondary-400'"
            :aria-label="`Go to testimonial ${index + 1}`"
            @click="goToSlide(index)"
          />
        </div>

        <!-- Navigation arrows -->
        <button 
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-secondary-50 transition-colors"
          :aria-label="$t('testimonials.previous')"
          @click="prevSlide"
        >
          <ChevronLeftIcon class="w-6 h-6 text-secondary-600" />
        </button>
        <button 
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-secondary-50 transition-colors"
          :aria-label="$t('testimonials.next')"
          @click="nextSlide"
        >
          <ChevronRightIcon class="w-6 h-6 text-secondary-600" />
        </button>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const testimonials = [
  {
    quote: 'Packaging Automation Solutions transformed our production line completely. The increase in efficiency has exceeded all our expectations.',
    name: 'Ahmad Razak',
    position: 'Production Manager',
    company: 'MedTech Solutions',
    rating: 5,
  },
  {
    quote: 'Their expertise in pharmaceutical packaging compliance saved us months of development time. Highly recommended!',
    name: 'Sarah Lim',
    position: 'Operations Director',
    company: 'PharmaCare Industries',
    rating: 5,
  },
  {
    quote: 'Professional team, excellent support, and top-quality equipment. They delivered exactly what we needed on time.',
    name: 'Rajesh Kumar',
    position: 'CEO',
    company: 'Global Glove Manufacturing',
    rating: 5,
  },
]

const currentIndex = ref(0)
let autoplayInterval: NodeJS.Timeout | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

// Autoplay
onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>