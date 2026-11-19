"use client";

import React from "react";
import { motion } from "framer-motion";

export const ClosingSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F4E4D4] to-[#EFE1D2] pt-4 pb-14 px-6 text-center">
      <motion.p 
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-['Cormorant_Garamond'] italic text-base text-[#4A2B21] max-w-[360px] mx-auto mb-6 leading-relaxed"
      >
        "Your presence and blessings are our greatest gifts as we embark on this sacred journey together."
      </motion.p>

      {/* VS Monogram */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-5"
      >
        <img 
          src="/assets/images/vs_monogram.svg" 
          alt="V & S Royal Monogram" 
          className="w-28 h-28 block drop-shadow-md" 
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-['Great_Vibes'] text-4xl text-[#6B1D1D] mb-3"
      >
        Srinithi &amp; Vishnukarthick
      </motion.div>

      <div>
        <span className="font-['Montserrat'] text-[10px] font-semibold tracking-widest uppercase text-[#7A5648] inline-block px-4 py-1.5 rounded-full bg-white/60 border border-[#C6923A]/30">
          Srinithi &amp; Vishnukarthick · December 2026
        </span>
      </div>
    </section>
  );
};
