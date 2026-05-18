"use client";
import { useState, useRef } from "react";
import { Download, ArrowLeft, Mail, Phone, MapPin, Globe, Loader2 } from "lucide-react";
import Link from "next/link";
import { translations } from "@/lib/i18n";
import "./profile-print.css";

export default function ProfilePage() {
  const t = translations.en;
  const exp = t.experience.items;
  const projects = t.projects.items;
  const sheetRef = useRef<HTMLElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!sheetRef.current || downloading) return;
    setDownloading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const node = sheetRef.current;
      const canvas = await html2canvas(node, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        windowWidth: node.scrollWidth,
        windowHeight: node.scrollHeight,
      });

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 12; // mm — header/footer breathing room
      const contentW = pageW - margin * 2;
      const contentH = pageH - margin * 2;
      const pxPerMm = canvas.width / contentW;
      const contentH_px = Math.floor(contentH * pxPerMm);
      const scanUp_px = Math.floor(60 * pxPerMm); // scan up to 60mm for a safe break

      const ctx = canvas.getContext("2d")!;
      // Scan upward from a target Y until we find a row that's nearly all white
      const findSafeBreak = (idealY: number, minY: number): number => {
        const start = Math.min(idealY, canvas.height - 1);
        const limit = Math.max(minY + 20, start - scanUp_px);
        for (let y = start; y >= limit; y--) {
          const row = ctx.getImageData(0, y, canvas.width, 1).data;
          let nonWhite = 0;
          for (let i = 0; i < row.length; i += 4) {
            if (row[i] < 248 || row[i + 1] < 248 || row[i + 2] < 248) {
              nonWhite++;
              if (nonWhite > 2) break;
            }
          }
          if (nonWhite <= 2) return y;
        }
        return start;
      };

      let y = 0;
      let firstPage = true;
      while (y < canvas.height) {
        let endY = Math.min(y + contentH_px, canvas.height);
        if (endY < canvas.height) {
          endY = findSafeBreak(endY, y);
        }
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = endY - y;
        slice.getContext("2d")!.drawImage(canvas, 0, -y);
        const sliceH_mm = slice.height / pxPerMm;

        if (!firstPage) pdf.addPage();
        pdf.addImage(slice.toDataURL("image/jpeg", 0.95), "JPEG", margin, margin, contentW, sliceH_mm);
        firstPage = false;
        y = endY;
      }

      pdf.save("Phan-Dinh-Nhat-Profile.pdf");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="profile-page">
      {/* Action bar */}
      <div className="action-bar no-print">
        <Link href="/" className="action-btn action-btn-ghost">
          <ArrowLeft size={14} /> Back to site
        </Link>
        <button onClick={handleDownload} disabled={downloading} className="action-btn action-btn-primary">
          {downloading ? <Loader2 size={14} className="spin" /> : <Download size={14} />}
          {downloading ? "Generating PDF…" : "Download PDF"}
        </button>
      </div>

      <main ref={sheetRef} className="profile-sheet">
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
