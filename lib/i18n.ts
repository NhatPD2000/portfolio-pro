export type Lang = "en" | "vi";

// ─── Shared types ────────────────────────────────────────────────────────────
export type Deliverable = {
  name: string;
  description: string;
  link?: string;
  pages?: number;
  screens?: number;
};

export type ClientData = {
  name: string;
  industry: string;
  outcome: string;
  scope: string[];
  tags: string[];
  problem?: string;
  analysis?: string[];
  deliverables?: Deliverable[];
};

export type ExperienceData = {
  num: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  keyResult: string;
  highlights: string[];
  tags: string[];
  clients: ClientData[];
};

export type ProjectTranslation = {
  title: string;
  subtitle: string;
  period: string;
  challenge: string;
  approach: string[];
  results: { metric: string; label: string }[];
};

// ─── English ─────────────────────────────────────────────────────────────────
const en = {
  nav: {
    links: [
      { href: "#about",      label: "About"      },
      { href: "#skills",     label: "Skills"     },
      { href: "#experience", label: "Experience" },
      { href: "#education",  label: "Education"  },
      { href: "#projects",   label: "Work"       },
      { href: "#contact",    label: "Contact"    },
    ],
    hireMe: "Discuss Your Project",
  },

  hero: {
    status: "Available for project consultation",
    role: "Business Analyst",
    specialization: "Manufacturing Intelligence",
    taglineL1: "Turning complex factory operations into clear, digital systems.",
    taglineL2: "MES, MOM, ERP — from first workshop to go-live.",
    domains: ["MES / MOM", "ERP Systems", "IoT Integration", "Agile / Scrum", "BPMN"],
    viewProjects: "View Projects",
    downloadCV: "Download CV",
    stats: [
      { value: "4+", label: "Years"     },
      { value: "4",  label: "Companies" },
      { value: "5+", label: "Projects"  },
      { value: "3",  label: "Languages" },
    ],
    scroll: "Scroll",
    process: {
      title: "BA Delivery Process",
      stepOf: (current: number, total: number) => `Step ${current} / ${total}`,
      endLabel: "End-to-end BA delivery",
      activeLabel: "SFSV - Smart Factory Solution Vietnam · Active",
      steps: [
        { num: "01", title: "Requirement Gathering", hint: "Workshops · BRS · Interviews" },
        { num: "02", title: "Analysis & BPMN",       hint: "Process mapping · FIT/GAP"    },
        { num: "03", title: "Design & Prototype",    hint: "Figma · Wireframes · UML"     },
        { num: "04", title: "Implementation",        hint: "Dev collab · Sprint reviews"  },
        { num: "05", title: "Go-Live & UAT",         hint: "Training · Testing · Support" },
      ],
    },
  },

  about: {
    label: "About",
    headingPlain: "Transform complex processes into",
    headingAccent: "clear, digital systems",
    para1: "Business Analyst with 3+ years of experience in manufacturing technology — deploying MES systems directly on factory floors and digitizing ERP processes for enterprise clients.",
    para2: "I speak both the language of the shop floor and the boardroom, translating operational reality into requirements that developers can build and users can apply.",
    location: "Ho Chi Minh City, Vietnam",
    highlights: [
      {
        title: "Domain Expertise",
        desc: "Manufacturing (MES/MOM), ERP Systems, Smart Factory & IoT integration in production environments",
      },
      {
        title: "Multilingual Communication",
        desc: "Vietnamese (native) · English (fluent) · Chinese (intermediate) — connecting cross-cultural teams",
      },
      {
        title: "Foundation",
        desc: "B.A. English Language — HUTECH · Translating technical complexity into language stakeholders understand",
      },
    ],
    metrics: [
      { value: "15%", label: "Operational efficiency improvement at Spartronics MES" },
      { value: "3",   label: "Factory go-lives completed end-to-end"       },
      { value: "2",   label: "MES platforms: custom-built & Apriso/Dassault"},
      { value: "3",   label: "Languages — connecting cross-cultural teams"           },
    ],
  },

  skills: {
    label: "Skills & Tools",
    heading: "What I bring to the table",
    mobileHint: "Tap a card to explore skills",
    toolsLabel: "Tools I work with",
    cta: "See these skills in action",
    hoverHint: "hover to explore",
    skillsUnit: "skills",
    levels: { Core: "Core", Proficient: "Proficient", Familiar: "Familiar" } as Record<string, string>,
    categories: [
      { title: "Business Analysis",      shortTitle: "BA",         skills: ["Requirement Gathering","BRD / FSD Docs","User Stories","Agile & Scrum","FIT/GAP Analysis","UAT Management","Stakeholder Mgmt","BPMN Mapping"] },
      { title: "Design & Visualization", shortTitle: "Design",     skills: ["Wireframing","Figma Prototyping","UML Diagrams","BPMN Flowcharts","Visio","Draw.io","User Flow Design","System Architecture"] },
      { title: "Technical Tools",        shortTitle: "Tech",       skills: ["SQL","Power BI","Oracle Apex","MES / MOM Systems","Apriso — Dassault","SCADA Integration","IoT Concepts","Low-Code Dev"] },
      { title: "Soft Skills & Languages",shortTitle: "Soft Skills",skills: ["Vietnamese","English","Chinese","Communication","Critical Thinking","Problem Solving","Presentation","Cross-team Collab"] },
      { title: "AI-Augmented BA",        shortTitle: "AI",         skills: ["Prompt Engineering","BRS Drafting w/ AI","AI-Assisted BPMN","Meeting → Requirements","UAT Case Generation","SQL / DAX Assistance","Doc QA & Proofreading","Claude Code Collab"] },
    ],
  },

  aiWorkflows: {
    label: "AI-Augmented Workflows",
    heading1: "I don't just use AI —",
    heading2: "I build workflows with it",
    description: "Every stage of the BA process, accelerated — from raw meeting notes to signed-off documentation, prototypes, and team tools.",
    inputLabel: "Input:",
    footerNote: "This portfolio was designed and built using Claude Code — a direct demonstration of AI-augmented development workflow in practice.",
    workflows: [
      { category: "Requirements Drafting",     input: "Stakeholder notes & meeting recordings",           output: "BRS first draft, ready for stakeholder review",               impact: "5–6× faster"         },
      { category: "Process Mapping",           input: "Plain-language process description",               output: "BPMN structure exported to Visio / draw.io",                 impact: "~60% less time"       },
      { category: "UAT Test Cases",            input: "Functional Specification Document (FSD)",          output: "Comprehensive test scenarios with edge cases",               impact: "Full coverage"        },
      { category: "Meeting → User Stories",    input: "Transcript, notes, or audio summary",             output: "Structured user stories + acceptance criteria",              impact: "Zero missed reqs"     },
      { category: "HTML Prototyping",          input: "Approved wireframes & interaction notes",          output: "Clickable HTML/CSS prototype for stakeholder demo",          impact: "Same-day demo"        },
      { category: "Domain Knowledge Base",     input: "Process docs, SOPs & tribal knowledge",           output: "Structured HTML reference — searchable & shareable",         impact: "Zero onboarding lag"  },
      { category: "BA Mini-Apps",              input: "Repetitive calculation or template need",          output: "Custom web tool for the team (e.g. effort estimator)", impact: "Reusable toolkit" },
    ],
  },

  experience: {
    label: "Work Experience",
    heading: "Where I've made an impact",
    current: "Current",
    hideClients: "Hide client details",
    viewClients: (n: number) => `View ${n} client project${n > 1 ? "s" : ""}`,
    sections: {
      problem: "Problem",
      analysis: "Analysis Process",
      scope: "Solution Scope",
      deliverables: "Deliverables",
      outcome: "Outcome",
    },
    pages: "pages",
    screens: "screens",
    items: [
      {
        num: "01", company: "SFSV - Smart Factory Solution Vietnam", role: "Business Analyst",
        period: "April 2024 – Present", location: "Ho Chi Minh City",
        current: true,
        keyResult: "3 factory go-lives · 15% operational efficiency gain · 2 MES projects delivered end-to-end",
        highlights: [
          "Delivered BRD & FSD for 2 major MES projects, ensuring full alignment between client operations and system design",
          "Implemented MES for 3 factory clients — improved operational efficiency by 15% through workflow optimization and smart factory solutions",
          "Designed mockups, wireframes, and Figma prototypes to visualize system workflows and operator UX",
          "Led go-live activities, user training, and pilot testing at manufacturing sites",
          "Collaborated with Developers, QA Testers, and IoT engineering team throughout the full project lifecycle",
        ],
        tags: ["MES / MOM","IoT","BRD / FSD","Figma","Agile","Apriso"],
        clients: [
          {
            name: "Spartronics Vietnam", industry: "Electronics Manufacturing Services (EMS)",
            outcome: "15% operational efficiency improvement through MES workflow optimization",
            scope: ["Full MES implementation for shop floor management","BRD & FSD documentation and client sign-off","IoT integration for real-time production monitoring","Go-live support and operator training"],
            tags: ["MES","IoT","BRD/FSD","Figma"],
            problem: "Manual shop floor tracking caused 40% data loss, 2-day reporting delays, and inability to trace quality issues back to production batches",
            analysis: ["Conducted 7 stakeholder interviews (5 operators, 2 supervisors, 1 plant manager)","Mapped 5 core workflows using BPMN swimlane diagrams","Identified 12 critical pain points in current manual process","Performed gap analysis between As-Is and To-Be states"],
            deliverables: [
              { name: "Business Requirement Document (BRD)", description: "Complete requirements specification with stakeholder sign-off", pages: 45, link: "#" },
              { name: "Functional Specification Design (FSD)", description: "Detailed system design with mockups and data flow diagrams", pages: 120, link: "#" },
              { name: "Figma Prototype", description: "Interactive UI/UX prototype for operator workflows", screens: 45, link: "#" },
              { name: "Process Flowcharts", description: "BPMN diagrams for 5 core manufacturing workflows", link: "#" },
              { name: "Use Case Diagrams", description: "12 actors, 28 use cases covering all system interactions", link: "#" },
            ],
          },
          {
            name: "PNJ — Phú Nhuận Jewelry", industry: "Jewelry Manufacturing",
            outcome: "MES deployment for production tracking and quality control workflows",
            scope: ["Manufacturing execution system rollout","Production workflow digitization and process mapping","Operator UX design and prototype validation","Pilot testing and go-live coordination"],
            tags: ["MES","Figma","Workflow Design","Go-live"],
            problem: "Jewelry production lacked real-time visibility into work-in-progress, causing bottlenecks and quality traceability issues",
            analysis: ["Shadowed 4 production lines to understand jewelry manufacturing flow","Interviewed 6 stakeholders across production, QC, and management","Created value stream map identifying 8 waste points","Designed 3 workflow prototypes and validated with operators"],
            deliverables: [
              { name: "Business Requirement Document (BRD)", description: "Requirements for jewelry production tracking system", pages: 38, link: "#" },
              { name: "Figma Prototype", description: "Operator interface for jewelry production workflows", screens: 32, link: "#" },
              { name: "Process Maps", description: "Value stream mapping and workflow diagrams", link: "#" },
              { name: "UAT Test Cases", description: "150+ test scenarios for pilot validation", link: "#" },
            ],
          },
        ],
      } as ExperienceData,
      {
        num: "02", company: "Lumos IS", role: "Business Analyst",
        period: "Tháng 6/2023 – Tháng 3/2024", location: "TP. Hồ Chí Minh",
        current: false,
        keyResult: "Full ERP delivered — requirements to UAT sign-off across Agile sprints",
        highlights: [
          "Thu thập, tinh chỉnh và tài liệu hóa yêu cầu người dùng trong Business Requirement Specifications cho triển khai ERP",
          "Xây dựng chức năng hệ thống ERP trên Oracle Apex sử dụng Agile — dashboard, báo cáo và tính năng tùy chỉnh theo yêu cầu khách hàng",
          "Triển khai phần mềm trong các giai đoạn kiểm thử, cung cấp đào tạo người dùng cuối và giải quyết vấn đề hệ thống sau go-live",
        ],
        tags: ["ERP","Oracle Apex","Agile / Scrum","SQL","Power BI"],
        clients: [
          {
            name: "VT Technical", industry: "Engineering & Technical Services",
            outcome: "Complete ERP system delivered from requirement gathering to UAT sign-off",
            scope: ["Sales module — order management and pipeline tracking","Warehouse module — inventory and stock control","Service module — field service and ticket management","Approval workflow — multi-level authorization flows"],
            tags: ["ERP","Oracle Apex","Agile","UAT"],
            problem: "Disconnected Excel-based processes across sales, warehouse, and service teams led to data inconsistency and 3-day order processing delays",
            analysis: ["Facilitated 5 requirements workshops with cross-functional teams","Documented 45 user stories across 4 modules","Created entity-relationship diagrams for database design","Defined acceptance criteria for 12 Agile sprints"],
            deliverables: [
              { name: "Business Requirement Specification (BRS)", description: "Complete ERP requirements across 4 modules", pages: 68, link: "#" },
              { name: "User Stories & Acceptance Criteria", description: "45 user stories with testable acceptance criteria", link: "#" },
              { name: "Database Schema Design", description: "ERD and data dictionary for Oracle Apex", link: "#" },
              { name: "UAT Test Plan", description: "Test scenarios and sign-off documentation", link: "#" },
            ],
          },
        ],
      } as ExperienceData,
      {
        num: "03", company: "Four Hands LLC", role: "Business Intelligence Analyst",
        period: "September 2022 – May 2023", location: "Ho Chi Minh City",
        current: false,
        keyResult: "Power BI dashboards delivered · Supply chain data quality improved ahead of product relaunch",
        highlights: [
          "Executed data queries on supply chain datasets using Microsoft SQL Server for business reporting",
          "Built Power BI dashboards and interactive reports for sales performance tracking and trend forecasting",
          "Used KNIME Analytics Platform to build ETL workflows identifying missing data fields prior to product relaunch",
          "Conducted data validation and quality checks to ensure accurate, reliable business insights",
        ],
        tags: ["Power BI","SQL","KNIME","Data Analysis","Supply Chain"],
        clients: [],
      } as ExperienceData,
      {
        num: "04", company: "Skale Asia", role: "Business Analyst Intern",
        period: "May 2022 – August 2022", location: "Ho Chi Minh City",
        current: false,
        keyResult: "BRS finalized on Jira & Confluence · User testing sessions completed with actionable findings",
        highlights: [
          "Analyzed user behavior and product logic to generate data-driven recommendations for product improvement",
          "Facilitated user testing sessions and synthesized usability findings into actionable product feedback",
          "Gathered and documented requirements from stakeholders on Jira & Confluence throughout the SDLC",
          "Collaborated with developers, testers, and project managers to ensure requirements were clearly communicated",
        ],
        tags: ["Agile","Jira","Confluence","User Testing","Requirements"],
        clients: [],
      } as ExperienceData,
    ],
  },

  education: {
    label: "Education",
    heading: "Academic foundation",
    institution: "Ho Chi Minh City University of Technology (HUTECH)",
    degree: "B.A. in English Language",
    location: "Ho Chi Minh City, Vietnam",
    years: "2018 – 2022",
    courses: ["Linguistics & Communication Theory", "Academic & Technical Writing", "Cross-cultural Communication"],
    description: "A background in English linguistics shapes how I work as a BA every day — translating technical complexity into clear requirements, bridging language and culture across teams, and ensuring that what developers build is exactly what stakeholders need.",
  },

  projects: {
    label: "Featured Work",
    heading: "Real problems. Real results.",
    description: "Structured BA process: understand the problem, map the flow, document requirements, validate with users.",
    challenge: "Challenge",
    approach: "BA Approach",
    results: "Results",
    items: [
      {
        title: "Spartronics Manufacturing Execution System",
        subtitle: "Custom MES — built from scratch with IoT integration",
        period: "Dec 2024 – Jun 2025",
        challenge: "Spartronics had zero real-time visibility into their SMT production lines. Manual tracking created blind spots — product traceability didn't exist, and quality defects were only caught late in the cycle.",
        approach: [
          "On-site workshops to map existing workflows in BPMN, identifying 8 key process gaps",
          "System architecture integrating IoT (FPC devices) for real-time machine data collection",
          "BRD & FSD covering Work Order management, process routes, traceability, and QC modules",
          "Figma prototypes for operator dashboards — validated through 3 UAT rounds on the factory floor",
        ],
        results: [
          { metric: "Real-time", label: "SMT production monitoring" },
          { metric: "100%",      label: "Product traceability"      },
          { metric: "IoT",       label: "FPC device integration"    },
        ],
      },
      {
        title: "Apriso Integration for Electroplating Process",
        subtitle: "MES digitalization — Apriso / Dassault Systèmes",
        period: "Apr 2024 – Apr 2025",
        challenge: "PNJ's electroplating line ran on manual calculations and paper logs. Frequent coating errors, high rework rates, and zero SCADA-to-report integration were costing production time and quality.",
        approach: [
          "BPMN mapping of full electroplating workflow — identified 6 bottlenecks for automation",
          "Functional specs for automated surface area calculation engine in Apriso",
          "SCADA-to-Apriso integration requirements for real-time parameter tracking",
          "Iterative testing with floor operators across 4 sprint cycles",
        ],
        results: [
          { metric: "40%",  label: "Fewer manual operations"  },
          { metric: "25%",  label: "Reduction in rework errors"},
          { metric: "Live", label: "SCADA data integration"   },
        ],
      },
      {
        title: "Machine Integration & ThingWorx Solution for Production Monitoring",
        subtitle: "End-to-end ThingWorx platform deployment with real-time production monitoring",
        period: "Dec 2024 – Present",
        challenge: "Unilever's production lines operated with manual monitoring and disconnected machine data. No centralized system for real-time visibility into production status, equipment performance, or quality metrics. Frequent line changeovers caused production delays due to lack of standardized procedures and real-time parameter tracking.",
        approach: [
          "Conducted comprehensive site surveys across 4 production lines to map equipment and sensors",
          "Designed monitoring screen mockups for Supervisors and Operators based on client requirements",
          "Identified 150+ critical machine data tags for real-time monitoring and control",
          "Mapped complete data flow from equipment sensors through ThingWorx platform to operator dashboards",
          "Defined SCADA logic, color-coded alerts, and production status visualization rules",
          "Gathered feedback on mockups from Supervisors and Operators to refine UX and ensure operational fit",
          "Developed comprehensive handover documentation and training materials for system adoption",
        ],
        results: [
          { metric: "Real-time", label: "Production monitoring across 4 lines" },
          { metric: "150+", label: "Equipment tags integrated" },
          { metric: "ThingWorx", label: "IoT platform deployed" },
        ],
      },
      {
        title: "ERP Implementation for VT Technical",
        subtitle: "End-to-end Oracle Apex ERP deployment across Sales, Inventory, Service, and Approval workflows",
        period: "Jul 2023 – Dec 2023",
        challenge: "VT Technical operated with fragmented systems across sales, inventory, and service operations. Data was scattered across multiple sources with no centralized visibility. Manual approval processes created bottlenecks, and the lack of real-time inventory tracking led to frequent stockouts and overstocking issues.",
        approach: [
          "Conducted comprehensive stakeholder interviews across Sales, Inventory, Service, Finance, and Management teams to understand current workflows",
          "Mapped existing processes (AS-IS) and designed optimized workflows (TO-BE) using BPMN swimlane diagrams",
          "Analyzed historical data to identify pain points and validate requirements",
          "Designed four integrated modules: Sales Management, Inventory Management, Service Management, and Approval Workflow",
          "Created detailed functional specifications with UI/UX mockups for each module",
          "Configured Oracle Apex with custom dashboards, reports, and automated workflows",
          "Developed data migration strategy and executed clean import of customer, product, and historical order data",
          "Facilitated UAT sessions with cross-functional teams and refined system based on feedback",
        ],
        results: [
          { metric: "Centralized", label: "Sales, Inventory, and Service management" },
          { metric: "Automated", label: "Multi-level approval workflows" },
          { metric: "Real-time", label: "Inventory visibility across warehouses" },
        ],
      },
    ] as ProjectTranslation[],
  },

  contact: {
    label: "Get In Touch",
    heading: "Let's work together",
    description: "Looking for a BA who understands both the factory floor and the boardroom?",
    opportunitiesLabel: "Open to opportunities",
    ctaHeading: "Let's build something",
    ctaDesc: "Interested in BA roles in manufacturing tech, smart factory, MES/ERP, or digital transformation.",
    sendMessage: "Send a message",
    contactLabels: { Email: "Email", Phone: "Phone", Location: "Location" },
    openTo: ["Manufacturing / Smart Factory", "MES / MOM / ERP Systems", "Digital Transformation", "Vietnam or Remote"],
    footer: "Business Analyst",
  },
};

