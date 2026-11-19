"use client";

import React, { useState } from "react";
import { EnvelopeGate } from "@/components/EnvelopeGate";
import { HeroSection } from "@/components/HeroSection";
import { ParentsSection } from "@/components/ParentsSection";
import { CeremonySection } from "@/components/CeremonySection";
import { TimelineSection } from "@/components/TimelineSection";
import { VenueSection } from "@/components/VenueSection";
import { GallerySection } from "@/components/GallerySection";
import { ClosingSection } from "@/components/ClosingSection";

export default function WeddingInvitationPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Play audio if available
    const audio = document.getElementById("weddingAudio") as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.65;
      audio.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#2A1812] flex justify-center items-start">
      {/* Background Music Audio Element */}
      <audio id="weddingAudio" src="/assets/audio/wedding_music.mp3" loop preload="auto" />

      {/* Envelope Splash Gate */}
      <EnvelopeGate isOpen={isOpen} onOpen={handleOpenInvitation} />

      {/* Main Continuous Mobile-first Container (Max 480px on desktop) */}
      <main className="w-full max-w-[480px] min-h-screen bg-[#F0D9B4] shadow-2xl overflow-x-hidden relative">
        <HeroSection />
        <ParentsSection />
        <CeremonySection />
        <TimelineSection />
        <VenueSection />
        <GallerySection />
        <ClosingSection />
      </main>
    </div>
  );
}
