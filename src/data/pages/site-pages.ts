import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Launch Questions`,
    metaDescription:
      "Common questions about MOGGED Looksmaxx or Die: Early Access release date, Steam AppID 4917440, Windows PC scope, co-op shape, and documentedsystem numbers.",
    summary:
      "Launch-window FAQ for MOGGED Looksmaxx or Die, anchored to Steam AppID 4917440 and the SteamDB dated snapshot.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Common launch questions for MOGGED Looksmaxx or Die: release date, platform, co-op shape, and documented scope numbers.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die is the Sigma Labs Steam Early Access release (AppID 4917440, trademark Frost Interactive LLC), launching October 1, 2026 on Windows PC only, with 1-8 player proximity voice-chat co-op and the documented scope of 126 items, 19 peptide side effects, 5 locations, 15 enemies, and 82 achievements.",
    keyFacts: [
      { label: "Release date", value: "October 1, 2026 (Early Access)" },
      { label: "Platform", value: "Windows PC only" },
      { label: "Publisher", value: "Sigma Labs (Frost Interactive LLC trademark)" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Every FAQ answer on this page is traceable to the Steam store page (AppID 4917440), the SteamDB dated snapshot, the Steam Community hub for AppID 4917440, or the Sigma Labs publisher search on Steam. Answers are reviewed on the 2026-09-27 research date and updated as the launch window progresses.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["wiki", "guides", "release-status", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About page template for an unofficial game guide site, including scope, sourcing, and editorial principles.",
    summary:
      "A trust page explaining the site's unofficial status, sourcing rules, and guide scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the site covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial guide hub template that should be filled with verified game information before launch.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Verified facts first" },
      { label: "Scope", value: "Wiki, guides, release info, FAQ" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information without pretending the site knows more than official sources support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use official websites, store pages, developer updates, publisher posts, and press materials for launch facts. Mark uncertain areas as pending instead of filling gaps with guesses.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact page template for corrections, official source updates, and site feedback.",
    summary:
      "A trust page for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Replace this page with a working contact method before launch, such as an email address or contact form.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Launch requirement", value: "Add a real contact method" },
      { label: "Response", value: "Set expectations clearly" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Add a real email address or form endpoint before publishing. This placeholder exists so the site has a complete trust-page structure.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links when facts change. Do not ask for private account information or game account credentials.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy template for a lightweight game guide site using basic analytics and contact channels.",
    summary:
      "A starter privacy policy page for analytics, logs, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This page should be reviewed before launch and updated to match the deployed site's analytics, hosting, and contact setup.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact method is added, messages may include the information visitors choose to send. Do not request sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use template for an unofficial game guide site, including scope, disclaimers, and acceptable use.",
    summary:
      "A starter terms page for an unofficial guide site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This terms page is a template and should be reviewed before launch for the final site owner and jurisdiction.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Update before launch" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the game publisher, developer, platform holders, or trademark owners unless explicitly stated after launch.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-06-18",
  },
];
