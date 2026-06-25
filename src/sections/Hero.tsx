"use client";

import { motion } from "framer-motion";
import AmbientLight from "@/components/AmbientLight";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AmbientLight />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 pl-[0.25em]">
            Agenda Aberta • Estúdio Privado
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6"
        >
          Traços Finos.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
            Contraste Eterno.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 max-w-md text-xs sm:text-sm leading-relaxed mb-10 tracking-wide font-light"
        >
          Elevando a tatuagem Fine Line e Blackwork ao nível de alta costura.
          Projetos autorais, simetria cirúrgica e pigmentação de alta
          performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-white/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <button className="relative px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.12)] flex items-center gap-2">
            <div className="absolute top-0 -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-40 group-hover:animate-shine" />
            Agendar Projeto
            <svg
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
