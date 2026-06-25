"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { careSteps } from "@/types/caresteps";
import Image from "next/image";

export default function StudioExperience() {
  const [activeTab, setActiveTab] = useState("fase1");
  const currentCare = careSteps.find((step) => step.id === activeTab)!;

  return (
    <section
      id="experiencia"
      className="relative py-32 px-6 bg-ink-bg border-t border-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative h-[500px] rounded-2xl overflow-hidden border border-white/[0.06]">
            <Image
              src="https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGF0dG9vJTIwYXJ0aXN0fGVufDB8fDB8fHwy"
              alt="Tatuador Principal"
              className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-bg via-transparent to-transparent" />
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
              O Residente
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              &quot;Arthur &apos;Ink&apos; Mendes&quot;
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
              Com mais de uma década refinando a agulha na Europa e nos
              principais polos de arte urbana no Brasil, Arthur especializou-se
              em fusões geométricas e micro-realismos geométricos usando
              calibres ultra-finos.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
              Sua filosofia artística baseia-se na fusão da anatomia humana com
              linhas estruturais puras — transformando corpos em galerias de
              arte em movimento.
            </p>

            <div className="flex items-center gap-6 border-t border-white/5 pt-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                  Estilo Principal
                </p>
                <p className="text-sm font-bold text-zinc-200">
                  Fine Line Structural
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                  Premiações
                </p>
                <p className="text-sm font-bold text-zinc-200">
                  Best Blackwork 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-white/[0.03] pt-32">
          <div className="md:col-span-4">
            <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
              Longevidade da Arte
            </span>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4">
              Protocolo de <br />
              Cicatrização
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              50% do resultado final depende do cuidado pós-sessão. Siga nosso
              cronograma interativo para blindar o seu pigmento.
            </p>
          </div>

          <div className="md:col-span-8 bg-white/[0.01] border border-white/[0.04] p-6 sm:p-8 rounded-2xl backdrop-blur-md">
            <div className="flex gap-2 border-b border-white/5 pb-4 mb-6 overflow-x-auto">
              {careSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${
                    activeTab === step.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {activeTab === step.id && (
                    <motion.div
                      layoutId="activeCareTab"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg -z-10"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  {step.tab}
                </button>
              ))}
            </div>

            <div className="min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
                    {currentCare.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {currentCare.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
