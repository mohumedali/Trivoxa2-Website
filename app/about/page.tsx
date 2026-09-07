"use client";

import { useRef } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useLanguage } from "@/context/LanguageContext";
import FloatingActions from "@/component/FloatingActions";
import AnimatedCounter from "@/component/AnimatedCounter";
import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";

// ================= Animation Variants =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -70, scale: 0.98 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 70, scale: 0.98 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 }
  }
};

// ================= 3D Tilt Card Component =================
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

export default function AboutPage() {
  const { isAr } = useLanguage();

  return (
    <main className="w-full bg-[#0c091a] min-h-screen text-[#e6deff] font-sans selection:bg-[#FFC400] selection:text-[#1a1200] overflow-hidden">
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
            className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4c34a2]/30 blur-[160px]"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.35, 1], 
              opacity: [0.15, 0.4, 0.15],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-0 w-[550px] h-[550px] rounded-full bg-[#FFC400]/15 blur-[170px]"
          />
        </div>

        {/* ================= 01. HERO SECTION ================= */}
        <section className="relative z-10 w-full min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-16 pt-24 pb-16 bg-gradient-to-b from-[#141027] via-[#0f0b22] to-[#0c091a]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center my-auto">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideFromLeft} 
              className="lg:col-span-7 flex flex-col justify-center items-start h-full"
            >


              <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-white uppercase tracking-tight leading-[1.2] mb-4">
                {isAr ? (
                  <>نحول <span className="text-[#FFC400] underline decoration-[#cbbeff]/40 underline-offset-4">الأفكار</span> إلى أثر ملموس<span className="text-[#FFC400]">.</span></>
                ) : (
                  <>WE TURN <span className="text-[#FFC400] underline decoration-[#cbbeff]/40 underline-offset-4">IDEAS</span> INTO IMPACT<span className="text-[#FFC400]">.</span></>
                )}
              </h1>

              <p className="text-xs sm:text-sm text-[#d3c5ab] max-w-xl mb-6 leading-relaxed font-mono">
                {isAr 
                  ? "تريفوكسا هي وكالة إبداعية ورقمية تهدف لتحويل الأفكار الطموحة إلى علامات تجارية قوية، حملات تسويقية، محتوى متميز وتجارب رقمية استثنائية."
                  : "TRIVOXA is a creative and digital agency focused on turning ambitious ideas into powerful brands, campaigns, content and digital experiences."
                }
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <motion.a
                  whileHover={{ scale: 1.08, y: -3, boxShadow: "0 10px 25px rgba(255,196,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="/ourWork"
                >
                  {isAr ? "أعمالنا ←" : "OUR WORK →"}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -3, borderColor: "#FFC400", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-[16px] bg-[rgba(163,141,255,0.12)] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#251a00] border border-[rgba(163,141,255,0.25)] text-xs font-bold tracking-widest uppercase font-mono transition-all" 
                  href="/Contact"
                >
                  {isAr ? "تواصل معنا ←" : "CONTACT US →"}
                </motion.a>
              </div>

              <div className="flex items-center gap-8 pt-4 border-t border-[rgba(163,141,255,0.2)] w-full font-mono text-xs text-[#d3c5ab]">
                <motion.div whileHover={{ x: 5 }}>
                  <span className="text-[#FFC400] block font-bold">{isAr ? "2021 — نقطة التحول" : "2021 — INFLECTION"}</span>
                  <span className="text-[11px] text-[#cbbeff]/70">{isAr ? "تأسست في القاهرة" : "Established in Cairo"}</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <span className="text-white block font-bold">{isAr ? "نماذج سرعة 48H" : "48H PROTOTYPING"}</span>
                  <span className="text-[11px] text-[#cbbeff]/70">{isAr ? "إطلاق وحضور عالمي" : "Global Deployments"}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right 3D Tilt Card */}
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjb1U3C5-NFrqI1ebasufHg-1A7MSGQyJ-7Ur37pi4PVoO6DAlzSHc6GCh8AwGWhH28c0U-8WaECCSH6GB708Lf-xyc9K6XjW6gpKV1h9VNFa6xvW0tp_0A9L5skreVCGg9v2ksdNQ58TP4kXQS6ljNyUHzKRYqKEqpjSvHDn3AOnvwGjxVGSQ_QQDO_imCWiEsbgvjFWGbg016SJc8C5niNAfkA3cOvMdnhrmiP4qSdw7oI2VcyIH" 
                    alt="TRIVOXA Studio" 
                    className="w-full h-full object-cover grayscale-[15%] contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[rgba(12,9,26,0.85)] border border-white/20 font-mono text-[10px] uppercase text-[#FFC400] font-bold shadow-md">
                      {isAr ? "تأسست 2021 — القاهرة وعالمياً" : "ESTD. 2021 — CAIRO & GLOBAL"}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-[14px] bg-[rgba(12,9,26,0.85)] backdrop-blur-md border border-[rgba(163,141,255,0.25)] flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-white font-bold block">{isAr ? "نشر الاستوديو // استقبال المشروعات" : "Studio Dispatch // 04 Intake"}</span>
                      <span className="text-[#cbbeff]/70 text-[10px]">{isAr ? "قائمة إنتاج الربع الثاني مفتوحة" : "Active Q2 production queue open"}</span>
                    </div>
                    <span className="text-base text-[#FFC400] animate-bounce">↗</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </section>

        {/* ================= 02. WHO WE ARE ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0f0b22]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            
            <div className="flex items-center justify-between border-b border-[rgba(163,141,255,0.15)] pb-3">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#FFC400] font-bold">02 / 05</span>
                <span className="text-[#cbbeff]/30">——</span>
                <span className="text-[#e6deff] uppercase font-semibold">{isAr ? "من نحن" : "WHO WE ARE"}</span>
              </div>
              <span className="font-mono text-xs text-[#cbbeff]/60 uppercase tracking-widest hidden md:inline-block">
                {isAr ? "فلسفة ورؤية تريفوكسا" : "TRIVOXA PHILOSOPHY & ETHOS"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideFromLeft}
                className="lg:col-span-6"
              >
                <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-white uppercase tracking-tight leading-[1.3]">
                  {isAr ? (
                    <>نعمل عند التلاقي بين <span className="text-[#cbbeff] italic font-normal">الشجاعة الفنية الجريئة</span> و<span className="text-[#FFC400]">الدقة الرقمية</span> الهندسية.</>
                  ) : (
                    <>WE OPERATE AT THE CONVERGENCE OF <span className="text-[#cbbeff] italic font-normal">RADICAL ARTISTIC BRAVERY</span> AND ENGINEERED <span className="text-[#FFC400]">DIGITAL PRECISION</span>.</>
                  )}
                </h2>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideFromRight}
                className="lg:col-span-6 flex flex-col gap-5"
              >
                <p className="text-xs sm:text-sm text-[#d3c5ab] leading-relaxed">
                  {isAr 
                    ? "تأسست تريفوكسا في قلب إعادة التعريف الثقافي للشرق الأوسط والمنطقة العربية، لتمحو الفجوة بين الفخامة البصرية وآليات تحقيق الأرباح والانتشار."
                    : "Founded at the intersection of MENA’s explosive cultural redefinition and international vanguard digital culture, TRIVOXA exists to obliterate the divide between aesthetic prestige and conversion mechanics."
                  }
                </p>
                <p className="text-xs sm:text-sm text-[#d3c5ab]/80 leading-relaxed">
                  {isAr 
                    ? "نحن نرفض الحلول الجاهزة. كل هوية تجارية، تصميم مكاني، مجسم ثلاثي الأبعاد، وحملة إعلانية، يُصاغ من خلال رؤية استراتيجية عميقة."
                    : "We reject off-the-shelf formulas. Every brand blueprint, spatial design system, 3D render, and multi-channel campaign is sculpted from raw strategic tension."
                  }
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <TiltCard className="p-3.5 text-center">
                    <span className="text-xl font-extrabold text-[#FFC400] block">
                      <AnimatedCounter to={94} suffix="%" />
                    </span>
                    <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold">{isAr ? "معدل ولاء العملاء" : "Retention Velocity"}</span>
                  </TiltCard>

                  <TiltCard className="p-3.5 text-center">
                    <span className="text-xl font-extrabold text-[#cbbeff] block">
                      <AnimatedCounter to={18} suffix="+" />
                    </span>
                    <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold">{isAr ? "أسواق عالمية" : "Global Markets"}</span>
                  </TiltCard>

                  <TiltCard className="p-3.5 text-center">
                    <span className="text-xl font-extrabold text-white block">
                      <AnimatedCounter to={3.8} prefix="" suffix="x" />
                    </span>
                    <span className="font-mono text-[9px] text-[#cbbeff] uppercase font-bold">{isAr ? "نمو القيمة العادلة" : "Average Equity Lift"}</span>
                  </TiltCard>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideFromLeft}
                className="md:col-span-8 aspect-[16/9] rounded-[22px] overflow-hidden relative border border-[rgba(163,141,255,0.35)] group shadow-xl cursor-pointer"
              >
                <motion.img 
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSeO7mSG3x6mpM9BLR5nimFX6JNsp1gH7XmA3RClYRJ41VZaNv19nJud3ur8GKkjHuY6qFgrMJFUEpHKlJZTKA-xw4Nf6XXLImZAO951s1HtughOWv2KJhs9cIeWoYoLMjM5GOqLtFz8Eoe29-qtUxhDrGZvStvcFuCpjTALJz25CzeK6KP_3VsReum199T6osL3RssITXLM8UOEzJWsoDMSP-H53JhGCYUgb4VWg7kJhzK7_JF4Re" 
                  alt="Production Lab" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-[rgba(12,9,26,0.85)] border border-white/20 font-mono text-[10px] uppercase text-[#cbbeff] font-bold">
                  {isAr ? "الإنتاج الفعلي • معمل الاستوديو" : "PHYSICAL PRODUCTION • STUDIO LAB"}
                </span>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideFromRight}
                className="md:col-span-4 flex flex-col gap-4"
              >
                <div className="h-full min-h-[180px] rounded-[22px] overflow-hidden relative border border-[rgba(163,141,255,0.35)] group shadow-xl cursor-pointer">
                  <motion.img 
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9d5ILHCXW-iVC8BWrKty6PaJ1nnjG3vTISEq6yFiJsRjUOBuqXnhyfMqmU0-PtvkUdKqNxHVMFKUZ6WYX-PluU4S4iZ8d0aGUD_eTrY6y8rB_2j63xyAtC2BVxZNKHlY5t9rUPskBwpztBE-G9014ck7wl_37JJKZSUJeLuEycScx6i2esZ2sfnJtA6PiUoi5cWSwvn29hcbTXvExamZRcbX9CzQbruJ_qLq32wPyrd8iXfSjgqW" 
                    alt="3D Workstation" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase text-[#FFC400] font-bold">
                    {isAr ? "دقة هندسية" : "ENGINEERED ACCURACY"}
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ================= 03. OUR VISION ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0c091a]">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#FFC400] font-bold">03 / 05</span>
              <span className="text-[#cbbeff]/30">——</span>
              <span className="text-[#e6deff] uppercase font-semibold">{isAr ? "رؤيتنا" : "OUR VISION"}</span>
            </div>

            <div className="flex flex-col gap-1 font-extrabold uppercase text-xl sm:text-2xl lg:text-[24px] tracking-tight leading-[1.2]">
              <h2 className="text-white">
                {isAr ? <>بناء علامات <span className="text-[#cbbeff] underline decoration-[#FFC400]/40 underline-offset-4">تجارية خالدة</span></> : <>BUILDING <span className="text-[#cbbeff] underline decoration-[#FFC400]/40 underline-offset-4">MEMORABLE</span> BRANDS</>}
              </h2>
              <h2 className="text-[#d3c5ab]">
                {isAr ? "وخلق تواصل مؤلم بالأثر" : "& CREATING MEANINGFUL"}
              </h2>
              <h2 className="text-white">
                {isAr ? <>وذو معنــى<span className="text-[#FFC400]">.</span></> : <>COMMUNICATION<span className="text-[#FFC400]">.</span></>}
              </h2>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2"
            >
              {[
                { 
                  id: isAr ? "01 / الهوية التجارية" : "01 / BRAND IDENTITY", 
                  title: isAr ? "صوت ثقافي فريد" : "SINGULAR CULTURAL VOICE", 
                  desc: isAr ? "نبني عوالم بصرية ومفاهيم فريدة تتجاوز الضوضاء الرقمية والصرعات العابرة." : "We build non-fungible visual and conceptual universes that survive algorithmic noise and commoditized trends.", 
                  pct: "85% High", 
                  tag: isAr ? "مؤشر التمايز" : "Distinction Index", 
                  width: "85%" 
                },
                { 
                  id: isAr ? "02 / المحتوى والقصة" : "02 / CONTENT & STORY", 
                  title: isAr ? "جاذبية السرد" : "NARRATIVE GRAVITY", 
                  desc: isAr ? "تحويل المتابعين العاديين إلى داعمين وموالين للعلامة التجارية من خلال محتوى سينمائي ساحر." : "Converting passive eyeballs into committed brand advocates through editorial pacing and cinematic production.", 
                  pct: "92% Top-Tier", 
                  tag: isAr ? "قوة التذكر" : "Recall Resonance", 
                  width: "92%" 
                },
                { 
                  id: isAr ? "03 / المنصات الرقمية" : "03 / DIGITAL PLATFORMS", 
                  title: isAr ? "انسيابية مطلقة" : "FLAWLESS FLUIDITY", 
                  desc: isAr ? "بنية تحتية رقمية ومواقع إلكترونية مصممة بسلاسة فائقة وتفاعلات ممتعة للمستخدم." : "Seamless web infrastructure engineered with hyper-responsive framerates and intuitive interactive delight.", 
                  pct: "98/100 Core", 
                  tag: isAr ? "معيار الأداء" : "Performance Benchmark", 
                  width: "98%" 
                }
              ].map((card, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <TiltCard className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[11px] text-[#FFC400] font-bold uppercase tracking-widest">{card.id}</span>
                        <span className="text-xs text-[#cbbeff]">↗</span>
                      </div>
                      <h3 className="text-base font-bold text-white uppercase mb-2">{card.title}</h3>
                      <p className="text-xs text-[#d3c5ab] leading-relaxed mb-6 font-sans">{card.desc}</p>
                    </div>
                    <div>
                      <div className="w-full h-1 bg-[rgba(163,141,255,0.2)] rounded-full mb-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: card.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.2 }}
                          className="h-full bg-[#FFC400] rounded-full" 
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[11px] text-[#cbbeff]">
                        <span>{card.tag}</span>
                        <span className="text-[#FFC400] font-bold">{card.pct}</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ================= 04. THE DIFFERENCE ================= */}
        <section className="relative z-10 w-full px-5 md:px-10 lg:px-16 py-16 bg-[#0f0b22]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs mb-2">
                  <span className="text-[#FFC400] font-bold">04 / 05</span>
                  <span className="text-[#cbbeff]/30">——</span>
                  <span className="text-[#e6deff] uppercase font-semibold">{isAr ? "ما يميزنا" : "THE DIFFERENCE"}</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-white uppercase">
                  {isAr ? <>مصممة ببراعة وبدون مساومة<span className="text-[#FFC400]">.</span></> : <>CRAFTED WITHOUT COMPROMISE<span className="text-[#FFC400]">.</span></>}
                </h2>
              </div>
              <p className="text-xs text-[#d3c5ab] max-w-md font-mono leading-relaxed">
                {isAr 
                  ? "خمسة ركائز أساسية مصممة لكسر القواعد المعتادة وإطلاق العنان لقوة العلامة التجارية."
                  : "Five core disciplines structured asymmetrically to dismantle convention and unlock disproportionate brand leverage."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Pillar 01 */}
              <TiltCard className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#FFC400] font-bold uppercase block mb-1">
                    {isAr ? "01 / الأساس" : "01 / FOUNDATION"}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase mb-3">
                    {isAr ? "الاستراتيجية أولاً" : "STRATEGY FIRST"}
                  </h3>
                  <p className="text-xs text-[#d3c5ab] leading-relaxed mb-6 font-sans">
                    {isAr 
                      ? "لا يتم تنفيذ أي تصميم بصرى في فراغ. نحن نحلل النقاط العمياء في السوق، الثغرات التنافسية، وسيكولوجية الجمهور الهدف قبل بدء التصميم."
                      : "No visual design is executed in a vacuum. We reverse-engineer market blind spots, competitive vulnerabilities, and high-margin audience psychology before touching a single pixel."
                    }
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(isAr 
                    ? ["تدقيق التموضع", "هندسة السرد", "ابتكار الفئات"] 
                    : ["POSITIONING AUDITS", "NARRATIVE ARCHITECTURE", "CATEGORY CREATION"]
                  ).map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[rgba(12,9,26,0.8)] border border-[rgba(163,141,255,0.25)] font-mono text-[10px] text-[#cbbeff] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>

              {/* Pillar 02 */}
              <TiltCard className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#cbbeff] font-bold uppercase block mb-1">
                    {isAr ? "02 / الابتكار" : "02 / DISRUPTION"}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase mb-3">
                    {isAr ? "التفكير الإبداعي" : "CREATIVE THINKING"}
                  </h3>
                  <p className="text-xs text-[#d3c5ab] leading-relaxed mb-6 font-sans">
                    {isAr 
                      ? "نبتعد عن التكرار والأنماط البصرية الروتينية. نصمم خطوطاً خاصة، وعوالم ثلاثية الأبعاد، وأنماط حركة مصممة خصيصاً لهويتك."
                      : "Rejecting visual templates and aesthetic monotony. We craft custom typographic signatures, 3D worlds, and avant-garde motion styles tailored purely to your mandate."
                    }
                  </p>
                </div>
                <div className="p-3 rounded-[12px] bg-[rgba(12,9,26,0.6)] border border-[rgba(163,141,255,0.2)] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#d3c5ab]">{isAr ? "أصالة التصميم" : "DESIGN ORIGINALITY"}</span>
                  <span className="text-[#FFC400] font-bold">{isAr ? "100% مخصص" : "100% BESPOKE"}</span>
                </div>
              </TiltCard>

              {/* Pillar 03 */}
              <TiltCard className="md:col-span-4 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#FFC400] font-bold uppercase block mb-1">
                    {isAr ? "03 / الأداء" : "03 / PERFORMANCE"}
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mb-2">
                    {isAr ? "الأثر التجاري" : "BUSINESS IMPACT"}
                  </h3>
                  <p className="text-xs text-[#d3c5ab] leading-relaxed mb-4 font-sans">
                    {isAr 
                      ? "أعمال إبداعية تتضاعف كمحرك لتقييم الشركة، جولات الاستثمار، وزيادة القيمة الدائمة للعملاء."
                      : "Creative work that doubles as an engine for enterprise evaluation, investor rounds, and customer lifetime value."
                    }
                  </p>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-[#FFC400] block leading-none">5.2X</span>
                  <span className="font-mono text-[10px] text-[#cbbeff] uppercase block mt-1">
                    {isAr ? "متوسط نمو أعمال العملاء" : "AVERAGE CLIENT PIPELINE GROWTH"}
                  </span>
                </div>
              </TiltCard>

              {/* Pillar 04 */}
              <TiltCard className="md:col-span-4 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#cbbeff] font-bold uppercase block mb-1">
                    {isAr ? "04 / التناغم" : "04 / SYNCHRONICITY"}
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mb-2">
                    {isAr ? "البيانات + الإبداع" : "DATA + CREATIVITY"}
                  </h3>
                </div>

                <div className="my-2 py-1">
                  <svg className="w-full h-10 text-[#FFC400]" fill="none" preserveAspectRatio="none" viewBox="0 0 240 60">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                      d="M0 45 C 30 45, 45 20, 75 25 C 105 30, 120 5, 150 15 C 180 25, 200 8, 240 2" 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeWidth="2.5" 
                    />
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
                      d="M0 55 C 35 55, 60 40, 95 42 C 130 44, 155 25, 190 30 C 215 34, 230 20, 240 18" 
                      opacity="0.6" 
                      stroke="#A38DFF" 
                      strokeDasharray="3 3" 
                      strokeWidth="1.5" 
                    />
                  </svg>
                  <div className="flex justify-between font-mono text-[10px] text-[#d3c5ab]/80 mt-1">
                    <span>{isAr ? "الحدس الإبداعي" : "INTUITION"}</span>
                    <span className="text-[#FFC400] font-bold">{isAr ? "نمو مدروس" : "EMPIRICAL LIFT"}</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#d3c5ab] leading-relaxed font-sans">
                  {isAr 
                    ? "تأكيد جودة الفن الجريء بآليات قياس متطورة وحلقات تتبع رقمية."
                    : "Validating boundary-pushing art with qualitative feedback and algorithmic tracking loops."
                  }
                </p>
              </TiltCard>

              {/* Pillar 05 */}
              <TiltCard className="md:col-span-4 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#FFC400] font-bold uppercase block mb-1">
                    {isAr ? "05 / السرعة" : "05 / VELOCITY"}
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mb-2">
                    {isAr ? "تنفيذ سريع" : "FAST EXECUTION"}
                  </h3>
                  <p className="text-xs text-[#d3c5ab] leading-relaxed mb-4 font-sans">
                    {isAr 
                      ? "فرق عمل خبيرة ومتعددة التخصصات تنهي الروتين البيروقراطي وتقدم النتائج بسرعة قياسية."
                      : "Lean, senior multidisciplinary squads. We kill bureaucratic friction and deliver market-ready assets at speed."
                    }
                  </p>
                </div>
                <div className="p-3 rounded-[12px] bg-[rgba(12,9,26,0.6)] border border-[rgba(163,141,255,0.2)] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#d3c5ab]">{isAr ? "زمن التسليم السريع" : "SPRINT TURNAROUND"}</span>
                  <span className="text-[#cbbeff] font-bold">{isAr ? "14 يوماً" : "14 DAYS"}</span>
                </div>
              </TiltCard>

            </div>

          </div>
        </section>

      </div>
      
      {/* ================= FINAL CALL TO ACTION SECTION ================= */}
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
              <span className="text-sm ml-2">←</span>
            </motion.a>
          </div>
        </div>
      </section>

      <FloatingActions />
      <Footer />
    </main>
  );
}