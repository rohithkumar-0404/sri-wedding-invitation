"use client";

import React from "react";
import { motion } from "framer-motion";

interface FestivityEvent {
  scriptTitle: string;
  subtitle: string;
  date: string;
  time: string;
  desc: string;
  iconPath: string;
}

const dayOneFestivities: FestivityEvent[] = [
  {
    scriptTitle: "Mappillai Azhaippu",
    subtitle: "GROOM'S WELCOME CEREMONY",
    date: "DECEMBER 12, 2026 (SATURDAY)",
    time: "8:40 AM ONWARDS",
    desc: "Traditional grand arrival of the groom with ceremonial nadaswaram melodies and joyous family blessings.",
    iconPath: "/images/event_welcome_kalash.png"
  },
  {
    scriptTitle: "Nischayathartham",
    subtitle: "ENGAGEMENT CEREMONY",
    date: "DECEMBER 12, 2026 (SATURDAY)",
    time: "11:45 AM – 12:55 PM",
    desc: "Formal exchange of wedding vows, sacred thamboolam plates, and auspicious rings uniting both families.",
    iconPath: "/images/event_engagement_rings.png"
  },
  {
    scriptTitle: "Wedding Reception",
    subtitle: "EVENING OF CELEBRATION",
    date: "DECEMBER 12, 2026 (SATURDAY)",
    time: "6:00 PM ONWARDS",
    desc: "An evening of music, congratulatory blessings, exquisite dinner, and celebratory joy with family and friends.",
    iconPath: "/images/event_reception_couple.png?v=4"
  }
];

const dayTwoFestivities: FestivityEvent[] = [
  {
    scriptTitle: "Upanayanam",
    subtitle: "BRAHMA MUHURTHAM INVESTITURE",
    date: "DECEMBER 13, 2026 (SUNDAY)",
    time: "4:45 AM – 5:45 AM",
    desc: "Sacred pre-dawn spiritual investiture and divine Vedic rituals welcoming ancestral and divine blessings.",
    iconPath: "/images/event_upanayanam_bell.png"
  },
  {
    scriptTitle: "Shubha Muhurtham",
    subtitle: "SACRED WEDDING · DHANUR LAGNAM",
    date: "DECEMBER 13, 2026 (SUNDAY)",
    time: "7:00 AM – 8:18 AM",
    desc: "The sacred Mangalya Dharanam & Saptapadi uniting Srinithi & Vishnukarthick in eternal holy matrimony.",
    iconPath: "/images/event_thali_mangalyam.png"
  },
  {
    scriptTitle: "Kalyana Virundhu",
    subtitle: "BLESSINGS & ROYAL WEDDING FEAST",
    date: "DECEMBER 13, 2026 (SUNDAY)",
    time: "8:30 AM ONWARDS",
    desc: "Auspicious elder blessings followed by a traditional grand royal feast served on fresh banana leaves.",
    iconPath: "/images/event_virundhu_feast.png"
  }
];

