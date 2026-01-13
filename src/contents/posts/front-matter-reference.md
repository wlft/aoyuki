---
title: Front Matter Reference
published: 2026-01-13
description: This post showcases how to use front matter in a blog post.
cover: '/assets/images/banners/98431621_p0_master1200.jpg'
coverCredit: {text: "Magic Power City - Gilsun", url: 'https://www.pixiv.net/en/artworks/98431621'}
tags: [Example, Reference, Front Matter]
hex: '#32a852'
category: Examples
draft: false

licenseName: "MIT License"
author: "wlft"
sourceLink: "https://github.com/wlft/aoyuki"
licenseUrl: "https://github.com/wlft/aoyuki/blob/main/LICENSE"
---

The front matter is a YAML block at the beginning of a blog post's markdown file. It contains metadata about the post, such as the title, description, cover image, tags, category, etc.

This post showcases the basic reference of how to use the front matter correctly and what values are expected and possible. The full front matter config can be found at `src/content.config.ts`.

<br />

# Example Front Matter

```yaml
---
title: Front Matter Reference
published: 2026-01-13
description: This post showcases how to use front matter in a blog post.
cover: '/assets/images/banners/98431621_p0_master1200.jpg'
coverCredit: {text: "Magic Power City - Gilsun", url: 'https://www.pixiv.net/en/artworks/98431621'}
tags: [Example, Reference, Front Matter]
hex: '#32a852'
category: Examples
draft: false

licenseName: "MIT License"
author: "wlft"
sourceLink: "https://github.com/wlft/aoyuki"
licenseUrl: "https://github.com/wlft/aoyuki/blob/main/LICENSE"
---
```

<br />

# Reference

## Title <string\>

The title is a string that represents the title of the post. It is required.

```yaml
title: Front Matter Reference
```

## Published <string: yyyy-mm-dd || yyyy-mm-ddThh:mm:ss.sssZ\>

The published date is a string that represents the date the post was published. It is required.

```yaml
published: 2026-01-13
```

Or, to include hours, minutes, and seconds:

```yaml
published: 2026-01-13T07:04:20.000Z
```

## Description <string\>

The description is a string that represents the description of the post. It is optional.

```yaml
description: This post showcases how to use front matter in a blog post.
```

## Cover <string\>

The cover is a string that represents the cover image of the post. It is optional.

```yaml
cover: '/assets/images/banners/98431621_p0_master1200.jpg'
```

## Cover Credit <object\>

The cover credit is an object that represents the credit of the cover image. It is optional.

```yaml
coverCredit: {text: "Magic Power City - Gilsun", url: 'https://www.pixiv.net/en/artworks/98431621'}
```

## Tags <array<string\>\>

The tags are an array of strings that represents the tags of the post. It is optional.

```yaml
tags: [Example, Reference, Front Matter]
```

## Hex <string: hex-color\>

The hex is a string that represents the hex color of the post. It is optional.

```yaml
hex: '#32a852'
```

## Category <string\>

The category is a string that represents the category of the post. It is optional.

```yaml
category: Examples
```

## Draft <boolean\>

The draft is a boolean that represents whether the post is a draft. It is optional.

```yaml
draft: false
```

## License Name <string\>

The license name is a string that represents the license name of the post. It is optional.

```yaml
licenseName: "Unlicensed"
```

## Author <string\>

The author is a string that represents the author of the post. It is optional.

```yaml
author: emn178
```

## Source Link <string\>

The source link is a string that represents the source link of the post. It is optional.

```yaml
sourceLink: "https://github.com/wlft/aoyuki"
```

## License URL <string\>

The license URL is a string that represents the license URL of the post. It is optional.

```yaml
licenseUrl: "https://github.com/wlft/aoyuki"
```
