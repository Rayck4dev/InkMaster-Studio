"use client";

import { motion } from "framer-motion";
import { features } from "@/types/features";

export default function StudioExperience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 bg-ink-bg border-t border-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
            O Ambiente
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
            Mais que um estúdio.
            <br />
            Um santuário ritualístico.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.01]"
          >
            <img
              src="https://images.pexels.com/photos/2186023/pexels-photo-2186023.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Design interno do estúdio minimalista"
              className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-bg via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-md">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                Localização
              </p>
              <p className="text-xs font-bold text-white uppercase tracking-wide">
                Atendimento com Hora Marcada
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-6 space-y-12">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-6 border-b border-white/[0.03] pb-8 last:border-0"
              >
                <span className="text-xl font-mono font-black text-zinc-600 tracking-tighter">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
