"use client";

import React from "react";
import { motion } from "framer-motion";

export const ParentsSection: React.FC = () => {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_50%_28%,#F7E8D6_0%,#F0D9B4_55%,#E8CCA6_100%)] py-16 px-4 text-center overflow-hidden">
      {/* Antique Gold Zari Corner Filigrees */}
      <img src="/images/corner_filigree_gold.png" className="absolute top-2.5 left-2.5 w-16 h-16 pointer-events-none z-10 opacity-85 select-none" alt="" />
      <img src="/images/corner_filigree_gold.png" className="absolute top-2.5 right-2.5 w-16 h-16 pointer-events-none z-10 opacity-85 select-none -scale-x-100" alt="" />
      <img src="/images/corner_filigree_gold.png" className="absolute bottom-2.5 left-2.5 w-16 h-16 pointer-events-none z-10 opacity-85 select-none -scale-y-100" alt="" />
      <img src="/images/corner_filigree_gold.png" className="absolute bottom-2.5 right-2.5 w-16 h-16 pointer-events-none z-10 opacity-85 select-none -scale-100" alt="" />

      <div className="relative z-10 max-w-[420px] mx-auto">
        {/* 3D Sculpted Gold Ganesha Medallion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <img 
            src="/images/ganesha_sculpted_medallion.png" 
            className="w-16 h-auto drop-shadow-[0_4px_12px_rgba(198,146,58,0.45)]" 
            alt="Lord Ganesha Auspicious Idol" 
          />
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Cinzel'] text-xs sm:text-sm font-bold tracking-[0.22em] text-[#6B1D1D] uppercase mb-3.5 leading-relaxed"
        >
          WITH THE BLESSINGS OF OUR BELOVED PARENTS
        </motion.h3>

        {/* Stepped Temple Gopuram Triangle Motif */}
        <div className="flex flex-col items-center gap-[2.5px] mx-auto mb-4 opacity-85" aria-hidden="true">
          <div className="h-[2px] w-1 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-2 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-3 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-4 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-5 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
        </div>

        {/* Bride Parents in Stepped Temple Arch Jharokha Gold Plaque */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[410px] mx-auto drop-shadow-[0_8px_24px_rgba(74,43,33,0.12)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img src="/images/temple_frame1_clean.png?v=5" className="w-full h-auto block select-none pointer-events-none" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2.5 sm:px-4 pt-3.5 pb-2 text-center overflow-hidden">
            <div className="font-['Cormorant_Garamond'] text-[14.5px] sm:text-[18px] font-extrabold text-[#0A0202] tracking-normal leading-tight whitespace-nowrap">
              Smt. Usharani <span className="inline-block mx-1.5 text-[#7E450A] font-bold italic">&amp;</span> Sri. Karunakaran
            </div>
            <div className="font-['Cormorant_Garamond'] italic text-xs sm:text-[14px] font-bold text-[#381509] tracking-widest mt-0.5">
              Rasipuram
            </div>
          </div>
        </motion.div>

        {/* Royal Antique Gold Palmette Crest Divider */}
        <div className="flex items-center justify-center gap-3 my-2 max-w-[300px] mx-auto" aria-hidden="true">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#C6923A]" />
          <img src="/images/temple_crest_divider.png" className="w-12 h-auto drop-shadow-[0_2px_6px_rgba(198,146,58,0.35)]" alt="" />
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#C6923A]" />
        </div>

        {/* Groom Parents in Stepped Temple Arch Jharokha Gold Plaque */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[410px] mx-auto drop-shadow-[0_8px_24px_rgba(74,43,33,0.12)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img src="/images/temple_frame2_clean.png?v=5" className="w-full h-auto block select-none pointer-events-none" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2.5 sm:px-4 pt-3.5 pb-2 text-center overflow-hidden">
            <div className="font-['Cormorant_Garamond'] text-[11.5px] sm:text-[14px] font-extrabold text-[#0A0202] tracking-tight leading-tight whitespace-nowrap">
              Smt. Sathyalakshmi <span className="inline-block mx-1.5 text-[#7E450A] font-bold italic">&amp;</span> Sri. Prasanna Venkatesan
            </div>
            <div className="font-['Cormorant_Garamond'] italic text-xs sm:text-[14px] font-bold text-[#381509] tracking-widest mt-0.5">
              Marandahalli
            </div>
          </div>
        </motion.div>

        {/* Stepped Temple Gopuram Triangle Motif (Inverted) */}
        <div className="flex flex-col-reverse items-center gap-[2.5px] mx-auto mt-4 opacity-85" aria-hidden="true">
          <div className="h-[2px] w-1 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-2 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-3 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-4 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
          <div className="h-[2px] w-5 bg-gradient-to-r from-[#A47225] via-[#E8B459] to-[#A47225] rounded-sm" />
        </div>

        {/* Formal Invitation Message */}
        <motion.p 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Cormorant_Garamond'] italic text-[17px] font-semibold leading-relaxed text-[#240B0B] mt-6 mb-3.5 max-w-[360px] mx-auto"
        >
          "With the blessings of the Divine and the love of our families, we joyfully invite you to witness the sacred union of our beloved daughter and son"
        </motion.p>
      </div>
    </section>
  );
};
export default ParentsSection;
