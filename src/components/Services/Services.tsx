import {
  Code,
  Smartphone,
  Bot,
  BarChart3,
  Shield,
  Workflow,
  Cpu,
  GraduationCap,
} from "lucide-react"
import { useScrollReveal } from "../../hooks/useScrollReveal"

const services = [
  {
    title: "Custom Software",
    description: "Tailor-made systems built around your exact business processes.",
    icon: Code,
    highlight: true,
  },
  {
    title: "Web Applications",
    description: "Modern, responsive web platforms for businesses and startups.",
    icon: Cpu,
  },
  {
    title: "Business Automation",
    description: "Automate repetitive tasks and streamline your workflows.",
    icon: Workflow,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems for automation and data-driven decisions.",
    icon: Bot,
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into insights that drive smarter decisions.",
    icon: BarChart3,
  },
  {
    title: "Mobile Apps",
    description: "High-performance Android and cross-platform apps.",
    icon: Smartphone,
  },
  {
    title: "Cybersecurity",
    description: "Protect your applications and data with modern security.",
    icon: Shield,
  },
  {
    title: "Academic Projects",
    description: "End-to-end support for students building tech projects.",
    icon: GraduationCap,
    highlight: true,
  },
]

export default function Services() {
  const headingRef = useScrollReveal<HTMLDivElement>({ delay: 100 })
  const gridRef = useScrollReveal<HTMLDivElement>({ delay: 300 })

  return (
    <section id="services" className="bg-[#fef3e8] py-24 sm:py-32">
      <div className="absolute left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031952]">
            What We Build
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base">
            From client software to student projects — we cover the full stack.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                  service.highlight
                    ? "border-[#f0810e]/30 bg-orange-50 hover:border-amber-400/60"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                  service.highlight ? "bg-orange-100" : "bg-slate-100"
                }`}>
                  <Icon
                    size={20}
                    className={service.highlight ? "text-amber-400" : "text-slate-500"}
                  />
                </div>
                <h3 className="font-bold text-[#031952] text-sm mb-2">{service.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
