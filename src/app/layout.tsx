import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "InkMaster Studio",
  description: "Estúdio privado de tatuagem conceitual especializado em Fine Line e Blackwork. Precisão cirúrgica na pele, arte atemporal e simetria exclusiva.",
  keywords: ["Tatuagem", "Fine Line", "Blackwork", "Tattoo Studio", "Tatuador São Paulo", "InkMaster"],
  authors: [{ name: "InkMaster Studio" }],
  openGraph: {
    title: "InkMaster Studio",
    description: "Elevando a tatuagem ao nível de obra de arte.",
    url: "https://inkmasterstudio.com", // Alterar no deploy
    siteName: "InkMaster Studio",
    images: [
      {
        url: "/InkMaster_home.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ink-bg text-white`}
      >
        {children}
      </body>
    </html>
  );
}