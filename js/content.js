/* =====================================================================
   CONTENT FILE: edit ONLY this file to change any text, link, or photo.
   (js/script.js is the engine; you do not need to touch it.)
   Static sections (About, Achievements, Contact) are edited in index.html.
   ===================================================================== */
/* =====================================================================
   1) EDIT YOUR LINKS HERE
   ===================================================================== */
const LINKS = {
  linkedin:  "https://www.linkedin.com/in/lubnaqurrotuayunin",
  instagram: "https://www.instagram.com/lubnaqrrtu/",
  tiktok:    "https://www.tiktok.com/@lubskiiy",
  whatsapp:  "https://wa.me/6281386623660?text=Hello%20Lubna%2C%20I%20viewed%20your%20portfolio!",
  email:     "mailto:lubnaayunin10@gmail.com",
  cv:        ""            // paste your CV link (Google Drive / PDF). Empty = button hidden.
};
const PROFILE_PHOTO = "";  // e.g. "assets/foto.jpg". Empty = shows the initials "LA".

/* =====================================================================
   2) ATTACH YOUR ORIGINAL FILES TO EACH WORK OVERLAY
   For every work id (see the WORKS list below) you may set:
     embed  : a public URL to show inside the overlay. Supported:
              - Google Slides "Publish to web" embed URL  (https://docs.google.com/presentation/d/.../embed)
              - a PDF  (assets/electrical.pdf)
              - a .pptx hosted online (shown through the Office viewer)
     images : photos for the swipeable frame, in order. Photo 1 goes with slide 01, photo 2 with slide 02, ...
              (["assets/trk/1.jpg","assets/trk/2.jpg"]). The numbered caption below the frame changes with each photo.
              Missing photos show an icon placeholder.
     links  : [{label:"Demo", url:"https://..."}, {label:"GitHub", url:"https://..."}]
   Leave empty and the overlay shows the content slides written below.
   ===================================================================== */
const FILES = {
  gsa:        { embed:"", images:[], links:[] },
  trk:        { embed:"", images:[], links:[] },
  bem:        { embed:"", images:[], links:[] },
  kasih:      { embed:"", images:[], links:[] },
  kawan:      { embed:"", images:[], links:[] },
  fos:        { embed:"", images:[], links:[] },
  osis:       { embed:"", images:[], links:[] },
  senada:     { embed:"", images:[], links:[] },
  mood:       { embed:"", images:[], links:[] },
  python:     { embed:"", images:[], links:[] },
  game:       { embed:"", images:[], links:[] },
  hybe:       { embed:"", images:[], links:[] },
  bluzone:    { embed:"", images:[], links:[] },
  electrical: { embed:"", images:[], links:[] },
  content:    { embed:"", images:[], links:[] },
  comic:      { embed:"", images:[], links:[] },
  design:     { embed:"", images:[], links:[] },
  infographic:{ embed:"", images:[], links:[] },
  copy:       { embed:"", images:[], links:[] },
  book:       { embed:"", images:[], links:[] },
  choir:      { embed:"", images:[], links:[] },
  tilawah:    { embed:"", images:[], links:[] },
  speaking:   { embed:"", images:[], links:[] },
  leadership: { embed:"", images:[], links:[] }
};

/* =====================================================================
   3) CONTENT OF EVERY WORK (written from the printed portfolio and CV)
   cat: exp | proj | cre | lead     sub (projects only): software | data | network | slides
   ===================================================================== */
