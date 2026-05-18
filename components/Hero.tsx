"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FileText, Layers, ListChecks, GitBranch, PenTool,
  Code2, CheckCircle, ArrowDown,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const stepIcons = [ListChecks, GitBranch, PenTool, Code2, CheckCircle];
const stepColors = ["#818CF8", "#4F46E5", "#C084FC", "#F59E0B", "#4F46E5"];

function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const { resolvedTheme } = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang].hero.process;
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % t.steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [t.steps.length]);

  const borderInactive = isDark ? "#2A3B55" : "#D8E2F0";
  const bgInactive     = isDark ? "#1A2332" : "#FFFFFF";
  const numInactive    = isDark ? "#4A5E7A" : "#B0BFDA";
  const iconInactive   = isDark ? "#3A4870" : "#C8D5E8";
  const titleActive    = isDark ? "#E8EDF8" : "#0D1B2E";
  const titlePast      = isDark ? "#8999BB" : "#4A5E7A";
  const titleInactive  = isDark ? "#4A5E7A" : "#6B7E9A";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="label-amber">{t.title}</p>
        <span className="text-[11px] text-[var(--text-muted)]">{t.stepOf(activeStep + 1, t.steps.length)}</span>
      </div>

      <div className="relative">
        {t.steps.map((step, i) => {
          const isActive = activeStep === i;
          const isPast   = i < activeStep;
          const Icon     = stepIcons[i];
          const color    = stepColors[i];

          return (
            <div key={step.num}>
              <motion.div
                animate={{
                  borderColor:     isActive ? `${color}55` : isPast ? `${color}25` : borderInactive,
                  backgroundColor: isActive ? `${color}0A` : bgInactive,
                  boxShadow:       isActive ? `0 4px 24px ${color}18, 0 0 0 1px ${color}25` : "none",
                }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl border"
              >
                <motion.div
                  animate={{
                    backgroundColor: isActive ? color : isPast ? `${color}20` : "transparent",
                    borderColor:     isActive ? color : isPast ? `${color}40` : borderInactive,
                  }}
                  transition={{ duration: 0.35 }}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0"
                >
                  <motion.span
                    animate={{ color: isActive ? "#FFFFFF" : isPast ? color : numInactive }}
                    transition={{ duration: 0.35 }}
                    className="text-[9px] font-bold leading-none"
                  >
                    {isPast ? "✓" : step.num}
                  </motion.span>
                </motion.div>

                <motion.div
                  animate={{ color: isActive ? color : isPast ? `${color}80` : iconInactive }}
                  transition={{ duration: 0.35 }}
                  className="shrink-0"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <motion.p
                    animate={{ color: isActive ? titleActive : isPast ? titlePast : titleInactive }}
                    transition={{ duration: 0.35 }}
                    className="text-sm font-semibold leading-tight"
                  >
                    {step.title}
                  </motion.p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5 truncate">{step.hint}</p>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 relative flex h-2 w-2"
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: color }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {i < t.steps.length - 1 && (
                <div className="flex items-center ml-[22px] h-3.5">
                  <div className="w-px h-full relative overflow-hidden mx-auto" style={{ backgroundColor: borderInactive }}>
                    <motion.div
                      animate={{ backgroundColor: i < activeStep ? color : borderInactive, scaleY: i < activeStep ? 1 : 0 }}
                      style={{ transformOrigin: "top" }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
        <p className="text-[11px] text-[var(--text-muted)]">{t.endLabel}</p>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] text-[var(--accent)] font-medium">{t.activeLabel}</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center bg-[#F7F9FC] dark:bg-[#0D1B2E] overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="hero-gradient-mesh" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + i}s`,
          }}
        />
      ))}

      {/* Topo background pattern */}
      <div className="absolute inset-0 topo-bg pointer-events-none" />

      {/* Large background text */}
      <div
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-serif font-bold select-none pointer-events-none leading-none text-[#0D1B2E]/[0.025] dark:text-white/[0.025]"
        style={{ fontSize: "22vw" }}
        aria-hidden
      >
        BA
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="label-amber mb-3"
            >
              {t.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-serif text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-[var(--text-primary)] leading-[1.05] mb-5 tracking-tight"
            >
              Phan Dinh<br />Nhat
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-5 bg-[#4F46E5]" />
              <span className="text-[var(--accent)] text-xs tracking-[0.2em] uppercase font-medium">
                {t.specialization}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-8 max-w-md"
            >
              {t.taglineL1}<br />{t.taglineL2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {t.domains.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary flex items-center justify-center gap-2 px-7 py-3 bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold rounded-lg text-sm"
              >
                <FileText size={15} />
                View Profile (PDF)
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex gap-8 pt-8 border-t border-[var(--border)]"
            >
              {t.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-2xl font-bold text-[var(--text-primary)]">{s.value}</div>
                  <div className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Process Flow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)] p-7 shadow-sm">
              <ProcessFlow />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">{t.scroll}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
