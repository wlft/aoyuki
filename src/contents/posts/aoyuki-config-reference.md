---
title: Aoyuki Config Reference
published: 2026-01-14
description: This post showcases how to configure Aoyuki.
cover: '/assets/images/covers/97896836_p0_master1200.jpg'
coverCredit: {text: "Silent Sea - Gilsun", url: 'https://www.pixiv.net/en/artworks/97896836'}
tags: [Example, Reference]
hex: '#2ca1e6'
category: Examples
draft: false

licenseName: "MIT License"
author: "wlft"
sourceLink: "https://github.com/wlft/aoyuki"
licenseUrl: "https://github.com/wlft/aoyuki/blob/main/LICENSE"
---

The config is a YAML file located at `./aoyuki.config.ts` and is used to configure the behaviour of Aoyuki. See the [Front Matter Reference](./1fe28798) for how to configure a blog post.

<br />

# Aoyuki Config Reference

## Title <string\> <required>

The title is a string that represents the title of the site. It is required.

## SubTitle <string\> <required>

The subtitle is a string that represents the subtitle of the site. It is required.

## Brand Title <string\> <required>

The brand title is a string that represents the brand title of the site. It is required.

## Description <string\> <required>

The description is a string that represents the description of the site. It is required.

## Site <string\> <required>

The site is a string that represents the site of the site. It is required.

## Locale <string\> <required>

The locale is a string that represents the locale of the site. It is required.

## NavLinks <array<object\>\> <required>

The navlinks are an array of objects that represents the navigation links of the site. It is required.

## Username <string\> <required>

The username is a string that represents the username of the site's author, see it in the side bar. It is required.

## Sign <string\> <required>

The sign is a string that represents the sign/bio of the site's author, see it in the side bar. It is required.

## Avatar URL <string\> <required>

The avatar URL is a string that represents the avatar URL of the site's author, see it in the side bar. It is required.

## Social Links <array<object\>\> <required>

The social links are an array of objects that represents the social links of the site's author, see it in the side bar. It is required.

## Max Sidebar Category Chip <number\> <required>

The max sidebar category chip is a number that represents the max sidebar category chip of the site. It is required.

## Max Sidebar Tag Chip <number\> <required>

The max sidebar tag chip is a number that represents the max sidebar tag chip of the site. It is required.

## Max Footer Category Chip <number\> <required>

The max footer category chip is a number that represents the max footer category chip of the site. It is required.

## Max Footer Tag Chip <number\> <required>

The max footer tag chip is a number that represents the max footer tag chip of the site. It is required.

## Tab Title Format <string\> <required>

The tab title format is a string that represents the tab title format of the site. It is required.

## Tab Title Format Fallback <string\> <required>

The tab title format fallback is a string that represents the tab title format fallback of the site. It is required.

## Banners <array<object\>\> <required>

The banners are an array of objects that represents the banners of the site. It is required.

## Slug Mode <string: 'RAW' | 'HASH'\> <required>

The slug mode is a string that represents the slug mode of the site. It is required.

## License <object\> <required>

The license is an object that represents the license of the site. It is required.

## Banner Style <string: 'loop' | 'static' | 'hidden'\> <required>

The banner style is a string that represents the banner style of the site. It is required.
