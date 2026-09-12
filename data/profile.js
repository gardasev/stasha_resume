/**
 * Profile data for Stanislava (Stasha) Gardasevic.
 * Populates the resume/portfolio website. Edit this file to update content —
 * no other files need to change.
 */
const profileData = {
  title: "Academic CV",
  name: "Stanislava (Stasha) Gardasevic",
  sub_title: "Metadata Librarian · HCI-UX Researcher · Information Architect",
  logoURL: "stasha.jpg",
  status: "Metadata Librarian @ UH Mānoa",
  location: "Honolulu, Hawaiʻi, USA",
  tagline: "Ph.D., Communication & Information Sciences",

  metrics: [
    { label: "Info & HCI Sciences", value: "Ph.D.", icon: "fa-solid fa-graduation-cap" },
    { label: "Peer-Reviewed Works", value: "9+", icon: "fa-solid fa-book-open" },
    { label: "Talks & Presentations", value: "20+", icon: "fa-solid fa-microphone-lines" },
    { label: "Core Focus", value: "Metadata & Knowledge Graphs", icon: "fa-solid fa-diagram-project" },
  ],

  about: {
    intro: `Metadata Librarian and HCI-UX researcher with a Ph.D. in Communication and Information Sciences and over a decade of experience spanning academic libraries, national digital infrastructure, and interdisciplinary research. Specializes in information architecture, usable knowledge graphs, and metadata standards for cultural heritage and digital collections. Experienced in designing and leading digitization projects, teaching graduate-level courses, and conducting mixed-methods, user-centered research. Committed to making complex information systems discoverable, usable, and genuinely human-centered.`,
    contact: {
      email: "gardasev [at] hawaii [dot] edu", // normalized in JS
      // phone intentionally omitted from the public site
    },
  },

  // Header links (please double-check these are your profiles)
  links: [
    { title: "ORCID", src: "https://orcid.org/0000-0002-5758-6968", iconClass: "fa-brands fa-orcid" },
    { title: "Google Scholar", src: "https://scholar.google.com/citations?user=WFVA_GYAAAAJ", iconClass: "fa-solid fa-graduation-cap" },
    { title: "LinkedIn", src: "https://www.linkedin.com/in/stanislava-gardasevic/", iconClass: "fa-brands fa-linkedin-in" },
  ],

  skills: [
    {
      title: "Research & UX Methods",
      icon: "fa-solid fa-flask",
      tags: ["Content analysis", "Semi-structured interviews", "Usability walkthrough", "Participatory design", "Network analysis", "Topic modeling (LDA)", "Mixed methods", "Survey analysis"],
    },
    {
      title: "Metadata & Standards",
      icon: "fa-solid fa-tags",
      tags: ["DC", "MODS", "MARC", "RDA", "VRA", "TEI", "EAD", "LCSH", "Metadata mapping", "Crosswalks"],
    },
    {
      title: "Knowledge Graphs & Semantic Web",
      icon: "fa-solid fa-diagram-project",
      tags: ["RDF", "OWL", "Linked Open Data", "Cypher", "Neo4J", "Protégé", "Ontology design", "FRBRoo"],
    },
    {
      title: "Data Analysis",
      icon: "fa-solid fa-chart-simple",
      tags: ["NVivo", "SPSS", "R", "Gephi", "Neo4J"],
    },
    {
      title: "Digital Libraries & CMS",
      icon: "fa-solid fa-book",
      tags: ["Omeka", "Omeka S", "WordPress", "LibGuides", "Canvas (LMS)"],
    },
    {
      title: "Languages & Syntaxes",
      icon: "fa-solid fa-code",
      tags: ["HTML", "XML", "RDF", "OWL", "SQL", "Cypher", "R", "JavaScript"],
    },
    {
      title: "Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      tags: ["Oxygen", "VS Code", "GitHub", "ChatGPT / Copilot"],
    },
  ],

  experiences: [
    {
      organization: "University of Hawaiʻi at Mānoa — Hamilton Library",
      location: "Honolulu, Hawaiʻi",
      title: "Metadata Librarian (Tenure Track), Cataloging Department",
      date: "Mar 2025 – Present",
      skills: ["Metadata", "RDA", "MARC", "Digital Infrastructure", "Team Leadership"],
      details: [
        "Support library staff and university stakeholders in producing quality metadata for upload to digital platforms.",
        "Remediate legacy metadata and update metadata standards across collections.",
        "Lead the team dedicated to the library's digital infrastructure revamp.",
      ],
    },
    {
      organization: "University of Hawaiʻi at Mānoa — Hamilton Library",
      location: "Honolulu, Hawaiʻi",
      title: "Project Manager, Congressional Papers Digitization Project",
      date: "Oct 2024 – Mar 2025",
      skills: ["Project Management", "Digitization", "Metadata"],
      details: [
        "Created and supervised the digitization and metadata processes for the congressional papers collection.",
      ],
    },
    {
      organization: "Kawaiahaʻo Church Archives",
      location: "Honolulu, Hawaiʻi",
      title: "Metadata Specialist",
      date: "Jan 2024 – Mar 2025",
      skills: ["Metadata Schema", "Omeka", "Digital Archives"],
      details: [
        "Designed the metadata schema for the archive's redescription.",
        "Managed the digital archive.",
      ],
    },
    {
      organization: "Hawaiʻi Digital Health Lab",
      location: "Honolulu, Hawaiʻi",
      title: "Research Assistant",
      date: "Jan 2024 – May 2024",
      skills: ["Mixed Methods", "Machine Learning", "Human-in-the-loop", "Digital Health"],
      details: [
        "Designed and conducted a mixed-methods study on aspects of humans-in-the-loop in training machine learning models for digital health (behavioral-disorder diagnosis).",
      ],
    },
    {
      organization: "University of Hawaiʻi at Mānoa — LIS Program",
      location: "Honolulu, Hawaiʻi",
      title: "Teaching Assistant / Instructor of Record",
      date: "Aug 2018 – Dec 2023",
      skills: ["Teaching", "Omeka S", "LibGuides", "Digital Libraries"],
      details: [
        "Designed and taught graduate-level courses: Technology for Library and Information Centers; Creating Digital Libraries (Omeka S); Digital Librarianship (LibGuides); International Librarianship.",
      ],
    },
    {
      organization: "Premised on Care: Redescription as Restorative Justice in American Archives",
      location: "UH Mānoa (IMLS-funded)",
      title: "Research Assistant",
      date: "Mar 2022 – Jul 2022",
      skills: ["Archives", "Restorative Justice", "Redescription"],
      details: [
        "Assisted the IMLS-funded research project on redescription as restorative justice in American archives.",
      ],
    },
    {
      organization: "University of Hawaiʻi at Mānoa — Online Learning Academy",
      location: "Honolulu, Hawaiʻi",
      title: "Data Analyst",
      date: "May 2018 – Aug 2018",
      skills: ["Data Analysis", "Program Evaluation", "Visualization"],
      details: [
        "Conducted program usage analysis and evaluation-survey analysis, with results visualization.",
      ],
    },
    {
      organization: "National Library of Serbia",
      location: "Belgrade, Serbia",
      title: "Senior Digital Librarian",
      date: "Nov 2011 – Aug 2016",
      skills: ["Digital Libraries", "Web Archiving", "Metadata Aggregation", "Crosswalks"],
      details: [
        "Developed multiple e-services: digital libraries, a digital archive, a web archive, and the national metadata aggregator.",
        "Led the metadata mapping and crosswalk team; engaged in multiple international digitization projects and collaborations.",
        "Served as webmaster and social-media content creator.",
      ],
    },
  ],

  projects: [
    {
      title: "LocaLinQs",
      duration: "2023",
      desc: "Venture built on my dissertation research on usable knowledge graphs. Awarded 3rd place at the PACE UH Venture Competition as team lead.",
      technologies: ["Knowledge Graphs", "UX", "Entrepreneurship"],
    },
    {
      title: "Usable Knowledge Graph for an Interdisciplinary PhD Program",
      duration: "2020 – 2024",
      desc: "Doctoral research designing and evaluating a community-designed knowledge graph (Neo4J) that helps interdisciplinary PhD students discover and navigate research connections.",
      technologies: ["Neo4J", "Cypher", "Ontology", "Participatory Design"],
      link: "https://doi.org/10.1108/DLP-02-2024-0025",
      linkLabel: "Read the study",
    },
    {
      title: "Congressional Papers Digitization",
      duration: "2024 – 2025",
      desc: "Managed digitization and metadata workflows for a congressional papers collection at Hamilton Library, UH Mānoa.",
      technologies: ["Digitization", "Metadata", "Project Management"],
    },
    {
      title: "Kawaiahaʻo Church Archives Redescription",
      duration: "2024 – 2025",
      desc: "Designed the metadata schema and managed the digital archive for the redescription of a historic Hawaiian church archive using Omeka.",
      technologies: ["Omeka", "Metadata Schema", "Cultural Heritage"],
    },
  ],

  publications: [
    {
      year: "2025",
      title: "Negotiating Voice and Privacy: Doctoral Students' Perspectives on Participatory Information Systems",
      authors: "Gardasevic, S., Estell, P., Desiato, C., & Lamba, M.",
      venue: "Accepted — HICSS Conference",
      type: "Conference",
    },
    {
      year: "2024",
      title: "Public Health Using Social Network Analysis During the COVID-19 Era: A Systematic Review",
      authors: "Gardasevic, S., Jaiswal, A., Lamba, M., Funakoshi, J., Chu, K.-H., Shah, A., Sun, Y., Pokhrel, P., & Washington, P.",
      venue: "Information, 15(11), 690",
      type: "Journal",
      link: "https://doi.org/10.3390/info15110690",
      linkLabel: "DOI",
    },
    {
      year: "2024",
      title: "“It answers questions that I didn't know I had”: PhD students' evaluation of an information-sharing knowledge graph",
      authors: "Gardasevic, S., & Lamba, M.",
      venue: "Digital Library Perspectives, 40(4), 493–517",
      type: "Journal",
      link: "https://doi.org/10.1108/DLP-02-2024-0025",
      linkLabel: "DOI",
    },
    {
      year: "2023",
      title: "Community Design of a Knowledge Graph to Support Interdisciplinary PhD Students",
      authors: "Gardasevic, S., & Gazan, R.",
      venue: "iConference (Springer Nature)",
      type: "Conference",
      link: "https://doi.org/10.1007/978-3-031-28032-0_36",
      linkLabel: "DOI",
    },
    {
      year: "2020",
      title: "User-Driven Efforts in Creating a Knowledge Graph Information System",
      authors: "Gardasevic, S.",
      venue: "Digital Library Perspectives, 36(2), 97–111",
      type: "Journal",
      link: "https://doi.org/10.1108/DLP-12-2019-0043",
      linkLabel: "DOI",
    },
    {
      year: "2018",
      title: "Knowledge Graph for an Interdisciplinary PhD Program — Doctoral Consortium (Poster, Presentation & Paper)",
      authors: "Gardasevic, S.",
      venue: "International Semantic Web Conference (ISWC)",
      type: "Conference",
      link: "http://ceur-ws.org/Vol-2181/paper-04.pdf",
      linkLabel: "PDF",
    },
    {
      year: "2015",
      title: "Cartographic Collection of the National Library of Serbia throughout History until the Digital Present",
      authors: "Glišović, J., & Gardašević, S.",
      venue: "E-Perimetron, 10(2), 73–86",
      type: "Journal",
      link: "http://www.e-perimetron.org/Vol_10_2/Glisovic_Gardasevic.pdf",
      linkLabel: "PDF",
    },
    {
      year: "2013",
      title: "Semantic Web and Linked (Open) Data: Possibilities and Prospects for Libraries",
      authors: "Gardašević, S.",
      venue: "INFOtheca, 14(1)",
      type: "Journal",
      link: "http://infoteka.bg.ac.rs/pdf/Eng/2013-1/INFOTHECA_XIV_1_2014_26-36.pdf",
      linkLabel: "PDF",
    },
    {
      year: "2012",
      title: "Improving Online Access to Archival Data",
      authors: "Casarosa, V., Meghini, C., & Gardasevic, S.",
      venue: "Digital Libraries and Archives, 153–162",
      type: "Conference",
      link: "https://doi.org/10.1007/978-3-642-35834-0_16",
      linkLabel: "DOI",
    },
  ],

  presentations: [
    {
      title: "Keynotes & Invited Talks",
      icon: "fa-solid fa-microphone-lines",
      items: [
        "Knowledge Graphs — history, usage, and perspectives — Keynote, DCTE 1st International Conference on Digital Transformation in Culture and Education (2021)",
        "User-Centered Knowledge Graph Design — Research Colloquium, Department of Information Studies, UCLA (2024)",
        "User-Centered Knowledge Graph Design — Guest lecture, School of Library & Information Studies, University of Oklahoma (2024)",
        "User-Centered Knowledge Graph Design — Guest lecture, School of Information Sciences, University of Illinois Urbana-Champaign (2023)",
        "Knowledge Graph for Discovery and Navigation — Invited talk, Universitat Politècnica de Catalunya, ESSI (2022)",
        "Metadata for Digital Archives: Kawaiahaʻo Church Archives Redescription — AHA Workshop (2024)",
        "Primena tehnologije Graf znanja u visokoškolskim institucijama — Library Association of Serbia, Fall Forum (2024)",
      ],
    },
    {
      title: "Selected Conference Presentations",
      icon: "fa-solid fa-people-group",
      items: [
        "Lessons Learned from a Church Archives Digitization Project — ATALM (2025)",
        "Mapping the Archival Landscape: Historical Records Repositories in Hawaiʻi — HLA (2025)",
        "Knowledge Graph for Academic Libraries — ALA Annual Conference, poster (2024)",
        "Knowledge Graph in Neo4J for Helping Student Success: A Case Study — ASIS&T Webinar (2024)",
        "Community Design of a Knowledge Graph to Support Interdisciplinary PhD Students — iConference (2023)",
        "Knowledge Graph for Discovery and Navigation — JCDL Doctoral Consortium (2023)",
        "Library Metadata and Technologies Through Time — HLA Annual Conference (2022)",
        "Demo of Omeka S for Cultural Heritage Institutions — HLA Annual Conference, tutorial (2021)",
      ],
    },
  ],

  awards: [
    { title: "3rd Place — PACE UH Venture Competition", date: "2023", issuer: "Team lead for LocaLinQs, a venture based on my dissertation research", badge: "Award" },
    { title: "JCDL Doctoral Consortium Scholarship", date: "2023", issuer: "Joint Conference on Digital Libraries", badge: "Scholarship" },
    { title: "NISO Plus Scholarship", date: "2023", issuer: "NISO", badge: "Scholarship" },
    { title: "Science of Science Summer School Grant (NSF-funded)", date: "2022", issuer: "Awarded as research-collaboration project lead", badge: "Grant" },
    { title: "ASIS&T AI SIG — Workshop Scholarship", date: "2022", issuer: "Association for Information Science & Technology", badge: "Scholarship" },
    { title: "Dan J. Wedemeyer Excellence in Teaching Award", date: "2021–2022", issuer: "University of Hawaiʻi at Mānoa", badge: "Award" },
    { title: "IFLA/OCLC Fellowship for New Library Professionals", date: "2015", issuer: "One of five recipients — Dublin, OH", badge: "Fellowship" },
    { title: "LIBER Annual Conference Grant", date: "2013", issuer: "Munich, Germany", badge: "Grant" },
    { title: "Erasmus Mundus Full Scholarship — DILL Master Program", date: "2011", issuer: "One of 18 recipients — Norway, Estonia, Italy", badge: "Scholarship" },
  ],

  service: [
    {
      title: "Associations & Committees",
      icon: "fa-solid fa-users",
      items: [
        "Hawaiʻi Library Association (HLA) — Director; Archiving Committee Member",
        "Association of Hawaiʻi Archivists (AHA) — Chair, Educational Committee; Website Update Committee",
        "IASA/SEAPAVAA 2025 International Conference — Local Organizing Committee",
        "DPLA Metadata Working Group — Member",
      ],
    },
    {
      title: "Editorial & Peer Review",
      icon: "fa-solid fa-pen-nib",
      items: [
        "Editorial Board — Digital Library Perspectives (Emerald)",
        "Reviewer — IFLA Journal; JICES (Emerald); JISTaP; Digital Library Perspectives",
        "Reviewer — CHI; CSCW; HICSS; CIKM; Health Professions Education",
      ],
    },
    {
      title: "Past Roles & Contributions",
      icon: "fa-solid fa-clock-rotate-left",
      items: [
        "AHA — 2024 President; Head of Organizing Committee, 2024 Annual Conference",
        "ALA International Relations Round Table (IRRT) — Membership Committee Officer",
        "ASIS&T Knowledge Management SIG — Membership Officer",
        "ACM/SIGCHI Volunteer Development Committee — UX Researcher (qualitative)",
        "EuropeanaTech — community member and contributor (2011–2016)",
        "TPDL 2013 (Malta) — Conference Organizing Committee",
      ],
    },
    {
      title: "Professional Training",
      icon: "fa-solid fa-certificate",
      items: [
        "Digital POWRR Institute — Preserving Digital Objects with Limited Resources (2024)",
        "NSF Innovation Corps (Regional I-Corps); Facilitating Community & Organizational Change (2023)",
      ],
    },
  ],

  education: [
    {
      alma: "University of Hawaiʻi at Mānoa",
      duration: "2016 – 2024",
      std: "Ph.D., Communication & Information Sciences (CIS)",
      detail: "Dissertation: Designing Usable Knowledge Graphs — The Case of an Interdisciplinary Ph.D. Program. Advisor: Dr. Rich Gazan. Discipline: HCI-UX research & Information Architecture.",
      score: "GPA 4.0",
    },
    {
      alma: "Erasmus Mundus — Oslo, Tallinn & Parma",
      duration: "2009 – 2011",
      std: "International Master in Digital Library Learning (MLIS)",
      detail: "Thesis: Opening Archives to the General Public — a data-modelling approach (@ ISTI-CNR). Norway · Estonia · Italy.",
      score: "Full Scholarship",
    },
    {
      alma: "University of Belgrade",
      duration: "2002 – 2008",
      std: "B.A., Library and Information Sciences",
      detail: "Belgrade, Serbia.",
    },
  ],
};
