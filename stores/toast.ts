import { defineStore } from 'pinia'

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[],
  }),
  
  actions: {
    addToast(toast: Omit<Toast, 'id'>) {
      const id = Math.random().toString(36).substring(2, 9)
      const newToast: Toast = {
        ...toast,
        id,
        duration: toast.duration ?? 5000,
      }
      
      this.toasts.push(newToast)
      
      if (newToast.duration && newToast.duration > 0) {
        setTimeout(() => {
          this.removeToast(id)
        }, newToast.duration)
      }
      
      return id
    },
    
    removeToast(id: string) {
      const index = this.toasts.findIndex(t => t.id === id)
      if (index > -1) {
        this.toasts.splice(index, 1)
      }
    },
    
    clearAll() {
      this.toasts = []
    },
    
    success(title: string, message?: string) {
      return this.addToast({ type: 'success', title, message })
    },
    
    error(title: string, message?: string) {
      return this.addToast({ type: 'error', title, message, duration: 8000 })
    },
    
    warning(title: string, message?: string) {
      return this.addToast({ type: 'warning', title, message })
    },
    
    info(title: string, message?: string) {
      return this.addToast({ type: 'info', title, message })
    },
  },
})
