"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeGateProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeGate: React.FC<EnvelopeGateProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleTapSeal = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (isOpening || isOpen) return;
    setIsOpening(true);
    // Allow cinematic zoom-in & luminous dissolve transition
    setTimeout(() => {
      onOpen();
    }, 850);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-splash"
          initial={{ opacity: 1, scale: 1 }}
          animate={isOpening ? { opacity: 0, scale: 1.12 } : { opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.12 }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A1812] bg-[radial-gradient(circle_at_center,#3D1C13_0%,#1D0B08_100%)] overflow-hidden cursor-pointer"
          onClick={handleTapSeal}
          onTouchEnd={handleTapSeal}
        >
          {/* Centered Mobile-first Envelope Front-Page Container (Max 480px) */}
          <div className="relative w-full max-w-[480px] h-dvh max-h-dvh flex items-center justify-center overflow-hidden shadow-2xl bg-[#F4E4D4]">
            {/* Finished Front-Page Envelope Painting Artwork */}
            <img
              src="/images/envelope-front.png"
              alt="Srinithi & Vishnukarthick Wedding Invitation Envelope"
              className="w-full h-full object-cover object-center block select-none pointer-events-none"
            />

            {/* Circular Interactive Wax Seal Hotspot Button */}
            <button
              onClick={handleTapSeal}
              onTouchEnd={handleTapSeal}
              className="absolute top-[53.2%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full cursor-pointer z-20 outline-none p-0 bg-transparent border-0 select-none group"
              aria-label="Tap the seal to open invitation"
              type="button"
            >
              {/* Subtle Soft Golden Ambient Pulse Glow */}
              <motion.span
                animate={{
                  scale: [0.98, 1.04, 0.98],
                  opacity: [0.55, 0.95, 0.55],
                  boxShadow: [
                    "0 0 16px rgba(198, 146, 58, 0.35)",
                    "0 0 32px rgba(198, 146, 58, 0.75), 0 0 45px rgba(232, 130, 42, 0.4)",
                    "0 0 16px rgba(198, 146, 58, 0.35)"
                  ]
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1.5 rounded-full border border-[#C6923A]/50 pointer-events-none"
              />

              {/* Expanding Ripple Ring */}
              <motion.span
                animate={{
                  scale: [0.95, 1.25],
                  opacity: [0.75, 0]
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute inset-0 rounded-full border-2 border-[#C6923A]/60 pointer-events-none"
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
