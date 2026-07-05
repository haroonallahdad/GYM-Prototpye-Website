"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Why TITAN", href: "#why-choose" },
  { name: "Facilities", href: "#facilities" },
  { name: "Membership", href: "#pricing" },
  { name: "Trainers", href: "#trainers" },
  { name: "Results", href: "#results" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#080808]/80 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <span className="font-display font-black text-2xl tracking-tighter text-white group-hover:text-brand-accent transition-colors">
              TITAN<span className="text-brand-accent">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "#pricing")}
              className="text-sm font-medium text-white hover:text-brand-accent transition-colors"
            >
              Book Tour
            </a>
            <a
              href="#cta"
              onClick={(e) => scrollToSection(e, "#cta")}
              className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-black text-sm font-semibold rounded-full flex items-center space-x-1.5 shadow-[0_0_20px_rgba(206,255,0,0.2)] hover:shadow-[0_0_25px_rgba(206,255,0,0.4)] transition-all duration-300"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-brand-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Slide-over */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#080808]/95 backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-display text-2xl font-bold text-white hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-8 flex flex-col items-center space-y-4"
              >
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "#pricing")}
                  className="text-lg font-medium text-white hover:text-brand-accent transition-colors"
                >
                  Book a Free Tour
                </a>
                <a
                  href="#cta"
                  onClick={(e) => scrollToSection(e, "#cta")}
                  className="w-full max-w-xs py-4 bg-brand-accent hover:bg-brand-accent-hover text-black text-center font-bold rounded-full shadow-[0_0_20px_rgba(206,255,0,0.2)] transition-all duration-300"
                >
                  Join Today
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
