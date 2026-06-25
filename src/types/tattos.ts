import { TattooItem } from "@/types/tips";

export const portfolioData: TattooItem[] = [
  {
    id: 1,
    title: "Geometria Sagrada",
    category: "Fine Line",
    hours: "3h30",
    needles: "3RL / 1RL",
    client: "Marcos V.",
    story:
      "Estudo anatômico baseado na proporção áurea. O desafio foi alinhar as linhas paralelas milimétricas acompanhando a musculatura do antebraço sem distorcer o padrão geométrico com o movimento do braço.",
    image:
      "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Crânio Neo-Noir",
    category: "Blackwork",
    hours: "6h45",
    needles: "11RS / 07MG",
    client: "Amanda K.",
    story:
      "Contraste extremo com foco em texturas de pontilhismo e blocos de preto absoluto. Uma peça de alto impacto feita para criar profundidade e cobrir uma cicatriz antiga de forma orgânica.",
    image:
      "https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Anatomia Renascentista",
    category: "Fine Line",
    hours: "4h15",
    needles: "3RL / 0.25mm",
    client: "Pedro H.",
    story:
      "Inspirado nos esboços de Da Vinci, misturando realismo clássico com traços estruturais modernos. Uma homenagem à ciência e à arte em uma pigmentação suave que simula grafite na pele.",
    image:
      "https://images.unsplash.com/flagged/photo-1575495407752-bfb6fb0518bf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhdHRvc3xlbnwwfHwwfHx8Mg%3D%3D",
  },
];

export const faqData = [
  {
    question: "Como funciona o desenvolvimento do desenho autoral?",
    answer:
      "Após o envio do formulário de briefing, agendamos uma consultoria digital. O desenho é projetado digitalmente em cima de uma foto do seu corpo, respeitando suas curvas naturais. A arte final só é revelada e validada no dia da sessão.",
  },
  {
    question: "Qual o calibre de agulha utilizado para traços finos?",
    answer:
      "Trabalhamos estritamente com agulhas de espessura 0.20mm e 0.25mm (calibres 06 e 08), as mais finas do mercado mundial, garantindo traços cirúrgicos que não expandem com o passar dos anos.",
  },
  {
    question: "O estúdio atende coberturas (Cover-up)?",
    answer:
      "Sim, porém apenas sob avaliação rigorosa. O estilo Blackwork é excelente para coberturas devido à alta densidade de pigmento preto, mas texturas em Fine Line exigem sessões prévias de remoção a laser dependendo do caso.",
  },
];
