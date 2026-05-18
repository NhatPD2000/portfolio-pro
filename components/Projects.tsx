"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Zap, Factory, ChevronDown, ExternalLink, Cpu, CircuitBoard, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

type ArtifactImage = { src: string; caption: string; objectPosition?: string };
type Artifacts = { figma?: string; mockups: ArtifactImage[]; diagrams: ArtifactImage[] };

// Image Lightbox Component
function ImageLightbox({
  images,
  initialIndex,
  onClose
}: {
  images: { src: string; alt: string; caption?: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose]);

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-5xl max-h-[90vh] bg-white dark:bg-[var(--bg-secondary)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200 z-10"
        >
          <X size={24} />
        </button>
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm font-medium z-10">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-[var(--bg-tertiary)]">
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200 z-10"
            >
              <ChevronLeft size={32} />
            </button>
          )}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1600}
              height={1200}
              className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
              priority
            />
          </motion.div>
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200 z-10"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
        {currentImage.caption && (
          <div className="px-6 py-4 bg-[var(--bg-tertiary)] border-t border-[var(--border)]">
            <p className="text-sm text-[var(--text-secondary)]">{currentImage.caption}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function BrowserFrame({ src, alt, url, objectPosition = "object-top", onClick }: { src: string; alt: string; url?: string; objectPosition?: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl overflow-hidden border border-[var(--border)] shadow-lg shadow-black/5 group hover:border-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/10 transition-all duration-300 flex flex-col ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Chrome bar — always shown for visual consistency */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[var(--bg-tertiary)] border-b border-[var(--border)] shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70 group-hover:bg-[#FF5F57] transition-colors duration-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70 group-hover:bg-[#FEBC2E] transition-colors duration-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70 group-hover:bg-[#28C840] transition-colors duration-200" />
        {url && (
          <div className="ml-3 flex-1 h-5 bg-[var(--bg-secondary)] rounded text-[11px] flex items-center px-2.5 text-[var(--text-muted)] font-mono truncate border border-[var(--border)]">
            {url}
          </div>
        )}
      </div>
      <div className="relative overflow-hidden h-[280px] bg-[var(--bg-tertiary)]">
        <Image src={src} alt={alt} fill className={`object-cover ${objectPosition} transition-transform duration-500 group-hover:scale-105`} />
        <div className="absolute inset-0 bg-[#0D1B2E]/0 group-hover:bg-[#0D1B2E]/5 transition-colors duration-300 pointer-events-none" />
        {onClick && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="px-4 py-2 bg-white/90 dark:bg-black/90 rounded-full text-sm font-medium text-[var(--text-primary)]">
              Click to view
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ArtifactTile({ src, caption, objectPosition = "object-center", index }: ArtifactImage & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      className="group"
    >
      <div className="rounded-lg overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/40 hover:shadow-md hover:shadow-[var(--accent)]/10 transition-all duration-200">
        <Image
          src={src}
          alt={caption}
          width={400}
          height={280}
          className={`w-full object-cover ${objectPosition} transition-transform duration-300 group-hover:scale-[1.02]`}
          style={{ maxHeight: "180px" }}
        />
      </div>
      <p className="text-center text-[11px] text-[var(--text-muted)] mt-1.5">{caption}</p>
    </motion.div>
  );
}

function ArtifactsPanel({ artifacts }: { artifacts: Artifacts }) {
  return (
    <div className="px-8 py-6 bg-[var(--surface-elevated)] border-t border-[var(--border)]">
      <div className="flex items-center justify-between mb-4">
        <p className="label-amber">MOCKUPS & WIREFRAMES</p>
        {artifacts.figma && (
          <a
            href={artifacts.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
          >
            <ExternalLink size={12} />
            Open in Figma
          </a>
        )}
      </div>
      {artifacts.mockups.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {artifacts.mockups.map((img, i) => (
            <ArtifactTile key={img.src} {...img} index={i} />
          ))}
        </div>
      )}
      {artifacts.diagrams.length > 0 && (
        <>
          <p className="label-amber mt-6 mb-3">PROCESS DIAGRAMS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {artifacts.diagrams.map((img, i) => (
              <ArtifactTile key={img.src} {...img} index={artifacts.mockups.length + i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Static config: icons, screenshots, tags, company/client names (non-translatable)
const PROJECT_CONFIG = [
  {
    id: "fuji", num: "01", icon: CircuitBoard, logo: "/fuji-logo.svg",
    company: "AES Vietnam", client: "Fuji Electric Malaysia",
    screenshots: [
      { src: "/fuji/1.jpg", alt: "Fuji Electric Malaysia — Site survey 1", objectPosition: "object-center" },
      { src: "/fuji/2.jpg", alt: "Fuji Electric Malaysia — Site survey 2", objectPosition: "object-center" },
      { src: "/fuji/3.jpg", alt: "Fuji Electric Malaysia — Site survey 3", objectPosition: "object-center" },
    ],
    tags: ["Apriso","MES / MOM","MRP","Fit-Gap","Site Survey","Semiconductor","BPMN","SAP Integration"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/fuji/4.jpg", caption: "Site survey 4" },
        { src: "/fuji/5.jpg", caption: "Site survey 5" },
        { src: "/fuji/6.jpg", caption: "Site survey 6" },
        { src: "/fuji/7.jpg", caption: "Site survey 7" },
      ],
      diagrams: [],
    } as Artifacts,
  },
  {
    id: "smes", num: "02", icon: Factory, logo: "/spartronics-logo.png",
    company: "AES Vietnam", client: "Spartronics",
    screenshots: [
      { src: "/spartronics/image 150.png", alt: "SMES System Interface" },
      { src: "/spartronics/z7785206000113_5dcfb02404ef84a459ab4d8ad929b913.jpg", alt: "SMES Production Dashboard", objectPosition: "object-center" },
      { src: "/smes-workcenter.png", alt: "SMES Work Order & Production Line", url: "smes.spartronics.com/work-center" },
    ],
    tags: ["MES / MOM","IoT","BPMN","Figma","BRD / FSD","Traceability","QC"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/smes-workcenter.png",                  caption: "Work Center" },
        { src: "/smes-iqc.png",                         caption: "IQC Screen" },
        { src: "/smes-quality.png",                     caption: "Quality Dashboard" },
        { src: "/spartronics/Create.png",               caption: "IQC Inspection List" },
        { src: "/spartronics/IQC.png",                  caption: "Incoming Quality Control" },
        { src: "/spartronics/Scheduling Assistant.png", caption: "Scheduling Assistant" },
      ],
      diagrams: [],
    } as Artifacts,
  },
  {
    id: "pnj", num: "03", icon: Zap, logo: "/pnj-logo.png",
    company: "AES Vietnam", client: "PNJ — Phu Nhuan Jewelry",
    screenshots: [
      { src: "/pnj-production.png", alt: "PNJ Production Execution Screen", url: "pnj-mes.apriso.com/production" },
      { src: "/pnj/z7786118722031_48798e639f8598f36b8d70faab31b7f5.jpg", alt: "PNJ Temperature Settings — Electroplating Tanks" },
      { src: "/pnj/z7786113043539_973e2bb5700d52390bb81ae220f6fd46.jpg", alt: "PNJ Go-live Training at Factory Floor", objectPosition: "object-center" },
    ],
    tags: ["Apriso","SCADA","BPMN","Process Automation","MES"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/pnj/Thêm lệnh sản xuấtPNJ.png",       caption: "Thêm lệnh sản xuất" },
        { src: "/pnj/Kiểm tra độ sạchPNJ.png",          caption: "Kiểm tra độ sạch" },
        { src: "/pnj/Danh sách ghi nhận lỗi QC.png",    caption: "Ghi nhận lỗi QC" },
        { src: "/pnj/Kiểm tra độ bềnPNJ.png",           caption: "Kiểm tra độ bền" },
      ],
      diagrams: [
        { src: "/pnj/z7786105706597_ac9411bb6173e6e6eb3cad912a43b25e.jpg", caption: "Process Flow — Line Xi Vàng & Xi Bạc" },
      ],
    } as Artifacts,
  },
  {
    id: "unilever", num: "04", icon: Cpu, logo: "/unilever-logo.png",
    company: "AES Vietnam", client: "Unilever",
    screenshots: [
      { src: "/unilever/z7785199456681_01d637a3c9be9ec1bf279a54f4ea5655.jpg", alt: "Unilever Site Visit", objectPosition: "object-center" },
      { src: "/unilever/Nhà máy Unilever.png", alt: "Unilever Vietnam Factory — Aerial View", objectPosition: "object-center" },
      { src: "/unilever/z7786214863074_dcdc1a9c9bf0b58a317d1d3eb7019aaa.jpg", alt: "SCADA Line 3 Deployed on Factory Floor", objectPosition: "object-center" },
    ],
    tags: ["ThingWorx","SCADA","IoT","Hardware Integration","Real-time Monitoring"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/unilever/Kawa_ver 4.png",                                                                                          caption: "KAWA Line SCADA Dashboard" },
        { src: "/unilever/z7754208838408_701e0bce3bf38aa9424bd6bdcd4b5141.jpg",                                                     caption: "Posimat2 SCADA Dashboard" },
      ],
      diagrams: [
        { src: "/unilever/z7786192768670_1f44b8273b824995862d471a8caa7933.jpg",                                                     caption: "Safety & Quality Point Map — Case Packer" },
        { src: "/unilever/Digital journey Mixing - ảnh 1 (2 cái đầu đang làm thì không áp dụng).jpg", caption: "Digital Journey Roadmap — Unilever Home Care", objectPosition: "object-bottom" },
      ],
    } as Artifacts,
  },
  {
    id: "vt-technical", num: "05", icon: TrendingUp, logo: "/vt technical/311314982_183116150959857_7860860617042099955_n.jpg",
    company: "Lumos IS", client: "VT Technical",
    screenshots: [
      { src: "/vt technical/portfolio-selected/phe-duyet/screenshot_page071_img04.png", alt: "VT Technical ERP Approval Workflow — Complete System Overview" },
      { src: "/vt technical/portfolio-selected/ban-hang/screenshot_page043_img04.png", alt: "VT Technical Sales Management — Customer Management Interface" },
      { src: "/vt technical/portfolio-selected/dich-vu/screenshot_page065_img04.png", alt: "VT Technical Service Management — Service Details Interface" },
    ],
    tags: ["Oracle Apex","ERP","Agile","UAT","Sales","Inventory","Service","Reporting"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/vt technical/portfolio-selected/ban-hang/screenshot_page036_img03.png", caption: "Sales Order Management" },
        { src: "/vt technical/portfolio-selected/dich-vu/screenshot_page062_img04.png", caption: "Service List Dashboard" },
        { src: "/vt technical/portfolio-selected/phe-duyet/screenshot_page082_img03.png", caption: "Approval Workflow Details" },
        { src: "/vt technical/portfolio-selected/ban-hang/screenshot_page040_img04.png", caption: "Customer Order Details" },
        { src: "/vt technical/portfolio-selected/dich-vu/screenshot_page063_img04.png", caption: "Service Reporting" },
        { src: "/vt technical/portfolio-selected/phe-duyet/screenshot_page089_img04.png", caption: "Multi-level Approval Process" },
        { src: "/vt technical/project/screenshot_page049_img03.png", caption: "Sales Pipeline Management" },
        { src: "/vt technical/project/screenshot_page057_img03.png", caption: "Service Ticket System" },
        { src: "/vt technical/project/screenshot_page114_img03.png", caption: "Analytics & Insights" },
      ],
      diagrams: [],
    } as Artifacts,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project, t, i }: { project: any; t: any; i: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    ...project.screenshots.map((s: { src: string; alt: string }) => ({ src: s.src, alt: s.alt, caption: undefined })),
    ...(project.artifacts?.mockups || []).map((m: ArtifactImage) => ({ src: m.src, alt: m.caption, caption: m.caption })),
  ];

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: i * 0.1 }}
      className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl overflow-hidden card-hover transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/10"
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-[var(--border)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#4F46E5]/10 shrink-0 flex items-center justify-center" style={{ width: "56px", height: "56px" }}>
              {project.logo ? (
                <Image src={project.logo} alt={`${project.client} logo`} width={50} height={50} className="object-contain" />
              ) : (
                <project.icon size={22} className="text-[var(--accent)]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs text-[var(--text-muted)]">{project.company}</span>
                <span className="text-[var(--border)]">·</span>
                <span className="text-xs font-semibold text-[var(--accent)]">{project.client}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">{project.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--text-secondary)] shrink-0">{project.period}</span>
            <span className="label-amber shrink-0">{project.num}</span>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="px-8 py-6 bg-[var(--surface-elevated)] border-b border-[var(--border)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {project.screenshots.slice(0, 3).map((shot: { src: string; alt: string; url?: string; objectPosition?: string }, idx: number) => (
            <BrowserFrame
              key={shot.src}
              {...shot}
              onClick={() => handleImageClick(idx)}
            />
          ))}
        </div>
      </div>

      {/* Challenge / Approach / Results */}
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
        <div className="px-8 py-6">
          <h4 className="label-amber mb-3">{t.challenge}</h4>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.challenge}</p>
        </div>
        <div className="px-8 py-6">
          <h4 className="label-amber mb-3">{t.approach}</h4>
          <ul className="space-y-2.5">
            {project.approach.map((step: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
              >
                <span className="text-[var(--accent)] mt-1.5 shrink-0 text-xs">▸</span>
                {step}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="px-8 py-6">
          <h4 className="label-amber mb-3">{t.results}</h4>
          <div className="space-y-2.5 mb-5">
            {project.results.map((r: { metric: string; label: string }, idx: number) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="flex items-center gap-3 p-3 bg-[var(--surface-elevated)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors duration-200"
              >
                <span className="font-serif text-xl font-bold text-[#E8960C]">{r.metric}</span>
                <span className="text-xs text-[var(--text-secondary)] leading-tight">{r.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: string) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Artifacts toggle */}
      {project.artifacts && (
        <>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-8 py-3.5 bg-[var(--bg-tertiary)] border-t border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)] transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View Artifacts</span>
              <span className="text-xs text-[var(--text-muted)]">mockups · diagrams · figma</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <ArtifactsPanel artifacts={project.artifacts} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={allImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const projects = PROJECT_CONFIG.map((cfg, i) => ({ ...cfg, ...t.items[i] }));

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">{t.label}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t.heading}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-sm leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} t={t} i={i} />
          ))}
        </div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
