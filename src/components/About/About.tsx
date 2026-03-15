import { useScrollReveal } from "../../hooks/useScrollReveal"
import { CheckCircle2 } from "lucide-react"

const founders = [
  { initials: "T", name: "Thomas K Nebu", role: "Tech Lead" },
  { initials: "Y", name: "Mohammed Yaqoob Jalal", role: "Product & Design" },
  { initials: "H", name: "K S Hemanth", role: "Business & Strategy" },
]

export default function About() {
  const headingRef = useScrollReveal<HTMLDivElement>({ delay: 100 })
  const leftRef = useScrollReveal<HTMLDivElement>({ delay: 200 })
  const rightRef = useScrollReveal<HTMLDivElement>({ delay: 350 })

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#fff9f5]"
    >
      {/* subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#f0810e]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="max-w-xl mb-16">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031952] leading-tight">
            A small team.
            <br />
            <span className="text-slate-500">Big commitment.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div ref={leftRef} className="space-y-6">
            <p className="text-slate-500 text-lg leading-relaxed text-justify">
              TYH Solutions was founded by three engineers passionate about
              building software that solves real problems for businesses and students alike.
            </p>

            <ul className="space-y-3">
              {[
                "Custom software tailored to your workflow",
                "Academic project guidance & development",
                "Fast turnaround, honest communication",
                "Long-term support after delivery",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: "3", label: "Founders" },
                { val: "1+", label: "Live Client" },
                { val: "24/7", label: "Support" },
              ].map((s, i) => (
                <div key={i} className="bg-[#fef3e8] rounded-xl p-4 border border-orange-100 text-center">
                  <p className="text-2xl font-black text-amber-400">{s.val}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Founders */}
          <div ref={rightRef} className="space-y-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
              Meet the founders
            </p>
            {founders.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-orange-100 rounded-xl px-5 py-4 hover:border-[#f0810e]/40 hover:bg-orange-50 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 font-black text-lg flex-shrink-0">
                  {f.initials}
                </div>
                <div>
                  <p className="text-[#031952] font-semibold text-sm">{f.name}</p>
                  <p className="text-slate-500 text-xs">{f.role}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}
