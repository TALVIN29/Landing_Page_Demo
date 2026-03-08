<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Global app configuration
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Packaging Automation Solutions` : 'Packaging Automation Solutions'
  },
})

const router = useRouter()

const preventBack = () => {
  window.history.pushState(null, '', window.location.href)
}

onMounted(() => {
  // Push an initial state to trap the first back button press
  window.history.pushState(null, '', window.location.href)
  window.addEventListener('popstate', preventBack)
})

onUnmounted(() => {
  window.removeEventListener('popstate', preventBack)
})
</script>