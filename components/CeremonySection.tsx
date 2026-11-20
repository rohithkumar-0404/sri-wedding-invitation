"use client";

import React from "react";
import { motion } from "framer-motion";

export const CeremonySection: React.FC = () => {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_50%_30%,#FFF8EE_0%,#F0D9B4_55%,#E8CCA6_100%)] py-16 px-5 text-center overflow-hidden border-t border-[#C6923A]/25">
      {/* Ambient Golden Kolam Watermark */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none mix-blend-multiply bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/kolam-floor.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[440px] mx-auto">
        {/* Sacred Brass Diya with Living Flickering Flame (Centered) */}
        <div className="relative flex justify-center items-center w-full mx-auto mb-3 text-center">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[radial-gradient(circle,rgba(255,183,77,0.45)_0%,rgba(255,140,0,0.15)_50%,transparent_75%)] animate-pulse pointer-events-none" />
          <svg className="w-13 h-13" width="52" height="52" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="deepamFlameGradReact" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FFF9C4" />
                <stop offset="35%" stopColor="#FFD54F" />
                <stop offset="70%" stopColor="#FF9800" />
                <stop offset="100%" stopColor="#E65100" />
              </linearGradient>
              <linearGradient id="brassBowlGradReact" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9E6E22" />
                <stop offset="30%" stopColor="#E8B459" />
                <stop offset="70%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#8C5C15" />
              </linearGradient>
            </defs>
            <path d="M50 10 C55 21, 62 30, 62 41 C62 50, 56 55, 50 55 C44 55, 38 50, 38 41 C38 30, 45 21, 50 10 Z" fill="url(#deepamFlameGradReact)" />
            <ellipse cx="50" cy="40" rx="4" ry="9" fill="#FFFFFF" opacity="0.85" />
            <path d="M22 55 C28 72, 72 72, 78 55 Z" fill="url(#brassBowlGradReact)"/>
            <path d="M19 55 C19 52, 81 52, 81 55 C81 57, 19 57, 19 55 Z" fill="#FFE082"/>
            <path d="M46 70 L44 85 L56 85 L54 70 Z" fill="#A47225"/>
            <path d="M32 85 C38 83, 62 83, 68 85 L72 90 L28 90 Z" fill="url(#brassBowlGradReact)"/>
          </svg>
        </div>

        <span className="font-['Cinzel'] text-[11.5px] font-bold tracking-[0.24em] text-[#C6923A] uppercase block mb-1 text-center w-full">
          Sacred Auspicious Ceremony
        </span>

        <motion.h2 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Great_Vibes'] text-[56px] text-[#6B1D1D] my-1 leading-tight drop-shadow-[0_2px_8px_rgba(107,29,29,0.15)] text-center w-full"
        >
          Shubha Muhurtham
        </motion.h2>

        <div className="font-['Cinzel'] text-[11px] font-bold tracking-[0.16em] uppercase text-[#3D1C12]/90 mb-5 text-center w-full max-w-[360px] mx-auto leading-relaxed">
          Dhanur Lagnam · Sacred Kanyadaanam &amp; Saptapadi
        </div>

        {/* Royal Maroon & Gold DateTime Banner (NO WHITE PILL!) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-[#6B1D1D] via-[#872525] to-[#461111] text-[#FFF2DF] rounded-full font-['Cinzel'] text-xs font-bold tracking-wider uppercase shadow-[0_4px_18px_rgba(107,29,29,0.32)] border border-[#E8B459] mb-6"
        >
          <span className="text-[#E8B459]">✦</span>
          <span>Sunday, 13 December 2026 &nbsp;·&nbsp; 7:00 AM – 8:18 AM</span>
          <span className="text-[#E8B459]">✦</span>
        </motion.div>

        {/* Floating Sacred Venue Details (NO STARK WHITE BOX!) */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-3 px-4 text-center"
        >
          <div className="flex justify-center mb-2">
            <svg width="32" height="28" viewBox="0 0 48 36" fill="none">
              <path d="M24 2 C25 10, 29 18, 36 22 C30 26, 26 28, 24 34 C22 28, 18 26, 12 22 C19 18, 23 10, 24 2 Z" fill="#C6923A"/>
              <circle cx="24" cy="31" r="2.5" fill="#6B1D1D"/>
              <path d="M16 34 L32 34" stroke="#C6923A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="font-['Cinzel'] text-lg font-extrabold text-[#1F0808] tracking-wide uppercase mb-1">
            Poovayammal Thirumana Mandapam
          </h3>
          <div className="font-['Cormorant_Garamond'] text-base italic font-semibold text-[#3D1C12] leading-relaxed">
            New Bus Stand Road · Rasipuram, Tamil Nadu 637408
          </div>
        </motion.div>

        {/* Auspicious Lotus Hairline Divider */}
        <div className="flex items-center justify-center gap-3 mt-6 max-w-[240px] mx-auto opacity-70">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C6923A] to-transparent" />
          <span className="text-[#C6923A] text-xs">❦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C6923A] to-transparent" />
        </div>
      </div>
    </section>
  );
};
