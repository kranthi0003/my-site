import React from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BackgroundSection from "@/components/background-section";
import InterestsSection from "@/components/interests-section";
import GallerySection from "@/components/gallery-section";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BackgroundSection />
        <InterestsSection />
        <GallerySection />

        <ContactSection />
      </main>
      <Footer />
      <Lightbox />
    </div>
  );
}
