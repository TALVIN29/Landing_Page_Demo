export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const tawkToPropertyId = config.public.tawkToPropertyId as string | undefined
  
  if (!tawkToPropertyId) {
    console.warn('Tawk.to property ID not configured. Set NUXT_PUBLIC_TAWK_TO_PROPERTY_ID in .env')
    return
  }

  if (import.meta.server) {
    return
  }

  const initTawkTo = () => {
    const script = document.createElement('script')
    script.src = `https://embed.tawk.to/${tawkToPropertyId}/default`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    script.async = true
    
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).Tawk_API) {
        const tawkAPI = (window as any).Tawk_API
        
        tawkAPI.setAttributes({
          site: 'Packaging Automation Solutions',
        })
        
        tawkAPI.on('chat-started', () => {
          console.log('Tawk.to chat started')
        })
        
        tawkAPI.on('chat-ended', () => {
          console.log('Tawk.to chat ended')
        })
      }
    }
    
    document.head.appendChild(script)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTawkTo)
  } else {
    initTawkTo()
  }
})
