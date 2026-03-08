<template>
  <div class="min-h-screen bg-white">
    <!-- Main content -->
    <main id="main-content" class="flex-grow">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Layout metadata
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>