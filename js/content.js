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
},
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
      img: "assets/1tek.jpeg"
    },
    {
      t: "Responsibilities", 
      b: [
        "Academic and institutional communications",
        "Official publications and announcements",
        "Event documentation"
      ],
      img: "assets/2tek.jpeg"
    },
    {
      t: "Project Officer, IPB Gathering", 
      b: [
        "January – March 2026",
        "55 committee members led"
      ],
      img: "assets/3tek.png"
    },
    {
      t: "Learning outcomes", 
      b: [
        "Soft skills: team work and time management",
        "Hard skills: WordPress, Excel, Canva, Notion"
      ],
      img: "assets/4tek.png"
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
      img: "assets/foto-lead1.jpeg"
    },
    {
      t: "Program contributions", 
      b: ["Vice Chair, Organizing Committee, Cabinet Mahakarsa Demissioner 2025", "Public Relations Officer, Cabinet Meeting III 2025"],
      img: "assets/foto-lead2.jpeg"
    },
    {
      t: "Competencies gained", 
      b: ["Soft skills: team work, time management, collaboration, leadership", "Hard skills: Excel, Canva, Notion"],
      img: "assets/foto-lead3.jpeg"
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
      img: "assets/foto-org1.jpeg"
    },
    {
      t: "Role", 
      b: [
        "Creative Media Staff and copywriter",
        "10+ social media copy contents created"
      ],
      img: "assets/foto-org2.jpeg"
    },
    {
      t: "Competencies", 
      b: [
        "Soft skills: team work, writing, humanity",
        "Hard skills: Microsoft Excel"
      ],
      img: "assets/foto-org3.jpeg"
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
      img: "assets/foto-comm1.jpeg"
    },
    {
      t: "Inclusive education", 
      b: [
        "Youth",
        "Persons with disabilities",
        "Individuals with mental health conditions",
        "Senior citizens"
      ],
      img: "assets/foto-comm2.jpeg"
    },
    {
      t: "Partnerships", 
      b: [
        "Maintained relationships with social partners",
        "Expanded professional networks"
      ],
      img: "assets/foto-comm3.jpeg"
    }
  ]
},
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
      img: "assets/foto-aoc1.jpeg"
    },
    {
      t: "Public Relations", 
      b: [
        "Internal communications coordination",
        "Collaboration with the Head of Public Relations"
      ],
      img: "assets/foto-aoc2.jpeg"
    },
    {
      t: "Event leadership", 
      b: [
        "Forum OSIS Gathering DKI Jakarta: 300 participants",
        "PESTAVIA: 1500+ participants",
        "Student Youth Project: 700 participants"
      ],
      img: "assets/foto-aoc3.jpeg"
    },
    {
      t: "Competencies", 
      b: [
        "Soft skills: team work, time management, leadership",
        "Hard skills: Excel, Canva, WordPress"
      ],
      img: "assets/foto-aoc4.jpeg"
    }
  ]
},
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
      img: "assets/foto-scope1.jpeg"
    },
    {
      t: "Outputs", 
      b: [
        "Formal documentation and official invitations",
        "Leadership succession records"
      ],
      img: "assets/foto-scope2.jpeg"
    },
    {
      t: "Competencies", 
      b: [
        "Soft skills: team work, time management, leadership",
        "Hard skills: Excel, Notion, WordPress"
      ],
      img: "assets/foto-scope3.jpeg"
    }
  ]
},

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
      img: "assets/foto-senada1.jpeg"
    },
    {
      t: "Solution", 
      b: [
        "A social-based platform for inclusive concerts",
        "Administrator dashboard and user management"
      ],
      img: "assets/foto-senada2.jpeg"
    },
    {
      t: "Role", 
      b: [
        "Full-stack developer"
      ],
      img: "assets/foto-senada3.png"
    }
  ]
},
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
      img: "assets/foto-concept.jpg"
    },
    {
      t: "Features", 
      b: [
        "Create, read, update, delete posts",
        "Multi-user interaction"
      ],
      img: "assets/foto-features.jpg"
    },
    {
      t: "Role", 
      b: [
        "Developer, end-to-end"
      ],
      img: "assets/foto-role.jpg"
    }
  ]
},
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
      img: "assets/foto-competition1.jpeg"
    },
    {
      t: "Result", 
      b: [
        "First Place"
      ],
      img: "assets/foto-competition2.jpg"
    }
  ]
},
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
      img: "assets/foto-topology1.jpg"
    },
    {
      t: "Techniques", 
      b: [
        "IPv4 and IPv6",
        "VLSM",
        "Centralized routing",
        "Device access security"
      ],
      img: "assets/foto-topology2.jpg"
    },
    {
      t: "Context", 
      b: [
        "Cisco CCNA: Networking and Introduction to Network (2025)"
      ],
      img: "assets/foto-topology3.jpg"
    }
  ]
},
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
      img: "assets/foto-problem1.jpg"
    },
    {
      t: "Features", 
      b: [
        "Daily mood tracker",
        "Music for emotional regulation",
        "Confidential story space"
      ],
      img: "assets/foto-problem2.jpg"
    },
    {
      t: "Recognition", 
      b: [
        "National Finalist, Markoding 2021"
      ],
      img: "assets/foto-problem3.jpg"
    }
  ]
},
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
      img: "assets/foto-ee1.jpg"
    },
    {
      t: "Result", 
      b: [
        "Role as project leader"
      ],
      img: "assets/foto-ee2.jpg"
    }
  ]
},

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
      img: "assets/foto-paradox1.jpeg"
    },
    {
      t: "Evidence", 
      b: [
        "A 2025 F1000Research journal on AI-assisted skills mapping and student confidence"
      ],
      img: "assets/foto-paradox2.jpeg"
    },
    {
      t: "Outcome", 
      b: [
        "From career anxiety to a clear and directed roadmap"
      ],
      img: "assets/foto-paradox3.jpeg"
    }
  ]
},
{ id:"copy", cat:"cre", kind:"Copywriting", icon:"✍️",
  title:"Copywriting", org:"FOS DKI Jakarta", period:"2024-2025",
  summary:"Crafting a comprehensive communication set and public messaging framework for all official events under FOS DKI Jakarta. Directed campaign storytelling, formal correspondence, and promotional narratives.",
  highlights:["Open-registration broadcast with benefits and registration details.","Formal invitation letter to schools.","Teaser, logo-meaning, and “Get Closer with event” social media captions."],
  skills:["Copywriting","Formal letter writing","Campaign storytelling"],
  slides: [
    {
      t: "some copywriting examples", 
      b: [
        "Persuasive call to action for young people",
      ],
      img: "assets/copywriting.png"
    }
  ]
},
{ id:"book", cat:"cre", kind:"Authorship", icon:"📖",
  title:"Authorship", org:"Guepedia and Gramedia", period:"2021 · 2024",
  summary:"Author of the book “Should I Stay? Or Move?” (Guepedia and Gramedia, 2021) and Favorite Winner of the Sohib Komdigi article competition in 2024 and first place motlet competition.",
  highlights:["Published as a book author in 2021.","Recognized as Favorite Winner of the Sohib Komdigi article competition (2024)."],
  skills:["Writing","Research","Storytelling"],
  slides: [
    {
      t: "Should I Stay? Or Move?", 
      b: [
        "Published by Guepedia and Gramedia, 2021"
      ],
      img: "assets/foto-book1.jpeg"
    },
    {
      t: "Recognition", 
      b: [
        "Favorite Winner, Sohib Komdigi article competition, 2024"
      ],
      img: "assets/foto-award2.jpg"
    },
    {
      t: "Recognition", 
      b: [
        "1st Place, Motlet competition, National level"
      ],
      img: "assets/foto-award3.jpg"
    }
  ]
},
{
  id: "mendengar-jiwa",
  cat: "cre",
  kind: "Public Speaking",
  icon: "🎤",
  title: "Public Speaking & Mental Health Advocate",
  org: "Yayasan BUMN x Menjadi Manusia",
  period: "2024",
  summary: "Selected talent lineup at Mendengar Jiwa (World Mental Health Day), delivering a speech on youth mental health and parental expectations in front of 1,000+ attendees and public figures.",
  highlights: [
    "Delivered 'Speech Keresahan' about expectations & youth mental health.",
    "Featured talent alongside Erick Thohir, Prilly Latuconsina, and Ariel Tatum.",
    "Received heart-shaped appreciation plaque from Yayasan BUMN."
  ],
  skills: ["Public Speaking", "Storytelling", "Advocacy", "Mental Health"],
  slides: [
    {
      t: "Speech Keresahan",
      b: [
        "Delivering speech on stage for Mendengar Jiwa event"
      ],
      img: "assets/foto-speech1.jpg"
    },
    {
      t: "Stage Recognition",
      b: [
        "Honored with heart-shaped plaque from Yayasan BUMN"
      ],
      img: "assets/foto-speech2.jpg"
    },
    {
      t: "Mendengar Jiwa Lineup",
      b: [
        "On stage with Erick Thohir and event speakers"
      ],
      img: "assets/foto-speech3.jpg"
    }
  ]
},
{ id:"speaking", cat:"lead", kind:"Public Speaking & Moderating", icon:"🎙️",
  title:"High-Profile Moderating & Public Speaking", org:"FOS DKI Jakarta & BELFOS 4.0", period:"2024 – 2025",
  summary:"Served as a moderator for high-profile leadership discussions featuring prominent figures such as Anies Baswedan and Governor-Vice Governor DKI Jakarta Candidates (PESTAVIA 2024).",
  highlights:[
    "Moderated a leadership discussion featuring Anies Baswedan (BELFOS 4.0) with 500+ student council leaders, translating complex governance topics into relatable insights.",
    "Served as Moderator for the Governor-Vice Governor DKI Jakarta Candidate Session (Paslon 2) during PESTAVIA 2024 with structured dialogue.",
    "Collaborated with PR teams to secure media partnerships and coverage across national outlets (ANTARA, Tempo, CNN, MetroTV, TVOne, TVRI)."
  ],
  skills:["Public Speaking","Moderation","Leadership Discussion","Media Relations"],
  slides: [
    {
      t: "BELFOS 4.0 with Anies Baswedan",
      b: [
        "Moderated high-profile discussion for 500+ student leaders",
        "Translated complex leadership and globalization topics into engaging dialogues"
      ],
      img: "assets/foto-speaking1.jpg"
    },
    {
      t: "Governor Candidate Session (PESTAVIA)",
      b: [
        "Moderated Governor-Vice Governor DKI Jakarta Candidate Session (Paslon 2)",
        "Structured dialogue and audience engagement for 1,000+ participants"
      ],
      img: "assets/foto-speaking2.jpg"
    },
    {
      t: "FOS Gathering 2024",
      b: [
        "Moderated public figure for 300+ student leaders",
      ],
      img: "assets/foto-speaking3.jpg"
    },
    {
      t: "FOS Goes to School 2024",
      b: [
        "Presented leadership insights to a hundred students across Jakarta",
      ],
      img: "assets/foto-speaking4.jpg"
    }
  ]
},
{ id:"leadership", cat:"lead", kind:"Leadership & Social Impact", icon:"⭐",
  title:"Leadership Journey & Community Impact", org:"FOS DKI Jakarta & Social Initiatives", period:"2021 – 2026",
  summary:"Extensive experience managing large-scale youth organizations, leading multi-member committees, and driving impactful social innovation and volunteer campaigns.",
  highlights:[
    "Served as Deputy Chair (Vice Project Officer) for the Student Youth Project 2024, driving 700 students across technology education and environmental health initiatives.",
    "Contributed to Amgala Foundation delivering social services and DIY science games for 50+ orphaned children.",
    "Assisted basic health screenings and public health awareness for 200+ residents in Cikini with CIMSA FK UI."
  ],
  skills:["Leadership","Project Management","Community Development","Social Innovation"],
  slides: [
    {
      t: "Student Youth Project 2024",
      b: [
        "Deputy Chair overseeing 700 students across DKI Jakarta",
        "Led SDG-focused tech education bootcamps and pollution-prevention campaigns"
      ],
      img: "assets/foto-leadership1.jpg"
    },
    {
      t: "Tekom",
      b: [
        "Project Officer for TEK Gathering 2025",
      ],
      img: "assets/foto-leadership2.jpg"
    },
    {
      t: "NYP",
      b: [
        "Project Officer for Inclusive Education 2024",
      ],
      img: "assets/foto-leadership3.jpg"
    },
    {
      t: "Amgala Foundation",
      b: [
        "Social Projects: DIY science games for 50+ orphaned children",
      ],
      img: "assets/foto-leadership4.jpg"
    }
  ]
}
];