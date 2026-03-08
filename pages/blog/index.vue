<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-secondary-900 to-primary-900">
      <UiContainer size="lg">
        <div class="max-w-4xl text-center mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p class="text-xl text-primary-100">
            Stay updated with the latest trends and innovations in packaging automation
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Content -->
    <section class="py-20 bg-white">
      <UiContainer size="lg">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Featured Post -->
            <div v-if="featuredPost" class="mb-12">
              <h2 class="text-2xl font-bold text-secondary-900 mb-6">Featured Post</h2>
              <UiCard class="group cursor-pointer hover:shadow-lg transition-shadow">
                <template #image>
                  <div class="aspect-video bg-secondary-200 relative overflow-hidden">
                    <span class="absolute inset-0 flex items-center justify-center text-secondary-400">Featured Image</span>
                  </div>
                </template>
                <div class="p-6">
                  <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                    {{ featuredPost.category }}
                  </span>
                  <h3 class="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {{ featuredPost.title }}
                  </h3>
                  <p class="text-secondary-600 mb-4">{{ featuredPost.excerpt }}</p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-primary-200 rounded-full" />
                      <span class="text-sm text-secondary-500">{{ featuredPost.author }}</span>
                    </div>
                    <div class="flex items-center gap-4 text-sm text-secondary-500">
                      <span>{{ featuredPost.date }}</span>
                      <span>{{ featuredPost.readTime }}</span>
                    </div>
                  </div>
                </div>
              </UiCard>
            </div>

            <!-- Posts Grid -->
            <div>
              <h2 class="text-2xl font-bold text-secondary-900 mb-6">Latest Articles</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UiCard 
                  v-for="post in posts" 
                  :key="post.id" 
                  class="group cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <template #image>
                    <div class="aspect-video bg-secondary-200 relative overflow-hidden">
                      <span class="absolute inset-0 flex items-center justify-center text-secondary-400">Post Image</span>
                    </div>
                  </template>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2">
                      {{ post.category }}
                    </span>
                    <h3 class="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {{ post.title }}
                    </h3>
                    <p class="text-secondary-600 text-sm mb-3 line-clamp-2">{{ post.excerpt }}</p>
                    <div class="flex items-center justify-between text-xs text-secondary-500">
                      <span>{{ post.date }}</span>
                      <span>{{ post.readTime }}</span>
                    </div>
                  </div>
                </UiCard>
              </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-12">
              <nav class="flex items-center gap-2">
                <button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50 disabled:opacity-50" disabled>
                  Previous
                </button>
                <button class="px-4 py-2 bg-primary-600 text-white rounded-md text-sm">1</button>
                <button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50">2</button>
                <button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50">3</button>
                <button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50">
                  Next
                </button>
              </nav>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Search -->
            <div class="mb-8">
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  class="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <svg class="absolute left-3 top-2.5 w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <!-- Categories -->
            <div class="mb-8">
              <h3 class="text-lg font-bold text-secondary-900 mb-4">Categories</h3>
              <ul class="space-y-2">
                <li v-for="category in categories" :key="category.name">
                  <a href="#" class="flex items-center justify-between py-2 text-secondary-600 hover:text-primary-600 transition-colors">
                    <span>{{ category.name }}</span>
                    <span class="text-secondary-400">{{ category.count }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Newsletter Signup -->
            <div class="bg-primary-50 rounded-xl p-6 mb-8">
              <h3 class="text-lg font-bold text-secondary-900 mb-2">Newsletter</h3>
              <p class="text-secondary-600 text-sm mb-4">Get the latest insights delivered to your inbox</p>
              <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="Enter your email"
                  class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
                <UiButton variant="primary" class="w-full" :loading="isSubmitting">
                  Subscribe
                </UiButton>
              </form>
            </div>

            <!-- Popular Posts -->
            <div class="mb-8">
              <h3 class="text-lg font-bold text-secondary-900 mb-4">Popular Posts</h3>
              <div class="space-y-4">
                <div v-for="(post, index) in popularPosts" :key="index" class="flex gap-3">
                  <div class="w-16 h-16 bg-secondary-200 rounded flex-shrink-0" />
                  <div>
                    <h4 class="text-sm font-medium text-secondary-900 hover:text-primary-600 cursor-pointer">
                      {{ post.title }}
                    </h4>
                    <p class="text-xs text-secondary-500">{{ post.date }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div>
              <h3 class="text-lg font-bold text-secondary-900 mb-4">Tags</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in tags" 
                  :key="tag" 
                  class="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Latest insights, trends, and innovations in packaging automation technology and industry news.' },
  ],
})

const email = ref('')
const isSubmitting = ref(false)

const featuredPost = {
  id: 1,
  title: 'The Future of Packaging Automation in 2026: Trends and Predictions',
  excerpt: 'Explore the latest trends and technologies shaping the packaging automation industry, from AI-driven quality control to sustainable packaging solutions.',
  category: 'Industry Trends',
  author: 'Ahmad Hassan',
  date: 'March 1, 2026',
  readTime: '8 min read',
}

const posts = [
  {
    id: 2,
    title: 'How to Choose the Right Packaging Equipment for Your Business',
    excerpt: 'A comprehensive guide to selecting the best packaging automation equipment for your specific industry requirements.',
    category: 'Buying Guide',
    date: 'February 25, 2026',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Medical Device Packaging Compliance: Complete Guide',
    excerpt: 'Understanding the regulatory requirements and best practices for packaging medical devices.',
    category: 'Compliance',
    date: 'February 18, 2026',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Sustainable Packaging Solutions for Modern Manufacturing',
    excerpt: 'How to implement eco-friendly packaging automation while maintaining efficiency.',
    category: 'Sustainability',
    date: 'February 12, 2026',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'ROI of Packaging Automation: A Case Study',
    excerpt: 'Real-world analysis of return on investment for packaging automation implementation.',
    category: 'Case Study',
    date: 'February 5, 2026',
    readTime: '10 min read',
  },
]

const categories = [
  { name: 'Industry Trends', count: 12 },
  { name: 'Buying Guide', count: 8 },
  { name: 'Compliance', count: 6 },
  { name: 'Sustainability', count: 5 },
  { name: 'Case Study', count: 4 },
  { name: 'Technology', count: 10 },
]

const popularPosts = [
  { title: '5 Key Benefits of Automated Packaging', date: 'Jan 15, 2026' },
  { title: 'Industry 4.0 in Packaging Manufacturing', date: 'Jan 8, 2026' },
  { title: 'Quality Control in High-Speed Lines', date: 'Dec 20, 2025' },
]

const tags = ['Automation', 'Industry 4.0', 'Sustainability', 'Medical Devices', 'Pharmaceuticals', 'AI', 'Quality Control', 'Efficiency']

const subscribeNewsletter = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  email.value = ''
  isSubmitting.value = false
  alert('Thank you for subscribing!')
}
</script>