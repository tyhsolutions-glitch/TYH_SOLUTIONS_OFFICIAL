import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#tes" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.png" alt="TYH Solutions" className="h-40 w-auto" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-200 ${
                  isActive
                    ? "text-amber-400 font-semibold"
                    : " text-slate-600 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-amber-400 text-slate-900 text-sm font-bold hover:bg-amber-300 transition-all duration-200 shadow-md"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className=" text-slate-600 hover:text-amber-400 font-medium transition"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-lg bg-[#f0810e] text-slate-900 font-bold text-center transition hover:bg-[#d96f0c]"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
