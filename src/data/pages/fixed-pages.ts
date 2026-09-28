import type { PageContent } from "@/types/content";

export const fixedPages: PageContent[] = [
  {
    id: "about",
    translationKey: "overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die — what it is, genre, and Early Access plan",
    seoTitle:
      "MOGGED Looksmaxx or Die | Identity, Genre, Early Access Plan",
    metaDescription:
      "MOGGED Looksmaxx or Die is the Sigma Labs Steam Early Access game on Oct 1, 2026 — a 1–8 player proximity co-op survival extraction horror comedy for Windows 11.",
    summary:
      "Identity page for MOGGED Looksmaxx or Die: what it is, genre framing, the Steam AppID, the Early Access plan and how it relates to looksmaxxing culture.",
    hero: {
      eyebrow: "Identity",
      subtitle: "Sigma Labs' original Steam Early Access release for Windows 11 64-bit — what the game is and what is not.",
      ctas: [
        { label: "Release window", href: "/release" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die is an Early Access title published by Sigma Labs on Steam (AppID 4917440), launching October 1, 2026 on Windows 11 64-bit. It is a 1–8 player proximity voice-chat co-op survival extraction horror comedy, with solo play also confirmed. The store page lists 126 items, 19 peptide side effects tied to a 'True Adam' endpoint, 5 confirmed locations, 15 enemies, 6 levels, and 82 Steam achievements.",
    keyFacts: [
      { label: "Publisher / Developer", value: "Sigma Labs (Frost Interactive LLC)" },
      { label: "Steam AppID", value: "4917440" },
      { label: "Release form", value: "Steam Early Access, October 1, 2026" },
      { label: "Platform", value: "Windows 11 64-bit" },
      { label: "Genre", value: "Survival extraction horror comedy" },
      { label: "Multiplayer", value: "1–8 player proximity voice-chat co-op; single-player confirmed" },
    ],
    modules: [
      {
        id: "genre-framing",
        type: "prose",
        heading: "What kind of game is MOGGED Looksmaxx or Die",
        body:
          "The genre framing on the official store page combines three threads that show up in the same loop and the same publisher copy: proximity voice-chat co-op survival, an escalating looksmaxx-style quota system, and procedural nighttime extraction. MOGGED Looksmaxx or Die is described as a survival extraction horror comedy — not a pure horror title, not a meme simulator, and not a Roblox looksmax game. The 'horror comedy' tag on the listing is the single best hint at how the title intends to balance tension and tone.",
        links: [
          { label: "Gameplay loop", href: "/gameplay" },
          { label: "Multiplayer overview", href: "/multiplayer" },
        ],
      },
      {
        id: "coop-shape",
        type: "prose",
        heading: "Co-op shape, player count, and voice chat",
        body:
          "The listing confirms online co-op for 1–8 players with proximity voice chat. Solo play is also confirmed, alongside the same proximity voice model — useful for readers who want to learn the loop before bringing a squad. The 'online co-op' tag on Steam is a hard check on the multiplayer scope, and the 1–8 player count is taken directly from the publisher's bullet list.",
      },
      {
        id: "references",
        type: "prose",
        heading: "Gameplay references: peptides, items, locations, enemies",
        body:
          "Sigma Labs frames the gameplay in numbered reference points that the wiki cross-links: 19 peptide side effects tied to a 'True Adam' endpoint, 126 items (64 non-grocery plus 62 grocery), 7 deployable upgrades, 5 confirmed locations (Apartment, MAXMART, The Yard, Frat House, Basement Lab), and 15 enemies including the ugliest-player stalker. These are the spine of MOGGED Looksmaxx or Die; each is a separate reference page in the wiki.",
      },
      {
        id: "ea-plan",
        type: "callout",
        tone: "tip",
        title: "Early Access plan at a glance",
        body: "Approximately 3–6 months after the October 1, 2026 launch. Planned additions: more enemies, items, locations, AI refinements, audio, localization, accessibility, multiplayer stability.",
      },
      {
        id: "not-meme",
        type: "prose",
        heading: "How this relates to looksmaxxing culture",
        body:
          "MOGGED Looksmaxx or Die borrows vocabulary from the looksmaxxing and 'mogged' meme ecosystem, but the product itself is a Sigma Labs Steam release, not a piece of meme content. 'Mogged,' 'looksmaxx,' and 'softmaxx' are terms that travel widely across TikTok clips, Omegle matches, looksmaxxing rating sites, Roblox looksmax games, and dating-app culture. The game borrows those terms as world-building — for example, the ugliest-player stalker reads directly off the meme vocabulary — but the game itself is not a meme simulation. It has a publisher (Sigma Labs) and a trademark owner (Frost Interactive LLC), with a single canonical Steam AppID 4917440.",
      },
    ],
    faqIds: ["mlw-overview-meme", "mlw-overview-multiplayer", "mlw-overview-mac", "mlw-overview-release"],
    relatedPageIds: ["release-status", "platforms", "early-access", "gameplay-loop", "peptides", "items", "enemies", "locations"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "release-status",
    translationKey: "release-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die release date and Early Access launch window",
    seoTitle:
      "MOGGED Looksmaxx or Die Release Date | Steam Early Access, Oct 1, 2026",
    metaDescription:
      "MOGGED Looksmaxx or Die release date is October 1, 2026 on Windows 11 via Steam Early Access — the date on the official store page as of research date 2026-09-27.",
    summary:
      "Release date page for MOGGED Looksmaxx or Die: October 1, 2026 Early Access launch on Steam AppID 4917440, with no published delay as of 2026-09-27.",
    hero: {
      eyebrow: "Release info",
      subtitle: "October 1, 2026 Early Access launch on Windows 11 64-bit — single global window.",
      ctas: [
        { label: "Steam AppID", href: "/steam" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die release date is October 1, 2026 — four days after the 2026-09-27 research date. Sigma Labs schedules the title to enter Steam Early Access on that date for Windows 11 64-bit. The release date is published on the official Steam store page for AppID 4917440 by Sigma Labs. As of the research date, no delay or postponement has been republished, but the date could move unless the publisher confirms it again.",
    keyFacts: [
      { label: "Release date", value: "October 1, 2026" },
      { label: "Release form", value: "Steam Early Access" },
      { label: "Days from research date", value: "4" },
      { label: "Publisher", value: "Sigma Labs" },
      { label: "Steam AppID", value: "4917440" },
      { label: "Launch platform", value: "Windows 11 64-bit" },
      { label: "Delay notice on store", value: "None published" },
    ],
    modules: [
      {
        id: "release-status-row",
        type: "data-table",
        heading: "Release status as of 2026-09-27",
        columns: [
          { key: "field", label: "Field" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { field: "Release form", status: "Steam Early Access" },
          { field: "Release date on store", status: "October 1, 2026" },
          { field: "Days from research date", status: "4" },
          { field: "Publisher", status: "Sigma Labs" },
          { field: "Steam AppID", status: "4917440" },
          { field: "Launch platform", status: "Windows 11 64-bit" },
          { field: "Delay notice on store", status: "None published" },
        ],
      },
      {
        id: "what-could-change",
        type: "prose",
        heading: "What could change the launch date",
        body:
          "A reader who acts on the October 1, 2026 date should know exactly which inputs would force this status page to update. As of the 2026-09-27 research date, only one signal changes the page: an official republish of the date on the same Steam AppID 4917440 URL. If Sigma Labs republishes a new release date string on the store page, this page would then update to that new official date. If the store page is pulled offline, the launch status is reported as 'no longer listed on the canonical Steam AppID URL'.",
      },
      {
        id: "research-window",
        type: "prose",
        heading: "How the research date and launch window relate",
        body:
          "The research date for this page is 2026-09-27, and the launch is four days later, on October 1, 2026. That four-day window is unusual for a Steam Early Access title and is the reason every fact on this page is sourced from the store listing rather than from post-launch patch notes: there is no post-launch period to reference yet. The Early Access length on the store page is stated as approximately 3–6 months. That timing is separate from the release date; the release date marks the start of Early Access, and the 3–6 month figure estimates how long that window runs before MOGGED Looksmaxx or Die reaches full release.",
      },
    ],
    faqIds: ["mlw-release-confirmed", "mlw-release-preorder", "mlw-release-delayed", "mlw-release-timezone"],
    relatedPageIds: ["early-access", "steam-availability", "platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "steam-availability",
    translationKey: "steam-availability",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam",
    url: "/steam",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Steam AppID 4917440 — store URL confirmation",
    seoTitle:
      "MOGGED Looksmaxx or Die Steam AppID 4917440 | Store Confirmation",
    metaDescription:
      "MOGGED Looksmaxx or Die Steam AppID 4917440 is the canonical Steam listing. Sigma Labs confirms Windows PC only — no other storefront has been announced yet.",
    summary:
      "Steam AppID 4917440 is the canonical listing for MOGGED Looksmaxx or Die on Steam; no other storefront has been announced as of 2026-09-27.",
    hero: {
      eyebrow: "Steam",
      subtitle: "AppID 4917440 is the single canonical listing on Steam for MOGGED Looksmaxx or Die.",
      ctas: [
        { label: "Platforms", href: "/platforms" },
        { label: "System requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die Steam AppID 4917440 is the single, canonical listing on Steam managed by Sigma Labs. The Steam store page is the only storefront the publisher references, and the title is listed for Windows 11 64-bit only. No Mac, Linux, or console version has been announced as of the 2026-09-27 research date. Other storefronts like Epic, GOG, or itch.io are not announced for this title.",
    keyFacts: [
      { label: "Steam AppID", value: "4917440" },
      { label: "Canonical store URL", value: "https://store.steampowered.com/app/4917440" },
      { label: "Publisher on Steam", value: "Sigma Labs" },
      { label: "Developer on Steam", value: "Sigma Labs" },
      { label: "Listing status", value: "Released into Early Access on October 1, 2026" },
      { label: "Cross-storefront equivalents", value: "None published" },
    ],
    modules: [
      {
        id: "storefront-summary",
        type: "data-table",
        heading: "MOGGED Looksmaxx or Die storefront status",
        columns: [
          { key: "storefront", label: "Storefront" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { storefront: "Steam (AppID 4917440)", status: "Canonical listing — Windows 11 64-bit only" },
          { storefront: "Epic Games Store", status: "Not announced" },
          { storefront: "GOG", status: "Not announced" },
          { storefront: "Humble Store", status: "Not announced" },
          { storefront: "itch.io", status: "Not announced" },
          { storefront: "Mac App Store", status: "Not applicable (Windows PC SKU)" },
          { storefront: "Console stores (PlayStation, Xbox, Nintendo)", status: "Not announced" },
          { storefront: "Mobile storefronts (iOS, Android)", status: "Not announced" },
        ],
      },
      {
        id: "other-storefronts",
        type: "prose",
        heading: "Other storefronts and platform coverage",
        body:
          "A reader who searches for MOGGED Looksmaxx or Die outside Steam often does so because of the title's meme overlap, not because a second storefront has been published. Epic, GOG, Humble, itch.io, Mac App Store, console stores, and mobile storefronts are not announced for this title as of the 2026-09-27 research date. If a future storefront listing appears under a different publisher name or a different AppID, this page treats the canonical Steam listing as authoritative until Sigma Labs republishes the title elsewhere.",
      },
    ],
    faqIds: ["mlw-steam-mac", "mlw-steam-free", "mlw-steam-wishlist", "mlw-steam-epic"],
    relatedPageIds: ["system-requirements", "release-status", "platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "platforms",
    translationKey: "platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die platforms at launch — Windows PC scope",
    seoTitle:
      "MOGGED Looksmaxx or Die Platforms | Windows PC Only at Launch",
    metaDescription:
      "MOGGED Looksmaxx or Die platforms: Windows 11 64-bit only via Steam at launch. Mac, Linux, consoles and Steam Deck are not announced by Sigma Labs as of 2026-09-27.",
    summary:
      "MOGGED Looksmaxx or Die platforms at launch are Windows 11 64-bit only; Mac, Linux, consoles, Steam Deck verified status and crossplay are not announced.",
    hero: {
      eyebrow: "Platforms",
      subtitle: "Windows 11 64-bit only on Steam at launch — every other platform is unannounced.",
      ctas: [
        { label: "Steam AppID", href: "/steam" },
        { label: "System requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die platforms at launch are Windows 11 64-bit only, distributed through Steam under AppID 4917440 by Sigma Labs. There is no confirmed Mac, Linux, or console release as of the 2026-09-27 research date. The store page does not announce Steam Deck verification, controller support claims, or crossplay, and those answers remain unannounced. The title is Steam-exclusive in terms of storefront at launch.",
    keyFacts: [
      { label: "Operating system", value: "Windows 11 64-bit only" },
      { label: "Architecture", value: "64-bit" },
      { label: "Storefront", value: "Steam" },
      { label: "Steam AppID", value: "4917440" },
      { label: "Storefront exclusivity", value: "Steam-only at launch" },
      { label: "Steam Deck verification label", value: "Not announced" },
    ],
    modules: [
      {
        id: "platform-row",
        type: "data-table",
        heading: "Platform status as of 2026-09-27",
        columns: [
          { key: "field", label: "Field" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { field: "Operating system", status: "Windows 11 64-bit only" },
          { field: "Architecture", status: "64-bit" },
          { field: "Storefront", status: "Steam" },
          { field: "Steam AppID", status: "4917440" },
          { field: "Storefront exclusivity", status: "Steam-only at launch" },
          { field: "Day-one parity with other platforms", status: "Not applicable — only one platform announced" },
          { field: "Steam Deck verification label", status: "Not announced" },
        ],
      },
      {
        id: "unannounced",
        type: "prose",
        heading: "Platforms not announced as of research date",
        body:
          "Every platform and platform-adjacent capability for MOGGED Looksmaxx or Die that is not on the store page as of 2026-09-27 is listed here. macOS, Linux, Steam Deck verified status, console versions (PlayStation, Xbox, Nintendo Switch), mobile versions (iOS, Android), controller support scope, crossplay, and cloud streaming services (GeForce Now, Xbox Cloud, PlayStation Plus cloud) are not announced. The 'Windows 11 64-bit only' line is the literal language used on the store page; that phrasing excludes Windows 10, Windows 8/7, Windows Server SKUs, 32-bit Windows installs, macOS, Linux distributions, and SteamOS-as-an-OS from the launch-day support scope.",
      },
    ],
    faqIds: ["mlw-platforms-mac", "mlw-platforms-console", "mlw-platforms-linux", "mlw-platforms-deck"],
    relatedPageIds: ["steam-availability", "release-status", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "early-access",
    translationKey: "early-access",
    locale: "en-US",
    routeKind: "fixed",
    slug: "early-access",
    url: "/early-access",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Early Access: Roadmap, Additions, and 1.0 Window",
    seoTitle:
      "MOGGED Looksmaxx or Die Early Access | Roadmap and 1.0 Window",
    metaDescription:
      "MOGGED Looksmaxx or Die early access is a 3-6 month Steam window. Read Sigma Labs' planned enemy, item, location, AI, audio, and stability additions.",
    summary:
      "Early Access plan for MOGGED Looksmaxx or Die: approximately 3–6 months after October 1, 2026, with a published list of planned additions and unannounced items clearly labelled.",
    hero: {
      eyebrow: "Early Access",
      subtitle: "Approximately 3–6 months after the October 1, 2026 launch — additions roadmap inside.",
      ctas: [
        { label: "Release window", href: "/release" },
        { label: "Multiplayer", href: "/multiplayer" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die early access is planned to last approximately 3 to 6 months after the October 1, 2026 launch on Steam, per Sigma Labs' store page. During that window, Sigma Labs plans to expand the enemy roster, add more items and locations, refine AI, expand audio and localization, improve accessibility, and harden multiplayer stability. Standards, pricing, and exact timing remain subject to change. Unannounced additions beyond the published EA scope are labelled not announced as of research date.",
    keyFacts: [
      { label: "EA launch", value: "October 1, 2026" },
      { label: "EA length", value: "Approximately 3–6 months" },
      { label: "1.0 release date", value: "Not announced as of 2026-09-27" },
      { label: "Post-EA price change", value: "Not announced" },
      { label: "Save carry-over policy", value: "Not announced" },
    ],
    modules: [
      {
        id: "ea-length",
        type: "prose",
        heading: "Early Access length and 1.0 window",
        body:
          "Sigma Labs' Steam store page for AppID 4917440 frames the early access window for MOGGED Looksmaxx or Die as approximately 3 to 6 months, with the early access launch on October 1, 2026 and a planned 1.0 release before mid-2027 if the window holds. The SteamDB dated snapshot for the same AppID mirrors the same launch and EA framing. This is a planning range, not a fixed release date. The 1.0 ship date has not been announced as of 2026-09-27.",
      },
      {
        id: "planned-additions",
        type: "entity-grid",
        heading: "What is planned during Early Access",
        items: [
          { title: "Expanded enemy roster", summary: "Beyond the 15 enemies shipped at launch.", href: "/enemies" },
          { title: "More items and grocery stock", summary: "Wider pool of MAXMART supplies.", href: "/items" },
          { title: "Additional confirmed locations", summary: "Beyond the 5 shipped at launch.", href: "/locations" },
          { title: "Refined AI", summary: "For the ugliest-player stalker and the hostile roster.", href: "/enemies" },
          { title: "Audio and music expansion", summary: "Wider mix and additional tracks.", href: "/gameplay" },
          { title: "Wider localization", summary: "Beyond the 15 interface languages on the store page.", href: "/about" },
          { title: "Accessibility improvements", summary: "Specific settings are not announced as of research date.", href: "/about" },
          { title: "Multiplayer stability", summary: "Hardening for 1–8 player proximity voice-chat co-op.", href: "/multiplayer" },
          { title: "Balance tuning", summary: "Day/night extraction loop passes.", href: "/gameplay" },
        ],
      },
    ],
    faqIds: ["mlw-ea-additions", "mlw-ea-length", "mlw-ea-price", "mlw-ea-saves", "mlw-ea-roadmap"],
    relatedPageIds: ["release-status", "multiplayer", "co-op", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die System Requirements: PC Specs and Status",
    seoTitle:
      "MOGGED Looksmaxx or Die System Requirements | PC Specs and Status",
    metaDescription:
      "MOGGED Looksmaxx or Die system requirements: Windows 11 64-bit is the only confirmed OS. Min and recommended PC specs are not announced as of 2026-09-27.",
    summary:
      "System requirements for MOGGED Looksmaxx or Die: only the operating system (Windows 11 64-bit) is published; hardware values are not announced.",
    hero: {
      eyebrow: "System requirements",
      subtitle: "Windows 11 64-bit only — hardware spec table not yet published by Sigma Labs.",
      ctas: [
        { label: "Steam AppID", href: "/steam" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die system requirements currently confirm only the operating system: Windows 11 64-bit, as listed on Sigma Labs' Steam store page for AppID 4917440. Minimum and recommended PC specs (CPU, GPU, RAM, disk space) are not announced as of 2026-09-27, and the Steam store listing does not currently expose explicit min or recommended spec values to the public search snippet. Revisit the Steam page when Sigma Labs publishes a hardware table.",
    keyFacts: [
      { label: "Operating system", value: "Windows 11 64-bit" },
      { label: "CPU", value: "Not announced as of 2026-09-27" },
      { label: "GPU", value: "Not announced as of 2026-09-27" },
      { label: "RAM", value: "Not announced as of 2026-09-27" },
      { label: "Disk space", value: "Not announced as of 2026-09-27" },
      { label: "DirectX version", value: "Not announced as of 2026-09-27" },
      { label: "Network", value: "Not announced as of 2026-09-27" },
    ],
    modules: [
      {
        id: "spec-row",
        type: "data-table",
        heading: "Spec table as of 2026-09-27",
        columns: [
          { key: "requirement", label: "Requirement" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { requirement: "Operating system", value: "Windows 11 64-bit" },
          { requirement: "CPU", value: "Not announced as of 2026-09-27" },
          { requirement: "GPU", value: "Not announced as of 2026-09-27" },
          { requirement: "RAM", value: "Not announced as of 2026-09-27" },
          { requirement: "Disk space", value: "Not announced as of 2026-09-27" },
          { requirement: "DirectX version", value: "Not announced as of 2026-09-27" },
          { requirement: "Network", value: "Not announced as of 2026-09-27" },
        ],
      },
      {
        id: "not-announced",
        type: "prose",
        heading: "What is not announced yet",
        body:
          "Minimum CPU, minimum GPU, minimum RAM, recommended CPU and GPU pairings, recommended RAM, download size and storage requirement, DirectX or Vulkan runtime version, controller driver support and Steam Input controller profiles, Steam Deck Verified status, and macOS / Linux / SteamOS native packaging are all not announced as of 2026-09-27. The store page does not currently expose explicit min or recommended spec values to the public search snippet, so any third-party 'estimated' spec list floating outside the store is not an official source.",
      },
    ],
    faqIds: ["mlw-spec-gpu", "mlw-spec-deck", "mlw-spec-disk", "mlw-spec-windows10"],
    relatedPageIds: ["steam-availability", "platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "multiplayer",
    translationKey: "multiplayer",
    locale: "en-US",
    routeKind: "fixed",
    slug: "multiplayer",
    url: "/multiplayer",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Multiplayer: 1-8 Player Online Co-op and Voice Chat",
    seoTitle:
      "MOGGED Looksmaxx or Die Multiplayer | 1–8 Player Online Co-op",
    metaDescription:
      "MOGGED Looksmaxx or Die multiplayer is 1-8 player online co-op with proximity voice chat. Matchmaking and crossplay are not announced as of research date.",
    summary:
      "Multiplayer overview for MOGGED Looksmaxx or Die: 1–8 player online co-op with proximity voice chat; matchmaking and crossplay are not announced.",
    hero: {
      eyebrow: "Multiplayer",
      subtitle: "1–8 player online co-op with proximity voice chat — the party-raid frame for generated frat-house nights.",
      ctas: [
        { label: "Co-op modes", href: "/co-op" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die multiplayer runs as 1 to 8 player online co-op with proximity voice chat, framed by Sigma Labs as a survival extraction horror comedy. Party raids on generated frat-house locations are the multiplayer shape on the official Steam store page. Matchmaking, region lock, and cross-platform play are not announced as of 2026-09-27.",
    keyFacts: [
      { label: "Player count", value: "1–8 players per session" },
      { label: "Mode", value: "Online co-op with proximity voice chat" },
      { label: "Raid frame", value: "Generated frat-house parties at night" },
      { label: "Matchmaking", value: "Not announced" },
      { label: "Crossplay", value: "Not announced (Windows PC only)" },
    ],
    modules: [
      {
        id: "raid-frame",
        type: "prose",
        heading: "Proximity voice chat and the party-raid frame",
        body:
          "Proximity voice chat in MOGGED Looksmaxx or Die is the same mechanic that drives the comedy tone: a player sneaking through a generated party hears only nearby allies, while a player breaking stealth mid-raid can be heard across the whole map. That single mechanic is what Sigma Labs leans on to make the 1–8 player online co-op sessions feel like a chaotic horror-comedy raid rather than a tactical shooter. The store description uses 'proximity voice chat co-op' as a tag, which means the game's official framing of multiplayer is the party-raid loop, not a competitive or free-for-all mode. There is no PvP mode listed on the store page.",
        links: [
          { label: "Co-op modes", href: "/co-op" },
          { label: "Gameplay loop", href: "/gameplay" },
        ],
      },
      {
        id: "multiplayer-summary",
        type: "data-table",
        heading: "Multiplayer scope as of 2026-09-27",
        columns: [
          { key: "field", label: "Field" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { field: "Player count", status: "1–8 players" },
          { field: "Voice chat", status: "Proximity voice chat (built-in)" },
          { field: "Genre tags", status: "Survival, Horror, Comedy" },
          { field: "PvP mode", status: "Not listed on the Steam store" },
          { field: "Matchmaking / region lock", status: "Not announced" },
          { field: "Crossplay", status: "Not announced (Windows PC only)" },
          { field: "Private lobbies", status: "Not announced" },
        ],
      },
    ],
    faqIds: ["mlw-multiplayer-count", "mlw-multiplayer-proximity", "mlw-multiplayer-region", "mlw-multiplayer-crossplay", "mlw-multiplayer-lobbies"],
    relatedPageIds: ["co-op", "gameplay-loop", "early-access"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "co-op",
    translationKey: "co-op",
    locale: "en-US",
    routeKind: "fixed",
    slug: "co-op",
    url: "/co-op",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die multiplayer modes and solo play",
    seoTitle:
      "MOGGED Looksmaxx or Die Co-op Modes | Solo Play and Online Co-op",
    metaDescription:
      "MOGGED Looksmaxx or Die multiplayer modes include single-player and 1-8 player online co-op with proximity voice chat. Family sharing works; LAN is not announced.",
    summary:
      "Co-op modes for MOGGED Looksmaxx or Die: single-player and 1–8 player online co-op with proximity voice chat; LAN, local split-screen and crossplay are not announced.",
    hero: {
      eyebrow: "Co-op modes",
      subtitle: "Single-player and 1–8 player online co-op — both confirmed; everything else is not announced.",
      ctas: [
        { label: "Multiplayer overview", href: "/multiplayer" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die multiplayer modes include both single-player and 1-8 player online co-op with proximity voice chat, per Sigma Labs' Steam store page. Steam family sharing is supported on the platform side. Local split-screen, LAN-only sessions, and crossplay are not announced as of 2026-09-27. Whether you can play with strangers or only with a pre-formed party is not announced.",
    keyFacts: [
      { label: "Single-player", value: "Confirmed" },
      { label: "Online co-op", value: "1–8 players with proximity voice chat" },
      { label: "Family sharing", value: "Supported (Steam platform feature)" },
      { label: "Local split-screen / couch co-op", value: "Not announced" },
      { label: "LAN-only sessions", value: "Not announced" },
      { label: "Crossplay", value: "Not announced" },
    ],
    modules: [
      {
        id: "modes",
        type: "entity-grid",
        heading: "Confirmed access paths",
        items: [
          { title: "Single-player", summary: "Day/night softmaxx-and-extract loop plays solo.", href: "/gameplay" },
          { title: "Online co-op (1–8 players)", summary: "Party-raid frame on generated frat-house parties.", href: "/multiplayer" },
          { title: "Family-shared access on Steam", summary: "Standard Steam family-sharing rules.", href: "/steam" },
        ],
      },
      {
        id: "what-is-not",
        type: "prose",
        heading: "What is not announced for co-op",
        body:
          "Local split-screen or couch co-op, LAN-only sessions, crossplay between Windows PC and any other platform, open matchmaking with strangers (versus invite-only), server-region selection, cross-progression between Steam accounts or Steam families, and modding tools or dedicated-server binaries are not announced as of 2026-09-27. The store description treats single-player and 1-8 player online co-op as the two confirmed modes. Family sharing is a Steam-platform feature rather than a Sigma Labs feature, so it works under the same Steam family-sharing rules that apply to any other co-op title.",
      },
    ],
    faqIds: ["mlw-coop-solo", "mlw-coop-couch", "mlw-coop-mic", "mlw-coop-family", "mlw-coop-strangers"],
    relatedPageIds: ["multiplayer", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "gameplay-loop",
    translationKey: "gameplay-loop",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Gameplay: Day/Night Loop, Extraction, and Quota",
    seoTitle:
      "MOGGED Looksmaxx or Die Gameplay | Day/Night Loop and Quota",
    metaDescription:
      "MOGGED Looksmaxx or Die gameplay: softmaxx by day, extract from frat-house parties at night, sell at 5am curfew. True Adam endpoint and group quota curve inside.",
    summary:
      "Gameplay overview for MOGGED Looksmaxx or Die: a day/night loop with softmaxx by day, extraction raids at night, and a 5am curfew sell phase.",
    hero: {
      eyebrow: "Gameplay",
      subtitle: "Softmaxx by day, extract at night, sell at 5am curfew — escalating group looks quota is the loop.",
      ctas: [
        { label: "Peptides", href: "/peptides" },
        { label: "Items", href: "/items" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die gameplay is a day/night loop: softmaxx during the day, then extract loot from procedurally generated frat-house parties at night, then sell excess gear at a 5am curfew. The escalating group looks quota forces the party to balance risk and reward across runs. A True Adam endpoint is mentioned in the official description. Live-balance numbers may shift during Early Access; specific stat values are not announced unless the store page confirms them.",
    keyFacts: [
      { label: "Day phase", value: "Softmaxx routine (skincare, MAXMART, Basement Lab prep)" },
      { label: "Night phase", value: "Procedurally generated frat-house extraction raids" },
      { label: "Sell phase", value: "Sell excess gear at 5am curfew" },
      { label: "Progression", value: "Escalating group looks quota" },
      { label: "Late-game endpoint", value: "True Adam (exact trigger not announced)" },
    ],
    modules: [
      {
        id: "day-phase",
        type: "prose",
        heading: "Day phase and softmaxx",
        body:
          "The day phase of MOGGED Looksmaxx or Die is the 'softmaxx' window. The party uses daylight hours to gather supplies at home base, mix peptides in the Basement Lab, stock up at MAXMART, and prepare for the night raid. 'Softmaxx' is the in-fiction label for the daytime looksmaxxing routine that drives the game's escalating looks-stats mechanic. The store page ties the routine to peptide brewing in the Basement Lab, grocery shopping at MAXMART, and inventory prep at the Apartment. The 8 looks stats rise and fall based on what the player mixes, buys, and consumes during the day.",
      },
      {
        id: "night-phase",
        type: "prose",
        heading: "Night phase and extraction",
        body:
          "The night phase is the multiplayer raid frame. The party leaves the Apartment, enters a procedurally generated frat-house party, and extracts loot under a proximity-voice-chat pressure cooker. Two of the six levels in MOGGED Looksmaxx or Die are procedurally generated, and the night-phase raid locations sit inside that procedural envelope. A run begins when the party enters a generated frat-house party and ends when the party decides to extract or gets wiped. Each generated layout shuffles enemy placements, loot spawns, and exit routes, so replays are not memorized runs.",
      },
      {
        id: "curfew-quota",
        type: "prose",
        heading: "5am curfew and escalating quota",
        body:
          "The 5am curfew is the sell phase that closes each in-game day. Whatever the party extracted has to be sold before 5am, and the quota the group has to clear rises run over run. Selling before 5am is mandatory; loot the party cannot sell at curfew is wasted. The closer the party pushes extraction to the 5am mark, the more loot they can carry out, but the more time the hostile roster has to swarm the raid. The escalating group looks quota is what forces the party to take riskier runs over time. Sigma Labs' store page mentions a True Adam endpoint that the player can chase by climbing the quota curve.",
      },
    ],
    faqIds: ["mlw-gameplay-cycle", "mlw-gameplay-true-adam", "mlw-gameplay-friends", "mlw-gameplay-pvp", "mlw-gameplay-pace"],
    relatedPageIds: ["peptides", "items", "enemies", "locations", "multiplayer"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "peptides",
    translationKey: "peptides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "peptides",
    url: "/peptides",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Peptides: Brewing, 19 Side Effects, and the True Adam Endpoint",
    seoTitle:
      "MOGGED Looksmaxx or Die Peptides | 19 Side Effects and True Adam",
    metaDescription:
      "MOGGED Looksmaxx or Die peptides are brewed in the Basement Lab from groceries and research chemicals. Read about the 19 side effects and True Adam endpoint.",
    summary:
      "Peptide system for MOGGED Looksmaxx or Die: 19 side effects, brewing in the Basement Lab from groceries and research chemicals, with a True Adam late-game endpoint.",
    hero: {
      eyebrow: "Peptides",
      subtitle: "19 side effects, brewed in the Basement Lab from groceries plus research chemicals — True Adam endpoint.",
      ctas: [
        { label: "Items", href: "/items" },
        { label: "Locations", href: "/locations" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die peptides are brewed in the Basement Lab by mixing groceries with research chemicals. The official Steam store page lists 19 peptide side effects in total and points toward a 'True Adam' endpoint as the late-game goal. Specific peptide recipes are not officially enumerated as of 2026-09-27, so any community recipe should be treated as Early Access subject to change. The peptide system is a core part of the escalating group looks-quota progression.",
    keyFacts: [
      { label: "Brewing site", value: "Basement Lab" },
      { label: "Inputs", value: "Groceries + research chemicals" },
      { label: "Side effects", value: "19 peptide side effects" },
      { label: "Late-game endpoint", value: "True Adam" },
      { label: "Recipe book", value: "Not announced as of 2026-09-27" },
    ],
    modules: [
      {
        id: "what-peptides-are",
        type: "prose",
        heading: "What MOGGED Looksmaxx or Die peptides are",
        body:
          "MOGGED Looksmaxx or Die peptides are crafted consumables that drive the game's escalating group looks-quota progression. According to the official Steam store page for AppID 4917440, Sigma Labs frames peptides as the next step beyond the day-time softmaxx routine: once the standard skincare and shopping actions plateau, the group mixes groceries with research chemicals in the Basement Lab to brew stronger effects on the eight looks stats. The Basement Lab is the only location listed by the official store description as a brewing site.",
      },
      {
        id: "side-effects",
        type: "prose",
        heading: "Side effects and the True Adam endpoint",
        body:
          "The official Steam store page lists 19 peptide side effects as the total number players can roll, stack, or trigger while brewing and using peptides. Side effects cover both cosmetic and biomechanical outcomes and feed directly into the looks-stat progression that gates the group quota. The same store description points to 'True Adam' as a late-game endpoint. The phrase is described as a target state the group is working toward as the quota escalates, not a separate ending or cinematic. Whether True Adam is reached by completing the quota, surviving a final run, or triggering a particular peptide stack is not announced as of 2026-09-27.",
      },
    ],
    faqIds: ["mlw-peptides-brew", "mlw-peptides-true-adam", "mlw-peptides-permanent", "mlw-peptides-removal", "mlw-peptides-recipes"],
    relatedPageIds: ["items", "locations", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "items",
    translationKey: "items",
    locale: "en-US",
    routeKind: "fixed",
    slug: "items",
    url: "/items",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Items: 126 Total, 7 Deployable Upgrades, and MAXMART Shopping",
    seoTitle:
      "MOGGED Looksmaxx or Die Items | 126 Total and 7 Upgrades",
    metaDescription:
      "MOGGED Looksmaxx or Die items run 126 total: 64 main plus 62 grocery, with 7 deployable upgrades. Read how MAXMART shopping fits Early Access.",
    summary:
      "Item counts for MOGGED Looksmaxx or Die: 126 items (64 main + 62 grocery) plus 7 deployable upgrades, with MAXMART as the named shopping context.",
    hero: {
      eyebrow: "Items",
      subtitle: "126 items, 7 deployable upgrades — MAXMART is the shopping context.",
      ctas: [
        { label: "Peptides", href: "/peptides" },
        { label: "Locations", href: "/locations" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die items total 126 in the published Early Access scope: 64 main items plus 62 grocery items, with 7 deployable upgrades layered on top. MAXMART is the named shopping context where groceries and main items are stocked. Per-item stat lines are subject to Early Access tuning as of 2026-09-27, so the published counts are the only official numbers worth quoting. Item counts come from the official Steam store page and are mirrored by the SteamDB dated snapshot.",
    keyFacts: [
      { label: "Total items", value: "126" },
      { label: "Main items", value: "64" },
      { label: "Grocery items", value: "62" },
      { label: "Deployable upgrades", value: "7" },
      { label: "Shopping context", value: "MAXMART" },
    ],
    modules: [
      {
        id: "counts",
        type: "data-table",
        heading: "Item counts as of 2026-09-27",
        columns: [
          { key: "bucket", label: "Bucket" },
          { key: "count", label: "Count" },
        ],
        rows: [
          { bucket: "Main items", count: "64" },
          { bucket: "Grocery items", count: "62" },
          { bucket: "Total items", count: "126" },
          { bucket: "Deployable upgrades", count: "7 (layered on top)" },
          { bucket: "Shopping context", count: "MAXMART" },
        ],
      },
      {
        id: "deployables",
        type: "prose",
        heading: "Deployable upgrades and how items interact",
        body:
          "The 7 deployable upgrades in MOGGED Looksmaxx or Die are layered on top of the 126-item pool rather than counted inside it. The official store copy distinguishes deployables from main items by describing them as something a group brings into a run, which matches the extraction-raid loop where players prep before 5am curfew and then sell excess gear after the run ends. MAXMART is the named shopping context where groceries and main items are stocked. Players buy and restock there during the day phase before pushing into the procedurally generated night-time parties. Stat lines, drop rates, and per-upgrade effects are subject to Early Access tuning as of research date.",
      },
    ],
    faqIds: ["mlw-items-count", "mlw-items-weapons", "mlw-items-wiki", "mlw-items-craft", "mlw-items-shop"],
    relatedPageIds: ["peptides", "locations", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "enemies",
    translationKey: "enemies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "enemies",
    url: "/enemies",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Enemies: 15-Hostile Roster and the Ugliest-Player Stalker",
    seoTitle:
      "MOGGED Looksmaxx or Die Enemies | 15-Hostile Roster and Stalker",
    metaDescription:
      "MOGGED Looksmaxx or Die enemies total 15 in the launch roster, with a stalker that targets the ugliest active player. Read the comedy-horror framing and EA scope.",
    summary:
      "Enemy roster for MOGGED Looksmaxx or Die: 15 hostiles at launch and a ugliest-player stalker mechanic; per-enemy movesets are not announced.",
    hero: {
      eyebrow: "Enemies",
      subtitle: "15 hostiles, one ugliest-player stalker — comedy-horror framing.",
      ctas: [
        { label: "Locations", href: "/locations" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die enemies total 15 in the official Early Access roster, framed as a mix of comedy and horror. The headline mechanic is a stalking entity that targets the ugliest active player in a co-op session. Per-enemy movesets, AI behaviour details, and boss structure are not announced as of 2026-09-27, so any wiki-style bestiary should be treated as Early Access subject to change. Only the roster size and the stalker rule are officially published.",
    keyFacts: [
      { label: "Launch roster size", value: "15 enemies" },
      { label: "Headline mechanic", value: "Ugliest-player stalker" },
      { label: "Per-enemy movesets", value: "Not announced as of 2026-09-27" },
      { label: "Boss structure", value: "Not announced as of 2026-09-27" },
      { label: "EA addition", value: "Wider roster planned during Early Access" },
    ],
    modules: [
      {
        id: "roster",
        type: "prose",
        heading: "Confirmed MOGGED Looksmaxx or Die enemies roster",
        body:
          "MOGGED Looksmaxx or Die lists 15 enemies in its official Early Access scope, per the Steam store page for AppID 4917440. Sigma Labs frames the hostile roster as a mix of comedy and horror, leaning on the looksmaxxing-subculture setting to drive the threat design. Each enemy is built to challenge the player during the night-time extraction raids on procedurally generated frat-house parties, not the day-time softmaxx routine. The roster size is the only confirmed number on the store page. Names, silhouettes, attack patterns, and per-enemy behaviour are not announced as of 2026-09-27.",
      },
      {
        id: "stalker",
        type: "callout",
        tone: "tip",
        title: "The ugliest-player stalker mechanic",
        body: "A stalking entity that targets the ugliest active player in a co-op session. The mechanic is unique because the threat target is dynamic rather than fixed: the entity selects whoever currently ranks lowest on the eight looks stats among the players currently in the run. Whether the stalker counts toward the 15-enemy roster or sits on top of it is not announced as of 2026-09-27.",
      },
    ],
    faqIds: ["mlw-enemies-count", "mlw-enemies-stalker", "mlw-enemies-random", "mlw-enemies-fight", "mlw-enemies-boss"],
    relatedPageIds: ["locations", "gameplay-loop", "co-op"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "locations",
    translationKey: "locations",
    locale: "en-US",
    routeKind: "fixed",
    slug: "locations",
    url: "/locations",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Locations: 5 Confirmed Maps, Levels, and Procedural Generation",
    seoTitle:
      "MOGGED Looksmaxx or Die Locations | All 5 Maps and Levels",
    metaDescription:
      "MOGGED Looksmaxx or Die locations include 5 confirmed maps: Apartment, MAXMART, The Yard, Frat House, Basement Lab. Read the 2-of-6 procedural level rule.",
    summary:
      "Locations for MOGGED Looksmaxx or Die: 5 confirmed maps (Apartment, MAXMART, The Yard, Frat House, Basement Lab) across 6 levels, with 2 procedurally generated.",
    hero: {
      eyebrow: "Locations",
      subtitle: "5 maps, 6 levels, 2 procedurally generated — Apartment, MAXMART, The Yard, Frat House, Basement Lab.",
      ctas: [
        { label: "Items", href: "/items" },
        { label: "Peptides", href: "/peptides" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die locations run 5 confirmed spots: Apartment, MAXMART, The Yard, Frat House, and Basement Lab. Across those 5 locations the game runs 6 levels in total, of which 2 are procedurally generated. Per-location layouts beyond the name and one-line role are subject to Early Access tuning as of 2026-09-27, so the official store copy is the only reliable source for what each location does. Only the 5 names, the 6-level total, and the 2-of-6 procedural split are confirmed.",
    keyFacts: [
      { label: "Confirmed locations", value: "5 (Apartment, MAXMART, The Yard, Frat House, Basement Lab)" },
      { label: "Levels total", value: "6" },
      { label: "Procedurally generated", value: "2 of 6" },
      { label: "Per-location layouts", value: "Not announced beyond name and role" },
    ],
    modules: [
      {
        id: "locations-table",
        type: "data-table",
        heading: "Confirmed locations and roles",
        columns: [
          { key: "location", label: "Location" },
          { key: "role", label: "Role in the loop" },
        ],
        rows: [
          { location: "Apartment", role: "Day-time hub for self-care, looks-stat management, and pre-run prep." },
          { location: "MAXMART", role: "Named shopping context for groceries and main items." },
          { location: "The Yard", role: "Mid-day movement and small-encounter space." },
          { location: "Frat House", role: "Night-time extraction target with procedurally generated parties." },
          { location: "Basement Lab", role: "Brewing site for peptides; tied to the 19 side effects and True Adam endpoint." },
        ],
      },
      {
        id: "levels-procedural",
        type: "prose",
        heading: "Levels and procedural generation",
        body:
          "MOGGED Looksmaxx or Die runs 6 levels in total across its 5 locations, of which 2 are procedurally generated. The store page makes the level count and the procedural split explicit, and it pairs the procedural framing with the night-time extraction raids — the procedurally generated levels are the Frat House parties players raid before the 5am curfew. Procedural generation here is scoped to layout, not to enemy spawn tables or loot tables. The 4 non-procedural levels cover the day-time routine, shopping, and brewing.",
      },
    ],
    faqIds: ["mlw-locations-count", "mlw-locations-random", "mlw-locations-lab", "mlw-locations-maxmart", "mlw-locations-hub"],
    relatedPageIds: ["items", "peptides", "enemies", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "MOGGED Looksmaxx or Die — guides index",
    seoTitle: "MOGGED Looksmaxx or Die Guides | Early Access Reference Hub",
    metaDescription:
      "Browse the MOGGED Looksmaxx or Die guide index for release, platforms, multiplayer, gameplay, peptides, items, enemies, locations, achievements and system requirements.",
    summary:
      "Guide index for MOGGED Looksmaxx or Die: every fixed page and reference surface grouped by cluster.",
    hero: {
      eyebrow: "Guides",
      subtitle: "Browse every fixed page and reference surface for MOGGED Looksmaxx or Die.",
      ctas: [
        { label: "About the game", href: "/about" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "The MOGGED Looksmaxx or Die guide index groups the Early Access launch hub pages into identity, multiplayer, gameplay, and system reference clusters.",
    keyFacts: [
      { label: "Locale", value: "en-US" },
      { label: "Fixed pages", value: "14" },
      { label: "Reference pages", value: "items, peptides, enemies, locations, achievements" },
    ],
    modules: [
      {
        id: "guides-list",
        type: "entity-grid",
        heading: "Browse all guides",
        items: [
          { title: "About the game", summary: "Identity, genre framing, Early Access plan.", href: "/about" },
          { title: "Release date", summary: "October 1, 2026 Early Access launch.", href: "/release" },
          { title: "Steam AppID", summary: "Canonical Steam listing on AppID 4917440.", href: "/steam" },
          { title: "Platforms", summary: "Windows PC scope; Mac/Linux/consoles unannounced.", href: "/platforms" },
          { title: "Early Access", summary: "3–6 month EA window and planned additions.", href: "/early-access" },
          { title: "System requirements", summary: "Windows 11 64-bit only; hardware not yet announced.", href: "/system-requirements" },
          { title: "Multiplayer", summary: "1–8 player proximity voice-chat co-op.", href: "/multiplayer" },
          { title: "Co-op modes", summary: "Single-player and online co-op access paths.", href: "/co-op" },
          { title: "Gameplay loop", summary: "Softmaxx by day, extract at night, 5am curfew.", href: "/gameplay" },
          { title: "Peptides", summary: "19 side effects and the True Adam endpoint.", href: "/peptides" },
          { title: "Items", summary: "126 items and 7 deployable upgrades.", href: "/items" },
          { title: "Enemies", summary: "15 hostile roster and stalker rule.", href: "/enemies" },
          { title: "Locations", summary: "Apartment, MAXMART, The Yard, Frat House, Basement Lab.", href: "/locations" },
          { title: "Achievements", summary: "82 Steam achievements and flag categories.", href: "/achievements" },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "release-status", "gameplay-loop"],
    schemaTypes: ["CollectionPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-27",
  },
  {
    id: "achievements",
    translationKey: "achievements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "achievements",
    url: "/achievements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "MOGGED Looksmaxx or Die Achievements: 82 Total, Multiplayer Flags, and What Is Not Announced",
    seoTitle:
      "MOGGED Looksmaxx or Die Achievements | 82 Total and EA Scope",
    metaDescription:
      "MOGGED Looksmaxx or Die achievements total 82 Steam achievements at launch. Read what is officially confirmed and what is not announced yet.",
    summary:
      "Achievements for MOGGED Looksmaxx or Die: 82 Steam achievements at launch with multiplayer and ugliest-player flag categories; per-achievement details are not announced.",
    hero: {
      eyebrow: "Achievements",
      subtitle: "82 Steam achievements at launch — multiplayer and ugliest-player flag categories.",
      ctas: [
        { label: "Gameplay loop", href: "/gameplay" },
        { label: "Multiplayer", href: "/multiplayer" },
      ],
    },
    quickAnswer:
      "MOGGED Looksmaxx or Die achievements total 82 Steam achievements in the official Early Access scope on AppID 4917440. Per-achievement names, descriptions, and unlock conditions are not announced as of 2026-09-27, so any community achievement list should be treated as Early Access subject to change. The store description also points to multiplayer and ugliest-player flag categories, which suggests at least some achievements track co-op and looks-stat state. Only the 82 count and those two flag categories are confirmed.",
    keyFacts: [
      { label: "Total achievements", value: "82 Steam achievements" },
      { label: "Multiplayer flags", value: "Confirmed category" },
      { label: "Ugliest-player flags", value: "Confirmed category" },
      { label: "Per-achievement names", value: "Not announced as of 2026-09-27" },
      { label: "Hidden / missable structure", value: "Not announced as of 2026-09-27" },
    ],
    modules: [
      {
        id: "confirmed",
        type: "prose",
        heading: "What is confirmed",
        body:
          "MOGGED Looksmaxx or Die ships with 82 Steam achievements in the launch Early Access scope, per the official Steam store page. The 82 count is the only officially published number. The Steam store description also calls out two achievement-flag categories that map to in-game state: multiplayer flags (track co-op-session state, fitting the 1-8 player proximity voice-chat co-op scope and the single-player + online co-op mode split) and ugliest-player flags (track the looks-stat ranking mechanic that drives the ugliest-player stalker targeting).",
      },
      {
        id: "not-announced",
        type: "prose",
        heading: "What is not announced yet",
        body:
          "Per-achievement names, descriptions, and icon sets; exact unlock conditions, hidden-versus-visible status, and missable-versus-unmissable structure; whether the multiplayer-flag achievements require a full 1-8 player co-op session or scale to smaller parties; whether the ugliest-player-flag achievements trigger on a single run, on cumulative ranking, or on a specific quota threshold; and a post-launch achievement roadmap beyond the planned Early Access additions list are all not announced as of 2026-09-27.",
      },
    ],
    faqIds: ["mlw-achievements-count", "mlw-achievements-missable", "mlw-achievements-hidden", "mlw-achievements-coop"],
    relatedPageIds: ["gameplay-loop", "multiplayer", "co-op"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-27",
  },
];