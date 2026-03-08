import anime from 'animejs'

export default defineNuxtPlugin(() => {
  // Animation presets
  const presets = {
    fadeIn: (options: any = {}) => ({
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutCubic',
      ...options,
    }),
    
    slideUp: (options: any = {}) => ({
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      ...options,
    }),
    
    slideDown: (options: any = {}) => ({
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      ...options,
    }),
    
    slideLeft: (options: any = {}) => ({
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      ...options,
    }),
    
    slideRight: (options: any = {}) => ({
      translateX: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      ...options,
    }),
    
    scale: (options: any = {}) => ({
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutBack',
      ...options,
    }),
  }

  // Scroll reveal helper
  const scrollReveal = (
    selector: string,
    animation: keyof typeof presets = 'slideUp',
    options: any = {}
  ) => {
    const elements = document.querySelectorAll(selector)
    
    if (elements.length === 0) return

    const preset = presets[animation](options)
    
    elements.forEach((el) => {
      // Set initial state
      anime({
        targets: el,
        opacity: 0,
        duration: 0,
      })

      // Use Intersection Observer for scroll reveal
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el,
              ...preset,
            })
            observer.unobserve(el)
          }
        })
      }, { threshold: 0.1 })

      observer.observe(el)
    })
  }

  // Counter animation
  const animateCounter = (
    element: HTMLElement,
    target: number,
    options: { duration?: number; suffix?: string } = {}
  ) => {
    const { duration = 2000, suffix = '' } = options
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = { value: 0 }
          anime({
            targets: counter,
            value: target,
            duration,
            easing: 'easeOutExpo',
            round: 1,
            update: () => {
              element.innerHTML = counter.value.toLocaleString() + suffix
            },
          })
          observer.unobserve(element)
        }
      })
    }, { threshold: 0.5 })

    observer.observe(element)
  }

  // Stagger animation helper
  const stagger = (selector: string, options: any = {}) => {
    const { delay = 100, duration = 800, easing = 'easeOutExpo' } = options
    
    anime({
      targets: selector,
      translateY: [50, 0],
      opacity: [0, 1],
      duration,
      delay: anime.stagger(delay),
      easing,
    })
  }

  return {
    provide: {
      anime: {
        ...anime,
        presets,
        scrollReveal,
        animateCounter,
        stagger,
      },
    },
  }
})