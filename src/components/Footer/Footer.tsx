export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/new.png" alt="TYH Solutions" className="h-24 w-auto " />
            </div>
            <p className="text-slate-500 text-white text-xs leading-relaxed">
              Custom software for businesses. 
            </p>
			<p className="text-slate-500 text-xs text-white leading-relaxed">
              Academic project support for students.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#f0810e] text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-white text-slate-500 text-xs">
              {["#about", "#services", "#products", "#contact"].map((href, i) => (
                <li key={i}>
                  <a href={href} className="hover:text-amber-400 transition capitalize">
                    {href.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#f0810e] text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-white text-slate-500 text-xs">
              {["Custom Software", "Web Apps", "Automation", "AI & ML", "Academic Projects"].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#f0810e] text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-slate-500 text-white text-xs">
              <li>tyhsolutions@gmail.com</li>
              <li>www.tyhsolutions.com</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col text-white sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} TYH Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
