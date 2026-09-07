"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { isAr, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // تأثير التمرير (Scroll Effect)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // منع التمرير على الموبايل عند فتح القائمة
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: isAr ? "الرئيسية" : "HOME", href: "/" },
    { name: isAr ? "من نحن" : "ABOUT", href: "/about" },
    { name: isAr ? "أعمالنا" : "OUR WORK", href: "/ourWork" },
    { name: isAr ? "عملاؤنا" : "CLIENTS", href: "/Clients" },
    { name: isAr ? "تواصل معنا" : "CONTACT", href: "/Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 py-3 sm:py-4 ${
          isScrolled
            ? "bg-[#0c091a]/85 backdrop-blur-xl border-b border-[rgba(163,141,255,0.2)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center shrink-0 h-10 sm:h-12 w-32 sm:w-40 relative overflow-hidden z-50"
          >
            <img
              src="/images/LOGOS-06.png"
              alt="TRIVOXA Logo"
              style={{
                transform: "scale(2.8)",
                objectFit: "contain",
              }}
              className="h-full w-full object-contain drop-shadow-[0_2px_12px_rgba(255,196,0,0.55)]"
            />
          </Link>

          {/* ================= DESKTOP NAV LINKS ================= */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[rgba(163,141,255,0.08)] border border-[rgba(163,141,255,0.2)] p-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 lg:px-5 py-2 rounded-full font-mono text-[11px] lg:text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? "text-[#1a1200] bg-[#FFC400] shadow-[0_2px_12px_rgba(255,196,0,0.4)]"
                      : "text-[#cbbeff] hover:text-white hover:bg-[rgba(163,141,255,0.15)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ================= RIGHT CONTROLS (DESKTOP) ================= */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-3.5 py-2 rounded-full bg-[rgba(163,141,255,0.12)] border border-[rgba(163,141,255,0.25)] text-[#FFC400] font-mono text-xs font-bold uppercase tracking-widest hover:border-[#FFC400] hover:bg-[rgba(255,196,0,0.15)] transition-all flex items-center gap-1.5"
            >
              <span className="text-[10px]">🌐</span>
              <span>{isAr ? "EN" : "عربي"}</span>
            </motion.button>

            {/* Quick Action Button */}
<motion.a
  whileHover={{ 
    scale: 1.04, 
    boxShadow: "0 0 25px rgba(255, 196, 0, 0.45)",
    borderColor: "#FFE082" 
  }}
  whileTap={{ scale: 0.96 }}
  href="/Contact#initiate-brief"
  className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFC400] via-[#ffd54f] to-[#FFC400] text-[#120d24] font-sans text-xs font-black uppercase tracking-wider border border-[#FFE082]/60 shadow-[0_4px_15px_rgba(255,196,0,0.25)] transition-all overflow-hidden"
>
  {/* لمعان سائل خفيف خلف النص عند الـ Hover */}
  <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

  {/* نص الزر */}
  <span className="relative z-10 font-bold">
    {isAr ? "ابدأ مشروعك" : "Start Brief"}
  </span>

  {/* الدائرة الصغيرة المحتوية على السهم */}
  <span className="relative z-10 w-5 h-5 rounded-full bg-[#120d24] text-[#FFC400] flex items-center justify-center text-[10px] font-bold group-hover:bg-white group-hover:text-[#120d24] transition-colors duration-300">
    <span className={`transform transition-transform duration-300 ${isAr ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}>
      {isAr ? "←" : "→"}
    </span>
  </span>
</motion.a>
          </div>

          {/* ================= MOBILE CONTROLS & HAMBURGER ================= */}
          <div className="flex items-center gap-2 md:hidden z-50">
            {/* Language Toggle (Mobile Header) */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-full bg-[rgba(163,141,255,0.15)] border border-[rgba(163,141,255,0.3)] text-[#FFC400] font-mono text-[11px] font-bold uppercase"
            >
              {isAr ? "EN" : "عربي"}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-[rgba(163,141,255,0.15)] border border-[rgba(163,141,255,0.3)] flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-[#FFC400] rounded-full transition-transform"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-white rounded-full transition-opacity"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-[#FFC400] rounded-full transition-transform"
              />
            </button>
          </div>

        </div>
      </header>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0c091a]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-10 md:hidden overflow-y-auto"
          >
            {/* Background Light Accent for Mobile Menu */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#FFC400]/10 blur-[120px] pointer-events-none" />

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 relative z-10">
              <span className="font-mono text-[10px] text-[#FFC400] uppercase font-bold tracking-[0.2em] mb-2 border-b border-[rgba(163,141,255,0.2)] pb-2">
                {isAr ? "القائمة الرئيسية" : "NAVIGATION MENU"}
              </span>

              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: isAr ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-[16px] font-mono text-base font-bold uppercase transition-all border ${
                        isActive
                          ? "bg-[#FFC400] text-[#141027] border-[#FFC400] shadow-[0_4px_20px_rgba(255,196,0,0.3)]"
                          : "bg-[rgba(163,141,255,0.08)] text-[#e6deff] border-[rgba(163,141,255,0.2)] hover:border-[#FFC400]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-normal opacity-60">
                        0{(idx + 1).toLocaleString(isAr ? "ar-EG" : "en-US")}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Info & CTA */}
            <div className="flex flex-col gap-4 pt-6 border-t border-[rgba(163,141,255,0.2)] relative z-10">
              <Link
                href="/Contact#initiate-brief"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-[16px] bg-[#FFC400] text-[#141027] font-mono text-sm font-extrabold uppercase tracking-widest text-center shadow-[0_10px_25px_rgba(255,196,0,0.35)] active:scale-95 transition-transform"
              >
                {isAr ? "ابدأ مشروعك الآن" : "START A BRIEF NOW"}
              </Link>

              <div className="flex items-center justify-between font-mono text-xs text-[#cbbeff]/70 pt-2">
                <a href="tel:+201028499381" dir="ltr" className="hover:text-[#FFC400]">
                  +20 102 849 9381
                </a>
                <span>{isAr ? "القاهرة، مصر" : "Cairo, Egypt"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}