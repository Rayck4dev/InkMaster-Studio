"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/types/tattos";

export default function Doubts() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section
      id="duvidas"
      className="py-24 px-6 md:px-12 bg-ink-bg border-t border-white/[0.02] w-full flex justify-center overflow-hidden scroll-mt-40
      "
    >
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full">
          <div className="lg:col-span-5 pr-4">
            <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
              Dúvidas Frequentes
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight">
              Consultoria <br />& Suporte
            </h3>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="w-full rounded-xl bg-white/[0.01] border border-white/[0.04] overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-wide text-zinc-200 hover:text-white transition-colors"
                >
                  <span className="max-w-[85%]">{faq.question}</span>
                  <span className="text-zinc-500 text-base flex-shrink-0 font-mono">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed border-t border-white/[0.02] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
