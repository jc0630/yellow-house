export type SocialKey = "line" | "instagram" | "whatsapp" | "facebook" | "linkedin" | "x";

export interface SocialLinkConfig {
  key: SocialKey;
  label: string;
  /** Real official URL. Leave "" to hide this icon — never guess/fabricate a URL here. */
  url: string;
}

// Fill in real, verified URLs. Any entry left as "" is automatically hidden
// by <SocialLinks />, so it's safe to keep unused platforms in this list.
//
// TODO: line / instagram / whatsapp are set to "#" as a visible-but-inert
// placeholder so the floating icons render before the real accounts are
// ready — swap "#" for the actual URL as soon as you have it.
export const SOCIAL_LINKS: SocialLinkConfig[] = [
  { key: "line", label: "LINE", url: "#" },
  { key: "instagram", label: "Instagram", url: "#" },
  { key: "whatsapp", label: "WhatsApp", url: "#" },
  { key: "facebook", label: "Facebook", url: "" },
  { key: "linkedin", label: "LinkedIn", url: "" },
  { key: "x", label: "X", url: "" },
];
