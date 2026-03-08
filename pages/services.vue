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
            Our Services
          </h1>
          <p class="text-xl text-primary-100">
            End-to-end packaging automation solutions tailored to your needs
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Services Detail -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="space-y-24">
          <div v-for="(service, index) in services" :key="index" :class="[
            'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          ]">
            <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
              <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <component :is="service.icon" class="w-8 h-8 text-primary-600" />
              </div>
              <h2 class="text-3xl font-bold text-secondary-900 mb-4">{{ service.title }}</h2>
              <p class="text-lg text-secondary-600 mb-6">{{ service.description }}</p>
              
              <div class="mb-6">
                <h3 class="font-semibold text-secondary-900 mb-3">Key Features:</h3>
                <ul class="space-y-2">
                  <li v-for="(feature, fIndex) in service.features" :key="fIndex" class="flex items-start">
                    <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-secondary-600">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <NuxtLink to="/contact">
                <UiButton variant="primary">
                  Get a Quote
                </UiButton>
              </NuxtLink>
            </div>
            <div :class="[index % 2 === 1 ? 'lg:order-1' : '', 'bg-secondary-100 rounded-2xl h-80 flex items-center justify-center']">
              <span class="text-secondary-400">Service Image Placeholder</span>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Process Flow -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Our Process
          </h2>
          <p class="text-lg text-secondary-600">
            From consultation to support, we guide you every step of the way
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="relative">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">{{ index + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-secondary-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-secondary-600">{{ step.description }}</p>
            </div>
            <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-8 left-full w-full">
              <svg class="w-full h-2 text-primary-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" />
              </svg>
            </div>
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
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  TruckIcon,
  WrenchIcon
} from '@heroicons/vue/24/outline'

// SEO Meta
useHead({
  title: 'Our Services',
  meta: [
    { name: 'description', content: 'Comprehensive packaging automation services including consultation, manufacturing, installation, training, and maintenance.' },
  ],
})

const services = [
  {
    title: 'Consultation & System Design',
    description: 'Our expert team works closely with you to understand your unique requirements and design custom automation solutions that optimize your packaging processes.',
    icon: ChatBubbleLeftRightIcon,
    features: [
      'Process analysis and optimization',
      'Custom system architecture design',
      'Feasibility studies',
      'ROI calculations',
      'Integration planning',
    ],
  },
  {
    title: 'Custom Equipment Manufacturing',
    description: 'We manufacture high-quality, precision-engineered automation equipment tailored to your specific industry requirements and production goals.',
    icon: Cog6ToothIcon,
    features: [
      'Precision engineering',
      'Quality materials and components',
      'Industry-specific customization',
      'Rigorous quality testing',
      'Compliance with international standards',
    ],
  },
  {
    title: 'Installation & Commissioning',
    description: 'Our professional installation team ensures your equipment is properly set up, tested, and integrated into your existing production line.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Professional installation',
      'System integration',
      'Performance testing',
      'Safety verification',
      'Production line optimization',
    ],
  },
  {
    title: 'Training & Knowledge Transfer',
    description: 'Comprehensive training programs to ensure your team can operate and maintain the equipment effectively and safely.',
    icon: AcademicCapIcon,
    features: [
      'Hands-on operator training',
      'Maintenance procedures',
      'Troubleshooting guides',
      'Safety protocols',
      'Documentation and manuals',
    ],
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and support services to keep your equipment running at peak performance and minimize downtime.',
    icon: WrenchIcon,
    features: [
      'Preventive maintenance',
      '24/7 technical support',
      'Remote diagnostics',
      'On-site service',
      'Performance monitoring',
    ],
  },
  {
    title: 'Spare Parts & Logistics',
    description: 'Reliable supply of genuine spare parts and efficient logistics to ensure minimal disruption to your operations.',
    icon: TruckIcon,
    features: [
      'Genuine spare parts',
      'Inventory management',
      'Fast delivery',
      'Global shipping',
      'Parts warranty',
    ],
  },
]

const processSteps = [
  { title: 'Consultation', description: 'Understanding your needs' },
  { title: 'Design', description: 'Creating your solution' },
  { title: 'Manufacturing', description: 'Building your equipment' },
  { title: 'Installation', description: 'Setting up on-site' },
  { title: 'Support', description: 'Ongoing assistance' },
]
</script>