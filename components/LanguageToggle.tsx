"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLang(lang === "en" ? "vi" : "en")}
      className="p-2 rounded-lg border border-[#D8E2F0] dark:border-[#2A3B55] bg-white dark:bg-[#1A2332] text-[#4A5E7A] dark:text-[#B0BFDA] hover:border-[#4F46E5] dark:hover:border-[#4F46E5] transition-colors duration-200 text-[11px] font-bold tracking-widest leading-none min-w-[40px] h-[34px] flex items-center justify-center"
      aria-label="Toggle language"
    >
      {lang === "en" ? "VI" : "EN"}
    </motion.button>
  );
}
