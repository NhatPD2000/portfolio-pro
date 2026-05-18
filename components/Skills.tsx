"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CountUp from "./CountUp";
import {
  ClipboardList, PenTool, Code2, Users, ChevronDown,
  ListChecks, FileText, BookOpen, RefreshCw, CheckSquare, GitBranch,
  Layout, Share2, GitMerge, Layers, Pencil, Server,
  Database, BarChart2, Globe, Settings, Cpu, Activity, Wifi,
  MessageCircle, Lightbulb, Zap, Monitor, MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

type Level = "Core" | "Proficient" | "Familiar";

// Static config: icons, colors, gradients (non-translatable)
const CATEGORY_CONFIG = [
  {
    num: "01", icon: ClipboardList, accentColor: "#818CF8", illustration: "/skill-ba.svg",
    gradient: `radial-gradient(ellipse at 25% 75%, rgba(99,102,241,0.85) 0%, transparent 55%),radial-gradient(ellipse at 75% 25%, rgba(59,130,246,0.75) 0%, transparent 55%),radial-gradient(ellipse at 55% 55%, rgba(16,185,129,0.25) 0%, transparent 45%),linear-gradient(145deg, #0F172A 0%, #1E1B4B 45%, #0C4A6E 100%)`,
    skillLevels: ["Core","Core","Core","Core","Proficient","Proficient","Core","Proficient"] as Level[],
    skillIcons: [ListChecks, FileText, BookOpen, RefreshCw, GitMerge, CheckSquare, Users, GitBranch],
  },
  {
    num: "02", icon: PenTool, accentColor: "#C084FC", illustration: "/skill-design.svg",
    gradient: `radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.9) 0%, transparent 55%),radial-gradient(ellipse at 70% 70%, rgba(236,72,153,0.8) 0%, transparent 50%),radial-gradient(ellipse at 55% 10%, rgba(251,146,60,0.5) 0%, transparent 45%),linear-gradient(145deg, #0F0B1A 0%, #1A0533 55%, #2D1B4B 100%)`,
    skillLevels: ["Core","Core","Proficient","Proficient","Proficient","Proficient","Core","Familiar"] as Level[],
    skillIcons: [Layout, PenTool, Share2, GitMerge, Layers, Pencil, Monitor, Server],
  },
  {
    num: "03", icon: Code2, accentColor: "#2EC4A8", illustration: "/skill-tech.svg",
    gradient: `radial-gradient(ellipse at 25% 35%, rgba(20,184,166,0.9) 0%, transparent 55%),radial-gradient(ellipse at 75% 75%, rgba(6,182,212,0.7) 0%, transparent 55%),radial-gradient(ellipse at 60% 15%, rgba(16,185,129,0.45) 0%, transparent 45%),linear-gradient(145deg, #022C22 0%, #0C4A6E 55%, #0F172A 100%)`,
    skillLevels: ["Proficient","Proficient","Proficient","Core","Familiar","Familiar","Familiar","Proficient"] as Level[],
    skillIcons: [Database, BarChart2, Globe, Settings, Cpu, Activity, Wifi, Code2],
  },
  {
    num: "04", icon: Users, accentColor: "#FBBF24", illustration: "/skill-soft.svg",
    gradient: `radial-gradient(ellipse at 30% 45%, rgba(217,119,6,0.9) 0%, transparent 55%),radial-gradient(ellipse at 72% 65%, rgba(245,158,11,0.7) 0%, transparent 50%),radial-gradient(ellipse at 52% 88%, rgba(252,211,77,0.45) 0%, transparent 45%),linear-gradient(145deg, #1C0A00 0%, #451A03 50%, #78350F 100%)`,
    skillLevels: ["Core","Core","Proficient","Core","Core","Core","Core","Core"] as Level[],
    skillIcons: [MessageCircle, Globe, MessageSquare, Share2, Lightbulb, Zap, Monitor, Users],
  },
  {
    num: "05", icon: Zap, accentColor: "#06B6D4", illustration: "/skill-tech-icon.svg",
    gradient: `radial-gradient(ellipse at 20% 30%, rgba(6,182,212,0.9) 0%, transparent 55%),radial-gradient(ellipse at 78% 70%, rgba(99,102,241,0.75) 0%, transparent 55%),radial-gradient(ellipse at 55% 10%, rgba(16,185,129,0.4) 0%, transparent 45%),linear-gradient(145deg, #042F2E 0%, #083344 50%, #0F172A 100%)`,
    skillLevels: ["Core","Core","Proficient","Core","Proficient","Proficient","Core","Core"] as Level[],
    skillIcons: [MessageSquare, FileText, GitBranch, ListChecks, CheckSquare, Database, BookOpen, Code2],
  },
];

const tools = [
  { name: "Figma",       icon: PenTool    },
  { name: "Jira",        icon: GitBranch  },
  { name: "Power BI",    icon: BarChart2  },
  { name: "Oracle Apex", icon: Globe      },
  { name: "Apriso",      icon: Cpu        },
  { name: "Visio",       icon: Share2     },
  { name: "SQL Server",  icon: Database   },
  { name: "Confluence",  icon: BookOpen   },
  { name: "KNIME",       icon: Activity   },
];

const levelBadgeClass: Record<Level, string> = {
  Core:       "bg-white/20 text-white/90",
  Proficient: "bg-white/10 text-white/55",
  Familiar:   "text-white/30",
};

const levelIdleClass: Record<Level, string> = {
  Core:       "text-white/80",
  Proficient: "text-white/55",
  Familiar:   "text-white/35",
};

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Merge static config with translated text
  const categories = CATEGORY_CONFIG.map((cfg, i) => {
    const tx = t.categories[i];
    return {
      ...cfg,
      title: tx.title,
      shortTitle: tx.shortTitle,
      skills: tx.skills.map((name, j) => ({
        name,
        icon: cfg.skillIcons[j],
        level: cfg.skillLevels[j],
      })),
    };
  });

  return (
    <section id="skills" className="py-28 px-6 bg-[var(--bg-tertiary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">{t.label}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
            {t.heading}
          </h2>
          <p className="text-[var(--text-muted)] text-xs mt-3 md:hidden">{t.mobileHint}</p>
        </motion.div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-3 mb-12">
          {categories.map((cat) => {
            const isOpen = active === cat.num;
            const Icon = cat.icon;
            return (
              <div
                key={cat.num}
                className="rounded-2xl overflow-hidden"
                style={{ background: cat.gradient, borderWidth: "1px", borderStyle: "solid", borderColor: `${cat.accentColor}50` }}
              >
                <button
                  onClick={() => setActive(isOpen ? null : cat.num)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="p-2 rounded-xl shrink-0"
                    style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.18)", boxShadow: `0 0 12px ${cat.accentColor}40` }}
                  >
                    {cat.num === "05" ? (
                      <Image src="/claudecode-color.svg" alt="Claude Code" width={20} height={20} style={{ filter: "drop-shadow(0 0 6px #D97757)" }} />
                    ) : (
                      <Icon size={20} style={{ color: cat.accentColor, filter: `drop-shadow(0 0 4px ${cat.accentColor})` }} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white/90 text-sm">{cat.title}</p>
                    <p className="text-xs text-white/45">{cat.skills.length} {t.skillsUnit}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="label-amber">{cat.num}</span>
                    <ChevronDown size={16} className="text-white/40 transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-3 grid grid-cols-2 gap-2 border-t border-white/10">
                        {cat.skills.map((skill) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div
                              key={skill.name}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg"
                              style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.1)" }}
                            >
                              <SkillIcon size={12} strokeWidth={1.5} style={{ color: cat.accentColor, flexShrink: 0 }} />
                              <span className={`text-xs font-medium truncate ${levelIdleClass[skill.level]}`}>{skill.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden md:flex gap-3"
          style={{ height: "640px" }}
        >
          {categories.map((cat) => {
            const isActive = active === cat.num;
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.num}
                animate={{ flexGrow: isActive ? 2.6 : 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  flexShrink: 1, flexBasis: "0%", minWidth: "72px",
                  background: cat.gradient, borderWidth: "1px", borderStyle: "solid",
                  borderColor: isActive ? `${cat.accentColor}70` : `${cat.accentColor}40`,
                  boxShadow: isActive ? `0 8px 40px ${cat.accentColor}25` : `0 2px 12px ${cat.accentColor}12`,
                }}
                className="relative overflow-hidden rounded-2xl cursor-pointer transition-[border-color,box-shadow] duration-300"
                onMouseEnter={() => !isTouchDevice && setActive(cat.num)}
                onMouseLeave={() => !isTouchDevice && setActive(null)}
                onClick={() => setActive(isActive ? null : cat.num)}
              >
                {/* IDLE STATE */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="absolute inset-0 flex flex-col items-center py-6 px-2">
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none pb-16">
                        <Image
                          src={cat.num === "01" ? "/skill-ba-icon.svg" : cat.num === "02" ? "/skill-design-icon.svg" : cat.num === "03" ? "/skill-tech-icon.svg" : cat.num === "04" ? "/skill-soft-icon.svg" : "/skill-ai-icon.svg"}
                          alt={`${cat.title} illustration`} width={180} height={160} className="opacity-90"
                          style={{ filter: `brightness(1.8) drop-shadow(0 0 24px ${cat.accentColor})` }}
                        />
                      </div>

                      <ChevronDown size={10} className="text-white/30 mb-4 shrink-0 relative z-10" />

                      <div className="relative z-10 shrink-0 mb-3 p-3 rounded-2xl" style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.18)", boxShadow: `0 0 24px ${cat.num === "05" ? "#D97757" : cat.accentColor}40, inset 0 1px 0 rgba(255,255,255,0.12)` }}>
                        {cat.num === "05" ? (
                          <Image src="/claudecode-color.svg" alt="Claude Code" width={40} height={40} style={{ filter: "drop-shadow(0 0 10px #D97757)" }} />
                        ) : (
                          <Icon size={40} strokeWidth={1.2} style={{ color: cat.accentColor, filter: `drop-shadow(0 0 8px ${cat.accentColor})` }} />
                        )}
                      </div>
                      <div className="w-1 h-1 rounded-full bg-white/20 mb-4 shrink-0 relative z-10" />
                      <div className="w-6 h-px bg-white/15 mb-3 shrink-0 relative z-10" />

                      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden w-full px-3">
                        {cat.skills.map((skill) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div key={skill.name} className="flex items-center gap-2 w-full px-2.5 py-1.5 rounded-md" style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.1)" }}>
                              <SkillIcon size={11} strokeWidth={1.5} style={{ color: cat.accentColor, flexShrink: 0 }} />
                              <span className={`text-[11px] truncate leading-tight font-medium ${levelIdleClass[skill.level]}`}>{skill.name}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-col items-center gap-1.5 mt-3 shrink-0">
                        <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase font-medium text-center leading-tight px-1">{cat.shortTitle}</p>
                        <p className="label-amber">{cat.num}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ACTIVE STATE */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, delay: 0.08 }} className="absolute inset-0 flex flex-col">
                      <div className="flex-1 relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")", opacity: 0.5 }} />

                        <div className="relative z-10 flex items-center justify-between px-5 pt-5 pb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.3)" }}>
                              {cat.num === "05" ? (
                                <Image src="/claudecode-color.svg" alt="Claude Code" width={16} height={16} style={{ filter: "drop-shadow(0 0 4px #D97757)" }} />
                              ) : (
                                <Icon size={16} style={{ color: cat.accentColor }} />
                              )}
                            </div>
                            <p className="text-white/90 text-[11px] font-semibold tracking-[0.15em] uppercase">{cat.title}</p>
                          </div>
                          <p className="label-amber">{cat.num}</p>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="relative z-10 px-5 pb-4 grid grid-cols-2 gap-x-3 gap-y-2">
                          {cat.skills.map((skill) => {
                            const SkillIcon = skill.icon;
                            return (
                              <div key={skill.name} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <SkillIcon size={13} strokeWidth={1.5} style={{ color: cat.accentColor, flexShrink: 0 }} />
                                <span className="text-white/80 text-[10px] leading-tight truncate flex-1">{skill.name}</span>
                                <span className={`text-[8px] shrink-0 px-1 py-0.5 rounded font-medium ${levelBadgeClass[skill.level]}`}>
                                  {t.levels[skill.level]}
                                </span>
                              </div>
                            );
                          })}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className="absolute bottom-16 left-0 right-0 h-40 flex items-center justify-center pointer-events-none">
                          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute w-32 h-32 rounded-full blur-2xl" style={{ background: cat.accentColor }} />
                          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                            <Image
                              src={cat.num === "01" ? "/skill-ba-icon.svg" : cat.num === "02" ? "/skill-design-icon.svg" : cat.num === "03" ? "/skill-tech-icon.svg" : cat.num === "04" ? "/skill-soft-icon.svg" : "/skill-ai-icon.svg"}
                              alt={`${cat.title} illustration`} width={140} height={120} className="opacity-60"
                              style={{ filter: `drop-shadow(0 0 20px ${cat.accentColor}40)` }}
                            />
                          </motion.div>
                          {[
                            { y: [0,-15,0], x: [0,10,0],  cls: "left-[20%] top-[20%] w-2 h-2",   d: 0   },
                            { y: [0,-20,0], x: [0,-8,0],  cls: "right-[25%] top-[30%] w-1.5 h-1.5", d: 0.5 },
                            { y: [0,-12,0], x: [0,15,0],  cls: "left-[35%] bottom-[20%] w-1 h-1", d: 1   },
                            { y: [0,-18,0], x: [0,-12,0], cls: "right-[30%] bottom-[25%] w-1.5 h-1.5", d: 1.5 },
                          ].map((p, idx) => (
                            <motion.div
                              key={idx}
                              animate={{ y: p.y, x: p.x, opacity: [0.4, 0.7, 0.4] }}
                              transition={{ duration: 4 + idx * 0.5, repeat: Infinity, ease: "easeInOut", delay: p.d }}
                              className={`absolute ${p.cls} rounded-full`}
                              style={{ background: cat.accentColor, boxShadow: `0 0 10px ${cat.accentColor}` }}
                            />
                          ))}
                        </motion.div>
                      </div>

                      <div className="px-5 py-3 bg-[var(--surface)] flex items-center justify-between border-t border-[var(--border)]">
                        <p className="text-[var(--text-primary)] text-[10px] tracking-[0.2em] uppercase font-semibold">
                          <CountUp end={cat.skills.length} isActive={isActive} /> {t.skillsUnit}
                        </p>
                        <p className="text-[var(--text-muted)] text-[10px]">{t.hoverHint}</p>
                      </div>

                      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }} className="h-0.5 origin-left" style={{ background: cat.accentColor }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10">
          <p className="text-center text-[10px] text-[var(--text-muted)] uppercase tracking-[0.25em] mb-4 font-medium">{t.toolsLabel}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-xs text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default">
                <Icon size={11} />
                {name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 text-center">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 group">
            <span>{t.cta}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="section-line mt-20 max-w-6xl mx-auto" />
    </section>
  );
}
