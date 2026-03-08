<template>
  <div>
    <!-- Hero Section -->
    <SectionsHeroSection />

    <!-- Industries Section -->
    <SectionsIndustriesSection />

    <!-- Services Section -->
    <SectionsServicesSection />

    <!-- Stats Section -->
    <SectionsStatsSection />

    <!-- Featured Projects Section -->
    <SectionsFeaturedProjects />

    <!-- Testimonials Section -->
    <SectionsTestimonialsSection />

    <!-- Blog Preview Section -->
    <SectionsBlogPreview />

    <!-- CTA Section -->
    <SectionsCTASection />
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: 'Packaging Automation Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Leading provider of packaging automation solutions with 25+ years of experience. Serving medical devices, pharmaceuticals, glove manufacturing, and FMCG industries across 15 countries.',
    },
    { property: 'og:title', content: 'Packaging Automation Solutions' },
    {
      property: 'og:description',
      content:
        'Transform your packaging operations with cutting-edge automation technology. 500+ projects completed across 15 countries.',
    },
    { property: 'og:type', content: 'website' },
  ],
})
</script>