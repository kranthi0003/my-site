import React from "react";
import { PROFILE_DATA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 relative">
      <div className="absolute inset-0 tamil-pattern"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-3">
          <p className="text-lg" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            நன்றி (Nandri) - Thank you
          </p>
          <p className="opacity-80">
            &copy; 2024 {PROFILE_DATA.name}. Created with respect for Tamil culture and traditions.
          </p>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            வாழ்க வளமுடன் (Valga Valamudan) - Live prosperously
          </p>
        </div>
      </div>
    </footer>
  );
}
