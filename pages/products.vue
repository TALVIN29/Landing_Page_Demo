<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;" />
      </div>
      
      <UiContainer size="lg" class="relative z-10">
        <div class="max-w-4xl text-center mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p class="text-xl text-primary-100">
            Advanced packaging automation equipment for every industry
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Filter Bar -->
    <section class="py-8 bg-white border-b border-secondary-200 sticky top-16 z-30">
      <UiContainer size="lg">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-secondary-700">Category:</span>
            <select v-model="selectedCategory" class="form-select rounded-md border-secondary-300 text-sm">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
          
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-secondary-700">Industry:</span>
            <select v-model="selectedIndustry" class="form-select rounded-md border-secondary-300 text-sm">
              <option value="">All Industries</option>
              <option v-for="industry in industries" :key="industry" :value="industry">{{ industry }}</option>
            </select>
          </div>

          <div class="flex-1 min-w-[200px]">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search products..."
              class="w-full rounded-md border-secondary-300 text-sm"
            />
          </div>

          <UiButton v-if="hasActiveFilters" variant="ghost" size="sm" @click="clearFilters">
            Clear Filters
          </UiButton>
        </div>
      </UiContainer>
    </section>

    <!-- Products Grid -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UiCard 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="group cursor-pointer hover:shadow-lg transition-shadow"
            @click="openProductModal(product)"
          >
            <template #image>
              <div class="aspect-video bg-secondary-200 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-secondary-400">Product Image</span>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {{ product.category }}
                  </span>
                </div>
              </div>
            </template>
            
            <div class="p-5">
              <h3 class="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-secondary-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
              
              <div class="mb-4">
                <h4 class="text-xs font-semibold text-secondary-500 uppercase mb-2">Key Specs</h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div v-for="(value, key) in product.specs" :key="key">
                    <span class="text-secondary-500">{{ key }}:</span>
                    <span class="text-secondary-900 font-medium ml-1">{{ value }}</span>
                  </div>
                </div>
              </div>

              <UiButton variant="outline" size="sm" class="w-full">
                View Details
              </UiButton>
            </div>
          </UiCard>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-20">
          <p class="text-secondary-500 text-lg">No products found matching your criteria.</p>
          <UiButton variant="primary" class="mt-4" @click="clearFilters">
            Clear Filters
          </UiButton>
        </div>
      </UiContainer>
    </section>

    <!-- Product Modal -->
    <div v-if="selectedProduct" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50" @click="selectedProduct = null" />
      <div class="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button 
          class="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary-100 z-10"
          @click="selectedProduct = null"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-secondary-100 rounded-xl h-80 flex items-center justify-center">
              <span class="text-secondary-400">Product Image Gallery</span>
            </div>
            
            <div>
              <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                {{ selectedProduct.category }}
              </span>
              <h2 class="text-3xl font-bold text-secondary-900 mb-4">{{ selectedProduct.name }}</h2>
              <p class="text-secondary-600 mb-6">{{ selectedProduct.description }}</p>
              
              <div class="mb-6">
                <h3 class="font-semibold text-secondary-900 mb-3">Features</h3>
                <ul class="space-y-2">
                  <li v-for="(feature, index) in selectedProduct.features" :key="index" class="flex items-start">
                    <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-secondary-600">{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div class="mb-6">
                <h3 class="font-semibold text-secondary-900 mb-3">Applications</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(app, index) in selectedProduct.applications" :key="index" class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                    {{ app }}
                  </span>
                </div>
              </div>

              <div class="flex gap-4">
                <NuxtLink to="/contact">
                  <UiButton variant="primary">
                    Request Quote
                  </UiButton>
                </NuxtLink>
                <UiButton variant="outline">
                  Download Brochure
                </UiButton>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-8 border-t border-secondary-200">
            <h3 class="font-semibold text-secondary-900 mb-4">Technical Specifications</h3>
            <table class="w-full">
              <tbody>
                <tr v-for="(value, key) in selectedProduct.specs" :key="key" class="border-b border-secondary-100 last:border-0">
                  <td class="py-3 text-secondary-500 w-1/3">{{ key }}</td>
                  <td class="py-3 text-secondary-900 font-medium">{{ value }}</td>
                </tr>
              </tbody>
            </table>
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
  title: 'Products',
  meta: [
    { name: 'description', content: 'Browse our range of packaging automation equipment including filling machines, labeling systems, and packaging lines.' },
  ],
})

const selectedCategory = ref('')
const selectedIndustry = ref('')
const searchQuery = ref('')
const selectedProduct = ref(null)

