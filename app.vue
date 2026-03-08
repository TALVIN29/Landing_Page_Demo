<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global app configuration
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Packaging Automation Solutions` : 'Packaging Automation Solutions'
  },
})
</script>