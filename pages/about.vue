<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;" />
      </div>
      
      <UiContainer size="lg" class="relative z-10">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Leading the future of packaging automation with innovative solutions and unmatched expertise since 1999.
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Company Overview -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Our Mission
            </h2>
            <p class="text-lg text-secondary-600 mb-6 leading-relaxed">
              At Packaging Automation Solutions, we are dedicated to transforming the packaging industry through cutting-edge automation technology. Our mission is to help businesses achieve higher efficiency, better quality, and sustainable growth.
            </p>
            <p class="text-lg text-secondary-600 leading-relaxed">
              With over 25 years of experience and 500+ successful projects across 15 countries, we have established ourselves as a trusted partner for companies seeking to modernize their packaging operations.
            </p>
          </div>
          <div class="bg-secondary-100 rounded-2xl h-96 flex items-center justify-center">
            <span class="text-secondary-400 text-lg">Company Image Placeholder</span>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Core Values -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Our Core Values
          </h2>
          <p class="text-lg text-secondary-600">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UiCard v-for="(value, index) in coreValues" :key="index" class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <component :is="value.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-bold text-secondary-900 mb-2">{{ value.title }}</h3>
            <p class="text-secondary-600 text-sm">{{ value.description }}</p>
          </UiCard>
        </div>
      </UiContainer>
    </section>

    <!-- Timeline -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Our Journey
          </h2>
          <p class="text-lg text-secondary-600">
            Milestones that shaped our company
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform lg:-translate-x-1/2" />
            
            <div v-for="(milestone, index) in milestones" :key="index" class="relative mb-12 last:mb-0">
              <div :class="[
                'flex flex-col lg:flex-row items-start',
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              ]">
                <div class="hidden lg:block lg:w-1/2" />
                <div class="absolute left-4 lg:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white transform lg:-translate-x-1/2 shadow-lg z-10" />
                <div class="pl-16 lg:pl-0 lg:w-1/2" :class="index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'">
                  <span class="text-primary-600 font-bold text-lg">{{ milestone.year }}</span>
                  <h3 class="text-xl font-bold text-secondary-900 mt-1 mb-2">{{ milestone.title }}</h3>
                  <p class="text-secondary-600">{{ milestone.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Team Section -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Leadership Team
          </h2>
          <p class="text-lg text-secondary-600">
            Meet the experts behind our success
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, index) in teamMembers" :key="index" class="text-center">
            <div class="w-32 h-32 bg-secondary-300 rounded-full mx-auto mb-4" />
            <h3 class="text-lg font-bold text-secondary-900">{{ member.name }}</h3>
            <p class="text-primary-600 text-sm">{{ member.position }}</p>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Certifications -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Certifications & Standards
          </h2>
          <p class="text-lg text-secondary-600">
            Committed to quality and compliance
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="(cert, index) in certifications" :key="index" class="w-24 h-24 bg-secondary-100 rounded-lg flex items-center justify-center">
            <span class="text-secondary-500 text-xs font-bold text-center">{{ cert }}</span>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- CTA Section -->
    <SectionsCTASection />
  </div>
</template>

<script setup lang="ts">
import { 
  LightBulbIcon, 
  ShieldCheckIcon, 
  UsersIcon, 
  GlobeAltIcon 
} from '@heroicons/vue/24/outline'

// SEO Meta
useHead({
  title: 'About Us',
  meta: [
    { name: 'description', content: 'Learn about Packaging Automation Solutions - Leading provider of packaging automation with 25+ years of experience.' },
  ],
})

const coreValues = [
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge automation solutions.',
    icon: LightBulbIcon,
  },
  {
    title: 'Quality',
    description: 'Uncompromising commitment to excellence in every project we undertake.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Partnership',
    description: 'Building lasting relationships through trust, transparency, and collaboration.',
    icon: UsersIcon,
  },
  {
    title: 'Global Reach',
    description: 'Serving clients across 15 countries with local expertise and global standards.',
    icon: GlobeAltIcon,
  },
]

const milestones = [
  {
    year: '1999',
    title: 'Company Founded',
    description: 'Started as a small packaging consultancy in Malaysia.',
  },
  {
    year: '2005',
    title: 'First Major Project',
    description: 'Completed first large-scale automation project for a pharmaceutical company.',
  },
  {
    year: '2010',
    title: 'International Expansion',
    description: 'Expanded operations to Singapore and Indonesia.',
  },
  {
    year: '2015',
    title: 'Technology Innovation Center',
    description: 'Opened dedicated R&D facility for automation technology.',
  },
  {
    year: '2020',
    title: '500th Project Milestone',
    description: 'Successfully completed 500th automation project across 15 countries.',
  },
  {
    year: '2026',
    title: 'Industry Leader',
    description: 'Recognized as leading packaging automation provider in Southeast Asia.',
  },
]

const teamMembers = [
  { name: 'Ahmad Hassan', position: 'CEO & Founder' },
  { name: 'Sarah Lim', position: 'Chief Operations Officer' },
  { name: 'Rajesh Kumar', position: 'Technical Director' },
  { name: 'Michelle Tan', position: 'Head of Engineering' },
]

const certifications = ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'CE Marking', 'FDA', 'GMP']
</script>