const categories = ['Filling Machines', 'Labeling Systems', 'Packaging Lines', 'Inspection Systems', 'Material Handling']
const industries = ['Medical Devices', 'Pharmaceuticals', 'Glove Manufacturing', 'FMCG']

const products = [
  {
    id: 1,
    name: 'AutoFill Pro 2000',
    category: 'Filling Machines',
    description: 'High-precision automatic filling machine for liquids, creams, and gels. Ideal for pharmaceutical and cosmetic applications.',
    specs: { 'Capacity': '2000 units/hr', 'Accuracy': '±0.5%', 'Power': '3.5 kW', 'Weight': '850 kg' },
    features: [
      'Servo-driven precision filling',
      'Automatic container handling',
      'CIP (Clean-in-Place) system',
      'Touch screen HMI',
      'Data logging and traceability',
    ],
    applications: ['Pharmaceuticals', 'Cosmetics', 'Food & Beverage'],
  },
  {
    id: 2,
    name: 'LabelMaster 360',
    category: 'Labeling Systems',
    description: 'Versatile labeling system for wrap-around, front-back, and top-bottom labeling applications.',
    specs: { 'Speed': '360 units/min', 'Accuracy': '±0.5mm', 'Label Size': '10-300mm', 'Power': '2.2 kW' },
    features: [
      'Automatic label registration',
      'Vision inspection system',
      'Quick changeover capability',
      'Various label application modes',
      'Reject system integration',
    ],
    applications: ['Bottles', 'Jars', 'Boxes', 'Vials'],
  },
  {
    id: 3,
    name: 'CompletePack Line 500',
    category: 'Packaging Lines',
    description: 'End-to-end packaging line solution integrating filling, labeling, capping, and cartoning operations.',
    specs: { 'Speed': '500 units/min', 'Line Length': '15m', 'Power': '25 kW', 'Operators': '2-3' },
    features: [
      'Modular design',
      'Central control system',
      'Automatic changeover',
      'OEE monitoring',
      'Remote diagnostics',
    ],
    applications: ['Pharmaceuticals', 'Medical Devices', 'FMCG'],
  },
  {
    id: 4,
    name: 'VisionCheck AI',
    category: 'Inspection Systems',
    description: 'AI-powered visual inspection system for quality control and defect detection.',
    specs: { 'Speed': '1000 units/min', 'Accuracy': '99.9%', 'Cameras': '4-8', 'Power': '1.5 kW' },
    features: [
      'Machine learning algorithms',
      'Real-time defect detection',
      'Statistical reporting',
      'Integration with MES/ERP',
      'Automatic reject handling',
    ],
    applications: ['Quality Control', 'Defect Detection', 'Label Verification'],
  },
  {
    id: 5,
    name: 'RoboConvey X1',
    category: 'Material Handling',
    description: 'Automated conveyor system with robotic integration for material handling and palletizing.',
    specs: { 'Load Capacity': '50 kg', 'Speed': '2 m/s', 'Robots': '1-4', 'Power': '15 kW' },
    features: [
      'Modular conveyor design',
      'Collaborative robots',
      'Smart routing',
      'Automatic palletizing',
      'Safety systems integrated',
    ],
    applications: ['Palletizing', 'Material Transport', 'Case Packing'],
  },
  {
    id: 6,
    name: 'SteriSeal Medical',
    category: 'Packaging Lines',
    description: 'Medical-grade packaging line for sterile medical device packaging with validation documentation.',
    specs: { 'Speed': '200 units/min', 'Sterility': 'ISO 14644', 'Power': '18 kW', 'Class': 'ISO 7' },
    features: [
      'Cleanroom compatible',
      'Full validation documentation',
      '21 CFR Part 11 compliance',
      'Batch record integration',
      'Environmental monitoring',
    ],
    applications: ['Medical Devices', 'Surgical Instruments', 'Diagnostic Products'],
  },
]

const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value
    const matchesIndustry = !selectedIndustry.value || product.applications.some(app => app.toLowerCase().includes(selectedIndustry.value.toLowerCase()))
    const matchesSearch = !searchQuery.value || 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchesCategory && matchesIndustry && matchesSearch
  })
})

const hasActiveFilters = computed(() => {
  return selectedCategory.value || selectedIndustry.value || searchQuery.value
})

const clearFilters = () => {
  selectedCategory.value = ''
  selectedIndustry.value = ''
  searchQuery.value = ''
}

const openProductModal = (product) => {
  selectedProduct.value = product
}
</script>