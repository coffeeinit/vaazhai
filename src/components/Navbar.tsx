"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/startups", label: "Startups" },
    { path: "/join-us", label: "Join Us" },
    { path: "/contact", label: "Contact" },
  ]

  return (
     <nav
  className={`w-full z-50 transition-all duration-300 ${
    location.pathname === "/" && !scrolled
      ? "bg-transparent py-2"
      : "bg-white/95 backdrop-blur-md shadow-xl py-2"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/asset/Vaazhai-Without-Backgrount.png"
              alt="Vaazhai Ventures"
              className="h-16 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-semibold transition-all duration-300 group ${
                  location.pathname === "/"
                    ? item.path === "/"
                      ? "text-amber-900"
                      : "text-amber-800"
                    : location.pathname === item.path
                      ? "text-amber-700"
                      : scrolled
                        ? "text-gray-700"
                        : "text-emerald-600" // <-- changed from text-gray-100
                } hover:text-amber-700`}
              >
                {item.label}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-600 transition-all duration-300 ${
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              to="/join-"
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-gray-100 px-8 py-3 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100 bg-white/80 backdrop-blur-sm"
                : location.pathname === "/"
                  ? "text-gray-800 hover:bg-white/20 bg-white/10 backdrop-blur-sm"
                  : "text-gray-800 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm"
            } shadow-lg border border-gray-200/50`}
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-amber-700 bg-amber-50 border-l-4 border-amber-600"
                          : "text-gray-700 hover:text-amber-700 hover:bg-amber-50 hover:border-l-4 hover:border-amber-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
