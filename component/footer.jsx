"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { isAr } = useLanguage();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/trivoxa",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com/trivoxa",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/trivoxa",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-[#090715] border-t border-[rgba(163,141,255,0.15)] pt-16 pb-12 px-5 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(163,141,255,0.1)]">
        
        {/* العمود الأول - اللوجو + الوصف والسوشيال */}
        <div className="md:col-span-5 flex flex-col justify-between items-start">
          <div>
            <Link href="/" className="flex items-center justify-center shrink-0 py-1 overflow-hidden h-12 w-75 relative">
              <img
                src="/images/LOGOS-06.png"
                alt="TRIVOXA Logo"
                style={{
                  transform: "scale(3.2)",
                  objectFit: "contain",
                }}
                className="h-full w-full object-contain drop-shadow-[0_2px_12px_rgba(255,196,0,0.55)]"
              />
            </Link>

            <p className="text-sm text-[#b8abdf] max-w-sm leading-relaxed mb-6">
              {isAr 
                ? "استوديو إبداعي مستقل وهندسة علامات تجارية يضع المعايير المتقدمة في الإخراج الإبداعي الرقمي والتجارب التفاعلية الغامرة."
                : "An independent creative and brand engineering studio setting the vanguard standard in digital creative direction and immersive experiences."
              }
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-[14px] liquid-glass-card flex items-center justify-center text-[#cbbeff] hover:text-[#FFC400] border border-[rgba(163,141,255,0.3)] hover:border-[#FFC400] transition-all duration-300 shadow-md"
                aria-label={social.name}
              >
                {social.svg}
              </motion.a>
            ))}
          </div>
        </div>

        {/* العمود الثاني - الروابط المباشرة للربط بالصفحات */}
        <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs">
          <span className="text-[#FFC400] font-bold uppercase tracking-widest mb-2">
            {isAr ? "روابط سريعة" : "QUICK LINKS"}
          </span>
          <Link href="/" className="text-[#b8abdf] hover:text-white transition-colors">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <Link href="/about" className="text-[#b8abdf] hover:text-white transition-colors">
            {isAr ? "من نحن" : "About Us"}
          </Link>
          <Link href="/ourWork" className="text-[#b8abdf] hover:text-white transition-colors">
            {isAr ? "أعمالنا" : "Our Work"}
          </Link>
          <Link href="/Clients" className="text-[#b8abdf] hover:text-white transition-colors">
            {isAr ? "عملاؤنا" : "Our Clients"}
          </Link>
          <Link href="/Contact" className="text-[#b8abdf] hover:text-white transition-colors">
            {isAr ? "تواصل معنا" : "Contact"}
          </Link>
        </div>

        {/* العمود الثالث - معلومات التواصل */}
        <div className="md:col-span-4 flex flex-col gap-3 font-mono text-xs">
          <span className="text-[#FFC400] font-bold uppercase tracking-widest mb-2">
            {isAr ? "معلومات التواصل" : "CONTACT"}
          </span>
          <span className="text-white font-bold">
            {isAr ? "مقر استوديو TRIVOXA" : "TRIVOXA Studio HQ"}
          </span>
          <span className="text-[#b8abdf]">
            {isAr ? "منطقة وسط البلد الإبداعية، القاهرة، مصر" : "Downtown Creative District, Cairo, Egypt"}
          </span>
          <a href="tel:+201028499381" className="text-[#FFC400] font-bold hover:underline mt-2">
            {isAr ? "مباشر: 9381 849 102 20+" : "Direct: +20 102 849 9381"}
          </a>
          <a href="mailto:hello@trivoxa.agency" className="text-[#b8abdf] hover:text-white transition-colors">
            {isAr ? "البريد: hello@trivoxa.agency" : "Email: hello@trivoxa.agency"}
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#b8abdf]/60">
        <span>
          {isAr ? "© 2026 استوديو TRIVOXA. جميع الحقوق محفوظة." : "© 2026 TRIVOXA Studio. All rights reserved."}
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {isAr ? "شروط التعاقد" : "Terms of Engagement"}
          </a>
        </div>
      </div>
    </footer>
  );
}