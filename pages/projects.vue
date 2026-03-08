<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-900 to-primary-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;" />
      </div>
      
      <UiContainer size="lg" class="relative z-10">
        <div class="max-w-4xl text-center mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p class="text-xl text-primary-100">
            Real results from real clients across industries
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Filter Bar -->
    <section class="py-8 bg-white border-b border-secondary-200 sticky top-16 z-30">
      <UiContainer size="lg">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-secondary-700">Industry:</span>
            <select v-model="selectedIndustry" class="form-select rounded-md border-secondary-300 text-sm">
              <option value="">All Industries</option>
              <option v-for="industry in industries" :key="industry" :value="industry">{{ industry }}</option>
            </select>
          </div>
          
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-secondary-700">Location:</span>
            <select v-model="selectedLocation" class="form-select rounded-md border-secondary-300 text-sm">
              <option value="">All Locations</option>
              <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
            </select>
          </div>

          <UiButton v-if="hasActiveFilters" variant="ghost" size="sm" @click="clearFilters">
            Clear Filters
          </UiButton>
        </div>
      </UiContainer>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UiCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="group cursor-pointer hover:shadow-lg transition-shadow"
            @click="openProjectModal(project)"
          >
            <template #image>
              <div class="aspect-video bg-secondary-200 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-secondary-400">Project Image</span>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {{ project.industry }}
                  </span>
                </div>
              </div>
            </template>
            
            <div class="p-5">
              <h3 class="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-secondary-500 mb-3">{{ project.client }}</p>
              <p class="text-secondary-600 text-sm mb-4 line-clamp-3">{{ project.description }}</p>
              
              <div v-if="project.results" class="mb-4">
                <h4 class="text-xs font-semibold text-secondary-500 uppercase mb-2">Key Results</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(result, index) in project.results.slice(0, 2)" :key="index" class="px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs font-medium">
                    {{ result }}
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <span class="text-sm text-secondary-500">{{ project.location }}</span>
                <span class="text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Read Case Study
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </UiCard>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <p class="text-secondary-500 text-lg">No projects found matching your criteria.</p>
          <UiButton variant="primary" class="mt-4" @click="clearFilters">
            Clear Filters
          </UiButton>
        </div>
      </UiContainer>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50" @click="selectedProject = null" />
      <div class="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button 
          class="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary-100 z-10"
          @click="selectedProject = null"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="p-8">
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
            {{ selectedProject.industry }}
          </span>
          <h2 class="text-3xl font-bold text-secondary-900 mb-2">{{ selectedProject.title }}</h2>
          <p class="text-secondary-500 mb-6">{{ selectedProject.client }} • {{ selectedProject.location }}</p>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div class="bg-secondary-100 rounded-xl h-64 flex items-center justify-center">
              <span class="text-secondary-400">Before Image</span>
            </div>
            <div class="bg-secondary-100 rounded-xl h-64 flex items-center justify-center">
              <span class="text-secondary-400">After Image</span>
            </div>
          </div>

          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-semibold text-secondary-900 mb-3">The Challenge</h3>
              <p class="text-secondary-600">{{ selectedProject.challenge }}</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-secondary-900 mb-3">Our Solution</h3>
              <p class="text-secondary-600">{{ selectedProject.solution }}</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-secondary-900 mb-3">Results & Impact</h3>
              <ul class="space-y-2">
                <li v-for="(result, index) in selectedProject.results" :key="index" class="flex items-start">
                  <svg class="w-5 h-5 text-accent-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-secondary-700 font-medium">{{ result }}</span>
                </li>
              </ul>
            </div>

            <div v-if="selectedProject.testimonial" class="bg-primary-50 rounded-xl p-6">
              <blockquote class="text-secondary-700 italic mb-4">"{{ selectedProject.testimonial.quote }}"</blockquote>
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary-700 font-bold">{{ selectedProject.testimonial.author.charAt(0) }}</span>
                </div>
                <div>
                  <p class="font-semibold text-secondary-900">{{ selectedProject.testimonial.author }}</p>
                  <p class="text-sm text-secondary-500">{{ selectedProject.testimonial.position }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-8 border-t border-secondary-200">
            <NuxtLink to="/contact">
              <UiButton variant="primary">
                Start Your Project
              </UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <SectionsCTASection />
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Explore our portfolio of successful packaging automation projects across medical, pharmaceutical, and manufacturing industries.' },
  ],
})

const selectedIndustry = ref('')
const selectedLocation = ref('')
const selectedProject = ref(null)

const industries = ['Medical Devices', 'Pharmaceuticals', 'Glove Manufacturing', 'FMCG']
const locations = ['Malaysia', 'Singapore', 'Thailand', 'Indonesia', 'Philippines']

