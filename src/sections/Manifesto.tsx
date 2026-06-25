"use client";

import { motion } from "framer-motion";
import { manifestoData } from "@/types/manifesto";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-32 px-6 bg-ink-bg border-t border-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="md:sticky md:top-32 md:h-fit">
          <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
            O Manifesto
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            A Filosofia <br />
            Por Trás do Traço.
          </h2>
          <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light">
            Não fazemos apenas tatuagens. Criamos marcas eternas através de uma
            metodologia que une design de alta costura e assepsia milimétrica.
          </p>

          <div className="w-12 h-[2px] bg-white/20 mt-8 hidden md:block" />
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {manifestoData.map((step) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative pl-8 border-l border-white/5 hover:border-white/20 transition-colors duration-500"
            >
              <div className="text-xs font-mono font-bold text-zinc-600 group-hover:text-white transition-colors duration-300 mb-2">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors duration-300 mb-3 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
