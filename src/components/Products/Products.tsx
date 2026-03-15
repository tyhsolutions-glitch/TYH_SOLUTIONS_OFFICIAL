import { useScrollReveal } from "../../hooks/useScrollReveal"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function Products() {
  const headingRef = useScrollReveal<HTMLDivElement>({ delay: 100 })
  const contentRef = useScrollReveal<HTMLDivElement>({ delay: 250 })

  return (
    <section id="products" className="bg-[#fff9f5] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="max-w-xl mb-16">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            Case Study
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031952] leading-tight">
            Built & Shipped
          </h2>
          <p className="mt-4 text-slate-600">
            Our first live product — a complete hotel management system, now running in production.
          </p>
        </div>

        {/* Product Card */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border  border-slate-200">
          {/* Left - Visual */}
          <div className="bg-gradient-to-br bg-gradient-to-br from-[#f0810e]/10 to-[#062985]/5 min-h-[280px] sm:min-h-[380px] flex flex-col items-center justify-center p-10 relative overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute w-64 h-64 rounded-full border border-[#f0810e]/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-96 h-96 rounded-full border border-amber-400/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative text-center">
              <div className="text-6xl mb-4">🏨</div>
              <p className="text-amber-400 font-bold text-sm">Hotel Billing & Management</p>
              <p className="text-slate-600 text-xs mt-1">Live in Production</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Active Client</span>
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="bg-white p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-black text-[#031952] mb-4">
              Custom Hotel Billing System
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Built for a hospitality client to replace manual operations.
              Reduces billing errors, tracks occupancy, and keeps customer records organized.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Billing & invoice management",
                "Room booking & availability",
                "Customer records",
                "Payment tracking & reports",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-slate-900 rounded-lg font-bold text-sm hover:bg-amber-300 transition-all duration-200 w-fit"
            >
              Request a Demo <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