// ─── Vietnamese ───────────────────────────────────────────────────────────────
const vi: typeof en = {
  nav: {
    links: [
      { href: "#about",      label: "Giới thiệu" },
      { href: "#skills",     label: "Kỹ năng"    },
      { href: "#experience", label: "Kinh nghiệm"},
      { href: "#education",  label: "Học vấn"    },
      { href: "#projects",   label: "Dự án"      },
      { href: "#contact",    label: "Liên hệ"    },
    ],
    hireMe: "Liên hệ tôi",
  },

  hero: {
    status: "Open to opportunities",
    role: "Business Analyst",
    specialization: "Manufacturing Intelligence",
    taglineL1: "Biến vận hành nhà máy phức tạp thành hệ thống kỹ thuật số rõ ràng.",
    taglineL2: "MES, MOM, ERP — từ workshop đầu tiên đến go-live.",
    domains: ["MES / MOM", "ERP Systems", "IoT Integration", "Agile / Scrum", "BPMN"],
    viewProjects: "Xem Dự Án",
    downloadCV: "Tải CV",
    stats: [
      { value: "4+", label: "Năm"      },
      { value: "4",  label: "Công ty"  },
      { value: "5+", label: "Dự án"    },
      { value: "3",  label: "Ngôn ngữ" },
    ],
    scroll: "Cuộn",
    process: {
      title: "Quy trình BA",
      stepOf: (current: number, total: number) => `Bước ${current} / ${total}`,
      endLabel: "Quy trình BA end-to-end",
      activeLabel: "SFSV - Smart Factory Solution Vietnam · Đang hoạt động",
      steps: [
        { num: "01", title: "Thu thập Yêu cầu",   hint: "Workshops · BRS · Phỏng vấn"    },
        { num: "02", title: "Phân tích & BPMN",    hint: "Lập quy trình · FIT/GAP"        },
        { num: "03", title: "Thiết kế & Prototype", hint: "Figma · Wireframes · UML"      },
        { num: "04", title: "Triển khai",           hint: "Hợp tác Dev · Sprint reviews"  },
        { num: "05", title: "Go-Live & UAT",        hint: "Đào tạo · Kiểm thử · Hỗ trợ"  },
      ],
    },
  },

  about: {
    label: "Về Tôi",
    headingPlain: "Biến quy trình phức tạp thành",
    headingAccent: "hệ thống kỹ thuật số rõ ràng",
    para1: "Tôi là Business Analyst với hơn 3 năm kinh nghiệm trong lĩnh vực công nghệ sản xuất — triển khai hệ thống MES trực tiếp trên sàn nhà máy và số hóa quy trình ERP cho các khách hàng doanh nghiệp.",
    para2: "Tôi am hiểu cả ngôn ngữ của sàn sản xuất lẫn phòng họp ban lãnh đạo, chuyển đổi thực tế vận hành thành yêu cầu mà đội phát triển có thể xây dựng và người dùng có thể áp dụng.",
    location: "TP. Hồ Chí Minh, Việt Nam",
    highlights: [
      {
        title: "Chuyên môn Lĩnh vực",
        desc: "Sản xuất (MES/MOM), Hệ thống ERP, Smart Factory & tích hợp IoT trong môi trường sản xuất",
      },
      {
        title: "Giao tiếp Đa ngôn ngữ",
        desc: "Tiếng Việt (bản ngữ) · Tiếng Anh (thành thạo) · Tiếng Trung (trung cấp) — kết nối đội nhóm đa quốc gia",
      },
      {
        title: "Nền tảng",
        desc: "Cử nhân Ngôn ngữ Anh — HUTECH · Chuyển đổi hệ thống kỹ thuật phức tạp thành ngôn ngữ các bên liên quan hiểu được",
      },
    ],
    metrics: [
      { value: "15%", label: "Cải thiện hiệu suất vận hành tại MES Spartronics" },
      { value: "3",   label: "Nhà máy go-live hoàn thành từ đầu đến cuối"       },
      { value: "2",   label: "Nền tảng MES: tự xây dựng & Apriso/Dassault"      },
      { value: "3",   label: "Ngôn ngữ — kết nối đội nhóm đa văn hóa"           },
    ],
  },

  skills: {
    label: "Kỹ Năng & Công Cụ",
    heading: "Những gì tôi mang lại",
    mobileHint: "Nhấn vào thẻ để khám phá kỹ năng",
    toolsLabel: "Công cụ tôi sử dụng",
    cta: "Xem kỹ năng trong thực tế",
    hoverHint: "di chuột để khám phá",
    skillsUnit: "kỹ năng",
    levels: { Core: "Thành thạo", Proficient: "Tốt", Familiar: "Cơ bản" } as Record<string, string>,
    categories: [
      { title: "Business Analysis",      shortTitle: "BA",      skills: ["Requirement Gathering","BRD / FSD","User Stories","Agile & Scrum","FIT/GAP Analysis","UAT Management","Stakeholder Management","BPMN Mapping"] },
      { title: "Design & Visualization", shortTitle: "Design",  skills: ["Wireframing","Figma Prototyping","UML Diagrams","BPMN Flowcharts","Visio","Draw.io","User Flow Design","System Architecture"] },
      { title: "Technical Tools",        shortTitle: "Tech",    skills: ["SQL","Power BI","Oracle Apex","MES / MOM Systems","Apriso — Dassault","SCADA Integration","IoT Concepts","Low-Code Dev"] },
      { title: "Soft Skills & Languages",shortTitle: "Soft Skills",skills: ["Vietnamese","English","Chinese","Communication","Critical Thinking","Problem Solving","Presentation","Cross-team Collab"] },
      { title: "AI-Augmented BA",        shortTitle: "AI",      skills: ["Prompt Engineering","BRS Drafting w/ AI","AI-Assisted BPMN","Meeting → Requirements","UAT Case Generation","SQL / DAX Assistance","Doc QA & Proofreading","Claude Code Collab"] },
    ],
  },

  aiWorkflows: {
    label: "AI-Augmented Workflows",
    heading1: "Tôi không chỉ dùng AI —",
    heading2: "tôi xây dựng quy trình làm việc cùng nó",
    description: "Mỗi giai đoạn của quy trình BA đều được tăng tốc — từ ghi chú cuộc họp thô đến tài liệu được phê duyệt, prototype và công cụ cho đội nhóm.",
    inputLabel: "Input:",
    footerNote: "Portfolio này được thiết kế và xây dựng bằng Claude Code — minh chứng trực tiếp cho quy trình phát triển hỗ trợ AI trong thực tế.",
    workflows: [
      { category: "Requirements Drafting",     input: "Stakeholder notes & meeting recordings",           output: "BRS first draft, ready for stakeholder review",        impact: "5–6× faster"         },
      { category: "Process Mapping",           input: "Plain-language process description",               output: "BPMN structure exported to Visio / draw.io",                 impact: "~60% less time"       },
      { category: "UAT Test Cases",            input: "Functional Specification Document (FSD)",          output: "Comprehensive test scenarios with edge cases",               impact: "Full coverage"        },
      { category: "Meeting → User Stories",    input: "Transcript, notes, or audio summary",             output: "Structured user stories + acceptance criteria",              impact: "Zero missed reqs"     },
      { category: "HTML Prototyping",          input: "Approved wireframes & interaction notes",          output: "Clickable HTML/CSS prototype for stakeholder demo",          impact: "Same-day demo"        },
      { category: "Domain Knowledge Base",     input: "Process docs, SOPs & tribal knowledge",           output: "Structured HTML reference — searchable & shareable",         impact: "Zero onboarding lag"  },
      { category: "BA Mini-Apps",              input: "Repetitive calculation or template need",          output: "Custom web tool for the team (e.g. effort estimator)", impact: "Reusable toolkit" },
    ],
  },

  experience: {
    label: "Kinh Nghiệm Làm Việc",
    heading: "Nơi tôi tạo ra sự khác biệt",
    current: "Hiện tại",
    hideClients: "Ẩn chi tiết dự án",
    viewClients: (n: number) => `Xem ${n} dự án khách hàng`,
    sections: {
      problem: "Vấn đề",
      analysis: "Quá trình Phân tích",
      scope: "Phạm vi Giải pháp",
      deliverables: "Tài liệu Đầu ra",
      outcome: "Kết quả",
    },
    pages: "trang",
    screens: "màn hình",
    items: [
      {
        num: "01", company: "SFSV - Smart Factory Solution Vietnam", role: "Business Analyst",
        period: "Tháng 4/2024 – Nay", location: "TP. Hồ Chí Minh",
        current: true,
        keyResult: "3 nhà máy go-live · Tăng 15% hiệu suất vận hành · 2 dự án MES hoàn thiện end-to-end",
        highlights: [
          "Lập BRD & FSD cho 2 dự án MES lớn, đảm bảo sự đồng bộ hoàn toàn giữa vận hành của khách hàng và thiết kế hệ thống",
          "Triển khai MES cho 3 khách hàng nhà máy — cải thiện hiệu suất vận hành 15% thông qua tối ưu workflow và giải pháp smart factory",
          "Thiết kế mockup, wireframe và prototype Figma để hình ảnh hóa workflow hệ thống và UX cho người vận hành",
          "Dẫn dắt các hoạt động go-live, đào tạo người dùng và kiểm thử pilot tại các cơ sở sản xuất",
          "Phối hợp với Developers, QA Testers và đội kỹ thuật IoT trong suốt vòng đời dự án",
        ],
        tags: ["MES / MOM","IoT","BRD / FSD","Figma","Agile","Apriso"],
        clients: [
          {
            name: "Spartronics Vietnam", industry: "Electronics Manufacturing Services (EMS)",
            outcome: "15% operational efficiency improvement through MES workflow optimization",
            scope: ["Full MES implementation for shop floor management","BRD & FSD documentation and client sign-off","IoT integration for real-time production monitoring","Go-live support and operator training"],
            tags: ["MES","IoT","BRD/FSD","Figma"],
            problem: "Manual shop floor tracking caused 40% data loss, 2-day reporting delays, and inability to trace quality issues back to production batches",
            analysis: ["Conducted 7 stakeholder interviews (5 operators, 2 supervisors, 1 plant manager)","Mapped 5 core workflows using BPMN swimlane diagrams","Identified 12 critical pain points in current manual process","Performed gap analysis between As-Is and To-Be states"],
            deliverables: [
              { name: "Business Requirement Document (BRD)", description: "Complete requirements specification with stakeholder sign-off", pages: 45, link: "#" },
              { name: "Functional Specification Design (FSD)", description: "Detailed system design with mockups and data flow diagrams", pages: 120, link: "#" },
              { name: "Figma Prototype", description: "Interactive UI/UX prototype for operator workflows", screens: 45, link: "#" },
              { name: "Process Flowcharts", description: "BPMN diagrams for 5 core manufacturing workflows", link: "#" },
              { name: "Use Case Diagrams", description: "12 actors, 28 use cases covering all system interactions", link: "#" },
            ],
          },
          {
            name: "PNJ — Phú Nhuận Jewelry", industry: "Jewelry Manufacturing",
            outcome: "MES deployment for production tracking and quality control workflows",
            scope: ["Manufacturing execution system rollout","Production workflow digitization and process mapping","Operator UX design and prototype validation","Pilot testing and go-live coordination"],
            tags: ["MES","Figma","Workflow Design","Go-live"],
            problem: "Jewelry production lacked real-time visibility into work-in-progress, causing bottlenecks and quality traceability issues",
            analysis: ["Shadowed 4 production lines to understand jewelry manufacturing flow","Interviewed 6 stakeholders across production, QC, and management","Created value stream map identifying 8 waste points","Designed 3 workflow prototypes and validated with operators"],
            deliverables: [
              { name: "Business Requirement Document (BRD)", description: "Requirements for jewelry production tracking system", pages: 38, link: "#" },
              { name: "Figma Prototype", description: "Operator interface for jewelry production workflows", screens: 32, link: "#" },
              { name: "Process Maps", description: "Value stream mapping and workflow diagrams", link: "#" },
              { name: "UAT Test Cases", description: "150+ test scenarios for pilot validation", link: "#" },
            ],
          },
        ],
      } as ExperienceData,
      {
        num: "02", company: "Lumos IS", role: "Business Analyst",
        period: "Tháng 6/2023 – Tháng 3/2024", location: "TP. Hồ Chí Minh",
        current: false,
        keyResult: "Full ERP delivered — requirements to UAT sign-off across Agile sprints",
        highlights: [
          "Thu thập, tinh chỉnh và tài liệu hóa yêu cầu người dùng trong Business Requirement Specifications cho triển khai ERP",
          "Xây dựng chức năng hệ thống ERP trên Oracle Apex sử dụng Agile — dashboard, báo cáo và tính năng tùy chỉnh theo yêu cầu khách hàng",
          "Triển khai phần mềm trong các giai đoạn kiểm thử, cung cấp đào tạo người dùng cuối và giải quyết vấn đề hệ thống sau go-live",
        ],
        tags: ["ERP","Oracle Apex","Agile / Scrum","SQL","Power BI"],
        clients: [
          {
            name: "VT Technical", industry: "Engineering & Technical Services",
            outcome: "Complete ERP system delivered from requirement gathering to UAT sign-off",
            scope: ["Sales module — order management and pipeline tracking","Warehouse module — inventory and stock control","Service module — field service and ticket management","Approval workflow — multi-level authorization flows"],
            tags: ["ERP","Oracle Apex","Agile","UAT"],
            problem: "Disconnected Excel-based processes across sales, warehouse, and service teams led to data inconsistency and 3-day order processing delays",
            analysis: ["Facilitated 5 requirements workshops with cross-functional teams","Documented 45 user stories across 4 modules","Created entity-relationship diagrams for database design","Defined acceptance criteria for 12 Agile sprints"],
            deliverables: [
              { name: "Business Requirement Specification (BRS)", description: "Complete ERP requirements across 4 modules", pages: 68, link: "#" },
              { name: "User Stories & Acceptance Criteria", description: "45 user stories with testable acceptance criteria", link: "#" },
              { name: "Database Schema Design", description: "ERD and data dictionary for Oracle Apex", link: "#" },
              { name: "UAT Test Plan", description: "Test scenarios and sign-off documentation", link: "#" },
            ],
          },
        ],
      } as ExperienceData,
      {
        num: "03", company: "Four Hands LLC", role: "Business Intelligence Analyst",
        period: "Tháng 9/2022 – Tháng 5/2023", location: "TP. Hồ Chí Minh",
        current: false,
        keyResult: "Dashboard Power BI hoàn thành · Chất lượng dữ liệu chuỗi cung ứng được cải thiện trước khi tái ra mắt sản phẩm",
        highlights: [
          "Thực hiện truy vấn dữ liệu trên tập dữ liệu supply chain bằng Microsoft SQL Server phục vụ báo cáo kinh doanh",
          "Xây dựng dashboard Power BI và báo cáo tương tác để theo dõi hiệu suất bán hàng và dự báo xu hướng",
          "Sử dụng KNIME Analytics Platform để xây dựng quy trình ETL xác định các trường dữ liệu thiếu trước khi tái ra mắt sản phẩm",
          "Thực hiện kiểm tra và xác thực dữ liệu để đảm bảo thông tin kinh doanh chính xác và đáng tin cậy",
        ],
        tags: ["Power BI","SQL","KNIME","Data Analysis","Supply Chain"],
        clients: [],
      } as ExperienceData,
      {
        num: "04", company: "Skale Asia", role: "Business Analyst Intern",
        period: "Tháng 5/2022 – Tháng 8/2022", location: "TP. Hồ Chí Minh",
        current: false,
        keyResult: "BRS hoàn thiện trên Jira & Confluence · Các buổi kiểm thử người dùng hoàn thành với kết quả có thể thực thi",
        highlights: [
          "Phân tích hành vi người dùng và logic sản phẩm để tạo ra các khuyến nghị dựa trên dữ liệu nhằm cải tiến sản phẩm",
          "Tổ chức các buổi user testing và tổng hợp kết quả khả năng sử dụng thành phản hồi sản phẩm có thể thực thi",
          "Thu thập và tài liệu hóa yêu cầu từ các stakeholder trên Jira & Confluence trong suốt SDLC",
          "Phối hợp với lập trình viên, tester và quản lý dự án để đảm bảo yêu cầu được truyền đạt rõ ràng",
        ],
        tags: ["Agile","Jira","Confluence","User Testing","Requirements"],
        clients: [],
      } as ExperienceData,
    ],
  },

  education: {
    label: "Học Vấn",
    heading: "Nền tảng học thuật",
    institution: "Đại học Công nghệ TP.HCM (HUTECH)",
    degree: "Cử nhân Ngôn ngữ Anh",
    location: "TP. Hồ Chí Minh, Việt Nam",
    years: "2018 – 2022",
    courses: ["Lý thuyết Ngôn ngữ học & Giao tiếp", "Viết Học thuật & Kỹ thuật", "Giao tiếp Đa văn hóa"],
    description: "Nền tảng ngôn ngữ học tiếng Anh định hình cách tôi làm việc với vai trò BA mỗi ngày — chuyển đổi sự phức tạp kỹ thuật thành yêu cầu rõ ràng, kết nối ngôn ngữ và văn hóa giữa các nhóm, và đảm bảo những gì lập trình viên xây dựng chính xác là những gì stakeholder cần.",
  },

  projects: {
    label: "Dự Án Tiêu Biểu",
    heading: "Vấn đề thực. Kết quả thực.",
    description: "Quy trình BA có cấu trúc: hiểu vấn đề, lập bản đồ luồng, tài liệu hóa yêu cầu, xác thực với người dùng.",
    challenge: "Thách thức",
    approach: "Quy trình BA",
    results: "Kết quả",
    items: [
      {
        title: "Spartronics Manufacturing Execution System",
        subtitle: "MES tùy chỉnh — xây dựng từ đầu với tích hợp IoT",
        period: "Tháng 12/2024 – Tháng 6/2025",
        challenge: "Spartronics không có khả năng hiển thị thời gian thực vào các dây chuyền SMT. Theo dõi thủ công tạo ra điểm mù — truy nguyên sản phẩm không tồn tại và lỗi chất lượng chỉ được phát hiện muộn trong chu kỳ sản xuất.",
        approach: [
          "Workshop tại nhà máy để lập bản đồ quy trình hiện có bằng BPMN, xác định 8 khoảng trống quy trình chính",
          "Kiến trúc hệ thống tích hợp IoT (thiết bị FPC) để thu thập dữ liệu máy thời gian thực",
          "BRD & FSD bao gồm quản lý Work Order, tuyến quy trình, truy nguyên và module QC",
          "Prototype Figma cho dashboard người vận hành — được xác thực qua 3 vòng UAT tại sàn sản xuất",
        ],
        results: [
          { metric: "Thời gian thực", label: "Theo dõi sản xuất SMT" },
          { metric: "100%",           label: "Truy nguyên sản phẩm"  },
          { metric: "IoT",            label: "Tích hợp thiết bị FPC"  },
        ],
      },
      {
        title: "Tích hợp Apriso cho Quy trình Mạ điện",
        subtitle: "Số hóa MES — Apriso / Dassault Systèmes",
        period: "Tháng 4/2024 – Tháng 4/2025",
        challenge: "Dây chuyền mạ điện của PNJ vận hành bằng tính toán thủ công và nhật ký giấy. Lỗi phủ thường xuyên, tỷ lệ làm lại cao và không có tích hợp SCADA-to-report đang làm tốn thời gian sản xuất và ảnh hưởng chất lượng.",
        approach: [
          "Lập BPMN cho quy trình mạ điện toàn diện — xác định 6 điểm nghẽn cần tự động hóa",
          "Đặc tả chức năng cho bộ máy tính diện tích bề mặt tự động trong Apriso",
          "Yêu cầu tích hợp SCADA-to-Apriso để theo dõi thông số thời gian thực",
          "Kiểm thử lặp lại với người vận hành xưởng qua 4 chu kỳ sprint",
        ],
        results: [
          { metric: "40%",       label: "Ít thao tác thủ công hơn" },
          { metric: "25%",       label: "Giảm lỗi làm lại"         },
          { metric: "Trực tiếp", label: "Tích hợp dữ liệu SCADA"   },
        ],
      },
      {
        title: "Dự án tích hợp máy và giải pháp ThingWorx cho giám sát sản xuất",
        subtitle: "Triển khai nền tảng ThingWorx toàn diện với giám sát sản xuất thời gian thực",
        period: "Tháng 12/2024 – Nay",
        challenge: "Các dây chuyền sản xuất của Unilever vận hành với giám sát thủ công và dữ liệu máy móc rời rạc. Không có hệ thống tập trung để hiển thị thời gian thực về trạng thái sản xuất, hiệu suất thiết bị hoặc chỉ số chất lượng. Việc chuyển đổi dây chuyền thường xuyên gây ra sự chậm trễ trong sản xuất do thiếu quy trình chuẩn hóa và theo dõi thông số thời gian thực.",
        approach: [
          "Thực hiện khảo sát toàn diện trên 4 dây chuyền sản xuất để lập bản đồ thiết bị và cảm biến",
          "Thiết kế mockup màn hình giám sát cho Supervisor và Operator theo yêu cầu khách hàng",
          "Xác định hơn 150 tag dữ liệu máy quan trọng cho giám sát và điều khiển thời gian thực",
          "Lập bản đồ luồng dữ liệu hoàn chỉnh từ cảm biến thiết bị qua nền tảng ThingWorx đến dashboard vận hành",
          "Định nghĩa logic SCADA, cảnh báo mã màu và quy tắc trực quan hóa trạng thái sản xuất",
          "Trao đổi & lấy ý kiến phản hồi mockup từ Supervisor và Operator để tinh chỉnh UX và đảm bảo phù hợp vận hành",
          "Phát triển tài liệu bàn giao toàn diện và tài liệu đào tạo để áp dụng hệ thống",
        ],
        results: [
          { metric: "Thời gian thực", label: "Giám sát sản xuất trên 4 dây chuyền" },
          { metric: "150+", label: "Tag thiết bị được tích hợp" },
          { metric: "ThingWorx", label: "Nền tảng IoT triển khai" },
        ],
      },
      {
        title: "Triển khai ERP cho VT Technical",
        subtitle: "Triển khai end-to-end hệ thống ERP Oracle Apex trên các quy trình Bán hàng, Kho, Dịch vụ và Phê duyệt",
        period: "Tháng 7/2023 – Tháng 12/2023",
        challenge: "VT Technical vận hành với các hệ thống rời rạc trên các bộ phận bán hàng, kho hàng và dịch vụ. Dữ liệu nằm rải rác trên nhiều nguồn mà không có khả năng hiển thị tập trung. Quy trình phê duyệt thủ công tạo ra các điểm nghẽn, và thiếu theo dõi tồn kho thời gian thực dẫn đến tình trạng thiếu hàng và tồn kho thừa thường xuyên.",
        approach: [
          "Phỏng vấn toàn diện các bên liên quan trên các bộ phận Bán hàng, Kho, Dịch vụ, Tài chính và Quản lý để hiểu quy trình hiện tại",
          "Lập bản đồ quy trình hiện tại (AS-IS) và thiết kế quy trình tối ưu (TO-BE) sử dụng sơ đồ BPMN swimlane",
          "Phân tích dữ liệu lịch sử để xác định các điểm đau và xác thực yêu cầu",
          "Thiết kế bốn module tích hợp: Quản lý Bán hàng, Quản lý Kho, Quản lý Dịch vụ và Quy trình Phê duyệt",
          "Tạo các đặc tả chức năng chi tiết với mockup UI/UX cho từng module",
          "Cấu hình Oracle Apex với dashboard tùy chỉnh, báo cáo và quy trình tự động",
          "Phát triển chiến lược di chuyển dữ liệu và thực hiện nhập sạch dữ liệu khách hàng, sản phẩm và đơn hàng lịch sử",
          "Tổ chức các phiên UAT với các đội đa chức năng và tinh chỉnh hệ thống dựa trên phản hồi",
        ],
        results: [
          { metric: "Tập trung", label: "Quản lý Bán hàng, Kho và Dịch vụ" },
          { metric: "Tự động", label: "Quy trình phê duyệt đa cấp" },
          { metric: "Thời gian thực", label: "Khả năng hiển thị tồn kho trên các kho" },
        ],
      },
    ] as ProjectTranslation[],
  },

  contact: {
    label: "Liên Hệ",
    heading: "Let's work together",
    description: "Bạn đang tìm kiếm một BA am hiểu cả sàn sản xuất lẫn phòng họp ban lãnh đạo?",
    opportunitiesLabel: "Open to opportunities",
    ctaHeading: "Let's build something",
    ctaDesc: "Tôi quan tâm đến các vị trí BA trong lĩnh vực công nghệ sản xuất, smart factory, MES/ERP, hoặc chuyển đổi số.",
    sendMessage: "Gửi tin nhắn",
    contactLabels: { Email: "Email", Phone: "Điện thoại", Location: "Địa điểm" },
    openTo: ["Manufacturing / Smart Factory", "MES / MOM / ERP Systems", "Digital Transformation", "Việt Nam hoặc Remote"],
    footer: "Business Analyst",
  },
};

export const translations = { en, vi };
