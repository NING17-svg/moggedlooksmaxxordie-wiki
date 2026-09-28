import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "MOGGED Looksmaxx or Die — Steam Early Access Hub",
  seoTitle:
    "MOGGED Looksmaxx or Die Guide | Sigma Labs Steam Early Access, Oct 1, 2026",
  metaDescription:
    "MOGGED Looksmaxx or Die — Sigma Labs Steam Early Access release Oct 1, 2026 (Windows PC, 1–8 player co-op). Find AppID, release and platform pages here.",
  summary:
    "Pre-launch and Early Access hub for MOGGED Looksmaxx or Die covering identity, AppID, release date, Windows PC scope, multiplayer, peptides, items, enemies, locations and achievements.",
  hero: {
    eyebrow: "Steam Early Access · Oct 1, 2026",
    subtitle: site.tagline,
    ctas: [
      { label: "Release date", href: "/release" },
      { label: "Steam AppID", href: "/steam" },
      { label: "Gameplay loop", href: "/gameplay" },
      { label: "Multiplayer", href: "/multiplayer" },
    ],
  },
  quickAnswer:
    "MOGGED Looksmaxx or Die is the Sigma Labs Steam release (AppID 4917440) entering Early Access on October 1, 2026. It is a 1–8 player proximity voice-chat co-op survival extraction horror comedy for Windows 11 64-bit. This hub confirms identity, the AppID, the release date, the launch platform, the Early Access plan, the multiplayer shape, and the core gameplay references (peptides, items, enemies, locations, achievements).",
  keyFacts: [
    { label: "Release date", value: "October 1, 2026 (Early Access)" },
    { label: "Steam AppID", value: "4917440" },
    { label: "Publisher", value: "Sigma Labs (Frost Interactive LLC)" },
    { label: "Platform", value: "Windows 11 64-bit only" },
    { label: "Multiplayer", value: "1–8 player proximity voice-chat co-op" },
  ],
  modules: [
    {
      id: "launch-window",
      type: "callout",
      tone: "confirmed",
      title: "Early Access launch locked for October 1, 2026",
      body: "Sigma Labs' official Steam store page for AppID 4917440 lists October 1, 2026 as the Early Access release date. The launch is timed for the same week as the 2026-09-27 research date, with no published delay as of writing.",
    },
    {
      id: "identity",
      type: "prose",
      heading: "What MOGGED Looksmaxx or Die is",
      body:
        "MOGGED Looksmaxx or Die is Sigma Labs' original Steam Early Access release (AppID 4917440). It borrows vocabulary from the looksmaxxing meme ecosystem but is a paid Windows PC survival extraction horror comedy, not a Roblox looksmax game or a TikTok meme. The flagship loop is a day/night softmaxx-and-extract cycle with a 5am curfew sell phase.",
      links: [
        { label: "About the game", href: "/about", description: "Identity, genre framing, and Early Access plan" },
        { label: "Gameplay loop", href: "/gameplay", description: "Day/night extraction and the True Adam endpoint" },
      ],
    },
    {
      id: "platforms",
      type: "entity-grid",
      heading: "Confirmed launch platform",
      items: [
        { title: "Windows 11 64-bit", summary: "Steam-exclusive launch platform via AppID 4917440.", href: "/platforms" },
        { title: "Steam (AppID 4917440)", summary: "Canonical store page; wishlist open.", href: "/steam" },
      ],
    },
    {
      id: "multiplayer",
      type: "prose",
      heading: "1–8 player proximity voice-chat co-op",
      body:
        "The store page confirms online co-op for 1–8 players with proximity voice chat. Solo play is also confirmed, so the day/night loop is playable without a squad. Open matchmaking, region lock, and crossplay are not announced as of 2026-09-27.",
    },
    {
      id: "scope",
      type: "entity-grid",
      heading: "Scope numbers from the store page",
      items: [
        { title: "126 items (64 + 62 grocery)", summary: "Plus 7 deployable upgrades.", href: "/items" },
        { title: "19 peptide side effects", summary: "Tied to a 'True Adam' endpoint.", href: "/peptides" },
        { title: "15 enemies", summary: "Ugliest-player stalker mechanic included.", href: "/enemies" },
        { title: "5 confirmed locations", summary: "6 levels total, 2 procedurally generated.", href: "/locations" },
        { title: "82 Steam achievements", summary: "Multiplayer and ugliest-player flag categories.", href: "/achievements" },
        { title: "1–8 player co-op", summary: "Online co-op with proximity voice chat.", href: "/multiplayer" },
      ],
    },
    {
      id: "hub-pages",
      type: "entity-grid",
      heading: "Browse the hub",
      items: [
        { title: "About the game", summary: "Identity, genre framing, Early Access plan.", href: "/about" },
        { title: "Release date", summary: "October 1, 2026 Early Access launch.", href: "/release" },
        { title: "Steam AppID", summary: "Canonical Steam listing on AppID 4917440.", href: "/steam" },
        { title: "Platforms", summary: "Windows PC scope; Mac/Linux/consoles unannounced.", href: "/platforms" },
        { title: "Early Access", summary: "3–6 month EA window and planned additions.", href: "/early-access" },
        { title: "System requirements", summary: "Steam Minimum: i5-12400F / RTX 3060 Ti 8GB / 16 GB RAM; mic required.", href: "/system-requirements" },
        { title: "Gameplay loop", summary: "Softmaxx by day, extract at night, 5am curfew.", href: "/gameplay" },
        { title: "Peptides", summary: "19 side effects and the True Adam endpoint.", href: "/peptides" },
        { title: "Items", summary: "126 items and 7 deployable upgrades.", href: "/items" },
        { title: "Enemies", summary: "15 hostile roster and stalker rule.", href: "/enemies" },
        { title: "Locations", summary: "Apartment, MAXMART, The Yard, Frat House, Basement Lab.", href: "/locations" },
        { title: "Achievements", summary: "82 Steam achievements and flag categories.", href: "/achievements" },
      ],
    },
  ],
  faqIds: [
    "mlw-home-is-it-meme",
    "mlw-home-console",
    "mlw-home-wishlist",
    "mlw-home-solo",
  ],
  relatedPageIds: [
    "about",
    "release-status",
    "steam-availability",
    "platforms",
    "early-access",
    "system-requirements",
    "multiplayer",
    "co-op",
    "gameplay-loop",
    "peptides",
    "items",
    "enemies",
    "locations",
    "achievements",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-27",
};