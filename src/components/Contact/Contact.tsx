import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useScrollReveal } from "../../hooks/useScrollReveal"
import { toast } from "react-toastify"

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ delay: 100 })
  const formRef = useScrollReveal<HTMLFormElement>({ delay: 250 })

  const [status, setStatus] = useState<"idle" | "loading">("idle")

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    try {
      setStatus("loading")
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      toast.success("Message sent! We'll be in touch soon 🚀")
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error("Failed to send. Please try again.")
    } finally {
      setStatus("idle")
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div ref={sectionRef}>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031952] leading-tight mb-6">
              Let's build
              <br />
              something together.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-10">
              Have a project in mind? A student deadline approaching? 
              Drop us a message — we respond fast.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📧", label: "Email", value: "tyhsolutions@gmail.com" },
                { icon: "🌐", label: "Web", value: "https://tyhsolutions.vercel.app/" },
                { icon: "📍", label: "Based in", value: "India" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{item.label}</p>
                    <p className="text-[#031952] text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#f0810e]/50 focus:bg-white transition"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#f0810e]/50 focus:bg-white transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#f0810e]/50 focus:bg-white transition"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project..."
              required
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#f0810e]/50 focus:bg-white transition resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#f0810e] text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-orange-400 transition-all duration-200 disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
