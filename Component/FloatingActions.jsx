"use client";

import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-7 left-5 md:left-8 z-50 flex flex-col gap-3.5"
    >
      {/* زرار WhatsApp */}
      <div className="group relative flex items-center">
        <motion.a
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[rgba(38,28,77,0.75)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#1a1200] border border-[rgba(163,141,255,0.35)] hover:border-[#FFC400] backdrop-blur-xl transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]"
          href="https://wa.me/201028499381"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>

        {/* Hover Tooltip */}
        <div className="pointer-events-none absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-[rgba(14,10,31,0.92)] border border-[rgba(163,141,255,0.3)] backdrop-blur-xl px-3.5 py-1.5 rounded-full shadow-2xl">
          <span className="font-mono text-xs text-[#FFC400] font-bold uppercase tracking-wider">
            WhatsApp Wire
          </span>
        </div>
      </div>

      {/* زرار Call */}
      <div className="group relative flex items-center">
        <motion.a
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Direct Phone Call"
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[rgba(38,28,77,0.75)] hover:bg-[#FFC400] text-[#cbbeff] hover:text-[#1a1200] border border-[rgba(163,141,255,0.35)] hover:border-[#FFC400] backdrop-blur-xl transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]"
          href="tel:+201028499381"
        >
          {/* Phone SVG Icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </motion.a>

        {/* Hover Tooltip */}
        <div className="pointer-events-none absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-[rgba(14,10,31,0.92)] border border-[rgba(163,141,255,0.3)] backdrop-blur-xl px-3.5 py-1.5 rounded-full shadow-2xl">
          <span dir = "ltr" className="font-mono text-xs text-white font-bold tracking-wider">
            +20 102 849 9381
          </span>
        </div>
      </div>
    </aside>
  );
}