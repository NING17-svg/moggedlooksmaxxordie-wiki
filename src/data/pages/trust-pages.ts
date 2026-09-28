import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const trustPages: PageContent[] = [
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
      "Contact page for corrections, official source updates, and site feedback on the MOGGED Looksmaxx or Die guide.",
    summary:
      "How to send corrections, official source updates, and site feedback for the MOGGED Looksmaxx or Die guide.",
    hero: {
      eyebrow: "Contact",
      subtitle: "Send corrections, official source updates, or feedback for the MOGGED Looksmaxx or Die guide.",
      ctas: [{ label: "About this guide", href: "/about" }],
    },
    quickAnswer:
      "Send corrections or feedback to the MOGGED Looksmaxx or Die guide team. Use the Steam store page for AppID 4917440 and the SteamDB dated snapshot as primary references for fact checks.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Topic", value: "Corrections and feedback" },
      { label: "Reference", value: "Steam AppID 4917440 + SteamDB dated snapshot" },
    ],
    modules: [
      {
        id: "contact-purpose",
        type: "prose",
        heading: "What this page is for",
        body:
          "Use this page to send corrections, official source updates, and site feedback. The guide is unofficial, so corrections should always be paired with a reference to a primary source (Steam AppID 4917440, SteamDB dated snapshot, Steam Community hub for AppID 4917440, or Sigma Labs publisher search on Steam).",
      },
      {
        id: "primary-sources",
        type: "prose",
        heading: "Primary sources",
        body:
          "The Steam store page (https://store.steampowered.com/app/4917440), the SteamDB dated snapshot (https://steamdb.info/app/4917440/), the Steam Community hub for AppID 4917440, and the Sigma Labs publisher search on Steam are the official references for the Early Access release date, AppID identity, Windows PC scope, 1-8 player proximity voice-chat co-op shape, and the scope numbers (126 items, 19 peptide side effects, 5 locations, 15 enemies, 82 achievements).",
      },
      {
        id: "feedback-rules",
        type: "prose",
        heading: "Feedback rules",
        body:
          "Corrections are accepted only when paired with an official or wiki/reference-dated source. Speculation, hype, or third-party SEO blogs are not valid correction sources. Looksmaxxing community material (TikTok, Omegle, Roblox, looksmaxxing rating sites) is discovery-only and is never used as evidence for current-game facts.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-27",
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
      "Privacy policy for the MOGGED Looksmaxx or Die guide covering GA4 analytics, AdSense ads, and Bing site authentication.",
    summary:
      "Privacy policy for the MOGGED Looksmaxx or Die guide covering GA4, AdSense, and Bing site auth.",
    hero: {
      eyebrow: "Privacy",
      subtitle: "Privacy policy covering GA4, AdSense, and Bing site authentication for the MOGGED Looksmaxx or Die guide.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "The MOGGED Looksmaxx or Die guide collects analytics via Google Analytics 4 (GA4) when consent is granted, displays AdSense ads when configured, and may use Bing Webmaster site authentication. No personally identifying information beyond the IP address and standard browser metadata is collected.",
    keyFacts: [
      { label: "Analytics", value: "Google Analytics 4" },
      { label: "Ads", value: "Google AdSense (when configured)" },
      { label: "Site auth", value: "Bing Webmaster" },
    ],
    modules: [
      {
        id: "ga4",
        type: "prose",
        heading: "Google Analytics 4",
        body:
          "The site uses Google Analytics 4 (GA4) to measure traffic. The GA4 measurement ID is configured via the NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable at build time. GA4 records anonymous usage data such as page views, referrers, device class, and country. No personally identifying information is collected by GA4.",
      },
      {
        id: "adsense",
        type: "prose",
        heading: "Google AdSense",
        body:
          "When AdSense is configured, the site displays ads served by Google. AdSense uses cookies and may use device fingerprinting to serve ads. The AdSense account is identified via the google-adsense-account meta tag in the layout. Ad personalization can be disabled in the user's Google account settings.",
      },
      {
        id: "bing-auth",
        type: "prose",
        heading: "Bing site authentication",
        body:
          "The site may include a msvalidate.01 meta tag for Bing Webmaster Tools verification. The Bing site auth code is configured via the NEXT_PUBLIC_BING_SITE_AUTH_CODE environment variable at build time. Bing does not collect user data through this tag.",
      },
      {
        id: "contact-point",
        type: "prose",
        heading: "Contact for privacy",
        body:
          "Send privacy-related questions to the editorial team through the Contact page. Privacy questions that require action will be answered with a date and reference.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-27",
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
    h1: "Terms",
    seoTitle: `Terms | ${site.name}`,
    metaDescription:
      "Terms of use for the MOGGED Looksmaxx or Die guide: unofficial fan site, fair use commentary, and editorial scope.",
    summary:
      "Terms of use for the MOGGED Looksmaxx or Die guide — unofficial fan site, fair use commentary, no warranty.",
    hero: {
      eyebrow: "Terms",
      subtitle: "Terms of use for the MOGGED Looksmaxx or Die guide covering unofficial status, fair use, and editorial scope.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "The MOGGED Looksmaxx or Die guide is an unofficial fan site. Editorial content is commentary and reference material under fair use. The guide does not sell MOGGED: Looksmaxx or Die, Sigma Labs games, or any Frost Interactive LLC product.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial content", value: "Commentary under fair use" },
      { label: "Sales", value: "None — guide does not sell the game" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial status",
        body:
          "This site is an unofficial fan guide for MOGGED: Looksmaxx or Die, the Early Access release by Sigma Labs (developer and publisher; trademark held by Frost Interactive LLC). The site is not affiliated with, endorsed by, or sponsored by Sigma Labs or Frost Interactive LLC. All trademarks and game references are the property of their respective owners.",
      },
      {
        id: "fair-use",
        type: "prose",
        heading: "Editorial content and fair use",
        body:
          "Editorial content on this site is commentary and reference material covered under fair use. Quoted material from the Steam store page (AppID 4917440), the SteamDB dated snapshot, the Steam Community hub, and the Sigma Labs publisher search is attributed to its source and is used for editorial discussion of the Early Access release. Images and media references are linked to their original sources rather than republished.",
      },
      {
        id: "no-warranty",
        type: "prose",
        heading: "No warranty",
        body:
          "Facts on this guide are verified against official sources and dated to the 2026-09-27 research date. The guide does not warrant that any fact is exhaustive or future-proof; launch-window facts may change before the October 1, 2026 Early Access release. The guide disclaims all liability for actions taken on the basis of its content.",
      },
      {
        id: "changes",
        type: "prose",
        heading: "Changes to these terms",
        body:
          "These terms may be updated as the launch window progresses. The 'last reviewed' date at the top of the page indicates when the most recent review occurred.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-27",
  },
];