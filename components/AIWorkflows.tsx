"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  FileText, GitBranch, CheckSquare, ListChecks,
  Code2, ArrowRight, Layout, BookOpen, Wrench,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const aiTools = [
  { name: "Claude",      color: "#D97706" },
  { name: "Claude Code", color: "#F59E0B" },
  { name: "ChatGPT",     color: "#10B981" },
  { name: "Gemini",      color: "#818CF8" },
  { name: "Antigravity", color: "#C084FC" },
];

const workflowConfig = [
  { icon: FileText,    tool: "Claude + ChatGPT",      toolColor: "#D97706", impactColor: "#10B981" },
  { icon: GitBranch,   tool: "ChatGPT + Gemini",      toolColor: "#10B981", impactColor: "#818CF8" },
  { icon: CheckSquare, tool: "Claude",                toolColor: "#D97706", impactColor: "#06B6D4" },
  { icon: ListChecks,  tool: "Claude + Antigravity",  toolColor: "#C084FC", impactColor: "#F59E0B" },
  { icon: Layout,      tool: "Claude Code",           toolColor: "#F59E0B", impactColor: "#C084FC" },
  { icon: BookOpen,    tool: "Claude",                toolColor: "#D97706", impactColor: "#10B981" },
  { icon: Wrench,      tool: "Claude Code",           toolColor: "#F59E0B", impactColor: "#06B6D4" },
];

export default function AIWorkflows() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].aiWorkflows;

  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: isDark ? "linear-gradient(145deg, #0D1B2E 0%, #152235 60%, #0D1B2E 100%)" : "linear-gradient(145deg, #EEF2FF 0%, #F0F9FF 55%, #ECFDF5 100%)",
            border: isDark ? "1px solid rgba(79,70,229,0.25)" : "1px solid rgba(79,70,229,0.2)",
            boxShadow: isDark ? "none" : "0 8px 40px rgba(79,70,229,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
          }}
        >
          {/* Header */}
          <div className="px-8 pt-8 pb-6 flex flex-wrap items-start justify-between gap-6" style={{ borderBottom: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(79,70,229,0.12)" }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase" style={{ color: isDark ? "#22D3EE" : "#0891B2" }}>
                  {t.label}
                </p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2 leading-tight" style={{ color: isDark ? "white" : "var(--text-primary)" }}>
                {t.heading1}<br className="hidden sm:block" /> {t.heading2}
              </h2>
              <p className="text-sm max-w-md leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "var(--text-secondary)" }}>
                {t.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {aiTools.map((tool) => (
                <span
                  key={tool.name}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${tool.color}${isDark ? "18" : "14"}`, color: tool.color, border: `1px solid ${tool.color}${isDark ? "35" : "45"}` }}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow rows */}
          <div className="px-8 py-6 space-y-2.5">
            {t.workflows.map((wf, i) => {
              const cfg = workflowConfig[i];
              const Icon = cfg.icon;
              return (
                <motion.div
                  key={wf.category}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-5 py-3.5 rounded-xl"
                  style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)", border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(79,70,229,0.1)", backdropFilter: isDark ? "none" : "blur(8px)" }}
                >
                  <div className="flex items-center gap-2.5 sm:w-52 shrink-0">
                    <div className="p-1.5 rounded-lg shrink-0" style={{ background: isDark ? "rgba(255,255,255,0.08)" : `${cfg.toolColor}18` }}>
                      <Icon size={12} style={{ color: cfg.toolColor }} />
                    </div>
                    <span className="text-[11px] font-semibold leading-tight" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "var(--text-primary)" }}>
                      {wf.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-xs shrink-0 hidden sm:inline" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "var(--text-muted)" }}>
                      {t.inputLabel}
                    </span>
                    <span className="text-xs whitespace-nowrap" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "var(--text-secondary)" }}>{wf.input}</span>
                    <ArrowRight size={11} className="shrink-0" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(79,70,229,0.35)" }} />
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded shrink-0 whitespace-nowrap" style={{ background: `${cfg.toolColor}20`, color: cfg.toolColor }}>{cfg.tool}</span>
                    <ArrowRight size={11} className="shrink-0" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(79,70,229,0.35)" }} />
                    <span className="text-xs truncate" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "var(--text-secondary)" }}>{wf.output}</span>
                  </div>

                  <div className="shrink-0">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: `${cfg.impactColor}15`, color: cfg.impactColor, border: `1px solid ${cfg.impactColor}35` }}>
                      {wf.impact}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-8 py-4 flex items-center gap-3" style={{ background: isDark ? "rgba(0,0,0,0.2)" : "rgba(79,70,229,0.04)", borderTop: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(79,70,229,0.12)" }}>
            <Code2 size={13} style={{ color: "#D97706" }} className="shrink-0" />
            <p className="text-xs leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.4)" : "var(--text-muted)" }}>
              {t.footerNote.split("Claude Code").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>{part}<span style={{ color: "#D97706" }} className="font-semibold">Claude Code</span></span>
                ) : part
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
