"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/types/tattos";
import Image from "next/image";

interface TattooItem {
  id: number;
  title: string;
  category: string;
  hours: string;
  needles: string;
  client: string;
  story: string;
  image: string;
}

export default function Portfolio() {
  const [cards, setCards] = useState<TattooItem[]>(portfolioData);

  const swipeToBack = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const firstCard = newCards.shift();
      if (firstCard) newCards.push(firstCard);
      return newCards;
    });
  };

  return (
    <section
      id="portfolio"
      className="relative py-32 px-6 bg-ink-bg border-t border-white/[0.02] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
              Obras Vivas
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
              Histórias gravadas
              <br />
              na pele
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
              Clique ou arraste os cartões ao lado para navegar. Mais do que
              estética, cada peça carrega uma sessão de imersão, técnica
              cirúrgica e um conceito exclusivo alinhado à anatomia.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Especificações Industriais
              </h4>
              <div className="space-y-3 font-light text-xs text-zinc-400">
                <p>
                  <strong className="text-white font-medium">
                    Pigmentação:
                  </strong>{" "}
                  Tintas de dispersão homofílica que evitam o esverdeamento com
                  o tempo.
                </p>
                <p>
                  <strong className="text-white font-medium">Hardware:</strong>{" "}
                  Máquinas rotativas suíças com estabilizador de agulha
                  magnético.
                </p>
              </div>
            </div>

            <button
              onClick={swipeToBack}
              className="mt-8 self-start px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
            >
              Próxima Obra →
            </button>
          </div>

          <div className="lg:col-span-7 relative h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-[460px]">
              <AnimatePresence mode="popLayout">
                {cards.map((item, index) => {
                  const isFirst = index === 0;
                  const dragProps = isFirst
                    ? {
                        drag: "x" as const,
                        dragConstraints: { left: 0, right: 0 },
                      }
                    : {};

                  return (
                    <motion.div
                      key={item.id}
                      {...dragProps}
                      style={{
                        transformOrigin: "bottom center",
                        zIndex: cards.length - index,
                      }}
                      animate={{
                        scale: 1 - index * 0.05,
                        y: -index * 20,
                        rotateZ: index * 2,
                        opacity: 1 - index * 0.25,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      onDragEnd={(_, info) => {
                        if (Math.abs(info.offset.x) > 100) swipeToBack();
                      }}
                      className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/[0.08] bg-ink-card shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col select-none"
                    >
                      <div className="h-56 relative w-full flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale brightness-[0.4]"
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-card to-transparent" />
                        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-zinc-300 backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {item.title}
                            </h3>
                            <span className="text-[10px] font-mono text-zinc-500">
                              Coll. {item.client}
                            </span>
                          </div>
                          <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-3">
                            {'"'}
                            {item.story}
                            {'"'}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                          <div>
                            <span className="text-[8px] uppercase tracking-wider text-zinc-500 block">
                              Tempo
                            </span>
                            <span className="text-xs font-mono text-zinc-300 font-bold">
                              {item.hours}
                            </span>
                          </div>
                          <div>
                            <span className="text-[8px] uppercase tracking-wider text-zinc-500 block">
                              Configuração
                            </span>
                            <span className="text-xs font-mono text-zinc-300 font-bold">
                              {item.needles}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
