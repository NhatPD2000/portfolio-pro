"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, GraduationCap, TrendingUp, Factory, Users, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const highlightIcons = [Briefcase, Globe, GraduationCap];
const metricIcons    = [TrendingUp, Factory, Layers, Users];

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-amber mb-4">{t.label}</p>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              {t.headingPlain}{" "}
              <span className="text-[var(--accent)]">{t.headingAccent}</span>
            </h2>
            <div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-[15px]">{t.para1}</p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">{t.para2}</p>
              <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mt-5">
                <MapPin size={13} className="text-[var(--accent)]" />
                {t.location}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {t.metrics.map((m, i) => {
            const Icon = metricIcons[i];
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-5 bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-[#4F46E5]/10">
                    <Icon size={14} className="text-[var(--accent)]" />
                  </div>
                </div>
                <div className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-1">{m.value}</div>
                <p className="text-xs text-[var(--text-muted)] leading-snug">{m.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {t.highlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col gap-3 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl card-hover"
              >
                <div className="p-2.5 rounded-xl bg-[#4F46E5]/10 text-[var(--accent)] w-fit">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
