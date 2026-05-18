"use client";
import { Download, ArrowLeft, Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { translations } from "@/lib/i18n";
import "./profile-print.css";

export default function ProfilePage() {
  const t = translations.en;
  const exp = t.experience.items;
  const projects = t.projects.items;

  return (
    <div className="profile-page">
      {/* Action bar — hidden when printing */}
      <div className="action-bar no-print">
        <Link href="/" className="action-btn action-btn-ghost">
          <ArrowLeft size={14} /> Back to site
        </Link>
        <button onClick={() => window.print()} className="action-btn action-btn-primary">
          <Download size={14} /> Download / Print PDF
        </button>
      </div>

      <main className="profile-sheet">
        {/* Header */}
        <header className="profile-header">
          <div>
            <h1 className="profile-name">Phan Dinh Nhat</h1>
            <p className="profile-title">Business Analyst — MES / MOM &amp; Manufacturing Intelligence</p>
          </div>
          <ul className="profile-contact">
            <li><Mail size={11} /> aes.dinhnhat@aesvietnam.com</li>
            <li><Phone size={11} /> (+84) 899 227 940</li>
            <li><MapPin size={11} /> Ho Chi Minh City, Vietnam</li>
            <li><Globe size={11} /> portfolio-pro.vercel.app</li>
          </ul>
        </header>

        {/* Summary */}
        <section className="profile-section">
          <h2>Profile Summary</h2>
          <p>{t.about.para1}</p>
          <p>{t.about.para2}</p>
        </section>

        {/* Key Metrics */}
        <section className="profile-section">
          <h2>Key Metrics</h2>
          <ul className="metrics-grid">
            {t.about.metrics.map((m, i) => (
              <li key={i}><strong>{m.value}</strong> <span>{m.label}</span></li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="profile-section">
          <h2>Skills &amp; Tools</h2>
          <div className="skills-grid">
            {t.skills.categories.map((cat, i) => (
              <div key={i} className="skills-block">
                <h3>{cat.title}</h3>
                <p>{cat.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="profile-section">
          <h2>Work Experience</h2>
          {exp.map((e, i) => (
            <div key={i} className="exp-item">
              <div className="exp-head">
                <div>
                  <strong>{e.role}</strong> · {e.company}
                </div>
                <div className="exp-meta">{e.period} · {e.location}</div>
              </div>
              <ul className="exp-bullets">
                {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
              {e.keyResult && <p className="exp-result"><em>{e.keyResult}</em></p>}
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="profile-section">
          <h2>Featured Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="proj-item">
              <div className="exp-head">
                <strong>{p.title}</strong>
                <span className="exp-meta">{p.period}</span>
              </div>
              <p className="proj-sub">{p.subtitle}</p>
              <p><strong>Challenge:</strong> {p.challenge}</p>
              <ul className="exp-bullets">
                {p.approach.map((a, j) => <li key={j}>{a}</li>)}
              </ul>
              <p className="proj-results">
                {p.results.map((r, j) => (
                  <span key={j}><strong>{r.metric}</strong> {r.label}{j < p.results.length - 1 ? " · " : ""}</span>
                ))}
              </p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="profile-section">
          <h2>Education</h2>
          <div className="exp-head">
            <strong>{t.education.degree}</strong> · {t.education.institution}
            <span className="exp-meta">{t.education.years}</span>
          </div>
          <p>{t.education.description}</p>
        </section>
      </main>
    </div>
  );
}