export const TimelineSection: React.FC = () => {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_50%_20%,#F8EFE2_0%,#F0D9B4_50%,#E7CBA4_100%)] py-16 px-4 overflow-hidden">
      {/* Ambient Mandapam Floral & Lantern Backdrop */}
      <div 
        className="absolute inset-0 bg-cover bg-top opacity-30 pointer-events-none" 
        style={{ backgroundImage: "url('/images/mandapam-timeline-bg.jpg')" }}
        aria-hidden="true" 
      />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F0D9B4] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F0D9B4] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[440px] mx-auto">
        <div className="text-center mb-6">
          <span className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-[#C6923A] block">
            Auspicious Schedule
          </span>
          <h2 className="font-['Great_Vibes'] text-5xl sm:text-6xl text-[#6B1D1D] block mt-1 drop-shadow-[0_2px_8px_rgba(107,29,29,0.15)]">
            Wedding Festivities
          </h2>
          <span className="font-['Cinzel'] text-xs tracking-[0.24em] uppercase text-[#3E2218] font-bold mt-1 block">
            Two Days of Love, Rituals &amp; Joy
          </span>
        </div>

        {/* Day 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center my-6"
        >
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#6B1D1D] via-[#872525] to-[#461111] text-[#FFF2DF] px-6 py-2 rounded-full font-['Cinzel'] text-[11.5px] font-bold tracking-[0.18em] uppercase border border-[#E8B459] shadow-lg">
            <span className="text-[#E8B459]">✦</span>
            <span>DAY 1 · SATURDAY, 12 DECEMBER 2026</span>
            <span className="text-[#E8B459]">✦</span>
          </div>
        </motion.div>

        {dayOneFestivities.map((event, idx) => (
          <React.Fragment key={event.scriptTitle}>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 py-3.5 px-2 hover:translate-x-1 transition-transform"
            >
              <div className="w-[74px] min-w-[74px] flex items-center justify-center">
                <img 
                  src={event.iconPath} 
                  alt={event.scriptTitle} 
                  className="w-full h-auto max-h-20 object-contain drop-shadow-[0_6px_14px_rgba(74,43,33,0.18)]" 
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#6B1D1D] leading-tight">
                  {event.scriptTitle}
                </h3>
                <div className="font-['Cinzel'] text-[10px] font-bold tracking-widest text-[#3E2218] uppercase mt-0.5 opacity-85">
                  {event.subtitle}
                </div>
                <div className="font-['Cinzel'] text-[11px] font-semibold tracking-wider text-[#725042] uppercase mt-0.5">
                  {event.date}
                </div>
                <div className="font-['Cinzel'] text-[11px] font-bold tracking-wider text-[#9E641B] mt-0.5">
                  {event.time}
                </div>
                <p className="font-['Cormorant_Garamond'] italic text-sm text-[#3E2218] leading-snug mt-1 opacity-90">
                  {event.desc}
                </p>
              </div>
            </motion.div>

            {idx < dayOneFestivities.length - 1 && (
              <div className="flex items-center justify-center gap-3 my-2 max-w-[260px] mx-auto opacity-80" aria-hidden="true">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#C6923A]" />
                <svg className="w-5 h-3.5 text-[#6B1D1D] fill-current" viewBox="0 0 24 16">
                  <path d="M12 1 C13 5, 17 9, 23 10 C18 12, 14 13, 12 16 C10 13, 6 12, 1 10 C7 9, 11 5, 12 1 Z" />
                  <circle cx="12" cy="15" r="1.5" fill="#C6923A" />
                </svg>
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#C6923A]" />
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Day 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-9 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#6B1D1D] via-[#872525] to-[#461111] text-[#FFF2DF] px-6 py-2 rounded-full font-['Cinzel'] text-[11.5px] font-bold tracking-[0.18em] uppercase border border-[#E8B459] shadow-lg">
            <span className="text-[#E8B459]">✦</span>
            <span>DAY 2 · SUNDAY, 13 DECEMBER 2026</span>
            <span className="text-[#E8B459]">✦</span>
          </div>
        </motion.div>

        {dayTwoFestivities.map((event, idx) => (
          <React.Fragment key={event.scriptTitle}>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 py-3.5 px-2 hover:translate-x-1 transition-transform"
            >
              <div className="w-[74px] min-w-[74px] flex items-center justify-center">
                <img 
                  src={event.iconPath} 
                  alt={event.scriptTitle} 
                  className="w-full h-auto max-h-20 object-contain drop-shadow-[0_6px_14px_rgba(74,43,33,0.18)]" 
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#6B1D1D] leading-tight">
                  {event.scriptTitle}
                </h3>
                <div className="font-['Cinzel'] text-[10px] font-bold tracking-widest text-[#3E2218] uppercase mt-0.5 opacity-85">
                  {event.subtitle}
                </div>
                <div className="font-['Cinzel'] text-[11px] font-semibold tracking-wider text-[#725042] uppercase mt-0.5">
                  {event.date}
                </div>
                <div className="font-['Cinzel'] text-[11px] font-bold tracking-wider text-[#9E641B] mt-0.5">
                  {event.time}
                </div>
                <p className="font-['Cormorant_Garamond'] italic text-sm text-[#3E2218] leading-snug mt-1 opacity-90">
                  {event.desc}
                </p>
              </div>
            </motion.div>

            {idx < dayTwoFestivities.length - 1 && (
              <div className="flex items-center justify-center gap-3 my-2 max-w-[260px] mx-auto opacity-80" aria-hidden="true">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#C6923A]" />
                <svg className="w-5 h-3.5 text-[#6B1D1D] fill-current" viewBox="0 0 24 16">
                  <path d="M12 1 C13 5, 17 9, 23 10 C18 12, 14 13, 12 16 C10 13, 6 12, 1 10 C7 9, 11 5, 12 1 Z" />
                  <circle cx="12" cy="15" r="1.5" fill="#C6923A" />
                </svg>
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#C6923A]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default TimelineSection;
