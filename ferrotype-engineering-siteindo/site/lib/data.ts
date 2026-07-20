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
    shortDescription: "Desain struktural, thermal, dan mekanisme yang berdasar pada perhitungan, bukan tebakan.",
    description:
      "Mulai dari sketsa konsep hingga gambar siap release, tim mechanical engineer kami memvalidasi jalur beban (load path), toleransi, dan pemilihan material sebelum satu part pun dipotong. Kami bekerja sebagai perpanjangan tim Anda, bukan pihak yang bekerja di belakang layar.",
    icon: "Cog",
    deliverables: ["Concept design", "FEA & validasi struktural", "Gambar GD&T lengkap", "Spesifikasi BOM & material"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    shortDescription: "Membawa ide dari coretan di kertas menjadi produk yang siap diproduksi massal.",
    description:
      "Kami mengelola seluruh siklus pengembangan — requirement, prototyping, testing, hingga design freeze — sehingga produk Anda sampai ke lantai produksi tanpa harus bolak-balik redesign yang memakan biaya.",
    icon: "Lightbulb",
    deliverables: ["Requirement & feasibility study", "Iterasi prototype", "Design verification", "Paket handoff ke manufacturing"],
  },
  {
    slug: "product-design",
    title: "Product Design",
    shortDescription: "Industrial dan mechanical design untuk peralatan yang harus benar-benar berfungsi, bukan sekadar terlihat bagus.",
    description:
      "Setiap permukaan, sambungan, dan baut dirancang dengan fungsi sebagai prioritas utama. Kami mendesain untuk operator dan teknisi yang akan menggunakan, merawat, dan memperbaiki peralatan tersebut selama bertahun-tahun.",
    icon: "PenTool",
    deliverables: ["Industrial design", "Ergonomic review", "3D CAD modeling", "Design-for-service review"],
  },
  {
    slug: "reverse-engineering",
    title: "Reverse Engineering",
    shortDescription: "Membuat ulang gambar dan model digital untuk part lama yang sudah tidak ada dokumentasinya.",
    description:
      "Saat gambar asli hilang dan pembuat mesin aslinya sudah tidak beroperasi lagi, kami mengukur, melakukan scanning, dan merekonstruksi model CAD serta spesifikasi yang akurat — sehingga Anda tetap bisa machining, membuat mould, atau mengganti part tersebut dengan percaya diri.",
    icon: "ScanLine",
    deliverables: ["3D scanning & metrology", "Rekonstruksi CAD", "Tolerance analysis", "Identifikasi material"],
  },
  {
    slug: "dfma",
    title: "DFMA",
    shortDescription: "Review Design for Manufacturing and Assembly yang memangkas biaya tanpa mengorbankan kualitas.",
    description:
      "Kami mereview desain Anda terhadap kondisi nyata di lantai produksi — tooling, fixturing, tolerance stack-up, dan urutan assembly — untuk mengurangi jumlah part, cycle time, dan scrap rate sebelum produksi dimulai.",
    icon: "Layers",
    deliverables: ["Manufacturability review", "Analisis urutan assembly", "Studi tolerance stack-up", "Roadmap pengurangan biaya"],
  },
  {
    slug: "value-engineering",
    title: "Value Engineering",
    shortDescription: "Pengurangan biaya yang terstruktur, tanpa mengorbankan fungsi dan keandalan.",
    description:
      "Kami secara sistematis meninjau ulang setiap part, material, dan tahapan proses untuk menemukan jalur biaya paling rendah yang tetap memenuhi requirement fungsi dan keselamatan dari desain tersebut.",
    icon: "TrendingDown",
    deliverables: ["Function analysis", "Studi material alternatif", "Should-cost modeling", "Roadmap implementasi"],
  },
  {
    slug: "manufacturing-engineering",
    title: "Manufacturing Engineering",
    shortDescription: "Perencanaan proses, tooling, dan fixture untuk produksi yang konsisten dan repeatable.",
    description:
      "Kami merencanakan bagaimana produk dibuat, bukan cuma apa yang dibuat: routing proses, strategi tooling, desain fixture, dan target cycle time yang benar-benar bisa dijalankan di lantai produksi sebenarnya.",
    icon: "Factory",
    deliverables: ["Process routing", "Desain tooling & fixture", "Analisis cycle time", "Work instructions"],
  },
  {
    slug: "cnc-machining",
    title: "CNC Machining",
    shortDescription: "Part presisi hasil machining, disourcing dan diperiksa kualitasnya lewat manufacturing network kami.",
    description:
      "Kami menentukan spesifikasi, mencari supplier, dan melakukan inspeksi part hasil CNC machining melalui manufacturing network yang sudah terverifikasi — dengan standar engineering yang sama dari gambar hingga laporan dimensi akhir.",
    icon: "Wrench",
    deliverables: ["Review kelayakan machining", "Sourcing & quotation supplier", "First article inspection", "Laporan dimensi"],
  },
  {
    slug: "fabrication",
    title: "Fabrication",
    shortDescription: "Fabrikasi struktural dan sheet metal, dirancang dan dikoordinasikan dari awal sampai akhir.",
    description:
      "Mulai dari weld procedure specification hingga finishing akhir, kami merancang paket fabrikasi dan mengoordinasikan pengerjaannya melalui partner fabrikasi kami yang terverifikasi.",
    icon: "Hammer",
    deliverables: ["Weld procedure specification", "Paket gambar fabrikasi", "Koordinasi fit-up & NDT", "Spesifikasi finishing"],
  },
  {
    slug: "mould-manufacturing",
    title: "Mould Manufacturing",
    shortDescription: "Desain injection mould dan manajemen pembuatannya untuk part plastik dan karet.",
    description:
      "Kami merancang sistem flow, cooling, dan ejection pada mould, lalu mengelola proses pembuatannya melalui partner tooling kami — divalidasi dengan data trial T0–T2 sebelum diserahkan ke Anda.",
    icon: "Box",
    deliverables: ["Mould flow simulation", "Tool design & DFM", "Manajemen pembuatan tool", "Validasi trial T0–T2"],
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    shortDescription: "Mengotomatisasi proses manual dengan tingkat kompleksitas yang sesuai kebutuhan, tidak berlebihan.",
    description:
      "Kami merancang automation cell dan retrofit line yang disesuaikan dengan volume produksi dan budget yang sebenarnya — tidak over-engineered, tapi juga tidak asal jadi.",
    icon: "Bot",
    deliverables: ["Studi kelayakan automation", "Desain mekanikal & elektrikal", "Manajemen integrasi", "Dukungan commissioning"],
  },
  {
    slug: "plc-programming",
    title: "PLC Programming",
    shortDescription: "Control logic yang dirancang untuk uptime, bukan sekadar lolos FAT.",
    description:
      "Tim control engineer kami menulis logika PLC dengan mempertimbangkan kemudahan perawatan dan diagnosa masalah, sehingga teknisi Anda bisa troubleshoot sendiri tanpa harus selalu menghubungi kami.",
    icon: "Cpu",
    deliverables: ["Desain control philosophy", "PLC/HMI programming", "Dokumentasi FAT/SAT", "Training operator"],
  },
  {
    slug: "scada",
    title: "SCADA",
    shortDescription: "Visibilitas seluruh pabrik dan sistem data historian untuk pengambilan keputusan yang lebih baik.",
    description:
      "Kami merancang arsitektur SCADA yang memberikan data produksi nyata bagi plant manager — OEE, penyebab downtime, throughput — tanpa sistem yang rumit dan mudah rusak.",
    icon: "MonitorSmartphone",
    deliverables: ["Desain arsitektur SCADA", "Setup historian & reporting", "Alarm rationalization", "Cybersecurity hardening"],
  },
  {
    slug: "machine-retrofit",
    title: "Machine Retrofit",
    shortDescription: "Memperpanjang umur pakai mesin yang sudah ada dengan sistem kontrol modern.",
    description:
      "Daripada mengganti mesin yang masih layak, kami melakukan retrofit pada sistem mekanikal dan kontrol untuk mengembalikan akurasi, meningkatkan kepatuhan keselamatan, dan menambahkan konektivitas data.",
    icon: "RefreshCw",
    deliverables: ["Condition assessment", "Desain overhaul mekanikal", "Upgrade sistem kontrol", "Review kepatuhan keselamatan"],
  },
  {
    slug: "engineering-consulting",
    title: "Engineering Consulting",
    shortDescription: "Perspektif engineering dari luar, tepat saat dibutuhkan.",
    description:
      "Kami berperan sebagai penasihat teknis independen untuk proyek capital, pemilihan vendor, dan investigasi root-cause — memberikan manajemen Anda opini engineering yang jelas dan tidak memihak.",
    icon: "Users",
    deliverables: ["Independent design review", "Audit vendor & equipment", "Investigasi root cause", "Technical due diligence"],
  },
  {
    slug: "engineering-training",
    title: "Engineering Training",
    shortDescription: "Membangun kapabilitas internal tim maintenance dan engineering Anda.",
    description:
      "Kami memberikan pelatihan terapan mengenai GD&T, troubleshooting PLC, DFMA, dan metode root-cause analysis, sehingga tim Anda bisa menyelesaikan lebih banyak masalah sendiri tanpa bantuan pihak luar.",
    icon: "GraduationCap",
    deliverables: ["Pelatihan GD&T terapan", "Troubleshooting PLC/SCADA", "Workshop DFMA", "Metode root cause analysis"],
  },
  {
    slug: "engineering-project-management",
    title: "Engineering Project Management",
    shortDescription: "Satu tim yang bertanggung jawab penuh atas desain, procurement, dan instalasi.",
    description:
      "Kami menjalankan proyek capital dan improvement dari awal sampai akhir — jadwal, budget, koordinasi vendor, dan supervisi instalasi di lapangan — sehingga tim Anda fokus pada hasil, bukan repot mengurus koordinasi.",
    icon: "ClipboardList",
    deliverables: ["Perencanaan & penjadwalan proyek", "Manajemen vendor & kontraktor", "Supervisi instalasi", "Commissioning & handover"],
  },
  {
    slug: "manufacturing-network",
    title: "Manufacturing Network",
    shortDescription: "Jaringan machine shop, fabricator, dan pembuat tooling yang sudah terverifikasi.",
    description:
      "Kami menghubungkan kebutuhan engineering Anda dengan jaringan partner manufaktur yang terkualifikasi, mengelola quotation, kualitas, dan pengiriman — sehingga Anda cukup berurusan dengan satu titik kontak yang bertanggung jawab penuh.",
    icon: "Network",
    deliverables: ["Kualifikasi supplier", "Manajemen RFQ", "Inspeksi kualitas", "Koordinasi logistik"],
  },
];

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    description: "Toleransi ketat, volume tinggi, dan tidak ada toleransi untuk kejadian line-down.",
    challenges: ["Optimasi umur tooling", "Automation line-side", "Eskalasi kualitas supplier"],
  },
  {
    slug: "plastic",
    name: "Plastic",
    description: "Performa mould dan kualitas part di bawah target cycle time yang ketat.",
    challenges: ["Optimasi mould flow", "Pengurangan cycle time", "Penyelesaian warpage & sink mark"],
  },
  {
    slug: "packaging",
    name: "Packaging",
    description: "Line berkecepatan tinggi di mana downtime beberapa menit saja berdampak ke seluruh shift.",
    challenges: ["Pengurangan changeover time", "Fleksibilitas format", "Integrasi sensor & vision"],
  },
  {
    slug: "food",
    name: "Food Industry",
    description: "Hygienic design dan keandalan di bawah pengawasan regulasi yang ketat.",
    challenges: ["Kepatuhan sanitary design", "Automation tahan washdown", "Sistem traceability"],
  },
  {
    slug: "mining",
    name: "Mining",
    description: "Peralatan berat yang dirancang untuk kondisi abrasif, terpencil, dan getaran tinggi.",
    challenges: ["Analisis structural fatigue", "Remote condition monitoring", "Redesign wear part"],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    description: "Sistem safety-critical di mana kedisiplinan engineering tidak bisa ditawar.",
    challenges: ["Kepatuhan hazardous area", "Asset integrity assessment", "Retrofit peralatan lama"],
  },
  {
    slug: "power-plant",
    name: "Power Plant",
    description: "Reliability engineering untuk peralatan yang tidak boleh gagal secara tiba-tiba.",
    challenges: ["Reliability-centered maintenance", "Modernisasi sistem kontrol", "Root cause failure analysis"],
  },
  {
    slug: "machine-builder",
    name: "Machine Builder",
    description: "Kapasitas engineering tambahan untuk OEM yang ingin memperbesar output desain.",
    challenges: ["Kapasitas desain overflow", "Program standardisasi", "Pembenahan dokumentasi & GD&T"],
  },
  {
    slug: "oem",
    name: "OEM",
    description: "Dukungan product engineering untuk produsen yang membangun lini peralatan sendiri.",
    challenges: ["New product introduction", "Akses manufacturing network", "Program cost-down"],
  },
];

