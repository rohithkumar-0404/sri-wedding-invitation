"use client";

import React from "react";
import { motion } from "framer-motion";

export const VenueSection: React.FC = () => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Poovayammal+Thirumana+Mandapam,+F56R%2BMX3,+New+Bus+Stand+Rd,+V.Nagar,+Rasipuram,+Tamil+Nadu+637408";

  return (
    <section className="relative bg-[#F4E4D4] py-16 px-6 text-center overflow-hidden">
      <div className="border border-[#C6923A]/40 rounded-3xl p-6 bg-[#FFFDF9] shadow-md relative">
        {/* Venue Photo Rendering */}
        <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 border border-[#C6923A]/30 bg-[#200B0A]">
          <img 
            src="/images/venue.jpg" 
            alt="Poovayammal Thirumana Mandapam" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Lotus Icon */}
        <div className="flex justify-center mb-1">
          <svg className="w-5 h-5 text-[#6B1D1D] fill-current" viewBox="0 0 24 24">
            <path d="M12 4C12.5 6 13.8 7.5 15.5 8.7C16.8 9.5 18.5 10 20 10C19 11.5 17.2 12.8 15.5 13.5C16.2 15 16.8 17 16.8 18.5C15 18 13.2 17 12 15.5C10.8 17 9 18 7.2 18.5C7.2 17 7.8 15 8.5 13.5C6.8 12.8 5 11.5 4 10C5.5 10 7.2 9.5 8.5 8.7C10.2 7.5 11.5 6 12 4Z"/>
          </svg>
        </div>

        <span className="font-['Cinzel'] text-xs font-bold tracking-[0.22em] text-[#C6923A] uppercase block mb-1">
          VENUE
        </span>
        <h3 className="font-['Cinzel'] text-xl font-bold text-[#6B1D1D] tracking-wide mb-2">
          Poovayammal Thirumana Mandapam
        </h3>

        <div className="font-['Cormorant_Garamond'] text-sm text-[#7A5648] leading-relaxed mb-4">
          F56R+MX3, New Bus Stand Rd, V.Nagar,<br />
          Rasipuram, Tamil Nadu 637408
        </div>

        <p className="font-['Cormorant_Garamond'] italic text-sm text-[#4A2B21] leading-relaxed max-w-[360px] mx-auto mb-6">
          Nestled in the serene town of Rasipuram, Poovayammal Thirumana Mandapam stands ready to welcome you with the fragrance of fresh jasmine, the warmth of festive lights, and sacred traditional melodies. We eagerly await your gracious presence to bless our new beginning.
        </p>

        {/* Real Interactive CTA Button with Fallback */}
        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          onClick={() => {
            window.open(mapsUrl, "_blank", "noopener,noreferrer");
          }}
          className="relative z-30 pointer-events-auto inline-flex items-center justify-center gap-2.5 bg-[#6B1D1D] text-[#F4E4D4] hover:text-white px-7 py-3.5 rounded-full font-['Montserrat'] text-xs font-semibold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer group"
        >
          {/* Map Pin */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>CLICK FOR LOCATION</span>
          {/* Chevron */}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </motion.a>

        {/* Small Lotus Flourish */}
        <div className="flex justify-center mt-4">
          <svg className="w-5 h-5 text-[#C6923A] fill-current" viewBox="0 0 24 24">
            <path d="M12 4C12.5 6 13.8 7.5 15.5 8.7C16.8 9.5 18.5 10 20 10C19 11.5 17.2 12.8 15.5 13.5C16.2 15 16.8 17 16.8 18.5C15 18 13.2 17 12 15.5C10.8 17 9 18 7.2 18.5C7.2 17 7.8 15 8.5 13.5C6.8 12.8 5 11.5 4 10C5.5 10 7.2 9.5 8.5 8.7C10.2 7.5 11.5 6 12 4Z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
