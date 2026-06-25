"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Portfolio from "@/sections/Portfolio";
import ParallaxBanner from "@/components/ParallaxBanner";
import StudioMaster from "@/sections/StudioMaster";
import BookingForm from "@/sections/BookingForm";
import StudioExperience from "@/sections/StudioExperience";
import Doubts from "@/sections/doubts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-bg">
      <Navbar />
      <Hero />
      <Manifesto />
      <Portfolio />

      <ParallaxBanner />

      <StudioExperience />
      <StudioMaster />

      <Doubts />
      <BookingForm />
      <Footer />
    </main>
  );
}
