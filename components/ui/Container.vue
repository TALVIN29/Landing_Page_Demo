<template>
  <div
    :class="[
      'mx-auto w-full',
      sizeClasses[size],
      paddingClasses[padding],
      { 'px-4 sm:px-6 lg:px-8': !noDefaultPadding }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  noDefaultPadding?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: 'none',
  noDefaultPadding: false,
})

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-none',
}

const paddingClasses = {
  none: '',
  sm: 'py-4',
  md: 'py-8',
  lg: 'py-12',
  xl: 'py-16',
}
</script>