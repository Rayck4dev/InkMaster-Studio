"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden border-y border-white/[0.04]"
    >
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1590247813693-5541f1c609fd?q=80&w=1600&auto=format&fit=crop"
          alt="Textura de agulha e tinta em estúdio dark"
          className="w-full h-full object-cover grayscale brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-bg via-transparent to-ink-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-bg via-transparent to-ink-bg" />
      </motion.div>

      <motion.div
        style={{ y: yText }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <span className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs block mb-4 pl-[0.3em]">
          O Ritual da Agulha
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
          A Dor é Efêmera.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700">
            A Identidade é Eterna.
          </span>
        </h2>
      </motion.div>

      <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
