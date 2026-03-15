import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Products from "./components/products/Products"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{ background: "#0d1424", border: "1px solid rgba(255,255,255,0.1)" }}
      />
    </>
  )
}
