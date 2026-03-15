import HeroScene from "./HeroScene"
import AnimatedButton from "../ui/AnimatedButton"
import { useScrollReveal } from "../../hooks/useScrollReveal"

export default function Hero() {
  const headingRef = useScrollReveal<HTMLHeadingElement>({ delay: 100 })
  const textRef = useScrollReveal<HTMLParagraphElement>({ delay: 300 })
  const buttonRef = useScrollReveal<HTMLDivElement>({ delay: 500 })
  const badgesRef = useScrollReveal<HTMLDivElement>({ delay: 700 })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdf8f3] via-[#fef3e8] to-[#fdf6ee]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06298510_1px,transparent_1px),linear-gradient(to_bottom,#06298510_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 3D background */}
      <HeroScene />

      {/* Gradient overlay */}
      <div className="absolute inset-0 from-[#fdf8f3]/40 via-transparent to-[#fdf8f3]/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl pt-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Custom Software & Student Projects
        </div>

        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-[#031952]"
        >
          We Build Software
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            That Actually Works.
          </span>
        </h1>

        <p
          ref={textRef}
          className="mt-6 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Custom software for businesses. Academic project support for students.
          Built by a small team that genuinely cares about your success.
        </p>

        <div
          ref={buttonRef}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact">
            <AnimatedButton>Start a Project</AnimatedButton>
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:border-amber-400/60 hover:text-amber-400 transition-all duration-200"
          >
            See Our Work
          </a>
        </div>

        <div
          ref={badgesRef}
          className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500"
        >
          <span className="flex items-center gap-2"><span className="text-amber-400">⚡</span> Fast Delivery</span>
          <span className="flex items-center gap-2"><span className="text-amber-400">🔒</span> Secure Systems</span>
          <span className="flex items-center gap-2"><span className="text-amber-400">📱</span> Web & Mobile</span>
          <span className="flex items-center gap-2"><span className="text-amber-400">🤖</span> AI-Ready</span>
        </div>
      </div>
	  
    </section>
  )
}
