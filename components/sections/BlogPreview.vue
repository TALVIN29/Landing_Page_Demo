<template>
  <section class="py-20 lg:py-32 bg-white">
    <UiContainer size="lg">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            {{ $t('blog.latest') || 'Latest Insights' }}
          </h2>
          <p class="text-lg text-secondary-600 max-w-2xl">
            {{ $t('blog.subtitle') || 'Stay updated with the latest trends and innovations in packaging automation' }}
          </p>
        </div>
        <NuxtLink 
          to="/blog" 
          class="mt-4 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          {{ $t('common.viewAll') }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Blog posts grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UiCard
          v-for="(post, index) in blogPosts"
          :key="index"
          class="group cursor-pointer"
          hoverable
        >
          <!-- Image placeholder -->
          <template #image>
            <div class="aspect-video bg-secondary-200 relative overflow-hidden">
              <div class="absolute top-4 left-4">
                <span class="inline-block px-3 py-1 bg-white/90 text-secondary-700 text-xs font-medium rounded-full">
                  {{ post.category }}
                </span>
              </div>
            </div>
          </template>

          <!-- Content -->
          <div class="p-5">
            <div class="flex items-center gap-4 text-sm text-secondary-500 mb-3">
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.readTime }}</span>
            </div>
            <h3 class="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-secondary-600 text-sm line-clamp-3 mb-4">
              {{ post.excerpt }}
            </p>
            <span class="text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
              {{ $t('common.readMore') }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </UiCard>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const blogPosts = [
  {
    title: 'The Future of Packaging Automation in 2026',
    excerpt: 'Explore the latest trends and technologies shaping the packaging automation industry, from AI-driven quality control to sustainable packaging solutions.',
    category: 'Industry Trends',
    date: 'March 1, 2026',
    readTime: '5 min read',
  },
  {
    title: 'How to Choose the Right Packaging Equipment',
    excerpt: 'A comprehensive guide to selecting the best packaging automation equipment for your specific industry requirements and production goals.',
    category: 'Buying Guide',
    date: 'February 25, 2026',
    readTime: '8 min read',
  },
  {
    title: 'Medical Device Packaging Compliance Guide',
    excerpt: 'Understanding the regulatory requirements and best practices for packaging medical devices in Malaysia and Southeast Asia.',
    category: 'Compliance',
    date: 'February 18, 2026',
    readTime: '6 min read',
  },
]
</script>