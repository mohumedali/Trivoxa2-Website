"use client";

import FloatingActions from "@/component/FloatingActions"; 
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import ClientsSection from "@/component/animatedCollaborators";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Framer Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function Home() {
  const { isAr } = useLanguage();

  const capabilities = [
    {
      num: isAr ? "01 // الهوية البصرية" : "01 // BRANDING",
      title: isAr ? "بناء الهوية والعلامات التجارية" : "Branding & Identity Architecture",
      desc: isAr 
        ? "نصمم هويات تجارية قوية ومستدامة، وخطوطاً مخصصة، وأنظمة تصميم شاملة تضمن استمرارية العلامة التجارية." 
        : "We engineer sovereign brand identities, bespoke typography, and comprehensive multi-platform design systems built for cultural longevity.",
      img: "https://lh3.googleusercontent.com/aida/AEtjO1XbNW3SER0O4BcVtcU_OKyFTHMGSw_YBcBTO3eyrne_h3v6cR6H3q7DjeGIUTVa9ZY7bYVYrZPPtUvqyjlJuyHKRygLgbSI4R41cn3h-7bo8fVMKOKP9L17_kMEnKePXr0deE6HRT7lLErPw8Ov7t51DpQYqTLuWrwZcFu5bA4_GWL4PuyGlDBc1ZdfDYeONxaC1KiztGxTXzcT_ViTpGDihexLJ12XZQ3-PnldnWDmaf6n6z0Px6XSAo0"
    },
    {
      num: isAr ? "02 // وسائل التواصل" : "02 // SOCIAL MEDIA",
      title: isAr ? "إدارة محتوى السوشيال ميديا" : "Social Media Content Management",
      desc: isAr 
        ? "حملات إبداعية ومحتوى متحرك عالي التأثير مصمم لجذب الانتباه وهيمنة العلامة التجارية على منصات التواصل." 
        : "Curated motion narratives and viral community-driven campaigns designed to capture collective attention and dominate modern feeds.",
      img: "https://lh3.googleusercontent.com/aida/AEtjO1UpmhV-oiX_W_bp3e0RVDLBP3UCUVYeZpmmT8ZRUDS1DKqCsTeetApTWadrzJdLAcLJo6_rzESAAVFBXjXDVREgchg3hFLUhzX3tKIP-eXTl9QntuzDMAM9t4C_W4KI4-pGuoqGHgHAnIaSSQ0fnubamPZJ7PmHiApUJiYnKRMfxL4L8AcPJaSufTTVud4fJcQEincbw5n6tmPQpecqjzgsznWiBWfwcbb2tgNh5xpMrxUtf1yFS8MSog"
    },
    {
      num: isAr ? "03 // صناعة المحتوى" : "03 // CONTENT CREATION",
      title: isAr ? "صناعة وإنتاج المحتوى" : "Content Creation & Production",
      desc: isAr 
        ? "إنتاج إعلانات سينمائية، تصوير احترافي، وتأثيرات بصرية ثلاثية الأبعاد تُبرز فخامة العلامة التجارية." 
        : "Cinema-grade commercial production, studio photography, and hyper-realistic 3D visual effects tailored for prestige brand showcases.",
      img: "https://lh3.googleusercontent.com/aida/AEtjO1VRPAUaoc1Bbff-1lpsF5yar2KhtYAxXKyt38m-LessKg5srvDrThkNssXYimRTKY8E9sDM7gkIRM67o5EhiNzpZos2OXbsP-kd-KJgPhI6wj4HrW7f1gb25JJze52vRCHNDHTGElQvYRdDfCJuD2jx6Y_yY0rsbs1mU1mHvbkXUvT7mP0c28RG5DVgal-iR2fyP4PSnIwfyOItqR3kZzC8finzTqcggPuKoffxd8SPYpQB-5rl1cp3_q8"
    }
  ];

  const portfolioCases = [
    {
      id: "neo-horizon",
      tag: isAr ? "مشروع رائد" : "Flagship Project",
      client: "Horizon Mobility",
      category: isAr ? "الهوية والإبداع" : "Branding & Creative",
      year: "2024",
      title: isAr ? "نيو هورايزون — إطلاق سيارة كهربائية" : "NEO-HORIZON — Global EV Launch",
      desc: isAr 
        ? "بناء هوية تجارية منصة رقمية تفاعلية متعددة اللغات لأسرع شركة سيارات كهربائية نمواً في أوروبا، مما حقق 42,000 حجز في 14 يوماً." 
        : "Engineered a complete brand identity architecture and multilingual interactive web platform for Europe's fastest emerging luxury EV manufacturer, generating 42,000 reservation deposits in 14 days.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrHbS0ooFC4LCMam2uBYYD5X4nLELoQosacs6Ep9pZrNpkUZRt8pwD3_VCylNqMGi2gCjLCnM7to6iIGwxnM_F06axKhcnpGxL8zr8qkAOAjKnNJ8lPM6vXI-ZnMX_EpeojVxZWjGwhMY7jq2qP_rtt-qiJlXpMraYAvVOUHjJiIluG3wYiWnthROIBYuSvM51OmollZ7tPp1Qo4OLfItJvZfxhqCWz-TWGf2wb7JI7sx83dRSY9c-"
    },
    {
      id: "aetheria",
      tag: isAr ? "محتوى وفيلم" : "Content & Film",
      client: "Aetheria Parfums",
      category: isAr ? "حملة إعلانية" : "Campaign",
      year: "2024",
      title: isAr ? "إيثيريا — حملة العطور الفاخرة" : "AETHERIA — Haute Fragrance Omnichannel",
      desc: isAr 
        ? "إنتاج فيلم سينمائي وتصاميم ثلاثية الأبعاد وحملات رقمية متكاملة عبر 12 دولة لترسيخ موقع العلامة الفاخرة." 
        : "Cinematic film production, bespoke 3D packaging renders, and social-first activations across 12 territories delivering unmatched luxury positioning.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9I04Gng9zhPNxam9SMhr5hYriXJBF442vZ9mEsHDmtYSoRSHPo49SJfpOB5FJwxjOB41cAp8vAuPDv3U_UXg0pkM12M8Jp5PfK7-CSASNOLjGfSY7D9Uz4Hb1CkFI2WQ4BFJKxQX6glrBwXHtAkPXj2D91LNsRCdCmfiFD2aHzrusUdNpWUZzlmN-3DFVPNX0AQLoMIIiT18a9qX6oBWRffQyb8zGOAXYI2ea-IFXso9rj218DcFs"
    },
    {
      id: "synapse-ai",
      tag: isAr ? "ذكاء اصطناعي وويب" : "AI & Web",
      client: "Synapse Labs",
      category: isAr ? "هوية وموقع" : "Identity & Web",
      year: "2024",
      title: isAr ? "سينابس AI — هوية منصة المطورين" : "SYNAPSE AI — Developer Platform Identity",
      desc: isAr 
        ? "بناء وتصميم منصة الذكاء الاصطناعي بنظام تصميم معماري وواجهة مظلمة انسيابية ولوحة تحكم تفاعلية." 
        : "Positioning an enterprise LLM orchestration infrastructure with an architectural design system, fluid dark UI, and intuitive interactive console.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjdA12zEtHzyMBVDqIogj-aqWB01hCcmKeIoEX3aHJ1M3jyhVN4jRsLvMRflScdcABxfQWg-TCmieKKj-i2cRzli7j6wu2yEMT-r9s9bPhtcmDvuNzSsFfRpdd9YpREU10Ormb_oJ5Z_837Js0XLIkt_g3_Db5fKKleVqYNkLp3xOKieJrW6ZoQ8ZvOGqABtwtUNftzu4cRPXy0fQ7P9FKsj9uqxNIjU4QECM8VGIarsmB5mTtEH"
    },
    {
      id: "kinetic-coffee",
      tag: isAr ? "نمو المبيعات" : "DTC Growth",
      client: "Kinetic Roasters",
      category: isAr ? "سوشيال ونمو" : "Social & Growth",
      year: "2024",
      title: isAr ? "كينتيك كوفي — موجه انتشار ثفافي" : "KINETIC COFFEE — DTC Cultural Social Wave",
      desc: isAr 
        ? "حملة إطلاق استهدفت ثقافة الشارع حققت 18.2 مليون مشاهدة غير مدفوعة على تيك توك وزيادة 410% في الاشتراكات المباشرة." 
        : "A viral street-culture focused launch campaign achieving 18.2M organic TikTok impressions and a 410% spike in direct subscription signups.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0H6JEtGIOQ9EMAnm-rmA_0Frna_JGnOV13iErokOrZOCWtmzOFp8u5whb9va_mAyIXhNIDVqphLo-n8Hij56YNWA0SZHC2SegExFyv0ksuFuWNtitTh9dwtoeWadxuA02SZBwsKIz7HpdeVbL-Ng1OHijsaNkoomKHtMlzRvjLdyUQ2LSY2VSLF80Dw_ikLad__KCF3XhlxAiNMwL7Rg7iskuoiifj_KRkb2ISD-KuHUgtItn2a3R"
    }
  ];

  return (
    <main className="w-full pt-28 bg-[#141027] min-h-screen text-white font-sans selection:bg-[#FFC400] selection:text-[#251a00] relative">
      <Navbar />

      <div className="flex flex-col w-full overflow-x-hidden relative">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-6 md:px-12 py-16 overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjdA12zEtHzyMBVDqIogj-aqWB01hCcmKeIoEX3aHJ1M3jyhVN4jRsLvMRflScdcABxfQWg-TCmieKKj-i2cRzli7j6wu2yEMT-r9s9bPhtcmDvuNzSsFfRpdd9YpREU10Ormb_oJ5Z_837Js0XLIkt_g3_Db5fKKleVqYNkLp3xOKieJrW6ZoQ8ZvOGqABtwtUNftzu4cRPXy0fQ7P9FKsj9uqxNIjU4QECM8VGIarsmB5mTtEH" 
              alt="Background Mesh" 
              className="w-full h-full object-cover opacity-[0.12] mix-blend-luminosity scale-110 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#141027]/80 via-[#0f0b22]/90 to-[#141027]" />
          </div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-[560px] h-[560px] rounded-full bg-[#4c34a2]/25 blur-[140px] pointer-events-none z-0"
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer} 
              className="lg:col-span-7 flex flex-col items-start"
            >
              <motion.h1 variants={fadeInUp} className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-2xl">
                {isAr ? (
                  <>حيث تتغير <span className="text-[#cbbeff] font-medium">الأفكار</span>، وترتفع <span className="relative inline-block text-[#FFC400]">الأصوات.</span></>
                ) : (
                  <>Where ideas <span className="text-[#cbbeff] font-medium">shift</span>, and voices <span className="relative inline-block text-[#FFC400]">rise.</span></>
                )}
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#d3c5ab] max-w-xl mb-8 leading-relaxed font-normal">
                {isAr 
                  ? "تريفوكسا استوديو إبداعي ومستقل يهدف لمساعدة العلامات التجارية الطموحة على تحويل أفكارها إلى تجارب بصرية مؤثرة."
                  : "TRIVOXA is an independent creative and brand engineering studio helping forward-thinking brands transform ideas into meaningful visual experiences."
                }
              </motion.p>

              <motion.div variants={fadeInLeft} className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="#contact"
                >
                  {isAr ? "تواصل معنا" : "CONTACT US"}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="#work"
                >
                  {isAr ? "استكشف أعمالنا" : "Explore Our Work"}
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col"
            >
              <motion.div 
                whileHover={{ y: -5, borderColor: "rgba(255, 196, 0, 0.4)" }} 
                transition={{ duration: 0.3 }}
                className="relative w-full rounded-[24px] liquid-glass p-7 md:p-8 border border-[rgba(163,141,255,0.3)] shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-[rgba(163,141,255,0.15)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FFC400] font-bold">
                      {isAr ? "بث الاستوديو المباشر" : "Live Studio Dispatch"}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#cbbeff]/60 uppercase">
                    {isAr ? "المقر الرئيسي بالقاهرة" : "Cairo HQ"}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 mb-6">
                  <span className="font-mono text-xs text-[#d3c5ab] uppercase tracking-wider font-medium">
                    {isAr ? "خط التواصل المباشر" : "Direct Studio Wire"}
                  </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-[#cbbeff]/70 uppercase">{isAr ? "الخط المباشر" : "DIRECT WIRE"}</span>
                  <a href="tel:+201028499381" dir="ltr" className="text-2xl font-extrabold text-white hover:text-[#FFC400] transition-colors w-fit">
                    +20 102 849 9381
                  </a>
                </div>
                  <span className="text-xs text-[#cbbeff]/75">
                    {isAr ? "مكتب القاهرة • توقيت مصر • الإثنين–الجمعة" : "Cairo Central Desk • GMT+2 • Mon–Fri"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 px-5 my-2 rounded-[18px] bg-[rgba(20,16,39,0.55)] border border-[rgba(163,141,255,0.2)]">
                  <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-[#FFC400]">98.4%</span>
                    <span className="font-mono text-[11px] text-[#d3c5ab] uppercase tracking-wider mt-0.5">
                      {isAr ? "ثقة ورضا العملاء" : "Client Retention"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-[#cbbeff]">24+</span>
                    <span className="font-mono text-[11px] text-[#d3c5ab] uppercase tracking-wider mt-0.5">
                      {isAr ? "جوائز وتقديرات" : "Global Recognitions"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= CAPABILITIES SECTION ================= */}
        <section className="w-full px-6 md:px-12 py-20 bg-[#0f0b22] relative" id="services">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-6 bg-[#FFC400] rounded-full" />
                <span className="font-mono text-xs text-[#cbbeff] uppercase tracking-[0.2em] font-semibold">
                  {isAr ? "خدماتنا وإمكانياتنا" : "Our Capabilities"}
                </span>
                <span className="h-1.5 w-6 bg-[#FFC400] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {isAr ? "مصممة لترك أثر ثقافي ملموس." : "Engineered for cultural resonance."}
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="liquid-glass-card rounded-[24px] p-6 flex flex-col justify-between group h-full border border-[rgba(163,141,255,0.25)] hover:border-[#FFC400]"
                >
                  <div>
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-[18px] relative bg-[#201c34] mb-5 border border-white/5">
                      <motion.img 
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        src={item.img} 
                      />
                    </div>
                    <span className="block text-xs font-semibold tracking-[0.2em] text-[#cbbeff] mb-2 uppercase font-mono">{item.num}</span>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#FFC400] transition-colors">{item.title}</h3>
                    <p className="text-sm text-[#d3c5ab] leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <Link 
                    className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                    href="#work"
                  >
                    <span>{isAr ? "عرض المشروع" : "CASE STUDY"}</span>
                    <span>{isAr ? "←" : "→"}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= STRATEGIC PHILOSOPHY SECTION ================= */}
        <section className="w-full px-6 md:px-12 py-20 bg-[#141027] relative overflow-hidden" id="philosophy">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 flex flex-col justify-between h-full"
            >
              <div>
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 mb-5">
                  <span className="h-1.5 w-6 bg-[#FFC400] rounded-full" />
                  <span className="font-mono text-xs text-[#cbbeff] uppercase tracking-[0.2em] font-bold">
                    {isAr ? "الفلسفة الاستراتيجية" : "STRATEGIC PHILOSOPHY"}
                  </span>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.12] tracking-tight">
                  {isAr ? (
                    <>التلاقي بين <span className="text-[#FFC400] italic">الإخراج الفني الجريء</span> والنمو المدروس.</>
                  ) : (
                    <>The intersection of <span className="text-[#FFC400] italic">fearless art direction</span> and engineered growth.</>
                  )}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-sm md:text-base text-[#d3c5ab] leading-relaxed mb-8">
                  {isAr 
                    ? "معظم الوكالات تجبرك على الاختيار بين تصاميم تجريدية أو مسارات مبيعات جافة. في تريفوكسا، نعمل وفق مبدأ أن الرؤية الفنية الباهرة هي أقوى أداة لتحقيق المبيعات والنمو."
                    : "Most agencies force you to choose between avant-garde aesthetics that win design trophies or dry transactional funnels. At TRIVOXA, we operate under the doctrine that breathtaking artistic conviction is the highest-leverage conversion vehicle in digital commerce."
                  }
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4 mt-auto">
                <div className="p-5 sm:p-6 rounded-[22px] liquid-glass border border-[rgba(163,141,255,0.2)] flex flex-col justify-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC400] tracking-tight mb-1.5">$140M+</span>
                  <span className="font-mono text-[11px] text-[#cbbeff]/80 uppercase tracking-widest font-bold">
                    {isAr ? "قيمة مضافة للعملاء" : "CLIENT VALUE CREATED"}
                  </span>
                </div>
                <div className="p-5 sm:p-6 rounded-[22px] liquid-glass border border-[rgba(163,141,255,0.2)] flex flex-col justify-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5">60+</span>
                  <span className="font-mono text-[11px] text-[#cbbeff]/80 uppercase tracking-widest font-bold">
                    {isAr ? "مشروع عالمي" : "GLOBAL DELIVERABLES"}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch h-full"
            >
              {[
                { 
                  num: "I", 
                  title: isAr ? "التفكير الإبداعي" : "Creative Thinking", 
                  desc: isAr ? "نبتعد عن الأفكار التقليدية لنصمم لغات بصرية تجذب انتباه المشاهدين بشكل حقيقي." : "Subverting conventional market tropes. We reject algorithmic templating to design visual languages that genuinely arrest viewer attention.", 
                  tag: isAr ? "حلول غير تقليدية" : "UNORTHODOX SOLUTIONS" 
                },
                { 
                  num: "II", 
                  title: isAr ? "الدقة الاستراتيجية" : "Strategic Rigor", 
                  desc: isAr ? "كل تفصيلة وحملة مبنية على تحليل عميق للسوق والمنافسين وسلوك الجمهور." : "Every curve, word, and campaign architecture is grounded in competitive brand positioning, demographic anthropology, and rigorous behavioral data.", 
                  tag: isAr ? "نتائج مثبتة" : "EMPIRICAL VALIDATION" 
                },
                { 
                  num: "III", 
                  title: isAr ? "السرد البصري" : "Visual Storytelling", 
                  desc: isAr ? "إنتاج تجارب سينمائية تحول العملاء العاديين إلى مجتمع متفاعل وداعم للعلامة." : "Engineering profound cinematic resonance that transforms casual purchasers into vocal brand evangelists and loyal communities.", 
                  tag: isAr ? "بناء الولاء" : "EMOTIONAL EQUITY" 
                },
                { 
                  num: "IV", 
                  title: isAr ? "التنفيذ الاحترافي" : "Relentless Execution", 
                  desc: isAr ? "من التصاميم ثلاثية الأبعاد إلى الحملات التسويقية، نضمن أعلى درجات الدقة في كل خطوة." : "From high-fidelity 3D renders to micro-optimized full-funnel media distribution, our craft remains immaculate at every deployment touchpoint.", 
                  tag: isAr ? "إطلاق بدون معوقات" : "ZERO FRICTION LAUNCH" 
                }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5, borderColor: "rgba(255, 196, 0, 0.4)" }}
                  className="p-6 rounded-[22px] liquid-glass border border-[rgba(163,141,255,0.2)] transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    <div className="w-11 h-11 rounded-[14px] bg-[rgba(76,52,162,0.45)] border border-[rgba(163,141,255,0.3)] flex items-center justify-center text-[#FFC400] font-mono font-bold mb-5 group-hover:bg-[#FFC400] group-hover:text-[#251a00] transition-colors">
                      {pillar.num}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#FFC400] transition-colors">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-[#d3c5ab] leading-relaxed">{pillar.desc}</p>
                  </div>
                  <span className="font-mono text-[11px] text-[#cbbeff]/75 uppercase tracking-widest mt-6 block font-semibold">• {pillar.tag}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SELECTED CASES (PORTFOLIO) SECTION ================= */}
        <section className="w-full px-6 md:px-12 py-20 bg-[#0f0b22] relative" id="work">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-6 bg-[#FFC400] rounded-full" />
                  <span className="font-mono text-xs text-[#cbbeff] uppercase tracking-[0.2em] font-semibold">
                    {isAr ? "أعمال مختارة • 2024–2025" : "Curated Portfolio • 2024–2025"}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {isAr ? "مشاريع مختارة." : "Selected Cases."}
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {(isAr 
                  ? ["الكل", "الهوية البصرية", "سوشيال ميديا", "صناعة المحتوى", "حملات إعلانية"] 
                  : ["All", "Branding", "Social Media", "Content Creation", "Campaigns"]
                ).map((tab, idx) => (
                  <button
                    key={tab}
                    className={`px-5 py-2.5 rounded-[14px] font-mono text-xs uppercase tracking-wider font-bold transition-all ${
                      idx === 0
                        ? "bg-[#FFC400] text-[#251a00] shadow-[0_4px_16px_rgba(255,196,0,0.3)]"
                        : "bg-[rgba(46,35,91,0.5)] hover:bg-[rgba(76,52,162,0.6)] text-[#cbbeff] hover:text-white border border-[rgba(163,141,255,0.2)]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
            >
              {portfolioCases.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between rounded-[26px] liquid-glass p-5 md:p-6 transition-all duration-300 h-full border border-[rgba(163,141,255,0.2)] hover:border-[#FFC400]"
                >
                  <Link href={`/work/${item.id}`} className="block h-full flex flex-col justify-between">
                    <div>
                      <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-[20px] bg-[#201c34] mb-5">
                        <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                          src={item.img} 
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full bg-[rgba(20,16,39,0.7)] backdrop-blur-md border border-white/15 font-mono text-xs uppercase tracking-widest text-[#FFC400] font-bold shadow-lg">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#cbbeff] uppercase tracking-widest mb-2 font-semibold">
                        <span>{item.client}</span>
                        <span>•</span>
                        <span>{item.category}</span>
                        <span>•</span>
                        <span>{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC400] transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#d3c5ab] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="inline-flex items-center justify-between px-4 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] group-hover:bg-[#FFC400] text-[#FFC400] group-hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all">
                      <span>{isAr ? "عرض تفاصيل المشروع" : "View Case Study"}</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">{isAr ? "←" : "→"}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= CLIENT PARTNERSHIPS SECTION ================= */}
        <ClientsSection />

        {/* ================= FINAL CALL TO ACTION SECTION ================= */}
        <section className="w-full px-6 md:px-12 py-20 bg-[#0f0b22] relative overflow-hidden" id="contact">
          <div className="relative z-10 max-w-5xl mx-auto w-full rounded-[28px] liquid-glass p-8 md:p-14 text-center flex flex-col items-center border border-[rgba(163,141,255,0.3)]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(20,16,39,0.7)] border border-[rgba(163,141,255,0.3)] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
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
                <span className="text-sm ml-2">{isAr ? "←" : "→"}</span>
              </motion.a>
            </div>
          </div>
        </section>

      </div>

      <aside aria-label="Quick Actions" className="fixed bottom-7 left-5 md:left-8 z-40 flex flex-col gap-3">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Direct Call Channel"
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[rgba(46,35,91,0.75)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.35)] backdrop-blur-xl shadow-2xl transition-colors"
          href="tel:+201028499381"
        >
          <span className="material-symbols-outlined text-[24px]">call</span>
        </motion.a>
      </aside>
      <FloatingActions />
      <Footer />
    </main>
  );
}