<template>
  <div
    :class="[
      'bg-white rounded-lg transition-all duration-300',
      shadowClasses[shadow],
      borderClasses[border],
      { 'overflow-hidden': !noOverflow, 'hover:shadow-lg hover:-translate-y-1': hoverable }
    ]"
  >
    <!-- Image slot -->
    <div v-if="$slots.image" class="relative">
      <slot name="image" />
    </div>
    
    <!-- Content -->
    <div :class="contentClasses">
      <slot />
    </div>
    
    <!-- Footer slot -->
    <div v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  border?: 'none' | 'sm' | 'md'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  footerPadding?: 'none' | 'sm' | 'md' | 'lg'
  noOverflow?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  shadow: 'sm',
  border: 'sm',
  padding: 'md',
  footerPadding: 'md',
  noOverflow: false,
  hoverable: false,
})

const shadowClasses = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}

const borderClasses = {
  none: '',
  sm: 'border border-secondary-200',
  md: 'border-2 border-secondary-200',
}

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
}

const contentClasses = computed(() => {
  return paddingClasses[props.padding]
})

const footerClasses = computed(() => {
  return [
    'border-t border-secondary-200 bg-secondary-50/50',
    paddingClasses[props.footerPadding],
  ]
})
</script>