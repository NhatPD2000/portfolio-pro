"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, MapPin, TrendingUp, ChevronDown } from "lucide-react";

type Client = {
  name: string;
  industry: string;
  outcome: string;
  scope: string[];
  tags: string[];
};

type Experience = {
  num: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  keyResult: string;
  highlights: string[];
  tags: string[];
  clients: Client[];
};

const experiences: Experience[] = [
  {
    num: "01",
    company: "AES Vietnam",
    role: "Business Analyst",
    period: "April 2024 – Present",
    location: "Ho Chi Minh City",
    current: true,
    keyResult: "3 factory go-lives · 15% operational efficiency gain · 2 MES projects delivered end-to-end",
    highlights: [
      "Delivered BRD & FSD for 2 major MES projects, ensuring full alignment between client operations and system design",
      "Implemented MES for 3 factory clients — improved operational efficiency by 15% through workflow optimization and smart factory solutions",
      "Designed mockups, wireframes, and Figma prototypes to visualize system workflows and operator UX",
      "Led go-live activities, user training, and pilot testing at manufacturing sites",
      "Collaborated with Developers, QA Testers, and IoT engineering team throughout the full project lifecycle",
    ],
    tags: ["MES / MOM", "IoT", "BRD / FSD", "Figma", "Agile", "Apriso"],
    clients: [
      {
        name: "Spartronics Vietnam",
        industry: "Electronics Manufacturing Services (EMS)",
        outcome: "15% operational efficiency improvement through MES workflow optimization",
        scope: [
          "Full MES implementation for shop floor management",
          "BRD & FSD documentation and client sign-off",
          "IoT integration for real-time production monitoring",
          "Go-live support and operator training",
        ],
        tags: ["MES", "IoT", "BRD/FSD", "Figma"],
      },
      {
        name: "PNJ — Phú Nhuận Jewelry",
        industry: "Jewelry Manufacturing",
        outcome: "MES deployment for production tracking and quality control workflows",
        scope: [
          "Manufacturing execution system rollout",
          "Production workflow digitization and process mapping",
          "Operator UX design and prototype validation",
          "Pilot testing and go-live coordination",
        ],
        tags: ["MES", "Figma", "Workflow Design", "Go-live"],
      },
    ],
  },
  {
    num: "02",
    company: "Lumos IS",
    role: "Business Analyst",
    period: "June 2023 – March 2024",
    location: "Ho Chi Minh City",
    current: false,
    keyResult: "Full ERP delivered — requirements to UAT sign-off across Agile sprints",
    highlights: [
      "Gathered, refined, and documented user requirements in Business Requirement Specifications for ERP implementation",
      "Built ERP system functionalities on Oracle Apex using Agile — dashboards, reports, and custom features per client spec",
      "Deployed software during testing phases, provided end-user training, and resolved post-go-live system issues",
    ],
    tags: ["ERP", "Oracle Apex", "Agile / Scrum", "SQL", "Power BI"],
    clients: [
      {
        name: "VT Technical",
        industry: "Engineering & Technical Services",
        outcome: "Complete ERP system delivered from requirement gathering to UAT sign-off",
        scope: [
          "Sales module — order management and pipeline tracking",
          "Warehouse module — inventory and stock control",
          "Service module — field service and ticket management",
          "Approval workflow — multi-level authorization flows",
        ],
        tags: ["ERP", "Oracle Apex", "Agile", "UAT"],
      },
    ],
  },
  {
    num: "03",
    company: "Four Hands LLC (Rep. Office)",
    role: "Business Intelligence Analyst",
    period: "September 2022 – May 2023",
    location: "Ho Chi Minh City",
    current: false,
    keyResult: "Power BI dashboards delivered · Supply chain data quality improved ahead of product relaunch",
    highlights: [
      "Executed data queries on supply chain datasets using Microsoft SQL Server for business reporting",
      "Built Power BI dashboards and interactive reports for sales performance tracking and trend forecasting",
      "Used KNIME Analytics Platform to build ETL workflows identifying missing data fields prior to product relaunch",
      "Conducted data validation and quality checks to ensure accurate, reliable business insights",
    ],
    tags: ["Power BI", "SQL", "KNIME", "Data Analysis", "Supply Chain"],
    clients: [],
  },
  {
    num: "04",
    company: "Skale Asia",
    role: "Business Analyst Intern",
    period: "May 2022 – August 2022",
    location: "Ho Chi Minh City",
    current: false,
    keyResult: "BRS finalized on Jira & Confluence · User testing sessions completed with actionable findings",
    highlights: [
      "Analyzed user behavior and product logic to generate data-driven recommendations for product improvement",
      "Facilitated user testing sessions and synthesized usability findings into actionable product feedback",
      "Gathered and documented requirements from stakeholders on Jira & Confluence throughout the SDLC",
      "Collaborated with developers, testers, and project managers to ensure requirements were clearly communicated",
    ],
    tags: ["Agile", "Jira", "Confluence", "User Testing", "Requirements"],
    clients: [],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (num: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

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
          <p className="label-amber mb-4">Work Experience</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
            Where I&apos;ve made an impact
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-[var(--border)] hidden sm:block" />

          <div className="space-y-5">
            {experiences.map((exp, i) => {
              const isExpanded = expanded.has(exp.num);
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative sm:pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[15px] top-6 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                      exp.current
                        ? "bg-[#4F46E5] border-[#4F46E5] shadow-[0_0_0_4px_rgba(79,70,229,0.15)]"
                        : "bg-[var(--border)] border-[var(--border-hover)]"
                    }`}
                  />

                  <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden card-hover">
                    {/* Accent top bar */}
                    <div
                      className="h-[3px] w-full"
                      style={{
                        background: exp.current
                          ? "linear-gradient(90deg, #4F46E5, #818CF8)"
                          : "linear-gradient(90deg, var(--border), transparent)",
                      }}
                    />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Building2 size={12} className="text-[var(--text-muted)]" />
                            <span className="text-xs text-[var(--text-muted)]">{exp.company}</span>
                            {exp.current && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-[#4F46E5]/10 text-[var(--accent)] border border-[#4F46E5]/20 font-medium">
                                Current
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

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((point, idx) => (
                          <motion.li
                            key={point}
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

                      {/* Key result */}
                      <div className="flex items-start gap-3 px-4 py-3 mb-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                        <TrendingUp size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">{exp.keyResult}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded border border-[var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client details toggle */}
                    {exp.clients.length > 0 && (
                      <button
                        onClick={() => toggle(exp.num)}
                        className="w-full flex items-center justify-between px-6 py-3 border-t border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                      >
                        <span>
                          {isExpanded
                            ? "Hide client details"
                            : `View ${exp.clients.length} client project${exp.clients.length > 1 ? "s" : ""}`}
                        </span>
                        <ChevronDown
                          size={14}
                          style={{
                            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </button>
                    )}

                    {/* Expanded client cards */}
                    <AnimatePresence>
                      {isExpanded && exp.clients.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-3 grid sm:grid-cols-2 gap-3">
                            {exp.clients.map((client) => (
                              <div
                                key={client.name}
                                className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg"
                              >
                                <div className="mb-3">
                                  <p className="font-semibold text-[var(--text-primary)] text-sm leading-tight">{client.name}</p>
                                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">{client.industry}</p>
                                </div>
                                <ul className="space-y-1.5 mb-3">
                                  {client.scope.map((s) => (
                                    <li key={s} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                                      <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                                <div className="pt-2.5 border-t border-[var(--border)]">
                                  <p className="text-[10px] text-[var(--text-muted)] font-medium leading-snug mb-2">{client.outcome}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {client.tags.map((t) => (
                                      <span
                                        key={t}
                                        className="text-[10px] px-1.5 py-0.5 bg-[#4F46E5]/10 text-[var(--accent)] rounded"
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
