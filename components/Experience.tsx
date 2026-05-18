"use client";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

export default function ExperienceEnhanced() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
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
        </motion.div>

        <div className="relative">
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-[var(--border)] hidden sm:block" />

          <div className="space-y-5">
            {t.items.map((exp, i) => {
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative sm:pl-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`absolute left-[15px] top-6 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                      exp.current
                        ? "bg-[#4F46E5] border-[#4F46E5] shadow-[0_0_0_4px_rgba(79,70,229,0.15)]"
                        : "bg-[var(--border)] border-[var(--border-hover)]"
                    }`}
                  >
                    {exp.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#4F46E5]"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ opacity: 0.3 }}
                      />
                    )}
                  </motion.div>

                  <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden card-hover transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/10">
                    <div className="h-[3px] w-full" style={{ background: exp.current ? "linear-gradient(90deg, #4F46E5, #818CF8)" : "linear-gradient(90deg, var(--border), transparent)" }} />

                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Building2 size={12} className="text-[var(--text-muted)]" />
                            <span className="text-xs text-[var(--text-muted)]">{exp.company}</span>
                            {exp.current && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-[#4F46E5]/10 text-[var(--accent)] border border-[#4F46E5]/20 font-medium">
                                {t.current}
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                            <Calendar size={11} />{exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                            <MapPin size={10} />{exp.location}
                          </div>
                          <div className="label-amber">{exp.num}</div>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.07 }}
                            className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                          >
                            <span className="text-[var(--accent)] mt-1.5 shrink-0 text-xs">▸</span>
                            {point}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex items-start gap-3 px-4 py-3 mb-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                        <TrendingUp size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">{exp.keyResult}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded border border-[var(--border)]">{tag}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
