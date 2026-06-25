"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
    placement: "",
    style: "fineline",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="relative py-32 px-6 bg-black border-t border-white/[0.02]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
            Aplicação Exclusiva
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Inicie seu projeto
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            Preencha os detalhes técnicos da sua ideia. Analisamos cada proposta
            individualmente para garantir total alinhamento artístico.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md relative min-h-[380px] flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/[0.02] rounded-t-3xl overflow-hidden">
            <motion.div
              className="h-full bg-white"
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form
                onSubmit={step === 3 ? handleSubmit : handleNext}
                className="space-y-6 my-auto"
              >
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                      Passo 01/03 — Contato
                    </p>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-2">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ex: Gabriel Silva"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-2">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Ex: gabriel@email.com"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                      />
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                      Passo 02/03 — O Conceito
                    </p>

                    <div className="relative">
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-2">
                        Estilo Predominante
                      </label>

                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white flex items-center justify-between text-left focus:outline-none focus:border-white transition-colors"
                      >
                        <span>
                          {formData.style === "fineline" &&
                            "Fine Line (Traços Finos/Geométricos)"}
                          {formData.style === "blackwork" &&
                            "Blackwork (Contraste Pesado/Sombras)"}
                        </span>
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-zinc-500 font-mono text-xs"
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-50 w-full mt-2 rounded-xl bg-[#0d0d0d] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl"
                          >
                            <ul className="text-sm text-zinc-300">
                              <li
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    style: "fineline",
                                  });
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-5 py-3.5 cursor-pointer transition-colors hover:bg-white/5 hover:text-white ${
                                  formData.style === "fineline"
                                    ? "bg-white/[0.02] text-white font-medium"
                                    : ""
                                }`}
                              >
                                Fine Line (Traços Finos/Geométricos)
                              </li>
                              <li
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    style: "blackwork",
                                  });
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-5 py-3.5 cursor-pointer transition-colors hover:bg-white/5 hover:text-white border-t border-white/[0.03] ${
                                  formData.style === "blackwork"
                                    ? "bg-white/[0.02] text-white font-medium"
                                    : ""
                                }`}
                              >
                                Blackwork (Contraste Pesado/Sombras)
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-2">
                        Local do Corpo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.placement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            placement: e.target.value,
                          })
                        }
                        placeholder="Ex: Antebraço esquerdo, panturrilha lateral..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                      Passo 03/03 — A História
                    </p>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-2">
                        Descrição da Ideia & Significado
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.idea}
                        onChange={(e) =>
                          setFormData({ ...formData, idea: e.target.value })
                        }
                        placeholder="Conte resumidamente o que quer expressar nessa arte..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={`text-xs font-bold uppercase tracking-wider transition-opacity ${step === 1 ? "opacity-0 pointer-events-none" : "text-zinc-500 hover:text-white"}`}
                  >
                    ← Voltar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    {step === 3 ? "Enviar Aplicação" : "Continuar →"}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4 my-auto"
              >
                <div className="w-12 h-12 rounded-full border border-white mx-auto flex items-center justify-center text-white text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  Briefing Recebido
                </h3>
                <p className="text-zinc-400 text-xs max-w-xs mx-auto font-light leading-relaxed">
                  Obrigado, {formData.name}. Nossa equipe analisará seu conceito
                  e entrará em contato via e-mail em até 48 horas.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
