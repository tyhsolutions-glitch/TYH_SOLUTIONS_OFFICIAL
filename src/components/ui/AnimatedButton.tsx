import { useEffect, useRef } from "react"
import { animate } from "animejs"

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export default function AnimatedButton({ children, onClick }: Props) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!ref.current) return
    animate(ref.current, {
      scale: [0.85, 1],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutElastic(1, .7)",
    })
  }, [])

  const handleHover = () => {
    if (!ref.current) return
    animate(ref.current, { scale: 1.05, duration: 180, easing: "easeOutQuad" })
  }

  const handleLeave = () => {
    if (!ref.current) return
    animate(ref.current, { scale: 1, duration: 180, easing: "easeOutQuad" })
  }

  return (
    <button
      ref={ref}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className="px-6 py-3 bg-[#f0810e] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#f0810e]/20 hover:bg-orange-400 transition-colors duration-150"
    >
      {children}
    </button>
  )
}