export const portfolio: PortfolioItem[] = [
  {
    slug: "conveyor-line-retrofit",
    title: "Retrofit Kontrol Conveyor Line",
    industry: "Packaging",
    service: "Machine Retrofit",
    summary: "Mengganti relay logic yang sudah usang dengan platform PLC/HMI modern pada packaging line berusia 20 tahun, tanpa memperpanjang jadwal downtime yang direncanakan.",
    scope: ["Redesign control philosophy", "PLC/HMI programming", "Desain panel", "Commissioning akhir pekan"],
  },
  {
    slug: "injection-mould-cooling-redesign",
    title: "Redesign Cooling Injection Mould",
    industry: "Plastic",
    service: "Mould Manufacturing",
    summary: "Mendesain ulang sirkuit cooling pada mould 16-cavity untuk mengurangi cycle time dan menghilangkan warpage pada part consumer bervolume tinggi.",
    scope: ["Mould flow simulation", "Redesign cooling channel", "Supervisi trial", "Validasi cycle time"],
  },
  {
    slug: "bracket-reverse-engineering",
    title: "Reverse Engineering Bracket Lama",
    industry: "Mining",
    service: "Reverse Engineering",
    summary: "Merekonstruksi model CAD dan gambar untuk structural bracket yang sudah discontinued, memungkinkan machining lokal dan menghilangkan risiko single-source.",
    scope: ["3D scanning", "Tolerance analysis", "Rekonstruksi CAD", "Sourcing supplier"],
  },
  {
    slug: "palletizing-cell-automation",
    title: "Automation Palletizing End-of-Line",
    industry: "Food Industry",
    service: "Industrial Automation",
    summary: "Merancang dan mengintegrasikan robotic palletizing cell yang disesuaikan dengan throughput aktual klien, menghindari sistem turnkey yang over-spec.",
    scope: ["Studi kelayakan", "Desain mekanikal & elektrikal", "Manajemen integrator", "Training operator"],
  },
  {
    slug: "pump-skid-dfma",
    title: "Review DFMA Pump Skid",
    industry: "Oil & Gas",
    service: "DFMA",
    summary: "Mengurangi jumlah part sebesar 18% pada assembly pump skid melalui review DFMA yang terstruktur, memangkas labor assembly tanpa mengubah spesifikasi performa.",
    scope: ["Manufacturability review", "Analisis urutan assembly", "Roadmap pengurangan biaya", "Koordinasi supplier"],
  },
  {
    slug: "scada-historian-rollout",
    title: "Rollout SCADA & Historian Skala Pabrik",
    industry: "Power Plant",
    service: "SCADA",
    summary: "Menerapkan SCADA dan data historian terpadu di tiga lini produksi, memberikan visibilitas OEE nyata bagi manajemen pabrik untuk pertama kalinya.",
    scope: ["Desain arsitektur", "Setup historian & reporting", "Alarm rationalization", "Training operator"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "cutting-cycle-time-automotive-stamping",
    title: "Memangkas Cycle Time pada Automotive Stamping Line",
    client: "Tier-1 Automotive Component Supplier",
    industry: "Automotive",
    problem:
      "Sebuah stamping line meleset dari target takt time sebesar 14%, berisiko terkena penalti supply dari pelanggan OEM klien. Upaya internal mempercepat press justru meningkatkan scrap rate.",
    approach:
      "Tim manufacturing engineer kami melakukan time-and-motion study di seluruh line, menemukan bahwa material handling — bukan kecepatan press — adalah bottleneck-nya, lalu mendesain ulang alur part dengan fixture baru dan buffer dua tahap.",
    result:
      "Target takt time tercapai dalam enam minggu tanpa melebihi kecepatan press awal, dan scrap rate ikut turun sebagai manfaat tambahan dari repeatability fixture yang lebih baik.",
    metrics: [
      { label: "Peningkatan takt time", value: "16%" },
      { label: "Pengurangan scrap rate", value: "9%" },
      { label: "Waktu implementasi", value: "6 minggu" },
    ],
  },
  {
    slug: "reducing-warranty-claims-plastic-housing",
    title: "Mengurangi Klaim Garansi pada Plastic Enclosure",
    client: "Produsen Elektronik Konsumer",
    industry: "Plastic",
    problem:
      "Sebuah plastic housing mengalami peningkatan klaim retak di lapangan. Klien menduga masalah material, namun pengujian internal belum menemukan root cause yang jelas.",
    approach:
      "Kami melakukan review DFMA dan analisis tegangan menyeluruh, dan menemukan penyebab kegagalan adalah radius sudut internal yang terlalu tajam dikombinasikan dengan weld line akibat proses moulding — masalah desain, bukan cacat material.",
    result:
      "Revisi desain rib dan radius berhasil menghilangkan mode kegagalan tersebut sepenuhnya dalam accelerated life testing, dan klaim garansi untuk part tersebut turun setelah perubahan desain diterapkan di produksi.",
    metrics: [
      { label: "Pengurangan kegagalan lapangan", value: "94%" },
      { label: "Identifikasi root cause", value: "3 minggu" },
      { label: "Perubahan tooling", value: "Minor" },
    ],
  },
  {
    slug: "extending-legacy-press-life",
    title: "Memperpanjang Umur Hydraulic Press Lama",
    client: "Machine Builder Skala Menengah",
    industry: "Machine Builder",
    problem:
      "Hydraulic press berusia 25 tahun mulai tidak reliable, namun penggantian penuh tidak masuk dalam budget capital klien tahun itu, dan spare part untuk controller aslinya sudah tidak tersedia lagi.",
    approach:
      "Kami menilai struktur mekanikalnya, memastikan masih memenuhi kebutuhan beban, lalu merancang retrofit yang hanya mengganti hydraulic power unit dan sistem kontrol dengan komponen modern yang masih didukung.",
    result:
      "Press kembali beroperasi dengan reliabilitas penuh dengan biaya sekitar sepertiga dari harga mesin baru, dengan tambahan manfaat data produksi kini masuk ke sistem SCADA pabrik.",
    metrics: [
      { label: "Biaya vs. mesin baru", value: "32%" },
      { label: "Unplanned downtime", value: "-71%" },
      { label: "Durasi proyek", value: "10 minggu" },
    ],
  },
];

export const resources: Resource[] = [
  {
    slug: "drawing-checklist",
    title: "Checklist Gambar Engineering",
    description: "Checklist praktis untuk menangkap toleransi yang hilang, catatan yang kurang, dan kesalahan revisi sebelum gambar dirilis.",
    fileType: "PDF",
    category: "Mechanical Design",
  },
  {
    slug: "dfma-checklist",
    title: "Checklist Review DFMA",
    description: "Checklist terstruktur yang mencakup jumlah part, metode fastening, dan urutan assembly untuk review design-for-manufacturing.",
    fileType: "PDF",
    category: "DFMA",
  },
  {
    slug: "tolerance-guide",
    title: "Panduan Praktis Pemilihan Tolerance",
    description: "Panduan referensi untuk memilih tolerance yang sesuai berdasarkan jenis proses dan dampak biayanya.",
    fileType: "PDF",
    category: "Mechanical Design",
  },
  {
    slug: "material-selection-guide",
    title: "Panduan Pemilihan Material untuk Part Industri",
    description: "Framework perbandingan untuk memilih logam, plastik, dan komposit berdasarkan beban, lingkungan, dan biaya.",
    fileType: "PDF",
    category: "Manufacturing",
  },
  {
    slug: "manufacturing-checklist",
    title: "Checklist Kesiapan Manufacturing",
    description: "Pastikan tooling, fixturing, dan dokumentasi proses sudah siap sebelum part baru masuk ke tahap produksi.",
    fileType: "PDF",
    category: "Manufacturing",
  },
  {
    slug: "project-planning-checklist",
    title: "Checklist Perencanaan Proyek Engineering",
    description: "Checklist untuk scoping, penjadwalan, dan mengurangi risiko proyek engineering capital maupun improvement.",
    fileType: "PDF",
    category: "Engineering Management",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    slug: "mechanical-design-engineer",
    title: "Mechanical Design Engineer",
    department: "Engineering",
    location: "Bekasi, Jawa Barat",
    type: "Full-time",
    summary: "Merancang dan memvalidasi sistem mekanikal untuk proyek di industri automotive, packaging, dan plastic.",
  },
  {
    slug: "controls-engineer",
    title: "Controls & Automation Engineer",
    department: "Automation",
    location: "Bekasi, Jawa Barat",
    type: "Full-time",
    summary: "Mengembangkan solusi PLC/SCADA dan mendukung commissioning untuk proyek automation dan retrofit.",
  },
  {
    slug: "manufacturing-engineer",
    title: "Manufacturing Engineer",
    department: "Engineering",
    location: "Bekasi, Jawa Barat",
    type: "Full-time",
    summary: "Merencanakan proses, tooling, dan fixture untuk membawa desain baru ke tahap produksi yang andal.",
  },
  {
    slug: "project-engineer",
    title: "Project Engineer",
    department: "Project Management",
    location: "Bekasi, Jawa Barat",
    type: "Full-time",
    summary: "Mengoordinasikan desain, procurement, dan instalasi di lapangan untuk berbagai proyek engineering klien.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Apakah Ferrotype memproduksi part sendiri, atau hanya melakukan engineering saja?",
    answer:
      "Kami adalah perusahaan engineering, bukan machine shop. Kami merancang, menentukan spesifikasi, dan mengelola proses manufaktur melalui jaringan partner machining, fabrication, dan tooling yang sudah terkualifikasi — sehingga Anda mendapat akuntabilitas engineering dengan fleksibilitas manufaktur.",
    category: "Umum",
  },
  {
    question: "Bisakah bekerja dengan file CAD dan gambar yang sudah kami miliki?",
    answer:
      "Bisa. Kami bekerja dengan sebagian besar format CAD utama, dan juga bisa melakukan reverse engineering apabila gambar asli hilang atau sudah tidak update.",
    category: "Umum",
  },
  {
    question: "Bagaimana skema harga untuk proyek engineering?",
    answer:
      "Sebagian besar proyek dikuotasi dengan harga fixed-price berdasarkan scope yang sudah didefinisikan setelah review teknis awal. Skema consulting atau retainer yang lebih fleksibel juga tersedia untuk dukungan jangka panjang.",
    category: "Komersial",
  },
  {
    question: "Apakah Anda menandatangani NDA sebelum mereview gambar kami?",
    answer:
      "Ya, kami rutin menandatangani NDA mutual sebelum review teknis apa pun, dan memperlakukan semua gambar serta spesifikasi klien sebagai informasi rahasia.",
    category: "Komersial",
  },
  {
    question: "Industri apa yang paling banyak Anda tangani?",
    answer:
      "Automotive, plastic, packaging, food, mining, oil & gas, power plant, dan machine builder adalah industri utama kami, meskipun metode engineering kami bisa diterapkan secara luas di berbagai sektor manufaktur.",
    category: "Umum",
  },
  {
    question: "Bisakah mendukung proyek di luar Indonesia?",
    answer:
      "Bisa. Kami mendukung klien regional di Asia Tenggara dan dapat mengoordinasikan review engineering jarak jauh dengan kunjungan on-site yang dijadwalkan sesuai kebutuhan.",
    category: "Komersial",
  },
  {
    question: "Apa yang terjadi setelah proyek retrofit atau automation selesai commissioning?",
    answer:
      "Kami menyediakan dukungan after-sales termasuk training operator, handover dokumentasi, dan periode garansi tertentu, dengan dukungan maintenance lanjutan yang tersedia sesuai permintaan.",
    category: "Proses",
  },
];
