"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.03] pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 block">
              / O Conceito
            </span>
            <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
              Injeção de alta fidelidade e contraste cirúrgico na pele. Cada
              sessão é tratada como um ritual privado, projetado exclusivamente
              para alinhar arte abstrata e anatomia humana.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 block">
              / Navegação
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-400">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  Galeria Autoral
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  O Santuário
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  Orçamentos
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4 md:text-right">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 block">
              / Conecte-se
            </span>
            <div className="flex md:justify-end gap-6 text-xs font-mono text-zinc-400">
              <a
                href="#"
                className="hover:text-white border-b border-transparent hover:border-white pb-0.5 transition-all"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-white border-b border-transparent hover:border-white pb-0.5 transition-all"
              >
                Pinterest
              </a>
              <a
                href="#"
                className="hover:text-white border-b border-transparent hover:border-white pb-0.5 transition-all"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-[11px] text-zinc-500 font-light pt-2">
              Atendimento estritamente sob agendamento prévio.
            </p>
          </div>
        </div>

        <div className="select-none pointer-events-none border-t border-white/[0.02] pt-8 overflow-hidden">
          <h1 className="text-[12vw] font-black uppercase text-center leading-none text-zinc-900/40 tracking-tighter font-sans select-none whitespace-nowrap">
            INKMASTER
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.02] pt-8 text-[10px] font-mono text-zinc-600">
          <p>© {currentYear} InkMaster Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span>PORTFOLIO PROJECT</span>
            <span>—</span>
            <span className="flex items-center gap-1.5 group text-white">
              Developed by
              <a
                href="https://portfoliorayckacastro.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors flex items-center gap-1.5 group"
              >
                <b>DevLab</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
