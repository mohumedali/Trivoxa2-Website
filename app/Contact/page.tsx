"use client";

import { useState } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useLanguage } from "@/context/LanguageContext";
import FloatingActions from "@/component/FloatingActions";
import { motion, Variants } from "framer-motion";

// ================= Dynamic Motion Variants =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 45, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

// حل مشكلة TypeScript هنا بتحديد نوع Variants وإضافة as const للـ ease
const cardHover3D: Variants = {
  rest: { scale: 1, y: 0, rotateX: 0, rotateY: 0, borderColor: "rgba(163,141,255,0.3)" },
  hover: { 
    scale: 1.02, 
    y: -8, 
    borderColor: "rgba(255,196,0,0.8)",
    boxShadow: "0px 20px 40px rgba(255, 196, 0, 0.25)",
    transition: { duration: 0.35, ease: [0, 0, 0.58, 1] } 
  }
};

export default function ContactPage() {
  const { isAr } = useLanguage();

  const servicesList = isAr ? [
    "الهوية البصرية",
    "وسائل التواصل",
    "صناعة المحتوى",
    "الحملات الإعلانية",
    "التسويق الرقمي",
    "الإخراج الإبداعي"
  ] : [
    "BRANDING",
    "SOCIAL MEDIA",
    "CONTENT CREATION",
    "CAMPAIGNS",
    "DIGITAL MARKETING",
    "CREATIVE DIRECTION"
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([
    isAr ? "الإخراج الإبداعي" : "CREATIVE DIRECTION"
  ]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <main className="w-full bg-[#0c091a] min-h-screen text-[#e6deff] font-sans selection:bg-[#FFC400] selection:text-[#1a1200] overflow-hidden">
      <Navbar />

      <div className="flex flex-col w-full relative">
        
        {/* ================= BACKGROUND ANIMATED GLOW ORBS ================= */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1], 
              x: [0, 50, 0],
              opacity: [0.25, 0.45, 0.25] 
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#4c34a2]/35 blur-[160px]"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1], 
              y: [0, -60, 0],
              opacity: [0.15, 0.35, 0.15] 
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-[#FFC400]/15 blur-[170px]"
          />
        </div>

        {/* ================= 01. FULL-SCREEN HERO SECTION ================= */}
        <section className="relative z-10 w-full min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-16 pt-28 pb-16 bg-gradient-to-b from-[#141027]/80 via-[#0f0b22]/90 to-[#0c091a]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center my-auto">
            
            {/* اليسار: عنوان الهيرو والكونتنت المتحرك */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInLeft} 
              className="lg:col-span-8 flex flex-col items-start"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(46,35,91,0.65)] border border-[rgba(163,141,255,0.35)] backdrop-blur-xl shadow-lg mb-6 cursor-pointer"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC400] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFC400]" />
                </span>
                <span className="font-mono text-xs text-[#cbbeff] font-semibold uppercase tracking-[0.2em]">
                  {isAr ? "قناة التواصل • بروتوكول استقبال المشروعات" : "CONTACT TRANSMISSION • INTAKE PROTOCOL"}
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight leading-[0.98] mb-6">
                {isAr ? (
                  <>
                    لنبتكر معاً <br />
                    <motion.span 
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="bg-gradient-to-r from-[#FFC400] via-[#FFE082] to-[#FFC400] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
                    >
                      الخطوة القادمة.
                    </motion.span>
                  </>
                ) : (
                  <>
                    LET’S CREATE <br />
                    <motion.span 
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="bg-gradient-to-r from-[#FFC400] via-[#FFE082] to-[#FFC400] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
                    >
                      WHAT’S NEXT.
                    </motion.span>
                  </>
                )}
              </h1>

              <p className="text-base md:text-lg text-[#d3c5ab] max-w-2xl mb-8 leading-relaxed font-normal">
                {isAr 
                  ? "هل لديك مشروع، حملة تسويقية أو فكرة طموحة؟ تواصل مع مكتبنا الرئيسي بالقاهرة أو أرسل تفاصيل مشروعك أدناه."
                  : "Have a project, campaign or ambitious idea in mind? Reach out to our Cairo central desk or submit a direct brief below."
                }
              </p>

              {/* الأزرار الـ 3D التفاعلية */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.08, y: -4, boxShadow: "0 12px 30px rgba(255,196,0,0.5)" }}
                  whileTap={{ scale: 0.92 }}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="https://wa.me/201028499381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
                  </svg>
                  <span>{isAr ? "واتساب" : "WHATSAPP US"}</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -4, borderColor: "#FFC400", color: "#ffffff" }}
                  whileTap={{ scale: 0.92 }}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="tel:+201028499381"
                >
                  <span>{isAr ? "اتصل بنا" : "CALL US"}</span>
                  <motion.span 
                    animate={{ x: isAr ? [0, -5, 0] : [0, 5, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-sm mx-1"
                  >
                    {isAr ? "←" : "→"}
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>

            {/* اليمين: كارت حالة الاستوديو التفاعلي 3D */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInRight}
              className="lg:col-span-4 flex flex-col justify-center"
            >
              <motion.div 
                initial="rest"
                whileHover="hover"
                variants={cardHover3D}
                className="liquid-glass-card rounded-[26px] p-7 border shadow-2xl flex flex-col gap-5 relative overflow-hidden backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between border-b border-[rgba(163,141,255,0.2)] pb-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#FFC400] tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFC400] shadow-[0_0_8px_#FFC400]" />
                    {isAr ? "حالة الاستوديو" : "STUDIO STATUS"}
                  </span>
                  <span className="text-[10px] font-mono text-[#cbbeff] px-2.5 py-1 rounded-full bg-[rgba(163,141,255,0.15)] border border-[rgba(163,141,255,0.25)] font-bold">
                    HQ{(1).toLocaleString(isAr ? 'ar-EG' : 'en-US')} // {isAr ? "القاهرة" : "CAIRO"}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-[#cbbeff]/70 uppercase">{isAr ? "الخط المباشر" : "DIRECT WIRE"}</span>
                  <a href="tel:+201028499381" dir="ltr" className="text-2xl font-extrabold text-white hover:text-[#FFC400] transition-colors w-fit">
                    +20 102 849 9381
                  </a>
                </div>

                <div className="p-4 rounded-[18px] bg-[rgba(12,9,26,0.65)] border border-[rgba(163,141,255,0.2)] flex items-center justify-between font-mono text-xs">
                  <div className="flex flex-col">
                    <span className="text-[#FFC400] font-bold">{isAr ? "وضع العمل الحالي" : "STUDIO MODE"}</span>
                    <span className="text-[#d3c5ab] text-[11px]">
                      {isAr ? "متاح لاستقبال مشاريع الربع القادم" : "OPEN FOR Q2 BRIEFINGS"}
                    </span>
                  </div>
                  <motion.span 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="text-xl text-[#FFC400]"
                  >
                    ✦
                  </motion.span>
                </div>

                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(163,141,255,0.25)", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.97 }}
                  href="#initiate-brief"
                  className="w-full py-3.5 rounded-[14px] bg-[rgba(163,141,255,0.15)] border border-[rgba(163,141,255,0.3)] text-center font-mono text-xs font-bold uppercase text-[#cbbeff] transition-all"
                >
                  {isAr ? "تعبئة نموذج المشروع ↓" : "FILL BRIEF FORM ↓"}
                </motion.a>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ================= 02. MAIN FORM & STUDIO DISPATCH SECTION ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-20 bg-[#0f0b22]" id="initiate-brief">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            
            {/* Top Bar Header */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[rgba(163,141,255,0.15)] pb-6"
            >
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest">
                <span className="px-3 py-1 rounded-full bg-[#FFC400] text-[#141027] font-extrabold uppercase shadow-[0_0_12px_rgba(255,196,0,0.5)]">
                  {isAr ? "إرسال البيانات" : "TRANSMIT BRIEF"}
                </span>
                <span className="text-[#cbbeff]/40">•</span>
                <span className="text-[#cbbeff] uppercase font-semibold">{isAr ? "بدء التعاون الإبداعي" : "INITIATE COLLABORATION"}</span>
              </div>
              <div className="font-mono text-xs text-[#cbbeff]/70 tracking-wider" dir="ltr">
                CAIRO HQ HQ01 // 30.0444° N, 31.2357° E
              </div>
            </motion.div>

            {/* Main Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-2">
              
              {/* Left Column - Studio Info Cards */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="lg:col-span-5 flex flex-col gap-6"
              >
                
                {/* Info Card */}
                <motion.div 
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover3D}
                  className="liquid-glass-card rounded-[24px] p-6 sm:p-8 flex flex-col gap-6 border shadow-2xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[rgba(163,141,255,0.15)] pb-4">
                    <span className="font-mono text-xs font-bold uppercase text-[#cbbeff] tracking-widest">
                      {isAr ? "المكتب الرئيسي — استقبال طلبات المشروعات" : "DIRECT DISPATCH — STUDIO INTAKE"}
                    </span>
                    <span className="font-mono text-[10px] text-[#FFC400] font-bold" dir="ltr">TRX // 01</span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#cbbeff]/70 tracking-wider block mb-1">
                      {isAr ? "الهاتف المباشر للاستوديو" : "STUDIO DIRECT LINE"}
                    </span>
                    <a href="tel:+201028499381" dir="ltr" className="text-2xl sm:text-3xl font-extrabold text-white hover:text-[#FFC400] transition-colors inline-block">
                      +20 102 849 9381
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#cbbeff]/70 tracking-wider block mb-1">
                        {isAr ? "الاستفسارات العامة" : "GENERAL INQUIRIES"}
                      </span>
                      <a href="mailto:hello@trivoxa.agency" className="font-mono text-xs text-white hover:text-[#FFC400] transition-colors truncate block">
                        hello@trivoxa.agency
                      </a>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#cbbeff]/70 tracking-wider block mb-1">
                        {isAr ? "الشراكات والأعمال" : "NEW BUSINESS / RFP"}
                      </span>
                      <a href="mailto:partnerships@trivoxa.agency" className="font-mono text-xs text-white hover:text-[#FFC400] transition-colors truncate block">
                        partnerships@trivoxa.agency
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#cbbeff]/70 tracking-wider block mb-1">
                      {isAr ? "المقر الرئيسي للاستوديو بالقاهرة" : "CAIRO CENTRAL STUDIO HQ"}
                    </span>
                    <h3 className="text-base font-bold text-white mb-1">{isAr ? "منطقة الزمالك الإبداعية" : "Zamalek Creative District"}</h3>
                    <span className="font-mono text-xs text-[#cbbeff]/70 block">
                      {isAr ? "القاهرة، مصر // القطاع المركزي" : "Cairo, Egypt // Cairo Central Zone"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-[16px] bg-[rgba(12,9,26,0.7)] border border-[rgba(163,141,255,0.25)] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
                      <span className="font-mono text-xs text-[#d3c5ab]">
                        {isAr 
                          ? `الإثنين — الجمعة، ${(10).toLocaleString('ar-EG')}:٠٠ ص — ${(7).toLocaleString('ar-EG')}:٠٠ م` 
                          : "Mon — Fri, 10:00 AM — 07:00 PM CLT"}
                      </span>
                    </div>
                    <span className="text-[#FFC400] text-xs">{isAr ? "‹" : "›"}</span>
                  </div>

                  {/* Social Outlets Grid */}
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#cbbeff]/70 tracking-wider block mb-3">
                      {isAr ? "منصات التواصل الاجتماعي" : "SOCIAL OUTLETS"}
                    </span>
                    <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                      {[
                        { name: "FACEBOOK", href: "https://facebook.com" },
                        { name: "INSTAGRAM", href: "https://instagram.com" },
                        { name: "LINKEDIN", href: "https://linkedin.com" },
                        { name: "BEHANCE", href: "https://behance.net" }
                      ].map((item) => (
                        <motion.a
                          key={item.name}
                          whileHover={{ scale: 1.05, borderColor: "#FFC400", color: "#FFC400", backgroundColor: "rgba(255,196,0,0.1)" }}
                          whileTap={{ scale: 0.95 }}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-[12px] bg-[rgba(18,13,42,0.6)] border border-[rgba(163,141,255,0.2)] text-[#cbbeff] flex items-center justify-between transition-all"
                        >
                          <span>{item.name}</span>
                          <span className="text-[10px]">↗</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Map Card */}
                <motion.div 
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover3D}
                  className="liquid-glass-card rounded-[24px] p-4 border overflow-hidden flex flex-col gap-3"
                >
                  <div className="aspect-[21/9] w-full rounded-[16px] bg-[#1a1233] relative overflow-hidden border border-white/10 flex items-center justify-center group">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjdA12zEtHzyMBVDqIogj-aqWB01hCcmKeIoEX3aHJ1M3jyhVN4jRsLvMRflScdcABxfQWg-TCmieKKj-i2cRzli7j6wu2yEMT-r9s9bPhtcmDvuNzSsFfRpdd9YpREU10Ormb_oJ5Z_837Js0XLIkt_g3_Db5fKKleVqYNkLp3xOKieJrW6ZoQ8ZvOGqABtwtUNftzu4cRPXy0fQ7P9FKsj9uqxNIjU4QECM8VGIarsmB5mTtEH" 
                      alt="Zamalek Map" 
                      className="w-full h-full object-cover grayscale opacity-60 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent" />
                    <span className="absolute font-mono text-xs font-bold text-[#FFC400] bg-[rgba(12,9,26,0.9)] px-3.5 py-1 rounded-full border border-[#FFC400]/40 shadow-lg">
                      {isAr ? "مقر استوديو الزمالك" : "ZAMALEK STUDIO HQ"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] px-2 text-[#cbbeff]">
                    <span>{isAr ? "خريطة موقع الاستوديو" : "STUDIO COORDINATES MAP"}</span>
                    <span className="text-[#FFC400] font-bold">{isAr ? "جزيرة الزمالك — القاهرة" : "Zamalek Island — Nile Central Bank"}</span>
                  </div>
                </motion.div>

              </motion.div>

              {/* Right Column - Interactive Form */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="lg:col-span-7"
              >
                <form className="liquid-glass-card rounded-[28px] p-6 sm:p-10 border border-[rgba(163,141,255,0.35)] shadow-2xl flex flex-col gap-6 relative overflow-hidden">
                  <div>
                    <span className="font-mono text-xs text-[#FFC400] font-bold uppercase tracking-widest block mb-1">
                      {isAr ? "نموذج المشروع" : "TRANSMIT BRIEF"}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{isAr ? "ابدأ الشراكة معنا" : "Initiate Collaboration"}</h2>
                    <p className="text-xs sm:text-sm text-[#d3c5ab] font-mono">
                      {isAr 
                        ? `أدخل تفاصيل مشروعك أدناه. يقوم فريقنا بمراجعة كافة الطلبات خلال ${(48).toLocaleString('ar-EG')} ساعة.` 
                        : "Fill in the parameters below. Our partners review every submission within 48 hours."}
                    </p>
                  </div>

                  {/* Input Grid 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-[#cbbeff] uppercase font-bold">
                        {isAr ? `٠١ // الاسم / ممثل الشركة *` : "01 // YOUR NAME / COMPANY LEAD *"}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={isAr ? "مثال: أحمد محمود" : "e.g. Elena Rostova"} 
                        className="bg-[rgba(12,9,26,0.75)] border border-[rgba(163,141,255,0.3)] rounded-[14px] p-4 text-white text-sm focus:outline-none focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400] transition-all font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-[#cbbeff] uppercase font-bold">
                        {isAr ? `٠٢ // اسم الشركة أو العلامة التجارية *` : "02 // COMPANY OR BRAND NAME *"}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={isAr ? "مثال: شركة الأفق للإعلام" : "e.g. Apex Global Ventures"} 
                        className="bg-[rgba(12,9,26,0.75)] border border-[rgba(163,141,255,0.3)] rounded-[14px] p-4 text-white text-sm focus:outline-none focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400] transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Input Grid 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-[#cbbeff] uppercase font-bold">
                        {isAr ? `٠٣ // البريد الإلكتروني للمؤسسة *` : "03 // BUSINESS EMAIL ADDRESS *"}
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="elena@apexventures.io" 
                        className="bg-[rgba(12,9,26,0.75)] border border-[rgba(163,141,255,0.3)] rounded-[14px] p-4 text-white text-sm focus:outline-none focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400] transition-all font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-[#cbbeff] uppercase font-bold">
                        {isAr ? `٠٤ // رقم الهاتف والتواصل المباشر` : "04 // DIRECT CONTACT NUMBER"}
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+20 100 000 0000" 
                        className="bg-[rgba(12,9,26,0.75)] border border-[rgba(163,141,255,0.3)] rounded-[14px] p-4 text-white text-sm focus:outline-none focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400] transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Services Selection Pills */}
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="font-mono text-xs text-[#cbbeff] uppercase font-bold">
                        {isAr ? `٠٥ // الخدمات المطلوبة (يمكن اختيار أكثر من خدمة)` : "05 // SERVICES NEEDED (SELECT ALL THAT APPLY)"}
                      </label>
                      <span className="font-mono text-[10px] text-[#cbbeff]/60">{isAr ? "متعدد الخيارات" : "Multi-select enabled"}</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {servicesList.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <motion.button
                            type="button"
                            key={service}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleService(service)}
                            className={`p-3.5 rounded-[12px] font-mono text-xs font-bold uppercase transition-all duration-300 text-center border ${
                              isSelected
                                ? "bg-[#FFC400] text-[#141027] border-[#FFC400] shadow-[0_4px_20px_rgba(255,196,0,0.45)]"
                                : "bg-[rgba(12,9,26,0.6)] text-[#cbbeff] border-[rgba(163,141,255,0.25)] hover:border-white"
                            }`}
                          >
                            {service}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="flex flex-col gap-2 pt-2">
                    <label className="font-mono text-xs text-[#cbbeff] uppercase font-bold">
                      {isAr ? `٠٦ // تفاصيل وأهداف المشروع *` : "06 // PROJECT DETAILS & OBJECTIVES *"}
                    </label>
                    <textarea 
                      rows={4}
                      required
                      placeholder={isAr ? "اكتب لنا عن نطاق المشروع، الميزانية المتوقعة، الجدول الزمني، ورؤيتك..." : "Tell us about your scope, budget, timeline, and vision..."} 
                      className="bg-[rgba(12,9,26,0.75)] border border-[rgba(163,141,255,0.3)] rounded-[14px] p-4 text-white text-sm focus:outline-none focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400] transition-all font-sans resize-none"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-center gap-3 pt-1">
                    <input 
                      type="checkbox" 
                      id="nda" 
                      className="w-4 h-4 accent-[#FFC400] rounded cursor-pointer"
                    />
                    <label htmlFor="nda" className="font-mono text-xs text-[#d3c5ab] cursor-pointer">
                      {isAr ? "يتطلب توقيع اتفاقية عدم إفشاء سرية المعلومات (NDA) قبل بدء المناقشات." : "Require mutual non-disclosure agreement prior to briefing transmission."}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#ffe082", boxShadow: "0 8px 30px rgba(255,196,0,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-2 px-8 rounded-[16px] bg-[#FFC400] text-[#141027] font-mono text-sm font-extrabold uppercase tracking-widest flex items-center justify-between transition-all cursor-pointer mt-2"
                  >
                    <span>{isAr ? "إرسال البيانات" : "SEND INQUIRY"}</span>
                    <motion.span 
                      whileHover={{ x: isAr ? -5 : 5 }}
                      className="w-8 h-8 rounded-full bg-[#141027] text-[#FFC400] flex items-center justify-center font-bold text-base"
                    >
                      {isAr ? "←" : "→"}
                    </motion.span>
                  </motion.button>
                </form>
              </motion.div>

            </div>

            {/* Bottom 3 Cards Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10"
            >
              {[
                { 
                  id: (1).toLocaleString(isAr ? 'ar-EG' : 'en-US'), 
                  icon: "⚡", 
                  title: isAr ? `استجابة خلال ${(48).toLocaleString('ar-EG')} ساعة` : "48h Response S.L.A", 
                  desc: isAr ? "مراجعة فورية. يتم الاطلاع على كافة المشروعات المقدمة بواسطة الإدارة التنفيذية في غضون يومي عمل." : "Guaranteed review time. Every submitted inquiry is triaged by leadership within two standard business days.", 
                  tag: isAr ? "• قائمة معالجة فورية" : "• DIRECT INTAKE QUEUE", 
                  color: "#FFC400" 
                },
                { 
                  id: (2).toLocaleString(isAr ? 'ar-EG' : 'en-US'), 
                  icon: "🔒", 
                  title: isAr ? "سرية وحماية تامة" : "Strict NDA Protection", 
                  desc: isAr ? "سرية مطلقة لبياناتك، خطتك، ونطاق الحملة مع حمايتها بشكل كامل في جميع المراحل." : "Confidential briefings. Your intellectual capital, proprietary roadmap, and campaign scope remain guarded at all times.", 
                  tag: isAr ? "• معالجة مشفرة" : "• ENCRYPTED HANDLING", 
                  color: "#cbbeff" 
                },
                { 
                  id: (3).toLocaleString(isAr ? 'ar-EG' : 'en-US'), 
                  icon: "✦", 
                  title: isAr ? "إشراف مباشر من الشركاء" : "Direct Partner Involvement", 
                  desc: isAr ? "قيادة مباشرة من المدراء الإبداعيين دون وجود وسطاء أو إسناد للمبتدئين." : "Led by senior executive creative directors. No junior handoffs or account intermediaries.", 
                  tag: isAr ? "• قيادة تنفيذية مباشرة" : "• PARTNER-LED CRAFT", 
                  color: "#FFC400" 
                },
              ].map((card) => (
                <motion.div 
                  key={card.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02, borderColor: card.color, boxShadow: `0 15px 35px ${card.color}25` }}
                  className="liquid-glass-card rounded-[22px] p-6 flex flex-col justify-between border border-[rgba(163,141,255,0.35)] transition-all cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-extrabold" style={{ color: card.color }}>0{card.id}</span>
                      <span className="text-xs font-mono font-bold" style={{ color: card.color }}>{card.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-xs text-[#d3c5ab] font-mono leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest" style={{ color: card.color }}>
                    {card.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

      </div>

      {/* ================= FINAL CALL TO ACTION SECTION ================= */}
      <section className="w-full px-6 md:px-12 py-20 bg-[#0f0b22] relative overflow-hidden" id="contact">
        <div className="relative z-10 max-w-5xl mx-auto w-full rounded-[28px] liquid-glass p-8 md:p-14 text-center flex flex-col items-center border border-[rgba(163,141,255,0.3)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(20,16,39,0.7)] border border-[rgba(163,141,255,0.3)] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC400] shadow-[0_0_8px_#FFC400]" />
            <span className="font-mono text-xs text-[#FFC400] uppercase tracking-[0.2em] font-bold">
              {isAr ? "ابدأ التواصل معنا" : "Initiate Transmission"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mb-4">
            {isAr ? (
              <>هل لديك فكرة تستحق <span className="text-[#FFC400] italic">الانطلاق</span>؟</>
            ) : (
              <>Have an idea worth <span className="text-[#FFC400] italic">shifting</span>?</>
            )}
          </h2>
          <p className="text-base md:text-lg text-[#d3c5ab] max-w-xl mb-8 leading-relaxed">
            {isAr 
              ? "دعنا نحول حضورك في السوق إلى تجربة لا تُنسى. نستقبل حالياً طلبات ومشاريع جديدة للربع القادم."
              : "Let's turn your market presence into something people remember. We are currently accepting select client briefs for the upcoming quarter."
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
              href="https://wa.me/201028499381" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
              </svg>
              <span>{isAr ? "واتساب" : "WHATSAPP US"}</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
              href="tel:+201028499381"
            >
              <span>{isAr ? "اتصل بنا" : "CALL US"}</span>
              <span className="text-sm mx-1">{isAr ? "←" : "→"}</span>
            </motion.a>
          </div>
        </div>
      </section>

      <FloatingActions />
      <Footer />
    </main>
  );
}