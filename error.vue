<template>
  <div class="min-h-screen bg-gradient-to-br from-secondary-900 to-primary-900 flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center">
      <!-- Error Code -->
      <div class="mb-8">
        <h1 class="text-[150px] sm:text-[200px] font-bold text-white/20 leading-none">
          {{ error.statusCode }}
        </h1>
      </div>

      <!-- Error Message -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          {{ errorTitle }}
        </h2>
        <p class="text-primary-100 text-lg mb-8 max-w-lg mx-auto">
          {{ errorMessage }}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UiButton variant="primary" @click="handleError">
            Go Back Home
          </UiButton>
          <UiButton variant="outline" @click="goBack">
            Go Back
          </UiButton>
        </div>
      </div>

      <!-- Help Links -->
      <div class="mt-12 text-primary-100">
        <p class="mb-4">Need help? Contact us:</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center text-sm">
          <a href="mailto:support@packagingautomation.com" class="hover:text-white transition-colors">
            support@packagingautomation.com
          </a>
          <span class="hidden sm:inline">|</span>
          <a href="tel:+60312345678" class="hover:text-white transition-colors">
            +60 3 1234 5678
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  error: {
    statusCode: number
    statusMessage: string
    message: string
  }
}

const props = defineProps<Prop>()

const errorTitle = computed(() => {
  if (props.error.statusCode === 404) {
    return 'Page Not Found'
  } else if (props.error.statusCode === 500) {
    return 'Server Error'
  } else if (props.error.statusCode === 403) {
    return 'Access Denied'
  } else if (props.error.statusCode === 503) {
    return 'Service Unavailable'
  }
  return 'Something Went Wrong'
})

const errorMessage = computed(() => {
  if (props.error.statusCode === 404) {
    return "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
  } else if (props.error.statusCode === 500) {
    return "We're experiencing some technical difficulties. Our team has been notified and is working to fix this."
  } else if (props.error.statusCode === 403) {
    return "You don't have permission to access this resource. Please contact support if you believe this is an error."
  } else if (props.error.statusCode === 503) {
    return "We're temporarily unavailable for maintenance. Please try again in a few minutes."
  }
  return props.error.message || "An unexpected error occurred. Please try again later."
})

const handleError = () => {
  clearError({ redirect: '/' })
}

const goBack = () => {
  const router = useRouter()
  router.back()
}

useHead({
  title: computed(() => `${props.error.statusCode} - ${errorTitle.value}`),
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>
