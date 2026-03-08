<template>
  <section class="py-20 lg:py-32 bg-white">
    <UiContainer size="lg">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            {{ $t('projects.featured') || 'Featured Projects' }}
          </h2>
          <p class="text-lg text-secondary-600 max-w-2xl">
            {{ $t('projects.featuredSubtitle') || 'Discover how we have helped businesses transform their packaging operations' }}
          </p>
        </div>
        <NuxtLink 
          to="/projects" 
          class="mt-4 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          {{ $t('common.viewAll') }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UiCard
          v-for="(project, index) in featuredProjects"
          :key="index"
          class="group cursor-pointer"
          hoverable
        >
          <!-- Image placeholder -->
          <template #image>
            <div class="aspect-video bg-secondary-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
              <div class="absolute bottom-4 left-4 right-4">
                <span class="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  {{ project.industry }}
                </span>
              </div>
            </div>
          </template>

          <!-- Content -->
          <div class="p-5">
            <h3 class="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm text-secondary-500 mb-3">{{ project.client }}</p>
            <p class="text-secondary-600 text-sm line-clamp-2">
              {{ project.description }}
            </p>
          </div>

          <!-- Footer -->
          <template #footer>
            <div class="flex items-center justify-between">
              <span class="text-sm text-secondary-500">{{ project.location }}</span>
              <span class="text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                {{ $t('common.readMore') }}
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </template>
        </UiCard>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const featuredProjects = [
  {
    title: 'Medical Device Packaging Line',
    client: 'MedTech Solutions Sdn Bhd',
    industry: 'Medical Devices',
    location: 'Kuala Lumpur, Malaysia',
    description: 'Complete automation of sterile packaging line for medical device manufacturer, increasing throughput by 300%.',
  },
  {
    title: 'Pharmaceutical Bottling System',
    client: 'PharmaCare Industries',
    industry: 'Pharmaceuticals',
    location: 'Penang, Malaysia',
    description: 'High-speed bottling and labeling system with 100% inspection and rejection capabilities.',
  },
  {
    title: 'Glove Packaging Automation',
    client: 'Global Glove Manufacturing',
    industry: 'Glove Manufacturing',
    location: 'Selangor, Malaysia',
    description: 'End-to-end packaging automation for nitrile glove production line with quality control integration.',
  },
]
</script>