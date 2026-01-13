import I18nKeys from "./src/locales/keys";
import type { Configuration, navLinkWithKey, navLinkWithLabel } from "./src/types/config";

const aoyukiConfig: Configuration = {
  title: "Aoyuki",
  subTitle: "Aoyuki Demo Site",
  brandTitle: "Aoyuki",

  description: "Demo Site",

  site: "https://localhost:4321",

  locale: "en", // set for website language and date format

  navLinks: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    } as navLinkWithKey,
    {
      nameKey: I18nKeys.nav_bar_timeline,
      href: "/timeline",
    } as navLinkWithKey,
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    } as navLinkWithKey,
    {
      label: 'GitHub',
      href: "https://github.com/wlft/aoyuki",
      external: true,
    } as navLinkWithLabel,
  ],

  username: "Aoyuki",
  sign: "Update in aoyuki.config.ts",
  avatarUrl: "https://dummyimage.com/512x512/000/70b0ff&text=Aoyuki",
  socialLinks: [
    {
      icon: "line-md:github",
      link: "https://github.com/wlft/aoyuki",
    },
    {
      icon: "material-symbols:globe",
      link: "https://aoyuki.wolfite.dev",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  tabTitleFormat: "{pageTitle} // {siteTitle}", // pageTitle, siteTitle, siteSubtitle
  tabTitleFormatFallback: "{siteTitle} // {siteSubtitle}", // if no post name is available (e.g., the home page) - siteTitle, siteSubtitle

  banners: [
    {
      src: "/assets/images/banners/137858962_p0_master1200.jpg",
      credit: { text: "「忘れて。」 - ばなこ武丸", url: "https://www.pixiv.net/en/artworks/137858962" },
    },
    {
      src: "/assets/images/banners/137642238_p0_master1200.jpg",
      credit: { text: "Dus Sahara Concept - Gilsun", url: "https://www.pixiv.net/en/artworks/137642238" },
    },
    {
      src: "/assets/images/banners/138283711_p0_master1200.jpg",
      credit: { text: "So far from me now - TheProtagonists", url: "https://www.pixiv.net/en/artworks/138283711" },
    },
    {
      src: "/assets/images/banners/137150734_p1_master1200.jpg",
      credit: { text: "Moonlight Storm Concept - Gilsun", url: "https://www.pixiv.net/en/artworks/137150734" },
    },
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default aoyukiConfig;