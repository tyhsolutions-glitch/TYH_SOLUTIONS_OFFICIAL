import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (!glowRef.current) return

      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveGlow)

    return () => window.removeEventListener("mousemove", moveGlow)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-[120px] opacity-30 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 -translate-x-1/2 -translate-y-1/2 z-0"
    />
  )
}