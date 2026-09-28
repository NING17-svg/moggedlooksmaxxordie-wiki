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
      "Common questions about MOGGED Looksmaxx or Die: Early Access release date, Steam AppID 4917440, Windows PC scope, co-op shape, and documented system numbers.",
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
    relatedPageIds: ["about", "guides", "platforms"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
];