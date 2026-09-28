import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "mixed",
  tokens: {
    pageBg: "#0E1117",
    surface1: "#161B22",
    surface2: "#1F2630",
    surface3: "#2A3140",
    surfaceInverse: "#F5F1EA",
    textPrimary: "#F5F5F7",
    textMuted: "#9BA3AF",
    textInverse: "#1A1A1F",
    textOnAccentPrimary: "#0E1117",
    textLink: "#FF7AB6",
    focusRing: "#FFD23F",
    line: "#2F3742",
    lineStrong: "#4A5364",
    accentPrimary: "#FF3D8A",
    accentSecondary: "#5CFF8B",
    accentBright: "#FFD23F",
    statusConfirmed: "#5CFF8B",
    statusCaution: "#FFB347",
    statusUnknown: "#B8A8FF",
  },
  typography: {
    headingFamily:
      "'Inter Tight', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    bodyFamily:
      "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "12px",
    borderWidth: "1px",
    shadow: "0 4px 14px rgba(0, 0, 0, 0.35)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "top left" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "dots", intensity: "low" },
} satisfies ThemeConfig;