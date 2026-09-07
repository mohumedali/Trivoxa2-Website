"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "VORTEX", code: "VOR // 01", sub: "CYBERSECURITY" },
  { name: "LUMEN", code: "LUM // 02", sub: "ENTERPRISE AI" },
  { name: "NOVA", code: "NOV // 03", sub: "MOBILITY" },
  { name: "APEX", code: "APX // 04", sub: "REAL ESTATE" },
  { name: "ELEVATE", code: "ELV // 05", sub: "FINTECH" },
  { name: "KRONOS", code: "KRN // 06", sub: "LUXURY WATCHES" },
  { name: "MERIDIAN", code: "MRD // 07", sub: "ENERGY" },
  { name: "AURA", code: "AUR // 08", sub: "HOSPITALITY" },
];

export default function ClientsSection() {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-[#141027] relative" id="clients">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(163,141,255,0.15)] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 bg-[#FFC400] rounded-full" />
              <span className="font-mono text-xs text-[#cbbeff] uppercase tracking-[0.2em] font-semibold">
                Selected Client Partnerships
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Trusted by disruptive global innovators<span className="text-[#FFC400]">.</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-[#FFC400] uppercase tracking-widest font-bold">
            08 ENTERPRISE PARTNERS
          </span>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, borderColor: "#FFC400" }}
              className="relative h-28 rounded-[20px] bg-[rgba(20,16,39,0.7)] border border-[rgba(163,141,255,0.25)] p-4 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {/* Header inside card (Code + Indicator Dot) */}
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#FFC400] font-bold tracking-widest">
                  {partner.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]/40 group-hover:bg-[#FFC400] transition-colors" />
              </div>

              {/* Name & Subtitle */}
              <div className="flex items-baseline justify-between gap-2 mt-auto">
                <span className="text-xl font-black tracking-wider text-white group-hover:text-[#FFC400] transition-colors font-sans">
                  {partner.name}
                </span>
                <span className="font-mono text-[9px] tracking-wider text-[#cbbeff]/70 group-hover:text-white transition-colors uppercase font-medium">
                  {partner.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}