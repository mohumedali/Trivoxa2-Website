"use client";

import { useState } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useLanguage } from "@/context/LanguageContext";
import FloatingActions from "@/component/FloatingActions";
import { motion, AnimatePresence, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

// ================= Animation Variants =================
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
  }
};

// ================= 3D Tilt Card Component With Side Entrance =================
function AnimatedDirectionCard({ 
  children, 
  index, 
  className = "" 
}: { 
  children: React.ReactNode; 
  index: number; 
  className?: string 
}) {
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

  // اختيار الحركة: زوجي يسار -> يمين، فردي يمين -> يسار
  const animationVariant = index % 2 === 0 ? slideFromLeft : slideFromRight;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animationVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`liquid-glass-card rounded-[26px] border border-[rgba(163,141,255,0.35)] shadow-[0_15px_35px_rgba(0,0,0,0.65)] hover:border-[#FFC400] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(255,196,0,0.25)] transition-colors duration-300 relative cursor-pointer backdrop-blur-xl ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const { isAr } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = isAr ? [
    "الكل",
    "الهوية البصرية",
    "سوشيال ميديا",
    "صناعة المحتوى",
    "حملات إعلانية"
  ] : [
    "All",
    "Branding",
    "Social Media",
    "Content Creation",
    "Campaigns"
  ];

  const portfolioCases = [
    {
      id: "neo-horizon",
      tag: isAr ? "مشروع رائد" : "Flagship Project",
      client: "Horizon Mobility",
      category: isAr ? "الهوية البصرية" : "Branding",
      year: "2024",
      title: isAr ? "نيو هورايزون — إطلاق سيارة كهربائية عالمية" : "NEO-HORIZON — Global EV Launch",
      desc: isAr 
        ? "بناء هوية تجارية متكاملة ومنصة رقمية تفاعلية متعددة اللغات لأسرع شركة سيارات كهربائية نمواً في أوروبا، مما حقق 42,000 حجز في 14 يوماً." 
        : "Engineered a complete brand identity architecture and multilingual interactive web platform for Europe's fastest emerging luxury EV manufacturer, generating 42,000 reservation deposits in 14 days.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrHbS0ooFC4LCMam2uBYYD5X4nLELoQosacs6Ep9pZrNpkUZRt8pwD3_VCylNqMGi2gCjLCnM7to6iIGwxnM_F06axKhcnpGxL8zr8qkAOAjKnNJ8lPM6vXI-ZnMX_EpeojVxZWjGwhMY7jq2qP_rtt-qiJlXpMraYAvVOUHjJiIluG3wYiWnthROIBYuSvM51OmollZ7tPp1Qo4OLfItJvZfxhqCWz-TWGf2wb7JI7sx83dRSY9c-"
    },
    {
      id: "aetheria",
      tag: isAr ? "محتوى وفيلم" : "Content & Film",
      client: "Aetheria Parfums",
      category: isAr ? "حملات إعلانية" : "Campaigns",
      year: "2024",
      title: isAr ? "إيثيريا — حملة العطور الفاخرة الشاملة" : "AETHERIA — Haute Fragrance Omnichannel",
      desc: isAr 
        ? "إنتاج فيلم سينمائي، تصاميم ثلاثية الأبعاد للمنتجات، وحملات رقمية متكاملة عبر 12 دولة لترسيخ موقع العلامة الفاخرة." 
        : "Cinematic film production, bespoke 3D packaging renders, and social-first activations across 12 territories delivering unmatched luxury positioning.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9I04Gng9zhPNxam9SMhr5hYriXJBF442vZ9mEsHDmtYSoRSHPo49SJfpOB5FJwxjOB41cAp8vAuPDv3U_UXg0pkM12M8Jp5PfK7-CSASNOLjGfSY7D9Uz4Hb1CkFI2WQ4BFJKxQX6glrBwXHtAkPXj2D91LNsRCdCmfiFD2aHzrusUdNpWUZzlmN-3DFVPNX0AQLoMIIiT18a9qX6oBWRffQyb8zGOAXYI2ea-IFXso9rj218DcFs"
    },
    {
      id: "synapse-ai",
      tag: isAr ? "ذكاء اصطناعي وويب" : "AI & Web",
      client: "Synapse Labs",
      category: isAr ? "الهوية البصرية" : "Branding",
      year: "2024",
      title: isAr ? "سينابس AI — هوية منصة المطورين" : "SYNAPSE AI — Developer Platform Identity",
      desc: isAr 
        ? "تصميم وتحديد موقع بنية الذكاء الاصطناعي بنظام تصميم معماري، واجهة مظلمة انسيابية، ولوحة تحكم تفاعلية." 
        : "Positioning an enterprise LLM orchestration infrastructure with an architectural design system, fluid dark UI, and intuitive interactive console.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjdA12zEtHzyMBVDqIogj-aqWB01hCcmKeIoEX3aHJ1M3jyhVN4jRsLvMRflScdcABxfQWg-TCmieKKj-i2cRzli7j6wu2yEMT-r9s9bPhtcmDvuNzSsFfRpdd9YpREU10Ormb_oJ5Z_837Js0XLIkt_g3_Db5fKKleVqYNkLp3xOKieJrW6ZoQ8ZvOGqABtwtUNftzu4cRPXy0fQ7P9FKsj9uqxNIjU4QECM8VGIarsmB5mTtEH"
    },
    {
      id: "kinetic-coffee",
      tag: isAr ? "نمو المبيعات" : "DTC Growth",
      client: "Kinetic Roasters",
      category: isAr ? "سوشيال ميديا" : "Social Media",
      year: "2024",
      title: isAr ? "كينتيك كوفي — موجه انتشار ثفافي" : "KINETIC COFFEE — DTC Cultural Social Wave",
      desc: isAr 
        ? "حملة إطلاق استهدفت ثقافة الشارع حققت 18.2 مليون مشاهدة غير مدفوعة على تيك توك وزيادة 410% في الاشتراكات المباشرة." 
        : "A viral street-culture focused launch campaign achieving 18.2M organic TikTok impressions and a 410% spike in direct subscription signups.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0H6JEtGIOQ9EMAnm-rmA_0Frna_JGnOV13iErokOrZOCWtmzOFp8u5whb9va_mAyIXhNIDVqphLo-n8Hij56YNWA0SZHC2SegExFyv0ksuFuWNtitTh9dwtoeWadxuA02SZBwsKIz7HpdeVbL-Ng1OHijsaNkoomKHtMlzRvjLdyUQ2LSY2VSLF80Dw_ikLad__KCF3XhlxAiNMwL7Rg7iskuoiifj_KRkb2ISD-KuHUgtItn2a3R"
    },
    {
      id: "lumen-vision",
      tag: isAr ? "3D وإنتاج" : "3D & Production",
      client: "Lumen Tech",
      category: isAr ? "صناعة المحتوى" : "Content Creation",
      year: "2025",
      title: isAr ? "لومين فيجن — العرض الاستعراضي للاستوديو" : "LUMEN VISION — Next-Gen Studio Showreel",
      desc: isAr 
        ? "تصاميم ثلاثية الأبعاد بمستوى سينمائي، بيئات CGI، وإخراج حركة مستقبلي صُمم لإطلاق الفعاليات التقنية الكبرى." 
        : "Cinema-grade 3D renders, CGI environment production, and futuristic motion direction engineered for premiere tech launch events.",
      img: "https://lh3.googleusercontent.com/aida/AEtjO1VRPAUaoc1Bbff-1lpsF5yar2KhtYAxXKyt38m-LessKg5srvDrThkNssXYimRTKY8E9sDM7gkIRM67o5EhiNzpZos2OXbsP-kd-KJgPhI6wj4HrW7f1gb25JJze52vRCHNDHTGElQvYRdDfCJuD2jx6Y_yY0rsbs1mU1mHvbkXUvT7mP0c28RG5DVgal-iR2fyP4PSnIwfyOItqR3kZzC8finzTqcggPuKoffxd8SPYpQB-5rl1cp3_q8"
    },
    {
      id: "vortex-cyber",
      tag: isAr ? "حملة رقمية" : "Social Campaign",
      client: "Vortex Inc",
      category: isAr ? "سوشيال ميديا" : "Social Media",
      year: "2025",
      title: isAr ? "فورتكس سيبر — السيطرة السيبرانية على المنصات" : "VORTEX CYBER — Cybernetic Social Takeover",
      desc: isAr 
        ? "سرد متحرك عبر المنصات وحملة تفاعلية غامرة جذبت مجتمعات المهتمين بالتكنولوجيا عبر الأسواق العالمية." 
        : "Omnichannel motion narrative and immersive social campaign capturing tech enthusiast communities across global markets.",
      img: "https://lh3.googleusercontent.com/aida/AEtjO1UpmhV-oiX_W_bp3e0RVDLBP3UCUVYeZpmmT8ZRUDS1DKqCsTeetApTWadrzJdLAcLJo6_rzESAAVFBXjXDVREgchg3hFLUhzX3tKIP-eXTl9QntuzDMAM9t4C_W4KI4-pGuoqGHgHAnIaSSQ0fnubamPZJ7PmHiApUJiYnKRMfxL4L8AcPJaSufTTVud4fJcQEincbw5n6tmPQpecqjzgsznWiBWfwcbb2tgNh5xpMrxUtf1yFS8MSog"
    }
  ];

  const filteredCases = (selectedCategory === "All" || selectedCategory === "الكل")
    ? portfolioCases
    : portfolioCases.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main className="w-full pt-32 bg-[#0c091a] min-h-screen text-[#e6deff] font-sans selection:bg-[#FFC400] selection:text-[#1a1200] overflow-hidden">
      <Navbar />

      <div className="flex flex-col w-full relative">
        
        {/* Glowing Background Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.2, 0.45, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-[560px] h-[560px] rounded-full bg-[#4c34a2]/30 blur-[150px]"
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

        {/* ================= HERO SECTION ================= */}
        <section className="relative z-10 w-full min-h-[70vh] flex flex-col justify-center px-5 md:px-10 lg:px-16 py-16 bg-gradient-to-b from-[#141027] via-[#0f0b22] to-[#0c091a]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
            
            {/* اليسار: يدخل من الشمال */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideFromLeft} 
              className="lg:col-span-7 flex flex-col items-start"
            >

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-3xl uppercase">
                {isAr ? (
                  <>صناعة <span className="text-[#cbbeff]">الريادة الرقمية</span> عبر <span className="relative inline-block text-[#FFC400] underline decoration-[#cbbeff]/40 underline-offset-4">تصميم جريء.</span></>
                ) : (
                  <>Crafting digital <span className="text-[#cbbeff]">sovereignty</span> through <span className="relative inline-block text-[#FFC400] underline decoration-[#cbbeff]/40 underline-offset-4">bold design.</span></>
                )}
              </h1>

              <p className="text-xs sm:text-sm text-[#d3c5ab] max-w-2xl mb-8 leading-relaxed font-mono">
                {isAr 
                  ? "استكشف معرض أعمالنا المختار من أنظمة الهوية الرقمية، الحملات عالية التأثير، والإنتاجات السينمائية المصممة لقادة السوق."
                  : "Explore our curated portfolio of digital identity systems, high-leverage campaigns, and cinema-grade productions engineered for market leaders."
                }
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.08, y: -3, boxShadow: "0 10px 25px rgba(255,196,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="/Contact"
                >
                  {isAr ? "ابدأ مشروعك ←" : "START A PROJECT →"}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -3, borderColor: "#FFC400", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="#work-archive"
                >
                  {isAr ? "تصفح كل المشاريع ←" : "BROWSE ALL CASES →"}
                </motion.a>
              </div>
            </motion.div>

            {/* اليمين: يدخل من اليمين */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideFromRight}
              className="lg:col-span-5 flex flex-col"
            >
              <AnimatedDirectionCard index={1} className="w-full p-6 md:p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC400]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-[rgba(163,141,255,0.2)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] shadow-[0_0_10px_#FFC400]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FFC400] font-bold">
                      {isAr ? "مؤشرات الاستوديو" : "STUDIO METRICS"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#cbbeff]/80 uppercase px-2.5 py-1 rounded-full bg-[rgba(163,141,255,0.15)] border border-[rgba(163,141,255,0.25)] font-bold">
                    {isAr ? "بيانات موثقة" : "VERIFIED DATA"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3.5 my-5">
                  <div className="p-4 rounded-[18px] bg-[rgba(12,9,26,0.65)] border border-[rgba(163,141,255,0.2)] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#cbbeff]/80 uppercase tracking-widest block font-semibold mb-0.5">
                        {isAr ? "إجمالي المشاريع" : "TOTAL DELIVERIES"}
                      </span>
                      <span className="text-xl font-extrabold text-white">
                        {isAr ? "أكثر من 60 مشروعاً عالمياً" : "60+ Global Cases"}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 border border-[#FFC400]/30 flex items-center justify-center text-[#FFC400] font-mono text-sm font-bold">
                      ✦
                    </div>
                  </div>

                  <div className="p-4 rounded-[18px] bg-[rgba(12,9,26,0.65)] border border-[rgba(163,141,255,0.2)] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#cbbeff]/80 uppercase tracking-widest block font-semibold mb-0.5">
                        {isAr ? "متوسط الأثر" : "AVERAGE IMPACT"}
                      </span>
                      <span className="text-xl font-extrabold text-[#FFC400]">
                        {isAr ? "+310% نسبة نمو" : "+310% Growth"}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 border border-[#FFC400]/30 flex items-center justify-center text-[#FFC400] font-mono text-sm font-bold">
                      ↑
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#cbbeff]/70 border-t border-[rgba(163,141,255,0.15)]">
                  <span>{isAr ? "القاهرة • دبي • أوروبا" : "Cairo • Dubai • Europe"}</span>
                  <span className="text-[#FFC400] font-semibold">{isAr ? "خط مشاريع نشط" : "Active Pipeline"}</span>
                </div>
              </AnimatedDirectionCard>
            </motion.div>

          </div>
        </section>

        {/* ================= WORK ARCHIVE WITH FILTERING ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0f0b22]" id="work-archive">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-6 bg-[#FFC400] rounded-full" />
                  <span className="font-mono text-xs text-[#cbbeff] uppercase tracking-[0.2em] font-semibold">
                    {isAr ? "أرشيف مختار" : "SELECTED ARCHIVE"}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                  {isAr ? <>أعمالنا<span className="text-[#FFC400]">.</span></> : <>OUR WORKS<span className="text-[#FFC400]">.</span></>}
                </h2>
              </div>

              {/* أزرار الفلترة الحركية */}
              <div className="flex flex-wrap items-center gap-2.5">
                {categoriesList.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <motion.button
                      key={cat}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(cat)}
                      className={`inline-flex items-center justify-between px-4 py-2.5 rounded-[14px] text-xs font-bold tracking-widest uppercase font-mono transition-all border ${
                        isActive
                          ? "bg-[#FFC400] text-[#1a1200] border-[#FFE082] shadow-[0_4px_20px_rgba(255,196,0,0.45)]"
                          : "bg-[rgba(163,141,255,0.12)] text-[#cbbeff] border-[rgba(163,141,255,0.25)] hover:text-white hover:border-[#FFC400]"
                      }`}
                    >
                      {cat}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* شبكة المشاريع - مربوطة بصفحة الـ Case Study */}
            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredCases.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/work/${item.id}`} className="block h-full group">
                      <AnimatedDirectionCard index={idx} className="p-5 md:p-6 h-full flex flex-col justify-between">
                        <div>
                          <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-[20px] bg-[#1a1233] mb-5 border border-white/10">
                            <motion.img 
                              whileHover={{ scale: 1.08 }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                              alt={item.title} 
                              className="w-full h-full object-cover" 
                              src={item.img} 
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3.5 py-1.5 rounded-full bg-[rgba(12,9,26,0.85)] backdrop-blur-md border border-white/20 font-mono text-[10px] uppercase tracking-widest text-[#FFC400] font-bold shadow-lg">
                                {item.tag}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 font-mono text-xs text-[#cbbeff] uppercase tracking-widest mb-2 font-semibold">
                            <span>{item.client}</span>
                            <span>•</span>
                            <span className="text-[#FFC400] font-bold">{item.category}</span>
                            <span>•</span>
                            <span>{item.year}</span>
                          </div>

                          <h3 className="text-xl font-bold text-white group-hover:text-[#FFC400] transition-colors mb-3 uppercase">
                            {item.title}
                          </h3>

                          <p className="text-xs text-[#d3c5ab] leading-relaxed mb-6 font-sans">
                            {item.desc}
                          </p>
                        </div>

                        <div className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] group-hover:bg-[#FFC400] text-[#FFC400] group-hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all">
                          <span>{isAr ? "عرض تفاصيل المشروع" : "View Case Study"}</span>
                          <span className={`transform ${isAr ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"} transition-transform duration-300`}>
                            {isAr ? "←" : "→"}
                          </span>
                        </div>
                      </AnimatedDirectionCard>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section className="w-full px-6 md:px-12 py-20 bg-[#0f0b22] relative overflow-hidden" id="contact">
          <div className="relative z-10 max-w-5xl mx-auto w-full rounded-[28px] liquid-glass p-8 md:p-14 text-center flex flex-col items-center border border-[rgba(163,141,255,0.3)] shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(20,16,39,0.7)] border border-[rgba(163,141,255,0.3)] mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFC400] shadow-[0_0_8px_#FFC400] animate-ping" />
              <span className="font-mono text-xs text-[#FFC400] uppercase tracking-[0.2em] font-bold">
                {isAr ? "ابدأ التواصل معنا" : "Initiate Transmission"}
              </span>
            </motion.div>

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
                whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255,196,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
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
                whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255,196,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                href="tel:+201028499381"
              >
                <span>{isAr ? "اتصل بنا" : "CALL US"}</span>
                <span className="text-sm mx-1">{isAr ? "←" : "→"}</span>
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