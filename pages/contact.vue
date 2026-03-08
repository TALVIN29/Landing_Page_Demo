<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;" />
      </div>
      
      <UiContainer size="lg" class="relative z-10">
        <div class="max-w-4xl text-center mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p class="text-xl text-primary-100">Let's discuss your automation needs</p>
        </div>
      </UiContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-secondary-900 mb-6">Send us a Message</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-secondary-700 mb-2">Name *</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-secondary-700 mb-2">Email *</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:prime-500 focus:border-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-secondary-700 mb-2">Phone</label>
                  <input 
                    v-model="form.phone"
                    type="tel" 
                    class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+60 12-345-6789"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-secondary-700 mb-2">Company</label>
                  <input 
                    v-model="form.company"
                    type="text" 
                    class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-700 mb-2">Industry</label>
                <select v-model="form.industry" class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">Select an industry</option>
                  <option value="medical">Medical Devices</option>
                  <option value="pharmaceutical">Pharmaceuticals</option>
                  <option value="glove">Glove Manufacturing</option>
                  <option value="fmcg">FMCG</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-700 mb-2">Message *</label>
                <textarea 
                  v-model="form.message"
                  rows="5" 
                  required
                  class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help you?"
                />
              </div>

              <!-- Feedback Banner -->
              <div v-if="submitStatus === 'success'" class="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                <svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span>Message sent! We'll get back to you within 24 business hours.</span>
              </div>
              <div v-if="submitStatus === 'error'" class="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                <svg class="w-5 h-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>{{ errorMessage }}</span>
              </div>

              <UiButton type="submit" variant="primary" size="lg" class="w-full" :loading="isSubmitting" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending…' : 'Send Message' }}
              </UiButton>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-secondary-900 mb-4">Office Address</h3>
              <p class="text-secondary-600">
                123 Industrial Park<br />
                Shah Alam, 40000 Selangor<br />
                Malaysia
              </p>
            </div>

            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-secondary-900 mb-4">Contact Details</h3>
              <div class="space-y-3 text-secondary-600">
                <p><strong>Phone:</strong> +60 3-1234 5678</p>
                <p><strong>Email:</strong> info@packaging-automation.com</p>
                <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-secondary-900 mb-4">Quick Response</h3>
              <p class="text-secondary-600">We typically respond within 24 business hours.</p>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-secondary-50">
      <UiContainer size="lg">
        <div class="bg-secondary-200 rounded-xl h-96 flex items-center justify-center">
          <span class="text-secondary-400">Google Maps Embed</span>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: 'Contact Us',
  meta: [
    { name: 'description', content: 'Get in touch with Packaging Automation Solutions. Contact us for a free consultation on your automation needs.' },
  ],
})

const supabase = useSupabaseClient()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  industry: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'
  errorMessage.value = ''

  try {
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.company || null,
      industry: form.industry || null,
      message: form.message,
    })

    if (error) throw error

    submitStatus.value = 'success'
    // Reset form fields
    form.name = ''
    form.email = ''
    form.phone = ''
    form.company = ''
    form.industry = ''
    form.message = ''
  } catch (err: any) {
    submitStatus.value = 'error'
    errorMessage.value = err?.message ?? 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>