import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const languageOptions = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
];

const languageFlags = [
  "/Drapeau/drapeau kabyle.svg",
  "/Drapeau/drapeau arabite sauite.png",
  "/Drapeau/drapeau france.png",
  "/Drapeau/drapeau uk.png",
];

const profile = {
  fullName: "Tinhinane Karabadji",
  birthDate: "12 février 2003",
  phone: "+33746493470",
  whatsapp: "https://wa.me/33746493470",
  email: "karabadjitinhinane@gmail.com",
  address: "Résidence du Thil, Salouel, Amiens, France",
  cvPaths: {
    fr: "/cv-francais.pdf",
    en: "/cv-anglais.pdf",
  },
  avatar: "/tinhinane-avatar.svg",
  portraitImage: "/image de tinhinane.png",
  introImage: "/image principale .png",
  chatbotImage: "/tinhinae chatbot image.png",
};

const socials = [
  {
    type: "instagram",
    label: "Instagram",
    value: "tinhinane.karabadji",
    href: "https://www.instagram.com/tinhinane.karabadji?igsh=MXV6bDhlM2N3a3dzeQ==",
  },
  {
    type: "facebook",
    label: "Facebook",
    value: "Tinhinane Karabadji",
    href: "https://www.facebook.com/tinhinane.kr.101805",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "Tinhinane Karabadji",
    href: "https://www.linkedin.com/in/tinhinane-karabadji-2584bb30a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: profile.phone,
    href: profile.whatsapp,
  },
  {
    type: "mail",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
];

const content = {
  fr: {
    nav: ["Profil", "Expériences", "Compétences", "Formations", "Contact"],
    modeDark: "Nuit",
    modeLight: "Clair",
    heroEyebrow: "Étudiante en Licence 3 Physique-Chimie",
    headline: "Physique-Chimie | Génie des procédés | Analyse qualité",
    intro:
      "Étudiante à l'Université de Picardie Jules Verne, avec une formation solide en génie des procédés, génie pharmaceutique. Je m'intéresse aux opérations unitaires, au travail expérimental en laboratoire et à la modélisation des procédés, avec l'objectif d'intégrer un Master en analyse et contrôle qualité.",
    contact: "Me contacter",
    viewCv: "Consulter mon CV",
    downloadCv: "Télécharger mon CV",
    cvUnavailable: "La version arabe du CV n'est pas disponible en ce moment.",
    metrics: [
      ["5", "années de parcours universitaire"],
      ["5", "expériences & formations"],
      ["4", "langues"],
      ["10+", "compétences clés"],
      ["0", "visites du portfolio"],
    ],
    experiencesTitle: "Expériences sélectionnées",
    experiencesSubtitle: "Parcours scientifique, laboratoire et formations",
    skillsTitle: "Compétences",
    skillsSubtitle: "Ce qu'elle maîtrise pour travailler avec rigueur en laboratoire et en qualité",
    educationTitle: "Formation & trajectoire",
    languagesTitle: "Langues",
    contactTitle: "Écrivez-lui un message",
    contactText: "Remplis tes informations et prépare un email directement.",
    networks: "Réseaux et contact",
    form: {
      last: "Nom",
      first: "Prénom",
      message: "Message",
      lastPlaceholder: "Votre nom",
      firstPlaceholder: "Votre prénom",
      messagePlaceholder: "Écris ton message, ton besoin ou ton opportunité.",
      submit: "Envoyer mon message",
    },
    chatbot: {
      title: "TK Chatbot",
      role: "Votre assistant",
      welcome:
        "Bonjour ✨ Je suis l'assistant de Tinhinane. Je peux répondre sur son profil, ses formations, ses expériences, ses compétences, ses langues et ses contacts.",
      placeholder: "Ex: Quel est son stage ATG ?",
      send: "Envoyer",
      typing: "TinhinaneBot écrit...",
      suggestions: ["Présente-toi", "Ses formations", "Ses compétences", "Comment la contacter ?"],
      fallback:
        "Je peux répondre sur Tinhinane, ses études, ses stages, ses compétences, ses langues, son CV et ses contacts.",
    },
  },
  en: {
    nav: ["Profile", "Experiences", "Skills", "Education", "Contact"],
    modeDark: "Dark",
    modeLight: "Light",
    heroEyebrow: "Bachelor Year 3 Physics-Chemistry Student",
    headline: "Physics-Chemistry | Process Engineering | Quality Analysis",
    intro:
      "Student at Université de Picardie Jules Verne with a solid background in process engineering. She focuses on unit operations, laboratory experimentation, and process simulation, with the goal of joining a Master's program in analysis and quality control.",
    contact: "Contact me",
    viewCv: "View CV",
    downloadCv: "Download CV",
    cvUnavailable: "The Arabic CV version is not available at the moment.",
    metrics: [
      ["5", "years of academic path"],
      ["5", "experiences & trainings"],
      ["4", "languages"],
      ["10+", "key skills"],
      ["0", "portfolio visits"],
    ],
    experiencesTitle: "Selected experiences",
    experiencesSubtitle: "Scientific path, laboratory work and training",
    skillsTitle: "Skills",
    skillsSubtitle: "What she masters to work with rigor in laboratory and quality contexts",
    educationTitle: "Education & journey",
    languagesTitle: "Languages",
    contactTitle: "Write her a message",
    contactText: "Fill in your details and prepare an email directly.",
    networks: "Networks & contact",
    form: {
      last: "Last name",
      first: "First name",
      message: "Message",
      lastPlaceholder: "Your last name",
      firstPlaceholder: "Your first name",
      messagePlaceholder: "Write your message, need, or opportunity.",
      submit: "Send my message",
    },
    chatbot: {
      title: "TK Chatbot",
      role: "Your assistant",
      welcome:
        "Hello ✨ I am Tinhinane's assistant. I can answer about her profile, education, experiences, skills, languages, and contact links.",
      placeholder: "Ex: What is her TGA internship?",
      send: "Send",
      typing: "TinhinaneBot is typing...",
      suggestions: ["Introduce yourself", "Her education", "Her skills", "How to contact her?"],
      fallback:
        "I can answer about Tinhinane, her studies, internships, skills, languages, CV, and contact links.",
    },
  },
  ar: {
    nav: ["الملف", "الخبرات", "المهارات", "التكوين", "تواصل"],
    modeDark: "ليلي",
    modeLight: "فاتح",
    heroEyebrow: "طالبة ليسانس 3 فيزياء-كيمياء",
    headline: "فيزياء-كيمياء | هندسة العمليات | مراقبة الجودة",
    intro:
      "طالبة في جامعة بيكاردي جول فيرن، مع تكوين في هندسة العمليات. تهتم بالعمليات الوحدوية، والعمل التجريبي في المخبر، ونمذجة العمليات، وهدفها الالتحاق بماستر في التحليل ومراقبة الجودة.",
    contact: "تواصل معها",
    viewCv: "معاينة السيرة الذاتية",
    downloadCv: "تحميل السيرة الذاتية",
    cvUnavailable: "نسخة السيرة الذاتية بالعربية غير متوفرة حالياً.",
    metrics: [
      ["5", "سنوات مسار جامعي"],
      ["5", "خبرات وتكوينات"],
      ["4", "لغات"],
      ["10+", "مهارات أساسية"],
      ["0", "زيارات البورتفوليو"],
    ],
    experiencesTitle: "خبرات مختارة",
    experiencesSubtitle: "مسار علمي، عمل مخبري وتكوينات",
    skillsTitle: "المهارات",
    skillsSubtitle: "مهاراتها للعمل بدقة في المخبر ومجال الجودة",
    educationTitle: "التكوين والمسار",
    languagesTitle: "اللغات",
    contactTitle: "اكتب لها رسالة",
    contactText: "املأ معلوماتك وجهّز رسالة بريد إلكتروني مباشرة.",
    networks: "الشبكات والتواصل",
    form: {
      last: "اللقب",
      first: "الاسم",
      message: "الرسالة",
      lastPlaceholder: "لقبك",
      firstPlaceholder: "اسمك",
      messagePlaceholder: "اكتب رسالتك أو فرصتك.",
      submit: "إرسال رسالتي",
    },
    chatbot: {
      title: "TK Chatbot",
      role: "مساعدك",
      welcome:
        "مرحبا ✨ أنا مساعد تينهانين. أستطيع الإجابة عن ملفها، تكوينها، خبراتها، مهاراتها، لغاتها ووسائل التواصل.",
      placeholder: "مثال: ما هو تربص ATG؟",
      send: "إرسال",
      typing: "TinhinaneBot يكتب...",
      suggestions: ["عرّفني بها", "تكوينها", "مهاراتها", "كيف أتواصل معها؟"],
      fallback:
        "أستطيع الإجابة عن تينهانين، دراستها، تربصاتها، مهاراتها، لغاتها، سيرتها الذاتية ووسائل التواصل.",
    },
  },
};

const education = {
  fr: [
    ["2025 - 2026", "Licence 3 Physique-Chimie (en cours)", "Université de Picardie Jules Verne, Amiens, France"],
    ["2024 - 2025", "Master 1 Génie Pharmaceutique", "Université Houari Boumediene (USTHB), Alger, Algérie"],
    ["2022 - 2024", "Licence 2 & 3 Génie des Procédés", "Université des Sciences et de la Technologie M’Hamed Bouguerra, Boumerdes, Algérie"],
    ["2021 - 2022", "Licence 1 Sciences et Technologies", "Université des Sciences et de la Technologie M’Hamed Bouguerra, Boumerdes, Algérie"],
    ["2020 - 2021", "Baccalauréat Sciences Expérimentales", "Lycée Martyr Houssein Ait Ahmed, Boumerdes, Algérie"],
  ],
  en: [
    ["2025 - 2026", "Bachelor Year 3 Physics-Chemistry (ongoing)", "Université de Picardie Jules Verne, Amiens, France"],
    ["2024 - 2025", "Master 1 Pharmaceutical Engineering", "Université Houari Boumediene (USTHB), Algiers, Algeria"],
    ["2022 - 2024", "Bachelor Year 2 & 3 Process Engineering", "Université des Sciences et de la Technologie M’Hamed Bouguerra, Boumerdes, Algeria"],
    ["2021 - 2022", "Bachelor Year 1 Sciences and Technologies", "Université des Sciences et de la Technologie M’Hamed Bouguerra, Boumerdes, Algeria"],
    ["2020 - 2021", "Experimental Sciences Baccalaureate", "Martyr Houssein Ait Ahmed High School, Boumerdes, Algeria"],
  ],
  ar: [
    ["2025 - 2026", "ليسانس 3 فيزياء-كيمياء (قيد الدراسة)", "جامعة بيكاردي جول فيرن، أميان، فرنسا"],
    ["2024 - 2025", "ماستر 1 هندسة صيدلانية", "جامعة هواري بومدين، الجزائر"],
    ["2022 - 2024", "ليسانس 2 و3 هندسة العمليات", "جامعة العلوم والتكنولوجيا محمد بوقرة، بومرداس، الجزائر"],
    ["2021 - 2022", "ليسانس 1 علوم وتكنولوجيا", "جامعة العلوم والتكنولوجيا محمد بوقرة، بومرداس، الجزائر"],
    ["2020 - 2021", "بكالوريا علوم تجريبية", "ثانوية الشهيد حسين آيت أحمد، بومرداس، الجزائر"],
  ],
};

const experiences = {
  fr: [
    ["Mars - Avril 2026", "Stagiaire ATG - Manuel d'utilisation", "UPJV, Amiens", "Analyses thermogravimétriques, interprétation des résultats et rédaction d'un manuel d'utilisation du four ATG pour les étudiants.", ["ATG", "Analyse thermique", "Rédaction technique"]],
    ["Mars 2024", "Stage de fin de licence", "Sonatrach - Institut Algérien du Pétrole (IAP)", "Découverte du milieu pétrolier, observation des procédés et compréhension des exigences techniques industrielles.", ["Procédés", "Pétrole", "Observation terrain"]],
    ["Février 2023", "Stage en laboratoire pharmaceutique", "Pharmacie AMROUCHE, Boumerdes", "Immersion en laboratoire pharmaceutique avec respect des protocoles, sécurité et rigueur expérimentale.", ["Qualité", "Sécurité", "Laboratoire"]],
    ["Avril 2024", "Formation Bureautique", "École Informica, Boumerdes", "Renforcement de la maîtrise des outils Word, Excel et PowerPoint pour les travaux académiques.", ["Word", "Excel", "PowerPoint"]],
    ["Novembre 2025", "Formation PSC", "Ailly-sur-Somme, Amiens", "Formation Premiers Secours Citoyen et gestes essentiels de prévention et d'urgence.", ["PSC", "Premiers secours", "Prévention"]],
  ],
  en: [
    ["March - April 2026", "TGA intern - User manual", "UPJV, Amiens", "Thermogravimetric analyses, result interpretation, and writing a TGA furnace user manual for students.", ["TGA", "Thermal analysis", "Technical writing"]],
    ["March 2024", "Final bachelor internship", "Sonatrach - Algerian Petroleum Institute (IAP)", "Exposure to petroleum industry practices, process observation, and industrial technical requirements.", ["Processes", "Petroleum", "Field observation"]],
    ["February 2023", "Pharmaceutical laboratory internship", "Pharmacie AMROUCHE, Boumerdes", "Pharmaceutical lab immersion with protocol compliance, safety, and experimental rigor.", ["Quality", "Safety", "Laboratory"]],
    ["April 2024", "Office tools training", "École Informica, Boumerdes", "Improved mastery of Word, Excel, and PowerPoint for academic work.", ["Word", "Excel", "PowerPoint"]],
    ["November 2025", "First Aid training", "Ailly-sur-Somme, Amiens", "Civic First Aid training with essential prevention and emergency-response skills.", ["First aid", "Prevention", "Emergency"]],
  ],
  ar: [
    ["مارس - أبريل 2026", "تربص ATG - دليل استعمال", "UPJV، أميان", "إنجاز تحاليل حرارية وزنية، تفسير النتائج، وكتابة دليل استعمال فرن ATG للطلبة.", ["ATG", "تحليل حراري", "كتابة تقنية"]],
    ["مارس 2024", "تربص نهاية الليسانس", "سوناطراك - معهد البترول الجزائري", "اكتشاف الوسط البترولي وملاحظة العمليات وفهم المتطلبات التقنية الصناعية.", ["عمليات", "بترول", "ملاحظة ميدانية"]],
    ["فبراير 2023", "تربص في مخبر صيدلاني", "صيدلية AMROUCHE، بومرداس", "تجربة مخبرية صيدلانية مع احترام البروتوكولات والسلامة والدقة.", ["جودة", "سلامة", "مخبر"]],
    ["أبريل 2024", "تكوين مكتبي", "مدرسة Informica، بومرداس", "تعزيز استعمال Word وExcel وPowerPoint في الأعمال الأكاديمية.", ["Word", "Excel", "PowerPoint"]],
    ["نوفمبر 2025", "تكوين الإسعافات الأولية PSC", "Ailly-sur-Somme، أميان", "تعلم أساسيات الوقاية والتصرف في الحالات الاستعجالية.", ["إسعافات", "وقاية", "طوارئ"]],
  ],
};

const skills = {
  fr: [
    ["Procédés & Qualité", ["Opérations unitaires", "Optimisation des procédés", "Analyse et contrôle qualité", "Normes de sécurité"]],
    ["Laboratoire", ["Travail expérimental", "Analyse thermogravimétrique", "Interprétation des résultats", "Protocoles de laboratoire"]],
    ["Modélisation", ["HYSYS", "MATLAB", "ASPEN", "Simulation des procédés"]],
    ["Outils bureautique", ["Word", "Excel", "PowerPoint", "LaTeX", "Reporting scientifique"]],
    ["Création numérique & Design", ["Adobe Photoshop", "Adobe Illustrator", "Montage vidéo", "Design graphique", "Création de supports visuels", "Mise en page professionnelle"]],
    ["Soft Skills", ["Esprit d’équipe", "Capacité d’adaptation", "Rigueur", "Organisation"]],
  ],
  en: [
    ["Processes & Quality", ["Unit operations", "Process optimization", "Analysis and quality control", "Safety standards"]],
    ["Laboratory", ["Experimental work", "Thermogravimetric analysis", "Result interpretation", "Lab protocols"]],
    ["Modeling", ["HYSYS", "MATLAB", "ASPEN", "Process simulation"]],
    ["Office tools", ["Word", "Excel", "PowerPoint", "LaTeX", "Scientific reporting"]],
    ["Digital creation & Design", ["Adobe Photoshop", "Adobe Illustrator", "Video editing", "Graphic design", "Visual material creation", "Professional layout"]],
    ["Soft Skills", ["Teamwork", "Adaptability", "Rigor", "Organization"]],
  ],
  ar: [
    ["العمليات والجودة", ["العمليات الوحدوية", "تحسين العمليات", "التحليل ومراقبة الجودة", "معايير السلامة"]],
    ["المخبر", ["العمل التجريبي", "التحليل الحراري الوزني", "تفسير النتائج", "بروتوكولات المخبر"]],
    ["النمذجة", ["HYSYS", "MATLAB", "ASPEN", "محاكاة العمليات"]],
    ["أدوات مكتبية", ["Word", "Excel", "PowerPoint", "LaTeX", "تقارير علمية"]],
    ["الإبداع الرقمي والتصميم", ["Adobe Photoshop", "Adobe Illustrator", "مونتاج الفيديو", "تصميم غرافيكي", "إنشاء دعائم بصرية", "تنسيق احترافي"]],
    ["المهارات الشخصية", ["روح الفريق", "التكيف", "الدقة", "التنظيم"]],
  ],
};

const languages = {
  fr: ["Kabyle : langue maternelle", "Arabe : courant", "Français : intermédiaire avancé", "Anglais : intermédiaire"],
  en: ["Kabyle: native language", "Arabic: fluent", "French: upper-intermediate", "English: intermediate"],
  ar: ["القبائلية: اللغة الأم", "العربية: متقدم", "الفرنسية: متوسط متقدم", "الإنجليزية: متوسط"],
};

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\u0600-\u06ff\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const hasWord = (normalizedQuestion, ...words) => {
  const tokens = normalizedQuestion.split(" ");
  return words.some((word) => tokens.includes(normalize(word)));
};

const getPortfolioStats = (lang) => ({
  academicYears: "5",
  experiencesAndTrainings: String(experiences[lang].length),
  languages: String(languages[lang].length),
  skills: "10+",
});

const VISITOR_COUNTER_ENDPOINT = "https://api.countapi.xyz/hit/tinhinane-karabadji/portfolio-visitors";
const LOCAL_VISITOR_COUNTER_KEY = "tk-portfolio-visitors-local";

const incrementLocalVisitorCounter = () => {
  try {
    const stored = Number(localStorage.getItem(LOCAL_VISITOR_COUNTER_KEY));
    const current = Number.isFinite(stored) && stored > 0 ? stored : 0;
    const next = current + 1;
    localStorage.setItem(LOCAL_VISITOR_COUNTER_KEY, String(next));
    return next;
  } catch (_error) {
    return 1;
  }
};

const incrementVisitorCounter = async () => {
  try {
    const response = await fetch(VISITOR_COUNTER_ENDPOINT, { method: "GET", cache: "no-store" });
    if (!response.ok) throw new Error("Counter request failed");
    const data = await response.json();
    const value = Number(data?.value);
    if (!Number.isFinite(value)) throw new Error("Invalid counter value");
    return value;
  } catch (_error) {
    return incrementLocalVisitorCounter();
  }
};

const formatVisitorCount = (count, lang) => {
  if (!Number.isFinite(count)) return "...";
  const locale = lang === "ar" ? "ar-EG" : lang === "en" ? "en-US" : "fr-FR";
  return new Intl.NumberFormat(locale).format(count);
};

const formatContact = (item) => `${item.label}: ${item.value}\n${item.href}`;

const getContactList = () => socials.map(formatContact).join("\n\n");

const getSkillGroupAnswer = (question, lang) => {
  const groups = skills[lang];
  const group = groups.find(([title, items]) => {
    const titleWords = normalize(title).split(" ").filter((word) => word.length > 2);
    const titleMatches = titleWords.length > 0 && titleWords.every((word) => question.includes(word));
    const itemMatches = items.some((item) => {
      const normalizedItem = normalize(item);
      return normalizedItem.length > 2 && question.includes(normalizedItem);
    });
    return titleMatches || itemMatches;
  });
  if (!group) return null;
  const [title, items] = group;
  return `${title}\n${items.map((item) => `- ${item}`).join("\n")}`;
};

const getCvAnswer = (lang) => {
  const intro = {
    fr: "Voici les deux versions disponibles du CV de Tinhinane :",
    en: "Here are the two available CV versions for Tinhinane:",
    ar: "هذه نسختا السيرة الذاتية المتاحتان لتينهانين:",
  }[lang];

  return {
    text: intro,
    actions: [
      { label: "CV français", href: profile.cvPaths.fr },
      { label: "CV anglais", href: profile.cvPaths.en },
    ],
  };
};

const getDirectCvAnswer = (lang, version) => {
  if (version === "ar") {
    return content[lang].cvUnavailable;
  }

  const isFrench = version === "fr";
  const label = isFrench ? "CV français" : "CV anglais";
  const text = {
    fr: isFrench ? "Voici le CV français de Tinhinane :" : "Voici le CV anglais de Tinhinane :",
    en: isFrench ? "Here is Tinhinane's French CV:" : "Here is Tinhinane's English CV:",
    ar: isFrench ? "هذه السيرة الذاتية الفرنسية لتينهانين:" : "هذه السيرة الذاتية الإنجليزية لتينهانين:",
  }[lang];

  return {
    text,
    actions: [{ label, href: profile.cvPaths[version] }],
  };
};

const getRequestedCvVersion = (question) => {
  if (question.includes("arab") || question.includes("arabe") || question.includes("عرب") || hasWord(question, "ar")) return "ar";
  if (question.includes("anglais") || question.includes("english") || question.includes("انجليز") || hasWord(question, "en")) return "en";
  if (
    question.includes("franc") ||
    question.includes("french") ||
    question.includes("فرنسي") ||
    question.includes("frabcasi") ||
    question.includes("francasi") ||
    hasWord(question, "fr")
  ) {
    return "fr";
  }
  return null;
};

function Icon({ type }) {
  const labels = {
    facebook: "f",
    instagram: "◎",
    linkedin: "in",
    mail: "@",
    whatsapp: "☏",
  };
  return <span className={`network-icon ${type}`}>{labels[type] || "•"}</span>;
}

function buildChatbotAnswer(raw, lang) {
  const q = normalize(raw);
  const t = content[lang];
  const info = {
    fr: {
      identity:
        "Tinhinane Karabadji est une étudiante algérienne en Licence 3 Physique-Chimie à l'UPJV, avec une formation en génie des procédés et une expérience en laboratoire pharmaceutique, pétrolier et ATG.",
      age: "23 ans",
      birth: "12 février 2003",
      country: "Algérie",
      residence: profile.address,
      contact: `Instagram: tinhinane.karabadji\nFacebook: Tinhinane Karabadji\nLinkedIn: Tinhinane Karabadji\nWhatsApp: ${profile.phone}\nEmail: ${profile.email}`,
    },
    en: {
      identity:
        "Tinhinane Karabadji is an Algerian Physics-Chemistry student at UPJV with a process-engineering background and laboratory experience in pharmaceutical, petroleum, and TGA contexts.",
      age: "23 years old",
      birth: "February 12, 2003",
      country: "Algeria",
      residence: profile.address,
      contact: `Instagram: tinhinane.karabadji\nFacebook: Tinhinane Karabadji\nLinkedIn: Tinhinane Karabadji\nWhatsApp: ${profile.phone}\nEmail: ${profile.email}`,
    },
    ar: {
      identity:
        "تينهانين كرابادجي طالبة جزائرية في ليسانس 3 فيزياء-كيمياء بجامعة UPJV، مع تكوين في هندسة العمليات وخبرة مخبرية في المجال الصيدلاني والبترولي وATG.",
      age: "23 سنة",
      birth: "12 فبراير 2003",
      country: "الجزائر",
      residence: profile.address,
      contact: `Instagram: tinhinane.karabadji\nFacebook: Tinhinane Karabadji\nLinkedIn: Tinhinane Karabadji\nWhatsApp: ${profile.phone}\nEmail: ${profile.email}`,
    },
  }[lang];

  if (q.includes("salut")) {
    return lang === "fr" ? "salut, comment puis-je t’aider 😊" : lang === "ar" ? "مرحبا، كيف يمكنني مساعدتك؟ 😊" : "Hi, how can I help you? 😊";
  }
  if (["bonjour", "bonsoir", "hello", "مرحبا"].some((word) => q.includes(word))) {
    return lang === "fr" ? "Bonjour, comment puis-je t’aider 😊" : lang === "ar" ? "مرحبا، كيف يمكنني مساعدتك؟ 😊" : "Hello, how can I help you? 😊";
  }
  if (hasWord(q, "age", "âge", "عمر")) return info.age;
  if (q.includes("naissance") || q.includes("born") || q.includes("ميلاد")) return info.birth;
  if (q.includes("pays") || q.includes("country") || q.includes("بلد")) return info.country;
  if (q.includes("residence") || q.includes("habite") || q.includes("adresse") || q.includes("live") || q.includes("اقامة")) return info.residence;

  const stats = getPortfolioStats(lang);
  if ((q.includes("annee") || q.includes("year") || q.includes("سنوات")) && (q.includes("parcours") || q.includes("universitaire") || q.includes("academic") || q.includes("جامعي"))) {
    return lang === "fr" ? `${stats.academicYears} années de parcours universitaire.` : lang === "ar" ? `${stats.academicYears} سنوات مسار جامعي.` : `${stats.academicYears} years of academic path.`;
  }
  if (q.includes("nombre") && (q.includes("formation") || q.includes("experience") || q.includes("training") || q.includes("تكوين"))) {
    return lang === "fr" ? `${stats.experiencesAndTrainings} expériences & formations.` : lang === "ar" ? `${stats.experiencesAndTrainings} خبرات وتكوينات.` : `${stats.experiencesAndTrainings} experiences & trainings.`;
  }
  if (q.includes("nombre") && (q.includes("langue") || q.includes("language") || q.includes("لغة"))) {
    return lang === "fr" ? `${stats.languages} langues.` : lang === "ar" ? `${stats.languages} لغات.` : `${stats.languages} languages.`;
  }
  if (q.includes("nombre") && (q.includes("compet") || q.includes("compt") || q.includes("skill") || q.includes("مهار"))) {
    return lang === "fr" ? `${stats.skills} compétences clés.` : lang === "ar" ? `${stats.skills} مهارات أساسية.` : `${stats.skills} key skills.`;
  }

  if (q.includes("cv") || q.includes("resume") || q.includes("سيرة")) {
    const requestedCvVersion = getRequestedCvVersion(q);
    return requestedCvVersion ? getDirectCvAnswer(lang, requestedCvVersion) : getCvAnswer(lang);
  }

  const socialMatch = socials.find((item) => {
    const label = normalize(item.label);
    return q.includes(item.type) || q.includes(label) || (item.type === "mail" && q.includes("email")) || (item.type === "whatsapp" && q.includes("telephone"));
  });
  if (socialMatch) return formatContact(socialMatch);
  if (q.includes("contact") || q.includes("reseau") || q.includes("resea") || q.includes("coordonne") || q.includes("تواصل")) return getContactList();

  if (q.includes("stage") || q.includes("staage") || q.includes("stagiaire") || q.includes("internship") || q.includes("atg") || q.includes("sonatrach") || q.includes("pharmacie") || q.includes("تربص")) {
    const stageList = experiences[lang].filter(([, title]) => {
      const normalizedTitle = normalize(title);
      return normalizedTitle.includes("stage") || normalizedTitle.includes("stagiaire") || normalizedTitle.includes("intern") || normalizedTitle.includes("تربص");
    });
    return stageList.map(([period, title, place]) => `${period} — ${title} — ${place}`).join("\n");
  }
  if (q.includes("experience") || q.includes("expérience") || q.includes("خبر")) {
    return experiences[lang].map(([period, title, place]) => `${period} — ${title} — ${place}`).join("\n");
  }
  if (q.includes("formation") || q.includes("education") || q.includes("licence") || q.includes("master") || q.includes("bac") || q.includes("تكوين")) {
    return education[lang].map(([period, title, school]) => `${period} — ${title}\n${school}`).join("\n\n");
  }
  const skillGroupAnswer = getSkillGroupAnswer(q, lang);
  if (skillGroupAnswer) return skillGroupAnswer;
  if (q.includes("compet") || q.includes("compt") || q.includes("skill") || q.includes("hysys") || q.includes("matlab") || q.includes("aspen") || q.includes("مهار")) {
    return skills[lang].map(([title, items]) => `${title}: ${items.join(", ")}`).join("\n");
  }
  if (q.includes("langue") || q.includes("language") || q.includes("لغة")) {
    return languages[lang].join("\n");
  }
  if (q.includes("qui") || q.includes("who") || q.includes("present") || q.includes("présent") || q.includes("من")) {
    return info.identity;
  }
  return t.chatbot.fallback;
}

function Chatbot({ lang }) {
  const t = content[lang].chatbot;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: t.welcome }]);
  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages([{ role: "bot", text: t.welcome }]);
  }, [t.welcome]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  const ask = (value) => {
    const question = value.trim();
    if (!question) return;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const answer = buildChatbotAnswer(question, lang);
      const botMessage = typeof answer === "string" ? { role: "bot", text: answer } : { role: "bot", ...answer };
      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 260);
  };

  return (
    <>
      {open && <button className="assistant-backdrop" onClick={() => setOpen(false)} aria-label="Fermer" />}
      <div className={`assistant ${open ? "open" : ""}`}>
        {open && (
          <section className="assistant-panel" dir={lang === "ar" ? "rtl" : "ltr"}>
            <header className="assistant-header">
              <img src={profile.chatbotImage} alt="" />
              <div>
                <h3>{t.title}</h3>
                <p>{t.role}</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Fermer">×</button>
            </header>
            <div className="assistant-messages" ref={scrollRef}>
              {messages.map((message, index) => (
                <article key={`${message.role}-${index}`} className={`message ${message.role}`}>
                  <p>{message.text}</p>
                  {message.actions?.length > 0 && (
                    <div className="message-actions">
                      {message.actions.map((action) => (
                        <a key={action.href} href={action.href} target="_blank" rel="noopener noreferrer">
                          {action.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
              {typing && <article className="message bot"><p>{t.typing}</p></article>}
            </div>
            <div className="suggestions">
              {t.suggestions.map((suggestion) => (
                <button key={suggestion} onClick={() => ask(suggestion)}>
                  {suggestion}
                </button>
              ))}
            </div>
            <form className="assistant-form" onSubmit={(event) => { event.preventDefault(); ask(input); }}>
              <textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.placeholder} rows={2} />
              <button disabled={!input.trim()}>{t.send}</button>
            </form>
          </section>
        )}
        <button className="assistant-fab" onClick={() => setOpen((value) => !value)} aria-label={t.title}>
          <img src={profile.chatbotImage} alt="" />
        </button>
      </div>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("tk-theme") || "light");
  const [lang, setLang] = useState(() => localStorage.getItem("tk-lang") || "fr");
  const [brandOpen, setBrandOpen] = useState(false);
  const [active, setActive] = useState("profile");
  const [form, setForm] = useState({ first: "", last: "", message: "" });
  const [visitorCount, setVisitorCount] = useState(null);
  const t = content[lang];
  const isRtl = lang === "ar";
  const cvPath = profile.cvPaths[lang];
  const hasCv = Boolean(cvPath);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tk-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    localStorage.setItem("tk-lang", lang);
  }, [lang, isRtl]);

  useEffect(() => {
    let cancelled = false;

    const loadVisitors = async () => {
      const nextCount = await incrementVisitorCounter();
      if (!cancelled) setVisitorCount(nextCount);
    };

    loadVisitors();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    const revealNode = (node) => node.classList.add("in-view");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(revealNode);
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealNode(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

    nodes.forEach((node, index) => {
      node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      if (node.getBoundingClientRect().top < window.innerHeight * 0.94) {
        window.requestAnimationFrame(() => revealNode(node));
      }
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [lang]);

  const navIds = ["profile", "experiences", "skills", "education", "contact"];

  const scrollTo = (id) => {
    const node = document.getElementById(id);
    if (!node) return;
    setActive(id);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
  };

  const submitContact = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Message portfolio - ${form.first} ${form.last}`.trim());
    const body = encodeURIComponent(`Nom: ${form.last || "-"}\nPrénom: ${form.first || "-"}\n\nMessage:\n${form.message || "-"}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const skillList = useMemo(() => skills[lang], [lang]);
  const metricList = useMemo(() => {
    const stats = getPortfolioStats(lang);
    return [
      [stats.academicYears, t.metrics[0][1]],
      [stats.experiencesAndTrainings, t.metrics[1][1]],
      [stats.languages, t.metrics[2][1]],
      [stats.skills, t.metrics[3][1]],
      [formatVisitorCount(visitorCount, lang), t.metrics[4][1]],
    ];
  }, [lang, t.metrics, visitorCount]);

  const showUnavailableCv = () => {
    window.alert(t.cvUnavailable);
  };

  return (
    <div className="site-shell" dir={isRtl ? "rtl" : "ltr"}>
      <header className="topbar">
        <button className={`brand ${brandOpen ? "expanded" : ""}`} onClick={() => { setBrandOpen((value) => !value); scrollTo("profile"); }} aria-label={profile.fullName}>
          <span>{brandOpen ? profile.fullName : "TK"}</span>
        </button>
        <nav>
          {navIds.map((id, index) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => scrollTo(id)}>
              {t.nav[index]}
            </button>
          ))}
        </nav>
        <div className="controls">
          <select value={lang} onChange={(event) => setLang(event.target.value)} aria-label="Langue">
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.flag} {option.label}
              </option>
            ))}
          </select>
          <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌙" : "☀️"} {theme === "dark" ? t.modeDark : t.modeLight}
          </button>
        </div>
      </header>

      <main>
        <section id="profile" className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{profile.fullName}</h1>
            <p className="headline">{t.headline}</p>
            <p className="intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="btn primary hero-contact" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>{t.contact}</a>
              {hasCv ? (
                <a className="btn ghost" href={cvPath} target="_blank" rel="noopener noreferrer">{t.viewCv}</a>
              ) : (
                <button className="btn ghost" type="button" onClick={showUnavailableCv}>{t.viewCv}</button>
              )}
              {hasCv ? (
                <a className="btn warm" href={cvPath} download>{t.downloadCv}</a>
              ) : (
                <button className="btn warm" type="button" onClick={showUnavailableCv}>{t.downloadCv}</button>
              )}
            </div>
          </div>
          <aside className="portrait" aria-label={profile.fullName}>
            <span className="scan-line" />
            <img className="portrait-slide portrait-slide-primary" src={profile.portraitImage} alt={profile.fullName} loading="eager" />
            <img className="portrait-slide portrait-slide-secondary" src={profile.introImage} alt="" aria-hidden="true" loading="eager" />
          </aside>
        </section>

        <section className="metrics reveal">
          {metricList.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="experiences" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Expériences</p>
            <h2>{t.experiencesTitle}</h2>
            <p>{t.experiencesSubtitle}</p>
          </div>
          <div className="experience-list">
            {experiences[lang].map(([period, title, place, description, tags], index) => (
              <article className={`experience-card reveal ${index % 2 ? "from-left" : "from-right"}`} key={title} style={{ "--delay": `${index * 80}ms` }}>
                <div className="experience-date">{period}</div>
                <div className="experience-body">
                  <h3>{title}</h3>
                  <p className="place">{place}</p>
                  <p>{description}</p>
                  <ul>
                    {tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Expertise</p>
            <h2>{t.skillsTitle}</h2>
            <p>{t.skillsSubtitle}</p>
          </div>
          <div className="skill-grid">
            {skillList.map(([title, items]) => (
              <article className="skill-card reveal" key={title}>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education-layout reveal">
          <article className="education-panel">
            <h2>{t.educationTitle}</h2>
            <div className="timeline">
              {education[lang].map(([period, title, school]) => (
                <div className="timeline-item" key={`${period}-${title}`}>
                  <span>{period}</span>
                  <strong>{title}</strong>
                  <p>{school}</p>
                </div>
              ))}
            </div>
          </article>
          <div className="side-stack">
            <article className="languages-panel">
              <h2>{t.languagesTitle}</h2>
              <ul>
                {languages[lang].map((item, index) => (
                  <li key={item}>
                    <span>{item}</span>
                    <img src={languageFlags[index]} alt="" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </article>
            <aside className="network-panel">
              <h3>{t.networks}</h3>
              {socials.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <Icon type={item.type} />
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </a>
              ))}
            </aside>
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-layout">
            <form className="contact-form" onSubmit={submitContact}>
              <label>
                <span>{t.form.last}</span>
                <input value={form.last} onChange={(event) => setForm({ ...form, last: event.target.value })} placeholder={t.form.lastPlaceholder} />
              </label>
              <label>
                <span>{t.form.first}</span>
                <input value={form.first} onChange={(event) => setForm({ ...form, first: event.target.value })} placeholder={t.form.firstPlaceholder} />
              </label>
              <label className="full">
                <span>{t.form.message}</span>
                <textarea rows={6} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder={t.form.messagePlaceholder} />
              </label>
              <button className="submit" type="submit">{t.form.submit}<span>→</span></button>
            </form>
          </div>
        </section>
      </main>

      <Chatbot lang={lang} />
      <footer>{new Date().getFullYear()} • {profile.fullName}</footer>
    </div>
  );
}
