import type I18nKeys from "../locales/keys";

interface navLink {
  href: string;
  external?: boolean;
};

export interface navLinkWithKey extends navLink {
  nameKey: I18nKeys;
  label: never;
}

export interface navLinkWithLabel extends navLink {
  label: string;
  nameKey: never;
}

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;

  site: string;

  locale: "en" | "zh-CN";

  navLinks: (navLinkWithKey|navLinkWithLabel)[];

  username: string;
  sign: string;
  avatarUrl: string;

  socialLinks: { icon: string; link: string }[];

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  tabTitleFormat: string;
  tabTitleFormatFallback: string;

  // banners: string[];
  banners: { src: string; credit?: { text : string, url ?: string } }[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP";
}

export type { Configuration };
