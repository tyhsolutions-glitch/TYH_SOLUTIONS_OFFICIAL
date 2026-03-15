import { useScrollReveal } from "../../hooks/useScrollReveal"

const testimonials = [
  {
    name: "Hotel Plaza",
    role: "Client",
    message:
      "TYH solutions helped us to change from the use of traditional billing method, to a POS which has helped us immensely.",
    verified: true,
	stars: 4,
  },
  
  /*{
    name: "Mohammed Yaqoob Jalal",
    role: "Product Manager",
    message:
      "Professional and reliable. They helped us launch smoothly and were always available when we needed them.",
    verified: false,
  },
  {
    name: "K S Hemanth",
    role: "Business Owner",
    message:
      "Working with TYH was straightforward and effective. They understand business needs, not just code.",
    verified: false,
  },*/
]

export default function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>({ delay: 100 })
  const gridRef = useScrollReveal<HTMLDivElement>({ delay: 300 })

  return (
    <section id="tes" className="py-24 sm:py-32 bg-[#fef3e8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 ">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#031952]">
            What Clients Say
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-justify">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 ${
                t.verified
                  ? "border-[#f0810e]/30 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex gap-1 mb-5 ">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < t.stars ? "text-amber-400" : "text-slate-300"}`}>
				  ★
				  </span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{t.message}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 font-black text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[#031952] font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
                {t.verified && (
                  <span className="ml-auto text-xs text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded-full">
                    Client
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
