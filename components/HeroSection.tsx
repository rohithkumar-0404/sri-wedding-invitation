"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-12-13T07:00:00+05:30").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#F0D9B4] pb-12 text-center overflow-hidden">
      {/* Top Visual: Full-bleed Edge-to-edge Masterpiece Painting Image */}
      <div className="relative w-full overflow-hidden bg-[#F0D9B4]">
        <img 
          src="/images/hero-feet.jpg" 
          alt="South Indian Traditional Wedding" 
          className="w-full h-auto object-contain block select-none pointer-events-none" 
        />
        {/* Soft bottom blend into the matched parchment color */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-[#F0D9B4] pointer-events-none" />
      </div>

      {/* Typography */}
      <div className="px-6 relative z-10 pt-2">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Cinzel'] text-xl font-bold tracking-[0.22em] text-[#6B1D1D] uppercase mb-3"
        >
          TWO FAMILIES UNITE
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Cinzel'] text-[11px] font-medium tracking-[0.16em] text-[#725042] uppercase leading-relaxed max-w-[380px] mx-auto mb-4"
        >
          Together with their families, joyfully invite you to celebrate the sacred union of
        </motion.p>

        {/* Couple Script Names (Full Flourish, Zero Ascender Clipping) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="my-3 relative z-10 overflow-visible"
        >
          <span className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#6B1D1D] block leading-relaxed py-2 drop-shadow-[0_2px_8px_rgba(107,29,29,0.16)]">
            Srinithi K
          </span>
          <span className="font-['Great_Vibes'] text-3xl text-[#C6923A] block my-1">
            &amp;
          </span>
          <span className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#6B1D1D] block leading-relaxed py-2 drop-shadow-[0_2px_8px_rgba(107,29,29,0.16)]">
            Vishnukarthick P
          </span>
        </motion.div>

        {/* Framed Date Lockup with Prominent Save the Date & Grand Date */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block py-3 px-8 border-y-1.5 border-[#C6923A]/60 my-3 relative"
        >
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-[#C6923A]">✦</span>
          <span className="font-['Cinzel'] text-xs font-extrabold tracking-[0.28em] text-[#C6923A] uppercase block mb-1">
            ✦ &nbsp; SAVE THE DATE &nbsp; ✦
          </span>
          <span className="font-['Cinzel'] text-2xl font-extrabold tracking-[0.16em] text-[#6B1D1D] uppercase block drop-shadow-sm leading-tight">
            12 &amp; 13 December 2026
          </span>
          <span className="font-['Cormorant_Garamond'] italic text-sm font-semibold text-[#4A2417] tracking-wide block mt-1">
            Poovayammal Thirumana Mandapam · Rasipuram
          </span>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-[#C6923A]">✦</span>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[360px] mx-auto mt-4 p-4 rounded-2xl bg-[#FFFDF9]/90 border border-[#C6923A]/45 shadow-lg"
        >
          <div className="font-['Cinzel'] text-[11px] font-bold tracking-[0.2em] text-[#6B1D1D] uppercase mb-3">
            Counting Down to Shubha Muhurtham
          </div>
          <div className="flex justify-center gap-3">
            {[
              { val: timeLeft.days, label: "Days" },
              { val: timeLeft.hours, label: "Hours" },
              { val: timeLeft.mins, label: "Mins" },
              { val: timeLeft.secs, label: "Secs" }
            ].map((item, idx) => (
              <div key={idx} className="min-w-[62px] p-2 rounded-xl bg-white/90 border border-[#C6923A]/35 shadow-sm">
                <span className="font-['Cinzel'] text-xl font-bold text-[#6B1D1D] block">
                  {String(item.val).padStart(2, "0")}
                </span>
                <span className="font-['Montserrat'] text-[9px] font-semibold tracking-wider text-[#725042] uppercase block mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
