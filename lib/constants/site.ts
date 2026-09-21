export const SITE = {
  name: "Vivra",
  url: "https://vivra.ai",
  email: "info@vivra.ai",
  phone: "+971 50 216 4876",
  phoneHref: "tel:+971502164876",
  location: "Dubai, United Arab Emirates",
  legalName: "VIVRA Information Technology",
};

export const NAV_LINKS = [
  { label: "Technology", href: "/#technology" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/about" },
];

export const PRODUCTS = [
  {
    key: "events" as const,
    name: "Vivra Events",
    href: "/events",
    tagline: "One stage. Every language.",
    description: "Real-time multilingual delivery for conferences, panels and global events.",
  },
  {
    key: "mosque" as const,
    name: "Vivra Mosque",
    href: "/mosque",
    tagline: "Every sermon. Understood.",
    description: "Live khutbah and lecture translation, delivered to every worshipper's phone.",
  },
];

/** A representative set of listener languages, in the language's own script. */
export const LANGUAGES: { code: string; name: string; native: string; script?: "ar" | "hi" }[] = [
  { code: "EN", name: "English", native: "English" },
  { code: "AR", name: "Arabic", native: "العربية", script: "ar" },
  { code: "HI", name: "Hindi", native: "हिन्दी", script: "hi" },
  { code: "FR", name: "French", native: "Français" },
  { code: "BN", name: "Bengali", native: "বাংলা" },
  { code: "FA", name: "Persian", native: "فارسی", script: "ar" },
  { code: "PS", name: "Pashto", native: "پښتو", script: "ar" },
  { code: "ML", name: "Malayalam", native: "മലയാളം" },
  { code: "TA", name: "Tamil", native: "தமிழ்" },
  { code: "TR", name: "Turkish", native: "Türkçe" },
  { code: "ID", name: "Indonesian", native: "Bahasa Indonesia" },
  { code: "ES", name: "Spanish", native: "Español" },
  { code: "DE", name: "German", native: "Deutsch" },
  { code: "ZH", name: "Chinese", native: "中文" },
  { code: "RU", name: "Russian", native: "Русский" },
  { code: "SW", name: "Swahili", native: "Kiswahili" },
  { code: "TL", name: "Filipino", native: "Filipino" },
];

/** Phrases for the live-language visualisation. Translations are literal and short. */
export const PHRASES = [
  {
    en: "Welcome everyone.",
    ar: "مرحباً بالجميع.",
    hi: "आप सभी का स्वागत है।",
    fr: "Bienvenue à tous.",
  },
  {
    en: "Thank you for being here.",
    ar: "شكراً لحضوركم.",
    hi: "यहाँ आने के लिए धन्यवाद।",
    fr: "Merci d'être ici.",
  },
  {
    en: "Let us begin.",
    ar: "لنبدأ.",
    hi: "चलिए शुरू करते हैं।",
    fr: "Commençons.",
  },
];
