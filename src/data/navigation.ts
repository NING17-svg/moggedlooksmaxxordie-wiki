import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  group?: string;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" }, group: "launch" },
  { href: "/release", labels: { "en-US": "Release" }, group: "launch" },
  { href: "/steam", labels: { "en-US": "Steam" }, group: "launch" },
  { href: "/platforms", labels: { "en-US": "Platforms" }, group: "launch" },
  { href: "/early-access", labels: { "en-US": "Early Access" }, group: "launch" },
  { href: "/multiplayer", labels: { "en-US": "Multiplayer" }, group: "coop" },
  { href: "/co-op", labels: { "en-US": "Co-op" }, group: "coop" },
  { href: "/gameplay", labels: { "en-US": "Gameplay" }, group: "gameplay" },
  { href: "/peptides", labels: { "en-US": "Peptides" }, group: "gameplay" },
  { href: "/items", labels: { "en-US": "Items" }, group: "gameplay" },
  { href: "/enemies", labels: { "en-US": "Enemies" }, group: "gameplay" },
  { href: "/locations", labels: { "en-US": "Locations" }, group: "gameplay" },
  { href: "/system-requirements", labels: { "en-US": "PC Specs" }, group: "system" },
  { href: "/achievements", labels: { "en-US": "Achievements" }, group: "system" },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}