const projects = [
  {
    id: 1,
    title: 'Sterile Packaging Line Automation',
    client: 'MedTech Solutions Sdn Bhd',
    industry: 'Medical Devices',
    location: 'Kuala Lumpur, Malaysia',
    description: 'Complete automation of sterile packaging line for medical device manufacturer, implementing filling, sealing, and labeling systems with full validation documentation.',
    challenge: 'Manual packaging process was slow, error-prone, and could not meet increasing demand while maintaining sterility requirements.',
    solution: 'Designed and installed a fully automated packaging line with integrated vision inspection, automated changeover, and real-time monitoring systems.',
    results: [
      '300% increase in throughput',
      '99.8% reduction in contamination risk',
      '50% reduction in labor costs',
      'Full FDA compliance achieved',
    ],
    testimonial: {
      quote: 'This automation solution has transformed our operations. We can now meet growing demand while maintaining the highest quality standards.',
      author: 'Dr. Sarah Chen',
      position: 'Operations Director, MedTech Solutions',
    },
  },
  {
    id: 2,
    title: 'Pharmaceutical Bottling System',
    client: 'PharmaCare Industries',
    industry: 'Pharmaceuticals',
    location: 'Penang, Malaysia',
    description: 'High-speed bottling and labeling system with 100% inspection and rejection capabilities for pharmaceutical liquid products.',
    challenge: 'Previous bottling line had frequent jams, inconsistent fill volumes, and manual inspection could not catch all defects.',
    solution: 'Implemented servo-driven filling system with automatic bottle handling, integrated vision inspection, and automated rejection of non-conforming products.',
    results: [
      '360 bottles per minute capacity',
      '±0.5% fill accuracy achieved',
      'Zero product recalls since installation',
      'ROI achieved in 18 months',
    ],
  },
  {
    id: 3,
    title: 'Glove Packaging Automation',
    client: 'Global Glove Manufacturing',
    industry: 'Glove Manufacturing',
    location: 'Selangor, Malaysia',
    description: 'End-to-end packaging automation for nitrile glove production line with quality control integration.',
    challenge: 'Manual packaging was creating bottlenecks in production and could not keep pace with the high-speed production lines.',
    solution: 'Designed custom automated packaging solution including counting, boxing, case packing, and palletizing with integrated quality checks.',
    results: [
      '500% increase in packaging speed',
      '99.5% packaging accuracy',
      'Reduced packaging labor by 70%',
      'Real-time production monitoring',
    ],
  },
  {
    id: 4,
    title: 'FMCG Multi-Line Integration',
    client: 'Consumer Goods Co.',
    industry: 'FMCG',
    location: 'Singapore',
    description: 'Integration of multiple packaging lines for fast-moving consumer goods with centralized control and monitoring.',
    challenge: 'Five separate packaging lines with different control systems, making coordination difficult and reducing overall efficiency.',
    solution: 'Unified control system integrating all five lines with smart routing, automatic balancing, and comprehensive OEE monitoring.',
    results: [
      '40% increase in overall efficiency',
      '25% reduction in changeover time',
      'Centralized monitoring dashboard',
      'Predictive maintenance alerts',
    ],
  },
  {
    id: 5,
    title: 'Cosmetic Product Packaging',
    client: 'Beauty Essentials Ltd',
    industry: 'FMCG',
    location: 'Bangkok, Thailand',
    description: 'Automated filling and packaging line for premium cosmetic products with precision dosing and elegant presentation.',
    challenge: 'Cosmetic products required precise dosing and gentle handling while maintaining high-end packaging aesthetics.',
    solution: 'Custom-designed gentle handling system with precision dosing, premium labeling, and quality inspection for cosmetic products.',
    results: [
      '±0.1g dosing accuracy',
      'Premium packaging finish',
      '200 units per minute',
      'Zero damage rate',
    ],
  },
  {
    id: 6,
    title: 'Diagnostic Kit Assembly',
    client: 'DiagnoTech Medical',
    industry: 'Medical Devices',
    location: 'Jakarta, Indonesia',
    description: 'Automated assembly and packaging line for diagnostic test kits with component verification and serialization.',
    challenge: 'Complex multi-component assembly required precise component verification and individual kit serialization for traceability.',
    solution: 'Robotic assembly system with component verification, automated kit assembly, labeling, and serialization with full traceability.',
    results: [
      '100% component verification',
      'Individual kit serialization',
      'Full traceability system',
      'FDA 21 CFR Part 11 compliant',
    ],
  },
]

const filteredProjects = computed(() => {
  return projects.filter(project => {
    const matchesIndustry = !selectedIndustry.value || project.industry === selectedIndustry.value
    const matchesLocation = !selectedLocation.value || project.location.includes(selectedLocation.value)
    
    return matchesIndustry && matchesLocation
  })
})

const hasActiveFilters = computed(() => {
  return selectedIndustry.value || selectedLocation.value
})

const clearFilters = () => {
  selectedIndustry.value = ''
  selectedLocation.value = ''
}

const openProjectModal = (project) => {
  selectedProject.value = project
}
</script>