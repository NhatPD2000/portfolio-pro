"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Education() {
  const { lang } = useLanguage();
  const t = translations[lang].education;

  return (
    <section id="education" className="py-28 px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden card-hover"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]" />

          <div className="p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={13} className="text-[var(--text-muted)]" />
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                    {t.institution}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-1">
                  {t.degree}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mt-1.5">
                  <span className="flex items-center gap-1">
                    <MapPin size={10} className="text-[var(--accent)]" />
                    {t.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <Calendar size={11} />
                {t.years}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {t.courses.map((course) => (
                <div key={course} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <BookOpen size={12} className="text-[var(--accent)] shrink-0" />
                  <span className="text-xs text-[var(--text-secondary)]">{course}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border)] pt-5">
              {t.description}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
