import anime from 'animejs'

export function useAnimations() {
  /**
   * Scroll reveal animation
   * @param selector - CSS selector for elements to animate
   * @param options - Animation options
   */
  const scrollReveal = (
    selector: string,
    options: {
      translateY?: number
      opacity?: number
      duration?: number
      delay?: number
      stagger?: number
      easing?: string
    } = {}
  ) => {
    const {
      translateY = 50,
      opacity = 0,
      duration = 800,
      delay = 0,
      stagger: staggerDelay = 100,
      easing = 'easeOutExpo',
    } = options

    const elements = document.querySelectorAll(selector)
    
    if (elements.length === 0) return

    elements.forEach((el, index) => {
      // Set initial state
      anime({
        targets: el,
        translateY,
        opacity,
        duration: 0,
      })

      // Use Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el,
              translateY: 0,
              opacity: 1,
              duration,
              delay: delay + index * staggerDelay,
              easing,
            })
            observer.unobserve(el)
          }
        })
      }, { threshold: 0.1 })

      observer.observe(el)
    })
  }

  /**
   * Stagger animation for multiple elements
   * @param selector - CSS selector for elements to animate
   * @param options - Animation options
   */
  const staggerAnimation = (
    selector: string,
    options: {
      duration?: number
      stagger?: number
      easing?: string
      from?: 'first' | 'last' | 'center'
    } = {}
  ) => {
    const {
      duration = 800,
      stagger: staggerDelay = 100,
      easing = 'easeOutExpo',
    } = options

    anime({
      targets: selector,
      translateY: [50, 0],
      opacity: [0, 1],
      duration,
      delay: anime.stagger(staggerDelay),
      easing,
    })
  }

  /**
   * Counter animation
   * @param selector - CSS selector for counter elements
   * @param options - Animation options
   */
  const counterAnimation = (
    selector: string,
    options: {
      duration?: number
      easing?: string
      suffix?: string
    } = {}
  ) => {
    const { duration = 2000, easing = 'easeOutExpo', suffix = '' } = options

    const elements = document.querySelectorAll(selector)
    
    if (elements.length === 0) return

    elements.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10)
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = { value: 0 }
            anime({
              targets: counter,
              value: target,
              duration,
              easing,
              round: 1,
              update: () => {
                el.innerHTML = counter.value.toLocaleString() + suffix
              },
            })
            observer.unobserve(el)
          }
        })
      }, { threshold: 0.5 })

      observer.observe(el)
    })
  }

  /**
   * Parallax scroll effect
   * @param selector - CSS selector for elements
   * @param speed - Parallax speed factor
   */
  const parallaxScroll = (selector: string, speed: number = 0.5) => {
    const element = document.querySelector(selector)
    
    if (!element) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const elementTop = element.getBoundingClientRect().top + scrollY
      const offset = (scrollY - elementTop) * speed

      anime({
        targets: element,
        translateY: offset,
        duration: 0,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  /**
   * Fade in animation
   * @param selector - CSS selector for elements
   * @param options - Animation options
   */
  const fadeIn = (
    selector: string,
    options: {
      duration?: number
      delay?: number
      easing?: string
    } = {}
  ) => {
    const { duration = 600, delay = 0, easing = 'easeOutCubic' } = options

    anime({
      targets: selector,
      opacity: [0, 1],
      duration,
      delay,
      easing,
    })
  }

  /**
   * Slide in from direction
   * @param selector - CSS selector for elements
   * @param direction - Direction to slide from
   * @param options - Animation options
   */
  const slideIn = (
    selector: string,
    direction: 'left' | 'right' | 'up' | 'down' = 'up',
    options: {
      duration?: number
      delay?: number
      easing?: string
    } = {}
  ) => {
    const { duration = 600, delay = 0, easing = 'easeOutCubic' } = options

    const directions: Record<string, { x: number; y: number }> = {
      left: { x: -50, y: 0 },
      right: { x: 50, y: 0 },
      up: { x: 0, y: 50 },
      down: { x: 0, y: -50 },
    }

    const { x, y } = directions[direction]

    anime({
      targets: selector,
      translateX: [x, 0],
      translateY: [y, 0],
      opacity: [0, 1],
      duration,
      delay,
      easing,
    })
  }

  return {
    scrollReveal,
    staggerAnimation,
    counterAnimation,
    parallaxScroll,
    fadeIn,
    slideIn,
  }
}