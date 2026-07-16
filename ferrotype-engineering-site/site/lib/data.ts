import type {
  Service,
  Industry,
  PortfolioItem,
  CaseStudy,
  Resource,
  JobOpening,
  FaqItem,
} from "@/types";

export const services: Service[] = [
  {
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortDescription: "Structural, thermal, and mechanism design grounded in first principles.",
    description:
      "From concept sketches to release-ready drawings, our mechanical engineers validate load paths, tolerances, and material choices before a single part is cut. We work as an extension of your team, not a black box.",
    icon: "Cog",
    deliverables: ["Concept design", "FEA & structural validation", "GD&T drawing packages", "BOM & material specification"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    shortDescription: "Taking an idea from napkin sketch to a manufacturable product.",
    description:
      "We manage the full development cycle — requirements, prototyping, testing, and design freeze — so your product reaches the shop floor without costly redesign loops.",
    icon: "Lightbulb",
    deliverables: ["Requirements & feasibility", "Prototype iterations", "Design verification", "Manufacturing handoff package"],
  },
  {
    slug: "product-design",
    title: "Product Design",
    shortDescription: "Industrial and mechanical design for equipment that has to work, not just look good.",
    description:
      "Every surface, joint, and fastener is specified with function first. We design for the operators and technicians who will use, maintain, and repair the equipment for years.",
    icon: "PenTool",
    deliverables: ["Industrial design", "Ergonomic review", "3D CAD modeling", "Design-for-service review"],
  },
  {
    slug: "reverse-engineering",
    title: "Reverse Engineering",
    shortDescription: "Recreating drawings and digital models for legacy parts with no documentation.",
    description:
      "When original drawings are lost and a machine builder no longer exists, we measure, scan, and reconstruct accurate CAD models and specifications so you can machine, mould, or replace the part with confidence.",
    icon: "ScanLine",
    deliverables: ["3D scanning & metrology", "CAD reconstruction", "Tolerance analysis", "Material identification"],
  },
  {
    slug: "dfma",
    title: "DFMA",
    shortDescription: "Design for Manufacturing and Assembly reviews that cut cost without cutting corners.",
    description:
      "We review your designs against real shop-floor constraints — tooling, fixturing, tolerance stack-up, and assembly sequence — to reduce part count, cycle time, and scrap rate before production starts.",
    icon: "Layers",
    deliverables: ["Manufacturability review", "Assembly sequence analysis", "Tolerance stack-up study", "Cost reduction roadmap"],
  },
  {
    slug: "value-engineering",
    title: "Value Engineering",
    shortDescription: "Structured cost reduction that protects function and reliability.",
    description:
      "We systematically challenge every part, material, and process step to find the lowest-cost path that still meets the functional and safety requirements of the design.",
    icon: "TrendingDown",
    deliverables: ["Function analysis", "Alternative material study", "Should-cost modeling", "Implementation roadmap"],
  },
  {
    slug: "manufacturing-engineering",
    title: "Manufacturing Engineering",
    shortDescription: "Process planning, tooling, and fixture design for repeatable production.",
    description:
      "We plan the how, not just the what: process routing, tooling strategy, fixture design, and cycle-time targets that hold up on the actual shop floor.",
    icon: "Factory",
    deliverables: ["Process routing", "Tooling & fixture design", "Cycle time analysis", "Work instructions"],
  },
  {
    slug: "cnc-machining",
    title: "CNC Machining",
    shortDescription: "Precision-machined parts sourced and quality-checked through our engineering network.",
    description:
      "We specify, source, and inspect CNC-machined parts through our vetted manufacturing network, applying the same engineering rigor from drawing to final dimensional report.",
    icon: "Wrench",
    deliverables: ["Machining feasibility review", "Supplier sourcing & quotation", "First article inspection", "Dimensional reporting"],
  },
  {
    slug: "fabrication",
    title: "Fabrication",
    shortDescription: "Structural and sheet metal fabrication engineered and coordinated end to end.",
    description:
      "From weld procedure specification to final finishing, we engineer fabrication packages and coordinate delivery through our qualified fabrication partners.",
    icon: "Hammer",
    deliverables: ["Weld procedure specification", "Fabrication drawing packages", "Fit-up & NDT coordination", "Finish specification"],
  },
  {
    slug: "mould-manufacturing",
    title: "Mould Manufacturing",
    shortDescription: "Injection mould design and build management for plastic and rubber parts.",
    description:
      "We engineer mould flow, cooling, and ejection systems and manage the build through our tooling partners, validating with T0–T2 trial data before handoff.",
    icon: "Box",
    deliverables: ["Mould flow simulation", "Tool design & DFM", "Build management", "T0–T2 trial validation"],
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    shortDescription: "Automating manual processes with the right level of complexity for the job.",
    description:
      "We design automation cells and retrofit lines sized to the real production volume and budget — not over-engineered, not under-powered.",
    icon: "Bot",
    deliverables: ["Automation feasibility study", "Mechanical & electrical design", "Integration management", "Commissioning support"],
  },
  {
    slug: "plc-programming",
    title: "PLC Programming",
    shortDescription: "Control logic engineered for uptime, not just for passing FAT.",
    description:
      "Our control engineers write PLC logic with maintainability and fault diagnostics in mind, so your technicians can troubleshoot without calling us every time.",
    icon: "Cpu",
    deliverables: ["Control philosophy design", "PLC/HMI programming", "FAT/SAT documentation", "Operator training"],
  },
  {
    slug: "scada",
    title: "SCADA",
    shortDescription: "Plant-wide visibility and data historian systems for informed decisions.",
    description:
      "We design SCADA architectures that give plant managers real production data — OEE, downtime causes, throughput — without a fragile, over-complicated system.",
    icon: "MonitorSmartphone",
    deliverables: ["SCADA architecture design", "Historian & reporting setup", "Alarm rationalization", "Cybersecurity hardening"],
  },
  {
    slug: "machine-retrofit",
    title: "Machine Retrofit",
    shortDescription: "Extending the life of existing equipment with modern controls.",
    description:
      "Rather than replacing capital equipment, we retrofit mechanical and control systems to restore accuracy, improve safety compliance, and add data connectivity.",
    icon: "RefreshCw",
    deliverables: ["Condition assessment", "Mechanical overhaul design", "Control system upgrade", "Safety compliance review"],
  },
  {
    slug: "engineering-consulting",
    title: "Engineering Consulting",
    shortDescription: "An outside engineering perspective when it matters most.",
    description:
      "We act as an independent technical advisor for capital projects, vendor selection, and root-cause investigations, giving management a clear, unbiased engineering opinion.",
    icon: "Users",
    deliverables: ["Independent design review", "Vendor & equipment audit", "Root cause investigation", "Technical due diligence"],
  },
  {
    slug: "engineering-training",
    title: "Engineering Training",
    shortDescription: "Building internal capability in your maintenance and engineering teams.",
    description:
      "We deliver applied training in GD&T, PLC troubleshooting, DFMA, and root-cause analysis so your team can solve more problems without outside help.",
    icon: "GraduationCap",
    deliverables: ["Applied GD&T training", "PLC/SCADA troubleshooting", "DFMA workshops", "Root cause analysis methods"],
  },
  {
    slug: "engineering-project-management",
    title: "Engineering Project Management",
    shortDescription: "One accountable team coordinating design, procurement, and installation.",
    description:
      "We run capital and improvement projects end to end — schedule, budget, vendor coordination, and site installation — so your team owns the outcome, not the coordination overhead.",
    icon: "ClipboardList",
    deliverables: ["Project planning & scheduling", "Vendor & contractor management", "Installation supervision", "Commissioning & handover"],
  },
  {
    slug: "manufacturing-network",
    title: "Manufacturing Network",
    shortDescription: "A vetted network of machine shops, fabricators, and tooling makers.",
    description:
      "We connect your engineering requirements to a qualified network of manufacturing partners, managing quotation, quality, and delivery so you deal with one accountable point of contact.",
    icon: "Network",
    deliverables: ["Supplier qualification", "RFQ management", "Quality inspection", "Logistics coordination"],
  },
];

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    description: "Tight tolerances, high volumes, and zero tolerance for line-down events.",
    challenges: ["Tooling life optimization", "Line-side automation", "Supplier quality escalations"],
  },
  {
    slug: "plastic",
    name: "Plastic",
    description: "Mould performance and part quality under tight cycle-time targets.",
    challenges: ["Mould flow optimization", "Cycle time reduction", "Warpage & sink mark resolution"],
  },
  {
    slug: "packaging",
    name: "Packaging",
    description: "High-speed lines where minutes of downtime cascade across shifts.",
    challenges: ["Changeover time reduction", "Format flexibility", "Sensor & vision integration"],
  },
  {
    slug: "food",
    name: "Food Industry",
    description: "Hygienic design and reliability under strict regulatory scrutiny.",
    challenges: ["Sanitary design compliance", "Washdown-rated automation", "Traceability systems"],
  },
  {
    slug: "mining",
    name: "Mining",
    description: "Heavy equipment engineered for abrasive, remote, and high-vibration conditions.",
    challenges: ["Structural fatigue analysis", "Remote condition monitoring", "Wear part redesign"],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    description: "Safety-critical systems where engineering rigor is non-negotiable.",
    challenges: ["Hazardous area compliance", "Asset integrity assessment", "Legacy equipment retrofit"],
  },
  {
    slug: "power-plant",
    name: "Power Plant",
    description: "Reliability engineering for equipment that cannot fail unexpectedly.",
    challenges: ["Reliability-centered maintenance", "Control system modernization", "Root cause failure analysis"],
  },
  {
    slug: "machine-builder",
    name: "Machine Builder",
    description: "Extra engineering capacity for OEMs scaling design output.",
    challenges: ["Overflow design capacity", "Standardization programs", "Documentation & GD&T cleanup"],
  },
  {
    slug: "oem",
    name: "OEM",
    description: "Product engineering support for manufacturers building their own equipment line.",
    challenges: ["New product introduction", "Supplier network access", "Cost-down programs"],
  },
];

