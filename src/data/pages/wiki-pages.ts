import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const wikiPages: PageContent[] = [
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Confirmed Facts, Systems, and Scope`,
    metaDescription:
      "Verified wiki facts for MOGGED Looksmaxx or Die: Early Access release, Steam AppID 4917440, Windows PC scope, 1-8 player proximity voice-chat co-op, and core scope numbers.",
    summary:
      "A verified wiki landing page for confirmed Early Access facts, Windows PC scope, and the documented scope numbers of MOGGED Looksmaxx or Die.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Confirmed Early Access facts for MOGGED Looksmaxx or Die, anchored to Steam AppID 4917440 and the dated SteamDB snapshot.",
      ctas: [
        { label: "Read Guides", href: "/guides" },
        { label: "Release Status", href: "/release-status" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die is the Sigma Labs Windows PC Early Access release (Steam AppID 4917440, trademark Frost Interactive LLC). The launch window centers on 1-8 player proximity voice-chat co-op and the documented scope of 126 items, 19 peptide side effects, 5 locations, 15 enemies, and 82 achievements.",
    keyFacts: [
      { label: "Release shape", value: "Steam Early Access (October 1, 2026)" },
      { label: "Platform", value: "Windows PC only" },
      { label: "Co-op", value: "1-8 player proximity voice-chat" },
    ],
    modules: [
      {
        id: "overview",
        type: "prose",
        heading: "Game overview",
        body:
          "MOGGED Looksmaxx or Die is the Sigma Labs Steam Early Access release published under the Frost Interactive LLC trademark. The Steam store page (AppID 4917440) and the SteamDB dated snapshot anchor the Early Access release window of October 1, 2026, the Windows PC-only scope, and the documented co-op shape (1-8 player proximity voice-chat). The launch is a paid title, not a meme content release and not a Roblox game.",
      },
      {
        id: "systems",
        type: "prose",
        heading: "Confirmed systems",
        body:
          "Verified systems at launch: peptide crafting (19 documented side effects with removal mechanics), item economy (126 items, mix of weapons and consumables), location roster (5 locations including the after-hours lab, MaxMart, and the after-hours hub), enemy roster (15 enemies including the Stalker archetype), and an achievement roster of 82 achievements with some missable and some hidden.",
      },
      {
        id: "official-links",
        type: "prose",
        heading: "Official sources",
        body:
          "Every fact on this wiki is traceable to the Steam store page (https://store.steampowered.com/app/4917440), the SteamDB dated snapshot (https://steamdb.info/app/4917440/), the Steam Community hub for AppID 4917440, or the Sigma Labs publisher search on Steam.",
        links: site.officialSources,
      },
      {
        id: "reference-coverage",
        type: "data-table",
        heading: "Reference Coverage",
        columns: [
          { key: "category", label: "Category" },
          { key: "status", label: "Coverage Status" },
          { key: "source", label: "Source Rule" },
        ],
        rows: [
          { category: "Release identity", status: "Confirmed", source: "Steam AppID 4917440 + SteamDB dated snapshot" },
          { category: "Platforms", status: "Confirmed", source: "Steam store page (Windows PC only)" },
          { category: "Co-op shape", status: "Confirmed", source: "Steam store page (1-8 proximity voice-chat)" },
          { category: "Scope numbers", status: "Confirmed", source: "Steam store page descriptions" },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["guides", "release-status", "platforms"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
];