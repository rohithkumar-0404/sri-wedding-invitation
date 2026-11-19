"use client";

import React from "react";
import { motion } from "framer-motion";

export const GallerySection: React.FC = () => {
  return (
    <section className="relative bg-[#F0D9B4] pt-12 pb-3 px-6 text-center">
      <h3 className="font-['Great_Vibes'] text-4xl text-[#6B1D1D] mb-6">
        A Journey of Two Hearts
      </h3>

      {/* Candid Train Moment */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#FFF9F0] to-[#F5E5D0] p-3 pb-5 border border-[#C6923A]/45 rounded-2xl shadow-md"
      >
        <img 
          src="/assets/images/candid_train.jpg" 
          alt="Srinithi &amp; Vishnukarthick" 
          className="w-full h-80 object-cover rounded-xl block" 
        />
        <div className="font-['Cormorant_Garamond'] italic text-sm text-[#4A2B21] mt-3 leading-snug">
          "From cherished train journeys and quiet conversations to a lifetime of togetherness."
        </div>
        <div className="font-['Great_Vibes'] text-3xl text-[#C6923A] mt-1.5 flex items-center justify-center gap-2">
          <span>Sri</span>
          <span className="text-[#9E2A2B] text-xl animate-pulse" aria-label="love">♥</span>
          <span>Karthi</span>
        </div>
      </motion.div>
    </section>
  );
};
export default GallerySection;