const WORKS = [
/* ---------------------------- EXPERIENCE ---------------------------- */
{ id:"gsa", cat:"exp", kind:"National Program", icon:" 🌟",
  title:"Google Student Ambassador (GSA) 2026", org:"Google Indonesia", period:"2026",
  summary:"Selected as one of 2,000 official Google Student Ambassadors worldwide from a pool of more than 81,800 applicants, and recognized among the Top 150 ambassadors invited to the official inauguration.",
  highlights:[
    "Served as a strategic liaison at Campus, producing 20 high-impact creative contents.",
    "Spearheaded the specialized technology project “Treasure-Hunt Quest Cak Google” to promote digital literacy and campus-wide innovation.",
    "Recognized as a Top GSA and awarded a fully funded invitation to the official Graduation Ceremony (Top 100), a distinction granted over self-funded delegates.",
    "Nominated for the Awarding Day and won the 'Best Buddy Squad' title for impactful teamwork and technology solutions."],
  skills:["Strategic liaison","Content creation","Digital literacy","Event execution","Canva"],
  slides: [
    {
      t: "Selection", 
      b: ["1 of 2,000 official ambassadors nationwide", "Pool of 81,800+ applicants", "Top 150 invited to the exclusive official Inauguration and Graduation Ceremony"],
      img: "assets/1gsa.jpeg"
    },
    {
      t: "Role at Campus", 
      b: ["Strategic liaison between Google and the campus", "20 high-impact creative contents", "Treasure-Hunt Quest “Cak Google” for digital literacy"],
      img: "assets/2gsa.jpeg"
    },
    {
      t: "Recognition", 
      b: ["Top GSA: fully funded Graduation Ceremony invitation (Top 100)", "Nominated for the Awarding", "Winner, Best Buddy Squad title"],
      img: "assets/3gsa.jpeg"
    },
    {
      t: "Impact", 
      b: ["Teamwork across campus", "Digital literacy", "Technology solutions for students"],
      img: "assets/4gsa.jpeg"
    }
  ] 
}, // <-- Pastikan ada koma di sini sebelum objek item berikutnya (seperti id:"trk")
{ id:"trk", cat:"exp", kind:"Study Program Committee", icon:"🖥️",
  title:"Public Relations, Study Program Committee (TRK)", org:"Computer Engineering Technology, IPB University", period:"Dec 2025 – May 2026",
  summary:"As a member of the Engineering Computer Technology committee, I supported the control of study program activities together with the Head of Study Program and the Head of Faculty, serving as Public Relations.",
  highlights:[
    "Managed academic and institutional communications with Computer Engineering Technology students and stakeholders.",
    "Developed and distributed official publications, announcements, and event documentation.",
    "Led the Computer Engineering Technology Gathering as Project Officer (January–March 2026), directing 55 committee members."],
  skills:["Team Work","Time Management","Project Leadership","Project Coordination"],
  slides: [
    {
      t: "Mandate", 
      b: [
        "Support study program activities with the Head of Study Program and the Head of Faculty",
        "Public Relations of the Study Program Committee"
      ],
      img: "assets/1tek.jpeg" // <-- Ganti dengan nama file foto untuk slide Mandate
    },
    {
      t: "Responsibilities", 
      b: [
        "Academic and institutional communications",
        "Official publications and announcements",
        "Event documentation"
      ],
      img: "assets/2tek.jpeg" // <-- Ganti dengan nama file foto untuk slide Responsibilities
    },
    {
      t: "Project Officer, IPB Gathering", 
      b: [
        "January – March 2026",
        "55 committee members led"
      ],
      img: "assets/3tek.png" // <-- Ganti dengan nama file foto untuk slide IPB Gathering
    },
    {
      t: "Learning outcomes", 
      b: [
        "Soft skills: team work and time management",
        "Hard skills: WordPress, Excel, Canva, Notion"
      ],
      img: "assets/4tek.png" // <-- Ganti dengan nama file foto untuk slide Learning outcomes
    }
  ] 
}, 
{ id:"bem", cat:"exp", kind:"Student Executive Board", icon:"🏛️",
  title:"Student Resources Bureau, BEM SV IPB University", org:"Young Pioneer Leadership Program", period:"Aug – Dec 2025 · 5 months",
  summary:"Completed all stages of the Young Pioneer leadership program (Mentoring I, II, and III) and contributed to two major programs of the executive board.",
  highlights:[
    "Served as Vice Chair of the Organizing Committee for Cabinet Mahakarsa Demissioner 2025 (300 participants).",
    "Acted as Public Relations Officer for Cabinet Meeting III 2025.",
    "Documented the five-month internship and the projects produced during it."],
  skills:["Team work","Time management","Leadership","Microsoft Excel","Canva","Notion"],
  slides: [
    {
      t: "Leadership development", 
      b: ["Young Pioneer program", "Mentoring I, II, and III completed"],
      img: "assets/foto-lead1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Program contributions", 
      b: ["Vice Chair, Organizing Committee, Cabinet Mahakarsa Demissioner 2025", "Public Relations Officer, Cabinet Meeting III 2025"],
      img: "assets/foto-lead2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Competencies gained", 
      b: ["Soft skills: team work, time management, collaboration, leadership", "Hard skills: Excel, Canva, Notion"],
      img: "assets/foto-lead3.jpeg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
},
{ id:"kasih", cat:"exp", kind:"Non-Governmental Organization", icon:"🎨",
  title:"Creative Media Staff, Kasih Balik", org:"Kasih Balik (@kasihbalik)", period:"Dec 2024 – present",
  summary:"Kasih Balik is an organization that empowers youth to value community service through education, community building, and social projects. I contribute as Creative Media Staff and copywriter.",
  highlights:[
    "Participated in social projects involving members of the community.",
    "Designed more than 10 social media contents in Canva, integrating visual layouts with clear and engaging copywriting."],
  skills:["Writing","Designing","Team work","Canva","Microsoft Excel","Notion"],
  slides: [
    {
      t: "Organization", 
      b: [
        "Empowering youth through community service",
        "Education, community building, and social projects"
      ],
      img: "assets/foto-org1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Role", 
      b: [
        "Creative Media Staff and copywriter",
        "10+ social media copy contents created"
      ],
      img: "assets/foto-org2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Competencies", 
      b: [
        "Soft skills: team work, writing, humanity",
        "Hard skills: Microsoft Excel"
      ],
      img: "assets/foto-org3.jpeg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
},
{ id:"kawan", cat:"exp", kind:"Community", icon:"🤝",
  title:"Public Relations, Kawan Bestari", org:"Kawan Bestari (@kawanbestari)", period:"Aug 2022 – Feb 2026",
  summary:"Kawan Bestari is a community that serves as a supportive companion, where members encourage one another to be knowledgeable, well-educated, and of good character.",
  highlights:[
    "Actively facilitated educational activities for youth, persons with disabilities, individuals with mental health conditions, and senior citizens.",
    "Built and maintained strong relationships with social partners, contributing to the expansion and strengthening of professional networks."],
  skills:["Team work","Writing","Speaking","Notion"],
  slides: [
    {
      t: "Community", 
      b: [
        "A supportive companion for knowledge, education, and character"
      ],
      img: "assets/foto-comm1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Inclusive education", 
      b: [
        "Youth",
        "Persons with disabilities",
        "Individuals with mental health conditions",
        "Senior citizens"
      ],
      img: "assets/foto-comm2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Partnerships", 
      b: [
        "Maintained relationships with social partners",
        "Expanded professional networks"
      ],
      img: "assets/foto-comm3.jpeg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini, diikuti koma jika masih ada proyek lain di bawahnya
{ id:"fos", cat:"exp", kind:"Youth Organization", icon:"👩‍💼",
  title:"Secretary of Public Relations Division, FOS DKI Jakarta", org:"Forum OSIS DKI Jakarta (@fosdkijakarta)", period:"Mar 2024 – Apr 2025",
  summary:"Forum OSIS DKI Jakarta houses OSIS/MPK administrators of senior high schools in Jakarta and develops them as role models and Agents of Change. I was selected as one of 35 from 800+ candidates.",
  highlights:[
    "Assisted in coordinating internal communications within the Public Relations Division, in collaboration with the Head of Public Relations.",
    "Served as Head of the Event Division for key programs: Forum OSIS Gathering DKI Jakarta, PESTAVIA, and the Student Youth Project.",
    "Vice Project Officer of the Student Youth Project (September 2024), with 700 participants: 600 offline and 100 online.",
    "Authored the full communication set for R.I.S.E. Mangrove, including registration broadcasts, formal invitations, and teasers."],
  skills:["Team Work","Time Management","Leadership","Microsoft Excel","Canva","WordPress"],
  slides: [
    {
      t: "Selection", 
      b: [
        "35 selected from 800+ Agents of Change candidates"
      ],
      img: "assets/foto-aoc1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Public Relations", 
      b: [
        "Internal communications coordination",
        "Collaboration with the Head of Public Relations"
      ],
      img: "assets/foto-aoc2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Event leadership", 
      b: [
        "Forum OSIS Gathering DKI Jakarta: 300 participants",
        "PESTAVIA: 1500+ participants",
        "Student Youth Project: 700 participants"
      ],
      img: "assets/foto-aoc3.jpeg" // <-- Ganti dengan nama file foto slide 3
    },
    {
      t: "Competencies", 
      b: [
        "Soft skills: team work, time management, leadership",
        "Hard skills: Excel, Canva, WordPress"
      ],
      img: "assets/foto-aoc4.jpeg" // <-- Ganti dengan nama file foto slide 4
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"osis", cat:"exp", kind:"School Organization", icon:"📋",
  title:"Human Resources Secretary, OSIS SMA Negeri 26 Jakarta", org:"OSIS SMAN 26 Jakarta", period:"High school tenure",
  summary:"Supported administrative operations during leadership regeneration programs, including scheduling, participant data management, and the selection and evaluation of new members.",
  highlights:[
    "Administered operations during leadership regeneration programs.",
    "Prepared a hundred of formal documentation and official invitations.",
    "Compiled leadership succession records for organizational continuity."],
  skills:["Team Work","Time Management","Leadership","Microsoft Excel","Notion","WordPress"],
  slides: [
    {
      t: "Scope", 
      b: [
        "Leadership regeneration administration",
        "Scheduling and participant data management"
      ],
      img: "assets/foto-scope1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Outputs", 
      b: [
        "Formal documentation and official invitations",
        "Leadership succession records"
      ],
      img: "assets/foto-scope2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Competencies", 
      b: [
        "Soft skills: team work, time management, leadership",
        "Hard skills: Excel, Notion, WordPress"
      ],
      img: "assets/foto-scope3.jpeg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini, diikuti koma jika masih ada proyek lain di bawahnya

/* ----------------------------- PROJECTS ----------------------------- */
{ id:"senada", cat:"proj", sub:"software", kind:"Software and Web", icon:"🎤",
  title:"Konser Senada", org:"Inclusive concert platform", period:"Full-stack project",
  summary:"A social-based concert platform designed for friends with disabilities, completed with an administrator dashboard and user management to 2000 participants.",
  highlights:["Designed and implemented the platform as a full-stack developer.","Built an administrator dashboard and user management features.","Centered the interface on accessibility and inclusion."],
  skills:["Full-stack + Configuration Seating","Admin dashboard and Data processing","User management with Python and VS Code","UI/UX"],
  slides: [
    {
      t: "Problem", 
      b: [
        "Concerts are rarely designed with persons with disabilities in mind"
      ],
      img: "assets/foto-senada1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Solution", 
      b: [
        "A social-based platform for inclusive concerts",
        "Administrator dashboard and user management"
      ],
      img: "assets/foto-senada2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Role", 
      b: [
        "Full-stack developer"
      ],
      img: "assets/foto-senada3.png" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini, diikuti koma jika masih ada proyek lain di bawahnya
{ id:"mood", cat:"proj", sub:"software", kind:"Software and Web", icon:"📝",
  title:"MoodNotes", org:"Multi-user microblogging application", period:"CRUD project",
  summary:"A multi-user text application in the style of microblogging, enabling users to post content and interact within a shared system environment with CRUD operations (Create, Read, Update, Delete).",
  highlights:["Implemented end-to-end CRUD operations.","Supported multiple users within a single shared system."],
  skills:["CRUD","Multi-user system","Back-end","Front-end"],
  slides: [
    {
      t: "Concept", 
      b: [
        "Microblogging for moods and short notes"
      ],
      img: "assets/foto-concept.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Features", 
      b: [
        "Create, read, update, delete posts",
        "Multi-user interaction"
      ],
      img: "assets/foto-features.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Role", 
      b: [
        "Developer, end-to-end"
      ],
      img: "assets/foto-role.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"game", cat:"proj", sub:"software", kind:"Software and Web", icon:"🎮",
  title:"Game Development", org:"Iconlab UNNES 2026", period:"2026",
  summary:"Awarded 1st Place at Iconlab UNNES 2026 Game Development (GameDev) Competition. Responsible for end-to-end development, including game logic programming, UI/UX design, game design documentation, and mechanics implementation",
  highlights:["Won First Place in the Game Development Competition, Iconlab UNNES (2026).","Served as the developer of the entry."],
  skills:["Game development","Programming","Design"],
  slides: [
    {
      t: "Competition", 
      b: [
        "Game Development Competition, Iconlab UNNES 2026"
      ],
      img: "assets/foto-competition1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Result", 
      b: [
        "First Place"
      ],
      img: "assets/foto-competition2.jpg" // <-- Ganti dengan nama file foto slide 2
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"hybe", cat:"proj", sub:"network", kind:"Networking", icon:"🌐",
  title:"Enterprise Network “Hybe”", org:"Cisco simulation", period:"2025",
  summary:"Engineered and simulated a complex multi-division enterprise network topology for 'Hybe' Label using Cisco Packet Tracer across four distinct functional zones (Music, Video, Label, and Agency). Designed a robust dual-stack IPv4/IPv6 addressing scheme utilizing VLSM, configured centralized dynamic routing protocols, implemented granular network segmentation, and established stringent device access security and ACLs.",
  highlights:["Designed the multi-division topology as network designer.","Applied VLSM subnetting and IPv4/IPv6 addressing.","Configured centralized routing network segmentation, and stringent device access security.."],
  skills:["Cisco","VLSM","IPv4/IPv6","Routing and switching"],
  slides: [
    {
      t: "Topology", 
      b: [
        "Divisions: Music, Video, Label, Agency"
      ],
      img: "assets/foto-topology1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Techniques", 
      b: [
        "IPv4 and IPv6",
        "VLSM",
        "Centralized routing",
        "Device access security"
      ],
      img: "assets/foto-topology2.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Context", 
      b: [
        "Cisco CCNA: Networking and Introduction to Network (2025)"
      ],
      img: "assets/foto-topology3.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"bluzone", cat:"proj", sub:"network", kind:"Social Innovation", icon:"💙",
  title:"BLUZONE", org:"Markoding Digital Innovation Challenge", period:"2021",
  summary:"A digital mental health product concept and high-fidelity prototype designed to support bullying survivors. Formulated through human-centered design thinking, featuring a daily mood tracker concept, audio-based emotional regulation tools, and an anonymous sharing space. Recognized as a National Finalist at Markoding 2021.",
  highlights:["Conceptualized and designed the platform as concept designer.","Reached the national final of the Digital Innovation Challenge, Markoding (2021)."],
  skills:["UI/UX","Mental health","Design thinking","Concept design"],
  slides: [
    {
      t: "Problem", 
      b: [
        "Survivors of bullying lack safe digital spaces"
      ],
      img: "assets/foto-problem1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Features", 
      b: [
        "Daily mood tracker",
        "Music for emotional regulation",
        "Confidential story space"
      ],
      img: "assets/foto-problem2.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Recognition", 
      b: [
        "National Finalist, Markoding 2021"
      ],
      img: "assets/foto-problem3.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"electrical", cat:"proj", sub:"slides", kind:"Presentation", icon:"⚡",
  title:"Electrical Engineering Presentation", org:"Slide deck", period:"Academic work",
  summary:"Led the end-to-end engineering of hardware security and automation systems, including 'SecureBox'—a microcontroller-free residential security unit using TTL digital logic gates and magnetic reed switches. Independently designed electronic circuit architecture, executed PCB/breadboard soldering, and integrated LDR sensor-driven automation for Smart Environmental Lighting.",
  highlights:["Prepared the full slide deck.","Structured technical content for an academic audience."],
  skills:["Presentation design","Technical communication"],
  slides: [
    {
      t: "Electrical Engineering", 
      b: [
        "Open the original deck through the viewer once attached"
      ],
      img: "assets/foto-ee1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Result", 
      b: [
        "Role as project leader"
      ],
      img: "assets/foto-ee2.jpg" // <-- Ganti dengan nama file foto slide 1
    }
  ]
}, // <-- Penutup objek proyek ini

/* ------------------------------- ARTS ------------------------------- */
{ id:"content", cat:"cre", kind:"Creative Content", icon:"📱",
  title:"Creative Content: #TeamGoogle Series", org:"Google Student Ambassador content", period:"2026",
  summary:"A social media series addressing the informatics paradox: the industry needs new talent, yet many IT graduates feel lost amid a widening skills gap.",
  highlights:["Framed the question “Where do we actually fit in?” for IT students.","Used an evidence-based narrative citing a 2025 journal from F1000Research.","Demonstrated an AI-assisted skills-mapping workflow that converts career anxiety into a clear roadmap."],
  skills:["Storytelling","Research","Content design","Canva"],
  slides: [
    {
      t: "Let’s Facing Informatics Paradox", 
      b: [
        "The tech industry needs new talent, yet graduates experience a skills gap"
      ],
      img: "assets/foto-paradox1.jpeg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Evidence", 
      b: [
        "A 2025 F1000Research journal on AI-assisted skills mapping and student confidence"
      ],
      img: "assets/foto-paradox2.jpeg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Outcome", 
      b: [
        "From career anxiety to a clear and directed roadmap"
      ],
      img: "assets/foto-paradox3.jpeg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"comic", cat:"cre", kind:"Digital Comic", icon:"💬",
  title:"Digital Comic: Pancasila and Human Rights", org:"Educational comic", period:"Academic work",
  summary:"An educational digital comic on applying Pancasila values and human rights in everyday life, narrated through a student character named Adit.",
  highlights:["Developed the narrative and panel structure around mutual respect and anti-bullying.","Designed the visual layout for social media format."],
  skills:["Storytelling","Visual design","Civic education"],
  slides: [
    {
      t: "“Halo, Saya Adit!”", 
      b: [
        "Introduction to a student character in a school setting"
      ],
      img: "assets/foto-adit1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Theme", 
      b: [
        "Mutual respect and the rejection of bullying"
      ],
      img: "assets/foto-adit2.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Format", 
      b: [
        "Four-part comic designed for social media"
      ],
      img: "assets/foto-adit3.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"design", cat:"cre", kind:"Design Archive", icon:"🖼️",
  title:"Design Archives", org:"Visual communication", period:"2022 – 2026",
  summary:"A visual archive of personal and academic designs: a college introduction story, a personal profile, a personal-mission layout, and a reflective “Path I Choose” spread inspired by Start with Why.",
  highlights:["Composed layouts in a scrapbook and collage aesthetic.","Combined personal reflection with structured typographic hierarchy."],
  skills:["Canva","Layout design","Visual storytelling"],
  slides: [
    {
      t: "College story", 
      b: [
        "A story-format introduction to university life"
      ],
      img: "assets/foto-college1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Personal profile and mission", 
      b: [
        "Profile layout and personal mission statement"
      ],
      img: "assets/foto-college2.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Path I Choose", 
      b: [
        "A reflective spread inspired by Start with Why"
      ],
      img: "assets/foto-college3.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"infographic", cat:"cre", kind:"Infographics", icon:"📊",
  title:"Infographics", org:"Educational visual communication", period:"2025",
  summary:"Three infographics: Pancasila values in Bogor’s struggle for independence, the Dream Book personal profile, and a food-crisis awareness series promoting urban farming.",
  highlights:["Traced Pancasila values through the events of Bojongkokosan, Gekbrong-Jambudipa, Maseng, and Palagan Kapten Muslihat.","Explained the food crisis and the role of urban farming through the memorable acronym K-R-I-S-I-S.","Produced a Dream Book to present personal aspirations."],
  skills:["Research","Data visualization","Canva"],
  slides: [
    {
      t: "Pancasila in Bogor’s Struggle", 
      b: [
        "Museum Perjuangan Bogor",
        "Bojongkokosan, Gekbrong-Jambudipa, Maseng, Palagan Kapten Muslihat",
        "Conclusion: Pancasila was already practiced before it was formalized"
      ],
      img: "assets/foto-pancasila1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Waspada Krisis Pangan", 
      b: [
        "What is a food crisis?",
        "Urban farming as an adaptive response",
        "Action points summarized as K-R-I-S-I-S"
      ],
      img: "assets/foto-pangan2.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Dream Book", 
      b: [
        "The face behind the star: a personal aspirations spread"
      ],
      img: "assets/foto-dreambook3.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"copy", cat:"cre", kind:"Copywriting", icon:"✍️",
  title:"Copywriting: R.I.S.E. Mangrove", org:"FOS DKI Jakarta", period:"Feb 2024",
  summary:"Complete communication set for “Restoration Through Implementation Sustainable and Environmental Mangrove,” held on 11 February 2024 at the Mangrove Ecotourism Area, PIK, North Jakarta.",
  highlights:["Open-registration broadcast with benefits and registration details.","Formal invitation letter to schools.","Teaser, logo-meaning, and “Get Closer with R.I.S.E.” social media captions."],
  skills:["Copywriting","Formal letter writing","Campaign storytelling"],
  slides: [
    {
      t: "Open registration", 
      b: [
        "Persuasive call to action for young people in Jakarta",
        "Registration: 4–10 February 2024"
      ],
      img: "assets/foto-reg1.jpg" // <-- Ganti dengan nama file foto slide 1
    },
    {
      t: "Formal invitation", 
      b: [
        "Official letter format for schools",
        "Event: Sunday, 11 February 2024"
      ],
      img: "assets/foto-reg2.jpg" // <-- Ganti dengan nama file foto slide 2
    },
    {
      t: "Social campaign", 
      b: [
        "Teaser, logo meaning, and Get Closer with R.I.S.E.",
        "Hashtags: #AgentOfChange, #RISEMangrove"
      ],
      img: "assets/foto-reg3.jpg" // <-- Ganti dengan nama file foto slide 3
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"book", cat:"cre", kind:"Authorship", icon:"📖",
  title:"Authorship", org:"Guepedia and Gramedia", period:"2021 · 2024",
  summary:"Author of the book “Should I Stay? Or Move?” (Guepedia and Gramedia, 2021) and Favorite Winner of the Sohib Komdigi article competition in 2024.",
  highlights:["Published as a book author in 2021.","Recognized as Favorite Winner of the Sohib Komdigi article competition (2024)."],
  skills:["Writing","Research","Storytelling"],
  slides: [
    {
      t: "Should I Stay? Or Move?", 
      b: [
        "Published by Guepedia and Gramedia, 2021"
      ],
      img: "assets/foto-book1.jpg" // <-- Ganti dengan nama file foto slide 1 (cover buku/publikasi)
    },
    {
      t: "Recognition", 
      b: [
        "Favorite Winner, Sohib Komdigi article competition, 2024"
      ],
      img: "assets/foto-award2.jpg" // <-- Ganti dengan nama file foto slide 2 (sertifikat/penghargaan)
    }
  ]
}, // <-- Penutup objek proyek ini
{ id:"choir", cat:"cre", kind:"Performance", icon:"🎶",
  title:"Choir", org:"Bali International Choir Festival", period:"2021",
  summary:"Gold medalist at the Bali International Choir Festival 2021.",
  highlights:["Performed as a choir member in an international festival.","Awarded the gold medal."],
  skills:["Vocal performance","Teamwork"],
  slides: [
    {
      t: "Gold Medal",
      b: ["Bali International Choir Festival 2021"],
      img: "assets/foto-choir1.jpg" // <-- Ganti dengan nama file foto slide 1
    }
  ]
},
{ id:"tilawah", cat:"cre", kind:"Qur’anic Recitation", icon:"🕌",
  title:"Tilawah", org:"MHQ competitions", period:"2020",
  summary:"Third Place in the provincial MHQ and Second Place in the municipal MHQ in 2020.",
  highlights:["Third Place, provincial level.","Second Place, municipal level."],
  skills:["Recitation","Discipline"],
  slides: [
    {
      t: "MHQ 2020",
      b: ["Third Place: province", "Second Place: city"],
      img: "assets/foto-tilawah1.jpg" // <-- Ganti dengan nama file foto slide 1
    }   
  ]},

/* ---------------------------- LEADERSHIP ---------------------------- */
{ id:"speaking", cat:"lead", kind:"Public Speaking", icon:"🎙️",
  title:"Public Speaking", org:"National and regional forums", period:"2024 – 2025",
  summary:"Experienced public speaker and moderator across high-profile national and regional forums. Proven capability in engaging large-scale audiences of over 500 participants, directing flow as a Master of Ceremony, and facilitating impactful panel discussions with clarity and confidence.",
  highlights:[
    "Moderator of a national leadership forum with 500+ OSIS chairpersons in Jakarta, featuring Anies Baswedan (January 2025).",
    "Moderator of the Governor and Vice Governor Candidate Session with 1,000+ participants, featuring Kun Wardana (PESTAVIA, November 2024).",
    "Master of Ceremony and speaker at multiple organizational and youth events.",
    "Facilitator of educational and community-based discussions."],
  skills:["Moderation","Master of Ceremony","High Communication","Public Speaking"],
  slides:[
    {t:"National leadership forum", b:["500+ OSIS chairpersons in Jakarta","Featuring Anies Baswedan"]},
    {t:"Governor–Vice Governor candidate session", b:["1,000+ participants","Featuring Kun Wardana"]},
    {t:"Other roles", b:["Master of Ceremony and speaker","Facilitator of community-based discussions"]}
  ]},
{ id:"leadership", cat:"lead", kind:"Leadership", icon:"🧭",
  title:"Leadership and Teamwork", org:"Cross-functional, large-scale projects", period:"2022 – 2026",
  summary:"Directed and collaborated within cross-functional teams across multiple large-scale student initiatives from 2022 to 2026. Spearheaded project operations, coordinated stakeholder engagement, and streamlined team workflows to successfully deliver programs and strategic goals",
  highlights:[
    "Project Officer, IPB University Gathering: led 55 committee members.",
    "Vice Project Officer, Student Youth Project: 700 participants (600 offline, 100 online).",
    "Project Lead, Community Service Program: led 38 volunteers.",
    "Vice Project Officer, BEM SV IPB Demissioner Program: 300 participants.",
    "Head of Division roles in FOS DKI Jakarta programs (FOSGAT, PESTAVIA, Student Youth Project) with 1,000–1,500+ participants."],
  skills:["Project management","Coordination","Team productivity","Program execution"],
  slides:[
    {t:"Scale of responsibility", b:["55 committee members","38 volunteers","700, 300, and 1,000–1,500+ participants"]},
    {t:"Outcomes", b:["Smooth execution with minimal miscommunication","Improved team productivity and coordination","Program targets achieved effectively"]}
  ]}
];
