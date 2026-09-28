import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "MOGGED: Looksmaxx or Die Guide",
  brandMark: "MLW",
  gameName: "MOGGED: Looksmaxx or Die",
  domain: "moggedlooksmaxxordie.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://moggedlooksmaxxordie.wiki").replace(/\/$/, ""),
  description:
    "Unofficial pre-launch and Early Access search hub for MOGGED: Looksmaxx or Die (Sigma Labs, Steam AppID 4917440) — Early Access release window, Windows PC scope, 1-8 player co-op, peptides, items, enemies, locations, achievements and system requirements.",
  tagline:
    "Early Access release, Steam AppID, Windows PC scope, 1-8 player co-op, peptides, items, enemies, locations and achievements.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "MOGGED: Looksmaxx or Die Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store (MOGGED: Looksmaxx or Die, AppID 4917440)",
      href: "https://store.steampowered.com/app/4917440",
      description: "Sigma Labs' official Steam listing — AppID 4917440, planned Early Access release Oct 1, 2026.",
    },
    {
      label: "SteamDB record for AppID 4917440",
      href: "https://steamdb.info/app/4917440/",
      description: "Dated Steam metadata snapshot for AppID 4917440 — release window, supported languages, tags, achievements.",
    },
    {
      label: "Sigma Labs publisher search on Steam",
      href: "https://store.steampowered.com/search/?publisher=Sigma+Labs",
      description: "Publisher roster that lists MOGGED: Looksmaxx or Die; cited as identity confirmation only.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide built from publicly available Steam and SteamDB data. All facts are dated to the 2026-09-27 research date; unannounced details are written as dated 'not announced as of research date' statements.",
};