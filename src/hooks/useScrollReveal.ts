import { useEffect, useRef } from "react"
import { animate } from "animejs"

type Options = {
  delay?: number
  distance?: number
  duration?: number
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null)

  const {
    delay = 0,
    distance = 40,
    duration = 700,
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // initial state
    el.style.opacity = "0"
    el.style.transform = `translateY(${distance}px)`

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          animate(el, {
            opacity: [0, 1],
            translateY: [distance, 0],
            duration,
            delay,
            easing: "easeOutCubic",
          })

          observer.unobserve(el)
        })
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delay, distance, duration])

  return ref
}