export const portfolio: PortfolioItem[] = [
  {
    slug: "conveyor-line-retrofit",
    title: "Conveyor Line Control Retrofit",
    industry: "Packaging",
    service: "Machine Retrofit",
    summary: "Replaced obsolete relay logic with a modern PLC/HMI platform on a 20-year-old packaging line without extending planned downtime.",
    scope: ["Control philosophy redesign", "PLC/HMI programming", "Panel design", "Weekend commissioning"],
  },
  {
    slug: "injection-mould-cooling-redesign",
    title: "Injection Mould Cooling Redesign",
    industry: "Plastic",
    service: "Mould Manufacturing",
    summary: "Redesigned the cooling circuit of a 16-cavity mould to reduce cycle time and eliminate warpage on a high-volume consumer part.",
    scope: ["Mould flow simulation", "Cooling channel redesign", "Trial supervision", "Cycle time validation"],
  },
  {
    slug: "bracket-reverse-engineering",
    title: "Legacy Bracket Reverse Engineering",
    industry: "Mining",
    service: "Reverse Engineering",
    summary: "Reconstructed CAD models and drawings for a discontinued structural bracket to enable local machining and eliminate a single-source risk.",
    scope: ["3D scanning", "Tolerance analysis", "CAD reconstruction", "Supplier sourcing"],
  },
  {
    slug: "palletizing-cell-automation",
    title: "End-of-Line Palletizing Automation",
    industry: "Food Industry",
    service: "Industrial Automation",
    summary: "Designed and integrated a robotic palletizing cell sized for the client's actual throughput, avoiding an over-specified turnkey system.",
    scope: ["Feasibility study", "Mechanical & electrical design", "Integrator management", "Operator training"],
  },
  {
    slug: "pump-skid-dfma",
    title: "Pump Skid DFMA Review",
    industry: "Oil & Gas",
    service: "DFMA",
    summary: "Reduced part count by 18% on a pump skid assembly through a structured DFMA review, cutting assembly labor without changing performance specs.",
    scope: ["Manufacturability review", "Assembly sequence analysis", "Cost reduction roadmap", "Supplier coordination"],
  },
  {
    slug: "scada-historian-rollout",
    title: "Plant-Wide SCADA & Historian Rollout",
    industry: "Power Plant",
    service: "SCADA",
    summary: "Deployed a unified SCADA and data historian across three production lines, giving plant management real OEE visibility for the first time.",
    scope: ["Architecture design", "Historian & reporting setup", "Alarm rationalization", "Operator training"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "cutting-cycle-time-automotive-stamping",
    title: "Cutting Cycle Time on an Automotive Stamping Line",
    client: "Tier-1 Automotive Component Supplier",
    industry: "Automotive",
    problem:
      "A stamping line was missing takt time targets by 14%, risking a supply penalty from the client's OEM customer. Internal attempts to speed up the press had increased scrap rate instead.",
    approach:
      "Our manufacturing engineers ran a time-and-motion study across the full line, identified that material handling — not press speed — was the bottleneck, and redesigned the part flow with a new fixture and a two-stage buffer.",
    result:
      "Takt time target was met within six weeks without exceeding the original press speed, and scrap rate dropped as a secondary benefit of the improved fixture repeatability.",
    metrics: [
      { label: "Takt time improvement", value: "16%" },
      { label: "Scrap rate reduction", value: "9%" },
      { label: "Time to implementation", value: "6 weeks" },
    ],
  },
  {
    slug: "reducing-warranty-claims-plastic-housing",
    title: "Reducing Warranty Claims on a Plastic Enclosure",
    client: "Consumer Electronics Manufacturer",
    industry: "Plastic",
    problem:
      "A plastic housing part was generating a rising rate of field cracking claims. The client suspected a material issue, but internal testing hadn't found a clear root cause.",
    approach:
      "We conducted a full DFMA and stress analysis review and traced the failure to a sharp internal corner radius combined with a moulding-induced weld line — a design issue, not a material defect.",
    result:
      "A revised rib and radius design eliminated the failure mode entirely in accelerated life testing, and warranty claims for the part dropped after the design change rolled into production.",
    metrics: [
      { label: "Field failure reduction", value: "94%" },
      { label: "Root cause identification", value: "3 weeks" },
      { label: "Tooling change required", value: "Minor" },
    ],
  },
  {
    slug: "extending-legacy-press-life",
    title: "Extending the Life of a Legacy Hydraulic Press",
    client: "Mid-Size Machine Builder",
    industry: "Machine Builder",
    problem:
      "A 25-year-old hydraulic press was becoming unreliable, but a full replacement was not in the client's capital budget for the year, and spare parts for the original controller were no longer available.",
    approach:
      "We assessed the mechanical structure, confirmed it still met load requirements, and engineered a retrofit replacing only the hydraulic power unit and control system with modern, supportable components.",
    result:
      "The press returned to full production reliability at roughly a third of the cost of a new machine, with the added benefit of production data now feeding into the plant's SCADA system.",
    metrics: [
      { label: "Cost vs. new machine", value: "32%" },
      { label: "Unplanned downtime", value: "-71%" },
      { label: "Project duration", value: "10 weeks" },
    ],
  },
];

export const resources: Resource[] = [
  {
    slug: "drawing-checklist",
    title: "Engineering Drawing Checklist",
    description: "A practical checklist to catch missing tolerances, notes, and revision errors before a drawing is released.",
    fileType: "PDF",
    category: "Mechanical Design",
  },
  {
    slug: "dfma-checklist",
    title: "DFMA Review Checklist",
    description: "A structured checklist covering part count, fastening, and assembly sequence for design-for-manufacturing reviews.",
    fileType: "PDF",
    category: "DFMA",
  },
  {
    slug: "tolerance-guide",
    title: "Practical Tolerance Selection Guide",
    description: "A reference guide for selecting appropriate tolerances by process type and cost impact.",
    fileType: "PDF",
    category: "Mechanical Design",
  },
  {
    slug: "material-selection-guide",
    title: "Material Selection Guide for Industrial Parts",
    description: "A comparison framework for selecting metals, plastics, and composites based on load, environment, and cost.",
    fileType: "PDF",
    category: "Manufacturing",
  },
  {
    slug: "manufacturing-checklist",
    title: "Manufacturing Readiness Checklist",
    description: "Verify tooling, fixturing, and process documentation are ready before a new part goes into production.",
    fileType: "PDF",
    category: "Manufacturing",
  },
  {
    slug: "project-planning-checklist",
    title: "Engineering Project Planning Checklist",
    description: "A checklist for scoping, scheduling, and de-risking capital and improvement engineering projects.",
    fileType: "PDF",
    category: "Engineering Management",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    slug: "mechanical-design-engineer",
    title: "Mechanical Design Engineer",
    department: "Engineering",
    location: "Bekasi, West Java",
    type: "Full-time",
    summary: "Design and validate mechanical systems across automotive, packaging, and plastic industry projects.",
  },
  {
    slug: "controls-engineer",
    title: "Controls & Automation Engineer",
    department: "Automation",
    location: "Bekasi, West Java",
    type: "Full-time",
    summary: "Develop PLC/SCADA solutions and support commissioning for automation and retrofit projects.",
  },
  {
    slug: "manufacturing-engineer",
    title: "Manufacturing Engineer",
    department: "Engineering",
    location: "Bekasi, West Java",
    type: "Full-time",
    summary: "Plan processes, tooling, and fixtures to bring new designs into reliable production.",
  },
  {
    slug: "project-engineer",
    title: "Project Engineer",
    department: "Project Management",
    location: "Bekasi, West Java",
    type: "Full-time",
    summary: "Coordinate design, procurement, and site installation across multiple client engineering projects.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you manufacture parts yourselves, or only engineer them?",
    answer:
      "We are an engineering company, not a machine shop. We design, specify, and manage manufacturing through our qualified network of machining, fabrication, and tooling partners, so you get engineering accountability with manufacturing flexibility.",
    category: "General",
  },
  {
    question: "Can you work with our existing CAD files and drawings?",
    answer:
      "Yes. We work with most major CAD formats and can also reverse engineer parts when original drawings are missing or outdated.",
    category: "General",
  },
  {
    question: "How do you price engineering projects?",
    answer:
      "Most projects are quoted as fixed-price based on defined scope after an initial technical review. Open-ended consulting or retainer arrangements are also available for ongoing support.",
    category: "Commercial",
  },
  {
    question: "Do you sign NDAs before reviewing our drawings?",
    answer:
      "Yes, we routinely sign mutual NDAs before any technical review and treat all client drawings and specifications as confidential.",
    category: "Commercial",
  },
  {
    question: "What industries do you have the most experience in?",
    answer:
      "Automotive, plastic, packaging, food, mining, oil & gas, power plant, and machine building are our core industries, though our engineering methods apply broadly across manufacturing sectors.",
    category: "General",
  },
  {
    question: "Can you support a project outside Indonesia?",
    answer:
      "Yes. We support regional clients across Southeast Asia and can coordinate remote engineering review with on-site visits scheduled as needed.",
    category: "Commercial",
  },
  {
    question: "What happens after a machine retrofit or automation project is commissioned?",
    answer:
      "We provide after-sales support including operator training, documentation handover, and a defined warranty period, with ongoing maintenance support available on request.",
    category: "Process",
  },
];
