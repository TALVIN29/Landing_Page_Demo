<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="bg-white rounded-lg shadow-lg p-4 pointer-events-auto border-l-4"
          :class="borderColor(toast.type)"
        >
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0">
              <component :is="getIcon(toast.type)" class="w-5 h-5" :class="iconColor(toast.type)" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-secondary-900">
                {{ toast.title }}
              </p>
              <p v-if="toast.message" class="text-sm text-secondary-600 mt-1">
                {{ toast.message }}
              </p>
            </div>
            <button
              @click="removeToast(toast.id)"
              class="flex-shrink-0 text-secondary-400 hover:text-secondary-600 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import { useToastStore } from '~/stores/toast'

const toastStore = useToastStore()

const toasts = computed(() => toastStore.toasts)

const borderColor = (type: string) => {
  const colors = {
    success: 'border-green-500',
    error: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500',
  }
  return colors[type as keyof typeof colors] || colors.info
}

const iconColor = (type: string) => {
  const colors = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
  }
  return colors[type as keyof typeof colors] || colors.info
}

const getIcon = (type: string) => {
  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
  }
  return icons[type as keyof typeof icons] || icons.info
}

const removeToast = (id: string) => {
  toastStore.removeToast(id)
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
