"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4 px-4 sm:px-8" : "py-8 px-4 sm:px-12"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-black/60 border border-white/[0.05] backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              : "bg-transparent border border-transparent px-0 py-0"
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
            <span className="text-white font-black uppercase tracking-widest text-xs font-sans">
              INKMASTER<span className="text-zinc-600"></span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            <a
              href="#portfolio"
              className="hover:text-white transition-colors relative py-1 group"
            >
              Galeria
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors relative py-1 group"
            >
              O Estúdio
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#duvidas"
              className="hover:text-white transition-colors relative py-1 group"
            >
              Suporte
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          <div className="hidden md:block mb-2">
            <a
              href="#booking"
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-wider rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
              }`}
            >
              Agendar Sessão
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-6 h-6 group"
          >
            <span
              className={`h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            />
            <span
              className={`h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"}`}
            />
            <span
              className={`h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-28 pb-12 px-6 bg-black/95 border-b border-white/[0.05] backdrop-blur-2xl z-40 flex flex-col gap-6 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <nav className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest text-zinc-400">
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Galeria
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                O Estúdio
              </a>
              <a
                href="#duvidas"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Suporte
              </a>
            </nav>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center bg-white text-black font-bold uppercase tracking-wider text-xs rounded-xl block mt-4 shadow-lg"
            >
              Agendar Sessão
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
