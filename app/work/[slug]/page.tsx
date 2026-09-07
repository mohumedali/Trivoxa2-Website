"use client";

import { useRef } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import FloatingActions from "@/component/FloatingActions";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCounter from "@/component/AnimatedCounter";
import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

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

// ================= 3D Tilt Card Component =================
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`liquid-glass-card rounded-[22px] border border-[rgba(163,141,255,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#FFC400] hover:shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(255,196,0,0.2)] transition-colors duration-300 relative backdrop-blur-xl ${className}`}
    >
      <div style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function CaseStudyPage() {
  const { isAr } = useLanguage();

  const caseStudyData = {
    title: isAr ? "نيو هورايزون — إطلاق سيارة كهربائية عالمية" : "NEO-HORIZON — Global EV Launch",
    tag: isAr ? "دراسة حالة رئيسية" : "Flagship Case Study",
    client: "Horizon Mobility",
    category: isAr ? "الهوية البصرية والبنية الرقمية" : "Branding & Digital Infrastructure",
    year: "2024",
    coverImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrHbS0ooFC4LCMam2uBYYD5X4nLELoQosacs6Ep9pZrNpkUZRt8pwD3_VCylNqMGi2gCjLCnM7to6iIGwxnM_F06axKhcnpGxL8zr8qkAOAjKnNJ8lPM6vXI-ZnMX_EpeojVxZWjGwhMY7jq2qP_rtt-qiJlXpMraYAvVOUHjJiIluG3wYiWnthROIBYuSvM51OmollZ7tPp1Qo4OLfItJvZfxhqCWz-TWGf2wb7JI7sx83dRSY9c-",
    overview: isAr 
      ? "قامت TRIVOXA ببناء نظام سيادة رقمية شامل لأبرز شركة صاعدة للسيارات الكهربائية الفاخرة في أوروبا، حيث دمجنا بين الجماليات المعمارية الراقية وهندسة المنصات الأكثر توسعاً."
      : "TRIVOXA engineered a full-scale digital sovereignty system for Europe's premier luxury EV startup. We bridged high-end architectural design aesthetic with ultra-scalable web console engineering.",
    
    challenge: isAr
      ? "احتاجت Horizon Mobility لإطلاق طرازها الفاخر من السيارات الكهربائية عبر 14 سوقاً أوروبية في وقت واحد، متستهدفة قادة التكنولوجيا كبار الشخصيات، مع الحفاظ على حضور رقمي فائق الأناقة والخلو من التشتيت لتحويل الزوار إلى مبيعات حجز في ثوانٍ."
      : "Horizon Mobility needed to launch their flagship luxury EV model across 14 European markets simultaneously, targeting high-net-worth tech leaders while maintaining an ultra-sleek, zero-clutter digital presence that can convert traffic into pre-order deposits within seconds.",
    
    solution: isAr
      ? "قمنا بإنشاء أداة تخصيص ثلاثية الأبعاد تفاعلية للسيارة، ومنصة ويب عالية الأداء مدعومة بتكنولوجيا WebGL، بالإضافة إلى حملة حركة متكاملة تسلط الضوء على الحرفية الديناميكية ونظام التشغيل الذاتي للسيارة."
      : "We constructed a bespoke 3D interactive vehicle configurator, a high-performance web platform powered by WebGL, and an aggressive omnichannel motion campaign that highlighted the vehicle's aerodynamic craftsmanship and autonomous operating system.",
    
    deliverables: isAr ? [
      "هندسة وتصميم الهوية البصرية",
      "أداة تخصيص 3D تفاعلية بـ WebGL",
      "منصة ويب المؤسسية متعددة اللغات",
      "استعراض حركة سينمائي فاخر",
      "ملف المستثمرين والنظام البصري"
    ] : [
      "Brand Identity Architecture",
      "WebGL Interactive 3D Configurator",
      "Multilingual Enterprise Web Platform",
      "Cinema-Grade Motion Showreel",
      "Investor Pitch Deck & Visual System"
    ],

    metrics: [
      { label: isAr ? "حجوزات مسبقة" : "Pre-order Deposits", value: 42000, suffix: "+" },
      { label: isAr ? "ارتفاع نسبة التحويل" : "Conversion Lift", value: 310, suffix: "%" },
      { label: isAr ? "مشاهدات عالمية" : "Global Impressions", value: 18, suffix: isAr ? "مليون" : "M" },
      { label: isAr ? "قيمة المشروعات" : "Pipeline Equity", value: 120, suffix: isAr ? "مليون$" : "M$" },
    ],

    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjdA12zEtHzyMBVDqIogj-aqWB01hCcmKeIoEX3aHJ1M3jyhVN4jRsLvMRflScdcABxfQWg-TCmieKKj-i2cRzli7j6wu2yEMT-r9s9bPhtcmDvuNzSsFfRpdd9YpREU10Ormb_oJ5Z_837Js0XLIkt_g3_Db5fKKleVqYNkLp3xOKieJrW6ZoQ8ZvOGqABtwtUNftzu4cRPXy0fQ7P9FKsj9uqxNIjU4QECM8VGIarsmB5mTtEH",
      "https://lh3.googleusercontent.com/aida/AEtjO1VRPAUaoc1Bbff-1lpsF5yar2KhtYAxXKyt38m-LessKg5srvDrThkNssXYimRTKY8E9sDM7gkIRM67o5EhiNzpZos2OXbsP-kd-KJgPhI6wj4HrW7f1gb25JJze52vRCHNDHTGElQvYRdDfCJuD2jx6Y_yY0rsbs1mU1mHvbkXUvT7mP0c28RG5DVgal-iR2fyP4PSnIwfyOItqR3kZzC8finzTqcggPuKoffxd8SPYpQB-5rl1cp3_q8"
    ],

    testimonial: {
      quote: isAr 
        ? "لم تقم TRIVOXA بمجرد بناء موقع إلكتروني لنا؛ بل قامت بتحديد مكانتنا في السوق. أداة التخصيص الرقمية وحدها حققت عشرات الآلاف من الحجوزات المؤكدة في أسبوعين."
        : "TRIVOXA didn't just build us a website; they defined our market prestige. The digital configurator alone converted tens of thousands of skepticism-free pre-orders in two weeks.",
      author: "Elena Rostova",
      role: isAr ? "رئيسة قسم المنتجات، Horizon Mobility" : "Chief Product Officer, Horizon Mobility"
    }
  };

  return (
    <main className="w-full bg-[#0c091a] min-h-screen text-[#e6deff] font-sans selection:bg-[#FFC400] selection:text-[#1a1200] overflow-hidden pt-24">
      <Navbar />

      <div className="flex flex-col w-full relative">
        
        {/* Background Ambient Lights */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/4 w-[450px] h-[450px] rounded-full bg-[#4c34a2]/25 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#FFC400]/10 blur-[150px]"
          />
        </div>

        {/* ================= 01. BREADCRUMB & HEADER ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 pt-6 pb-4">
          <div className="max-w-5xl mx-auto flex flex-col gap-3">
            
            {/* Nav Back Link */}
            <Link 
              href="/ourWork" 
              className="inline-flex items-center gap-2 font-mono text-xs text-[#cbbeff] hover:text-[#FFC400] transition-colors"
            >
              <span>{isAr ? "→" : "←"}</span>
              <span>{isAr ? "العودة إلى أرشيف الأعمال" : "BACK TO WORK ARCHIVE"}</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[rgba(163,141,255,0.15)] pb-6">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-[rgba(163,141,255,0.15)] border border-[rgba(163,141,255,0.25)] font-mono text-[11px] text-[#FFC400] font-bold uppercase tracking-widest block w-fit mb-2">
                  {caseStudyData.tag}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight leading-[1.1]">
                  {caseStudyData.title}
                </h1>
              </div>

              {/* Meta Stats Quick Bar */}
              <div className="flex flex-wrap items-center gap-5 font-mono text-xs text-[#d3c5ab]">
                <div>
                  <span className="text-[#cbbeff]/60 block text-[9px]">{isAr ? "العميل" : "CLIENT"}</span>
                  <span className="text-white font-bold">{caseStudyData.client}</span>
                </div>
                <div>
                  <span className="text-[#cbbeff]/60 block text-[9px]">{isAr ? "التصنيف" : "CATEGORY"}</span>
                  <span className="text-[#FFC400] font-bold">{caseStudyData.category}</span>
                </div>
                <div>
                  <span className="text-[#cbbeff]/60 block text-[9px]">{isAr ? "السنة" : "YEAR"}</span>
                  <span className="text-white font-bold">{caseStudyData.year}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 02. COVER HERO IMAGE ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-4">
          <div className="max-w-5xl mx-auto">
            <TiltCard className="w-full p-3">
              <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full rounded-[16px] overflow-hidden border border-white/10 group">
                <img 
                  src={caseStudyData.coverImg} 
                  alt={caseStudyData.title} 
                  className="w-full h-full object-cover grayscale-[10%] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-[12px] bg-[rgba(12,9,26,0.85)] backdrop-blur-md border border-[rgba(163,141,255,0.25)] flex flex-col md:flex-row md:items-center justify-between gap-2 font-mono text-xs">
                  <div>
                    <span className="text-[#FFC400] font-bold block mb-0.5 text-[11px]">
                      {isAr ? "✦ نظرة عامة على دراسة الحالة" : "✦ CASE STUDY OVERVIEW"}
                    </span>
                    <p className="text-[#d3c5ab] text-[11px] font-sans max-w-xl leading-snug">{caseStudyData.overview}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FFC400] text-[#1a1200] font-bold text-[9px] uppercase tracking-widest w-fit whitespace-nowrap">
                    {isAr ? "مشروع موثق" : "VERIFIED MANDATE"}
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* ================= 03. CORE CONTENT CARD ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-8">
          <div className="max-w-5xl mx-auto">
            
            <TiltCard className="p-5 sm:p-7 lg:p-8 flex flex-col gap-8">
              
              {/* 1. Challenge & Strategy Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-8 border-b border-[rgba(163,141,255,0.15)]">
                
                {/* Challenge */}
                <div className="lg:col-span-6 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                    <span className="font-mono text-[11px] text-[#FFC400] uppercase font-bold tracking-widest">
                      {isAr ? "01 / التحدي" : "01 / THE CHALLENGE"}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white uppercase">
                    {isAr ? "إعادة تعريف توقعات السوق" : "REDEFINING MARKET EXPECTATIONS"}
                  </h2>
                  <p className="text-xs sm:text-xs text-[#d3c5ab] leading-relaxed font-sans">
                    {caseStudyData.challenge}
                  </p>
                </div>

                {/* Strategy & Solution */}
                <div className="lg:col-span-6 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#cbbeff]" />
                    <span className="font-mono text-[11px] text-[#cbbeff] uppercase font-bold tracking-widest">
                      {isAr ? "02 / الاستراتيجية والتنفيذ" : "02 / THE STRATEGY & EXECUTION"}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white uppercase">
                    {isAr ? "صناعة الريادة في العلامة التجارية" : "ENGINEERED BRAND SOVEREIGNTY"}
                  </h2>
                  <p className="text-xs sm:text-xs text-[#d3c5ab] leading-relaxed font-sans">
                    {caseStudyData.solution}
                  </p>
                </div>

              </div>

              {/* 2. Key Deliverables & Impact Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-[rgba(163,141,255,0.15)]">
                
                {/* Deliverables */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <span className="font-mono text-[11px] text-[#FFC400] font-bold uppercase tracking-widest block">
                    {isAr ? "مخرجات المشروع الرئيسية" : "CORE DELIVERABLES ARCHITECTURE"}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {caseStudyData.deliverables.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-[12px] bg-[rgba(12,9,26,0.65)] border border-[rgba(163,141,255,0.2)] flex items-center gap-2.5 font-mono text-[11px] text-[#e6deff]">
                        <span className="text-[#FFC400] font-bold">0{idx + 1}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics Grid */}
                <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                  {caseStudyData.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 rounded-[16px] bg-[rgba(12,9,26,0.8)] border border-[rgba(163,141,255,0.25)] flex flex-col justify-center text-center sm:text-left">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#FFC400] block mb-0.5">
                        <AnimatedCounter to={metric.value} suffix={metric.suffix} />
                      </span>
                      <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold tracking-wider">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* 3. Showcase Gallery */}
              <div className="flex flex-col gap-3 pb-8 border-b border-[rgba(163,141,255,0.15)]">
                <span className="font-mono text-[11px] text-[#cbbeff] uppercase font-bold tracking-widest block">
                  {isAr ? "معرض التصاميم والأنظمة" : "SYSTEM VISUAL SHOWCASE"}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudyData.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="relative aspect-[16/10] rounded-[14px] overflow-hidden border border-white/10 group">
                      <img 
                        src={imgUrl} 
                        alt="Gallery showcase" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Client Testimonial Block */}
              <div className="p-5 sm:p-6 rounded-[16px] bg-[rgba(12,9,26,0.85)] border border-[#FFC400]/30 flex flex-col gap-3 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#FFC400] font-bold uppercase tracking-widest">
                    {isAr ? "رأي الإدارة التنفيذية" : "VERIFIED EXECUTIVE TESTIMONIAL"}
                  </span>
                  <span className="text-xs text-[#FFC400]">✦✦✦✦✦</span>
                </div>
                <p className="text-xs sm:text-sm text-[#e6deff] italic font-sans leading-relaxed">
                  "{caseStudyData.testimonial.quote}"
                </p>
                <div className="pt-2.5 border-t border-[rgba(163,141,255,0.15)] flex flex-col font-mono text-xs">
                  <span className="text-white font-bold">{caseStudyData.testimonial.author}</span>
                  <span className="text-[#cbbeff]/70 text-[9px]">{caseStudyData.testimonial.role}</span>
                </div>
              </div>

            </TiltCard>

          </div>
        </section>

        {/* ================= 04. CTA SECTION BEFORE FOOTER ================= */}
        <section className="w-full px-5 md:px-10 py-16 bg-[#0f0b22] relative overflow-hidden" id="contact">
          <div className="relative z-10 max-w-4xl mx-auto w-full rounded-[22px] liquid-glass p-6 md:p-10 text-center flex flex-col items-center border border-[rgba(163,141,255,0.3)] shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(20,16,39,0.7)] border border-[rgba(163,141,255,0.3)] mb-4 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFC400] shadow-[0_0_8px_#FFC400] animate-ping" />
              <span className="font-mono text-[10px] text-[#FFC400] uppercase tracking-[0.2em] font-bold">
                {isAr ? "ابدأ التواصل معنا" : "Initiate Transmission"}
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-xl mb-3">
              {isAr ? (
                <>هل لديك فكرة تستحق <span className="text-[#FFC400] italic">الانطلاق</span>؟</>
              ) : (
                <>Have an idea worth <span className="text-[#FFC400] italic">shifting</span>?</>
              )}
            </h2>

            <p className="text-xs md:text-sm text-[#d3c5ab] max-w-md mb-6 leading-relaxed">
              {isAr 
                ? "دعنا نحول حضورك في السوق إلى تجربة لا تُنسى. نستقبل حالياً طلبات ومشاريع جديدة للربع القادم."
                : "Let's turn your market presence into something people remember. We are currently accepting select client briefs for the upcoming quarter."
              }
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,196,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-between px-5 py-3 rounded-[14px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                href="https://wa.me/201028499381" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-3.5 h-3.5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
                </svg>
                <span>{isAr ? "واتساب" : "WHATSAPP US"}</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,196,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-between px-5 py-3 rounded-[14px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                href="tel:+201028499381"
              >
                <span>{isAr ? "اتصل بنا" : "CALL US"}</span>
                <span className="text-xs mx-1">{isAr ? "←" : "→"}</span>
              </motion.a>
            </div>
          </div>
        </section>

      </div>

      <FloatingActions />
      <Footer />
    </main>
  );
}