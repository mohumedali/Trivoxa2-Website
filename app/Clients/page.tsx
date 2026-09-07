"use client";

import { useState } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useLanguage } from "@/context/LanguageContext";
import FloatingActions from "@/component/FloatingActions";
import AnimatedCounter from "@/component/AnimatedCounter";
import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";

// ================= Animation Variants =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

// ================= 3D Tilt Card Component =================
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`liquid-glass-card rounded-[22px] border border-[rgba(163,141,255,0.35)] shadow-[0_15px_35px_rgba(0,0,0,0.65)] hover:border-[#FFC400] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(255,196,0,0.25)] transition-colors duration-300 relative cursor-pointer backdrop-blur-xl ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function ClientsPage() {
  const { isAr } = useLanguage();
  const [activeTab, setActiveTab] = useState("ALL");

  const trustedLogos = [
    { name: "VORTEX", sector: isAr ? "الأمن السيبراني" : "Cybersecurity", code: "VRX // 01" },
    { name: "LUMEN", sector: isAr ? "الذكاء الاصطناعي" : "Enterprise AI", code: "LMN // 02" },
    { name: "NOVA", sector: isAr ? "النقل الذكي" : "Mobility", code: "NVA // 03" },
    { name: "APEX", sector: isAr ? "العقارات الفاخرة" : "Real Estate", code: "APX // 04" },
    { name: "ELEVATE", sector: isAr ? "التكنولوجيا المالية" : "Fintech", code: "ELV // 05" },
    { name: "KRONOS", sector: isAr ? "الساعات الفاخرة" : "Luxury Watches", code: "KRN // 06" },
    { name: "MERIDIAN", sector: isAr ? "الطاقة والاستثمار" : "Energy", code: "MRD // 07" },
    { name: "AURA", sector: isAr ? "الضيافة الفاخرة" : "Hospitality", code: "AUR // 08" },
  ];

  const industriesData = [
    {
      title: isAr ? "الذكاء الاصطناعي والتكنولوجيا" : "AI & ENTERPRISE TECH",
      count: 14,
      desc: isAr 
        ? "بناء وتصميم الهويات البصرية لمنصات الذكاء الاصطناعي، أنظمة SaaS، وبنية الأمن السيبراني." 
        : "Positioning LLM infrastructure, SaaS consoles, and cyber networks.",
      clients: ["LUMEN TECH", "SYNAPSE AI", "VORTEX CYBER"]
    },
    {
      title: isAr ? "الفخامة والأزياء العالمية" : "LUXURY & HAUTE COUTURE",
      count: 18,
      desc: isAr 
        ? "ابتكار تجارب رقمية فاخرة لعلامات الأزياء، العطور العالمية، والساعات الراقية." 
        : "Crafting digital sovereignty for high-end fashion, parfums, and horlogerie.",
      clients: ["AETHERIA", "LUMINA MODA", "KRONOS"]
    },
    {
      title: isAr ? "السيارات والنقل الذكي" : "AUTONOMOUS MOBILITY & EV",
      count: 9,
      desc: isAr 
        ? "حملات إطلاق وإدارات منصات تفاعلية لشركات السيارات الكهربائية المستقبليّة." 
        : "Omnichannel launches and interactive EV ecosystem platforms.",
      clients: ["NEO-HORIZON", "NOVA MOBILITY", "AERODYNAMICS"]
    },
    {
      title: isAr ? "التكنولوجيا المالية والعقارات" : "FINTECH & REAL ESTATE",
      count: 12,
      desc: isAr 
        ? "تطوير منصات رقمية عالية التحويل لقادة الاستثمار والأصول العقارية حول العالم." 
        : "Building high-conversion platforms for global asset leaders.",
      clients: ["APEX LUXURY", "ELEVATE GLOBAL", "MERIDIAN CAPITAL"]
    }
  ];

  const spotlightClients = [
    {
      id: "01",
      client: "Horizon Mobility",
      project: "NEO-HORIZON EV PLATFORM",
      quote: isAr 
        ? "نجحت تريفوكسا في هندسة منصة رقمية حققت أكثر من 42,000 إيداع وحجز مسبق خلال 14 يوماً فقط." 
        : "TRIVOXA engineered a digital platform that generated 42,000 reservation deposits in 14 days.",
      author: isAr ? "يلينا روستوفا" : "Elena Rostova",
      role: isAr ? "رئيس قطاع المنتجات" : "Chief Product Officer",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrHbS0ooFC4LCMam2uBYYD5X4nLELoQosacs6Ep9pZrNpkUZRt8pwD3_VCylNqMGi2gCjLCnM7to6iIGwxnM_F06axKhcnpGxL8zr8qkAOAjKnNJ8lPM6vXI-ZnMX_EpeojVxZWjGwhMY7jq2qP_rtt-qiJlXpMraYAvVOUHjJiIluG3wYiWnthROIBYuSvM51OmollZ7tPp1Qo4OLfItJvZfxhqCWz-TWGf2wb7JI7sx83dRSY9c-"
    },
    {
      id: "02",
      client: "Aetheria Parfums",
      project: "AETHERIA HAUTE FRAGRANCE",
      quote: isAr 
        ? "إنتاجهم للفيلم السينمائي والهوية ثلاثية الأبعاد رسّخ مكانة علامتنا التجارية في الأسواق العالمية بكل اقتدار." 
        : "Their 3D motion identity and CGI film production established our global market prestige effortlessly.",
      author: isAr ? "أنطوان لوران" : "Antoine Laurent",
      role: isAr ? "مدير العلامة التجارية العالمي" : "Global Brand Director",
      img: "https://lh3.googleusercontent.com/aida/AEtjO1VRPAUaoc1Bbff-1lpsF5yar2KhtYAxXKyt38m-LessKg5srvDrThkNssXYimRTKY8E9sDM7gkIRM67o5EhiNzpZos2OXbsP-kd-KJgPhI6wj4HrW7f1gb25JJze52vRCHNDHTGElQvYRdDfCJuD2jx6Y_yY0rsbs1mU1mHvbkXUvT7mP0c28RG5DVgal-iR2fyP4PSnIwfyOItqR3kZzC8finzTqcggPuKoffxd8SPYpQB-5rl1cp3_q8"
    }
  ];

  return (
    <main className="w-full bg-[#0c091a] min-h-screen text-[#e6deff] font-sans selection:bg-[#FFC400] selection:text-[#1a1200] overflow-hidden">
      <Navbar />

      <div className="flex flex-col w-full relative">
        
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.2, 0.45, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/4 w-[550px] h-[550px] rounded-full bg-[#4c34a2]/30 blur-[150px]"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.35, 1], 
              opacity: [0.15, 0.4, 0.15],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#FFC400]/15 blur-[160px]"
          />
        </div>

        {/* ================= 1. TRUSTED BY (FULL-SCREEN HERO) ================= */}
        <section className="relative z-10 w-full min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-16 pt-24 pb-16 bg-gradient-to-b from-[#141027] via-[#0f0b22] to-[#0c091a]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center my-auto">
            
            {/* اليسار */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideFromLeft} 
              className="lg:col-span-7 flex flex-col justify-center items-start h-full"
            >


              <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-white uppercase tracking-tight leading-[1.2] mb-4">
                {isAr ? (
                  <>محل ثقة <span className="text-[#FFC400] underline decoration-[#cbbeff]/40 underline-offset-4">قادة التغيير</span> والابتكار حول العالم<span className="text-[#FFC400]">.</span></>
                ) : (
                  <>TRUSTED BY <span className="text-[#FFC400] underline decoration-[#cbbeff]/40 underline-offset-4">DISRUPTIVE</span> GLOBAL INNOVATORS<span className="text-[#FFC400]">.</span></>
                )}
              </h1>

              <p className="text-xs sm:text-sm text-[#d3c5ab] max-w-xl mb-6 leading-relaxed font-mono">
                {isAr 
                  ? "نشارك المؤسسات الطموحة، الرواد، وصناع الثقافة لبناء هويات تجارية قوية ومنصات رقمية تحقق أعلى معدلات التحويل."
                  : "We partner with forward-looking founders, enterprise shifts, and cultural tastemakers to build high-leverage brand identities and conversion platforms."
                }
              </p>

              {/* الأزرار */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <motion.a
                  whileHover={{ scale: 1.08, y: -3, boxShadow: "0 10px 25px rgba(255,196,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="/Contact"
                >
                  {isAr ? "كن شريكاً معنا ←" : "BECOME A PARTNER →"}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -3, borderColor: "#FFC400", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="#case-studies"
                >
                  {isAr ? "عرض المشاريع ←" : "VIEW CASE STUDIES →"}
                </motion.a>
              </div>

              {/* الأرقام المتزايدة */}
              <div className="grid grid-cols-3 gap-3 w-full pt-4 border-t border-[rgba(163,141,255,0.2)]">
                <TiltCard className="p-3.5 text-center sm:text-left">
                  <span className="text-xl font-extrabold text-[#FFC400] block">
                    <AnimatedCounter to={50} suffix="+" />
                  </span>
                  <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold">{isAr ? "عميل عالمي" : "GLOBAL CLIENTS"}</span>
                </TiltCard>

                <TiltCard className="p-3.5 text-center sm:text-left">
                  <span className="text-xl font-extrabold text-white block">
                    <AnimatedCounter to={18} suffix="+" />
                  </span>
                  <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold">{isAr ? "سوق متواجدون به" : "MARKETS COVERED"}</span>
                </TiltCard>

                <TiltCard className="p-3.5 text-center sm:text-left">
                  <span className="text-xl font-extrabold text-[#FFC400] block">
                    <AnimatedCounter to={98} suffix="%" />
                  </span>
                  <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold">{isAr ? "معدل استمرار العملاء" : "RETENTION RATE"}</span>
                </TiltCard>
              </div>

            </motion.div>

            {/* اليمين: كارت الاستوديو البارز 3D Tilt */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideFromRight} 
              className="lg:col-span-5 flex flex-col justify-center items-center h-full"
            >
              <TiltCard className="w-full p-4">
                <div className="relative aspect-[4/4.5] w-full rounded-[18px] overflow-hidden border border-white/10 group">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjdA12zEtHzyMBVDqIogj-aqWB01hCcmKeIoEX3aHJ1M3jyhVN4jRsLvMRflScdcABxfQWg-TCmieKKj-i2cRzli7j6wu2yEMT-r9s9bPhtcmDvuNzSsFfRpdd9YpREU10Ormb_oJ5Z_837Js0XLIkt_g3_Db5fKKleVqYNkLp3xOKieJrW6ZoQ8ZvOGqABtwtUNftzu4cRPXy0fQ7P9FKsj9uqxNIjU4QECM8VGIarsmB5mTtEH" 
                    alt="Trusted Clients" 
                    className="w-full h-full object-cover grayscale-[15%] contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[rgba(12,9,26,0.85)] border border-white/20 font-mono text-[10px] uppercase text-[#FFC400] font-bold shadow-md">
                      {isAr ? "✦ تحالفات عالمية" : "✦ GLOBAL ALLIANCES"}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-[14px] bg-[rgba(12,9,26,0.85)] backdrop-blur-md border border-[rgba(163,141,255,0.25)] flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-white font-bold block">{isAr ? "شراكات استراتيجية" : "Enterprise Mandates"}</span>
                      <span className="text-[#cbbeff]/70 text-[10px]">{isAr ? "توسع في الأسواق الفاخرة" : "Tier-1 Market Expansion"}</span>
                    </div>
                    <span className="text-base text-[#FFC400] animate-bounce">↗</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </section>

        {/* ================= 2. CLIENTS LOGOS (INTERACTIVE GRID WITH SCANLINE) ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0f0b22]">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-[rgba(163,141,255,0.15)] pb-3">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#FFC400] font-bold">01 / 04</span>
                <span className="text-[#cbbeff]/30">——</span>
                <span className="text-[#e6deff] uppercase font-semibold">{isAr ? "شبكة شركاء النجاح" : "CLIENT NETWORK LOGOS"}</span>
              </div>
              <span className="font-mono text-xs text-[#cbbeff]/60 uppercase tracking-widest hidden md:inline-block">
                {isAr ? "شركاء علامات تجارية مختارة" : "SELECT BRAND PARTNERS"}
              </span>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {trustedLogos.map((logo) => (
                <motion.div key={logo.name} variants={fadeInUp}>
                  <TiltCard className="p-5 flex flex-col items-center justify-center text-center group min-h-[110px] relative overflow-hidden">
                    {/* Scanline Wave Light Effect */}
                    <motion.div 
                      whileHover={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFC400]/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    <span className="font-mono text-[9px] text-[#FFC400] uppercase font-bold absolute top-2.5 left-3">{logo.code}</span>
                    <span className="text-lg font-extrabold text-white group-hover:text-[#FFC400] transition-colors mt-2">{logo.name}</span>
                    <span className="font-mono text-[10px] text-[#cbbeff]/70 uppercase mt-1">{logo.sector}</span>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= 3. CLIENTS BY INDUSTRY ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0c091a]">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#FFC400] font-bold">02 / 04</span>
              <span className="text-[#cbbeff]/30">——</span>
              <span className="text-[#e6deff] uppercase font-semibold">{isAr ? "العملاء حسب القطاع" : "CLIENTS BY INDUSTRY"}</span>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {industriesData.map((ind) => (
                <motion.div key={ind.title} variants={fadeInUp}>
                  <TiltCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-[#FFC400] font-bold uppercase">{ind.title}</span>
                        <span className="px-2.5 py-1 rounded-full bg-[rgba(12,9,26,0.8)] text-[#cbbeff] font-mono text-[10px] border border-white/10 font-bold">
                          {ind.count} {isAr ? "مشروعاً" : "MANDATES"}
                        </span>
                      </div>
                      <p className="text-xs text-[#d3c5ab] leading-relaxed mb-6 font-sans">{ind.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[rgba(163,141,255,0.15)]">
                      {ind.clients.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-full bg-[rgba(12,9,26,0.8)] border border-[rgba(163,141,255,0.25)] font-mono text-[10px] text-[#cbbeff] font-semibold">
                          {c}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= 4. FEATURED CLIENTS / CLIENT SPOTLIGHT ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0f0b22]">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-[rgba(163,141,255,0.15)] pb-3">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#FFC400] font-bold">03 / 04</span>
                <span className="text-[#cbbeff]/30">——</span>
                <span className="text-[#e6deff] uppercase font-semibold">{isAr ? "آراء وتسليط الضوء" : "CLIENT SPOTLIGHT"}</span>
              </div>
              <span className="font-mono text-xs text-[#cbbeff]/60 uppercase tracking-widest hidden md:inline-block">
                {isAr ? "شهادات الشركاء التنفيذيين" : "EXECUTIVE TESTIMONIALS"}
              </span>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {spotlightClients.map((spot) => (
                <motion.div key={spot.id} variants={fadeInUp}>
                  <TiltCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-[#FFC400] font-bold uppercase">{spot.client}</span>
                        <span className="font-mono text-[10px] text-[#cbbeff] uppercase font-semibold">{spot.id} // {isAr ? "قصة نجاح" : "SPOTLIGHT"}</span>
                      </div>

                      <div className="relative aspect-[21/9] w-full rounded-[16px] overflow-hidden mb-5 border border-white/10 group">
                        <motion.img 
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.6 }}
                          src={spot.img} 
                          alt={spot.client} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-80" />
                      </div>

                      <p className="text-sm text-[#e6deff] italic font-sans leading-relaxed mb-6">
                        "{spot.quote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[rgba(163,141,255,0.2)] flex items-center justify-between font-mono text-xs">
                      <div>
                        <span className="text-white font-bold block">{spot.author}</span>
                        <span className="text-[#cbbeff]/70 text-[10px] uppercase">{spot.role}</span>
                      </div>
                      <span className="text-[#FFC400] font-bold">{isAr ? "شهادة موثقة ✦" : "VERIFIED TESTIMONIAL ✦"}</span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= 5. LINK TO PROJECTS / CASE STUDIES ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-20 bg-[#0c091a]" id="case-studies">
          <div className="max-w-5xl mx-auto text-center">
            <TiltCard className="p-8 sm:p-12 flex flex-col items-center shadow-2xl">
              <span className="font-mono text-xs text-[#FFC400] font-bold uppercase tracking-widest block mb-2">
                04 / 04 • {isAr ? "أرشيف الأعمال" : "PORTFOLIO ARCHIVE"}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-white uppercase mb-4">
                {isAr ? (
                  <>استكشف تفاصيل وتأثير المشاريع الكاملة<span className="text-[#FFC400]">.</span></>
                ) : (
                  <>EXPLORE DETAILED CASE STUDIES & DELIVERIES<span className="text-[#FFC400]">.</span></>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-[#d3c5ab] max-w-xl mb-8 font-mono leading-relaxed">
                {isAr 
                  ? "تعمق في أرشيفنا الإبداعي الكامل، وراجع المنصات الرقمية والتصاميم ثلاثية الأبعاد ومؤشرات نمو المبيعات."
                  : "Dive deep into our full creative archive. Review interactive web platforms, 3D packaging renders, and omnichannel growth metrics."
                }
              </p>

              <motion.a
                whileHover={{ scale: 1.08, boxShadow: "0 12px 30px rgba(255,196,0,0.45)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                href="/ourWork"
              >
                {isAr ? "تصفح أرشيف الأعمال ←" : "BROWSE OUR WORK ARCHIVE →"}
              </motion.a>
            </TiltCard>
          </div>
        </section>

      </div>

      <FloatingActions />
      <Footer />
    </main>
  );
}